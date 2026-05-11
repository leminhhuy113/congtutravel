import { NextResponse } from 'next/server';
import { sendBookingEmail, sendTelegramNotification, type BookingData } from '@/lib/email';

// Simple rate-limit memory (production nên dùng Redis/Upstash)
const requestCounts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // 5 requests per window
const WINDOW_MS = 60 * 1000; // 1 minute

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);
  if (!record || now > record.resetAt) {
    requestCounts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (record.count >= RATE_LIMIT) return false;
  record.count++;
  return true;
}

function validatePhone(phone: string): boolean {
  // Vietnamese phone: 09xx, 03xx, 05xx, 07xx, 08xx (10 digits) or +84 prefix
  return /^(\+84|0)(3|5|7|8|9)\d{8}$/.test(phone.replace(/\s/g, ''));
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Quá nhiều yêu cầu, vui lòng thử lại sau 1 phút.' },
        { status: 429 }
      );
    }

    const body = (await req.json()) as BookingData & { honeypot?: string };

    // Honeypot anti-bot
    if (body.honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validation
    const required = ['fullName', 'phone', 'carType', 'route', 'pickupDate', 'pickupTime'] as const;
    for (const key of required) {
      if (!body[key] || String(body[key]).trim().length === 0) {
        return NextResponse.json(
          { ok: false, error: `Vui lòng nhập đầy đủ thông tin (thiếu: ${key})` },
          { status: 400 }
        );
      }
    }

    if (!validatePhone(body.phone)) {
      return NextResponse.json(
        { ok: false, error: 'Số điện thoại không hợp lệ. Vui lòng nhập đúng định dạng VN.' },
        { status: 400 }
      );
    }

    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ ok: false, error: 'Email không hợp lệ.' }, { status: 400 });
    }

    // Sanitize
    const data: BookingData = {
      fullName: body.fullName.trim().slice(0, 100),
      phone: body.phone.trim().slice(0, 20),
      email: body.email?.trim().slice(0, 100),
      carType: body.carType.trim().slice(0, 100),
      route: body.route.trim().slice(0, 200),
      pickupDate: body.pickupDate.trim().slice(0, 30),
      pickupTime: body.pickupTime.trim().slice(0, 20),
      passengers: body.passengers?.trim().slice(0, 20),
      note: body.note?.trim().slice(0, 1000),
    };

    await sendBookingEmail(data);

    // Optional Telegram
    sendTelegramNotification(
      `🚗 <b>ĐƠN ĐẶT XE MỚI</b>\n` +
        `👤 ${data.fullName}\n` +
        `📞 ${data.phone}\n` +
        `🚙 ${data.carType}\n` +
        `📍 ${data.route}\n` +
        `🗓 ${data.pickupDate} ${data.pickupTime}`
    ).catch(() => {});

    return NextResponse.json({
      ok: true,
      message: 'Đặt xe thành công! Chúng tôi sẽ liên hệ xác nhận trong 15 phút.',
    });
  } catch (err) {
    console.error('Booking API error:', err);
    return NextResponse.json(
      { ok: false, error: 'Hệ thống đang bận, vui lòng thử lại hoặc gọi hotline 0905 654 054.' },
      { status: 500 }
    );
  }
}
