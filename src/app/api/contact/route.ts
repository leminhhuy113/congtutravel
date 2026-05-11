import { NextResponse } from 'next/server';
import { sendContactEmail, sendTelegramNotification, type ContactData } from '@/lib/email';

const requestCounts = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 60 * 1000;

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

    const body = (await req.json()) as ContactData & { honeypot?: string };

    if (body.honeypot) return NextResponse.json({ ok: true }, { status: 200 });

    if (!body.fullName?.trim() || !body.phone?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { ok: false, error: 'Vui lòng nhập đầy đủ Họ tên, SĐT và Nội dung.' },
        { status: 400 }
      );
    }

    if (!validatePhone(body.phone)) {
      return NextResponse.json(
        { ok: false, error: 'Số điện thoại không hợp lệ.' },
        { status: 400 }
      );
    }

    if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ ok: false, error: 'Email không hợp lệ.' }, { status: 400 });
    }

    const data: ContactData = {
      fullName: body.fullName.trim().slice(0, 100),
      phone: body.phone.trim().slice(0, 20),
      email: body.email?.trim().slice(0, 100),
      subject: body.subject?.trim().slice(0, 200),
      message: body.message.trim().slice(0, 2000),
    };

    await sendContactEmail(data);

    sendTelegramNotification(
      `💬 <b>LIÊN HỆ MỚI</b>\n` +
        `👤 ${data.fullName}\n` +
        `📞 ${data.phone}\n` +
        `📝 ${data.message.slice(0, 100)}${data.message.length > 100 ? '...' : ''}`
    ).catch(() => {});

    return NextResponse.json({
      ok: true,
      message: 'Gửi liên hệ thành công! Chúng tôi sẽ phản hồi sớm nhất.',
    });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { ok: false, error: 'Hệ thống đang bận, vui lòng gọi hotline 0905 654 054.' },
      { status: 500 }
    );
  }
}
