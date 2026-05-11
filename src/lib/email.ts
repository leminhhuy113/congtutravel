import nodemailer from 'nodemailer';

export type BookingData = {
  fullName: string;
  phone: string;
  email?: string;
  carType: string;
  route: string;
  pickupDate: string;
  pickupTime: string;
  passengers?: string;
  note?: string;
};

export type ContactData = {
  fullName: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
};

// Lazy transporter creation
function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

const brandName = process.env.BRAND_NAME || 'Công Tú TravelCAR';
const goldGradient = 'linear-gradient(135deg, #F5E7C4 0%, #D4AF37 50%, #B8893D 100%)';

function emailWrapper(title: string, bodyHtml: string) {
  return `
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#07070A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background:#07070A;padding:40px 20px;">
<tr><td align="center">
<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width:600px;background:#14141A;border:1px solid rgba(212,175,55,0.2);border-radius:16px;overflow:hidden;">
  <!-- Header -->
  <tr><td style="background:${goldGradient};padding:32px 40px;text-align:center;">
    <div style="font-family:Georgia,serif;font-size:28px;color:#0A0A0A;font-weight:600;letter-spacing:0.5px;">${brandName}</div>
    <div style="font-size:10px;letter-spacing:4px;color:#0A0A0A;text-transform:uppercase;margin-top:6px;opacity:0.7;">Luxury Private Transport</div>
  </td></tr>
  <!-- Title bar -->
  <tr><td style="padding:32px 40px 0;border-bottom:1px solid rgba(212,175,55,0.15);">
    <div style="font-size:11px;letter-spacing:3px;color:#D4AF37;text-transform:uppercase;margin-bottom:8px;">Thông báo mới</div>
    <h1 style="font-family:Georgia,serif;font-size:30px;color:#F4F2EC;margin:0 0 24px;font-weight:500;line-height:1.2;">${title}</h1>
  </td></tr>
  <!-- Body -->
  <tr><td style="padding:32px 40px;">
    ${bodyHtml}
  </td></tr>
  <!-- Footer -->
  <tr><td style="padding:24px 40px;background:#0E0E12;border-top:1px solid rgba(212,175,55,0.15);text-align:center;">
    <div style="font-size:12px;color:#6B6960;line-height:1.7;">
      📞 Hotline: <a href="tel:0905654054" style="color:#D4AF37;text-decoration:none;font-weight:600;">0905 654 054</a> · 
      <a href="tel:0934995223" style="color:#D4AF37;text-decoration:none;font-weight:600;">0934 995 223</a><br>
      ✉️ <a href="mailto:congtutravel@gmail.com" style="color:#D4AF37;text-decoration:none;">congtutravel@gmail.com</a><br>
      <span style="color:#6B6960;">© ${new Date().getFullYear()} ${brandName} — VIP Services Only</span>
    </div>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>
  `;
}

function infoRow(label: string, value: string, highlight = false) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid rgba(212,175,55,0.1);width:35%;">
        <div style="font-size:11px;letter-spacing:2px;color:#D4AF37;text-transform:uppercase;">${label}</div>
      </td>
      <td style="padding:14px 0;border-bottom:1px solid rgba(212,175,55,0.1);">
        <div style="font-size:${highlight ? '18px' : '15px'};color:#F4F2EC;font-weight:${highlight ? '600' : '400'};">${value}</div>
      </td>
    </tr>
  `;
}

// ====================== BOOKING EMAIL (gửi cho ADMIN) ======================
function bookingAdminTemplate(data: BookingData) {
  const body = `
    <p style="font-size:15px;color:#B5B2A8;margin:0 0 24px;line-height:1.7;">
      Có khách hàng mới vừa đặt xe trên website. Vui lòng liên hệ khách trong thời gian sớm nhất để xác nhận đơn.
    </p>
    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
      ${infoRow('Họ tên', data.fullName, true)}
      ${infoRow('Số điện thoại', `<a href="tel:${data.phone}" style="color:#D4AF37;text-decoration:none;">${data.phone}</a>`, true)}
      ${data.email ? infoRow('Email', `<a href="mailto:${data.email}" style="color:#D4AF37;text-decoration:none;">${data.email}</a>`) : ''}
      ${infoRow('Loại xe', data.carType)}
      ${infoRow('Tuyến đường', data.route)}
      ${infoRow('Ngày đón', data.pickupDate)}
      ${infoRow('Giờ đón', data.pickupTime)}
      ${data.passengers ? infoRow('Số khách', data.passengers) : ''}
      ${data.note ? infoRow('Ghi chú', data.note.replace(/\n/g, '<br>')) : ''}
    </table>
    <div style="background:rgba(212,175,55,0.08);border-left:3px solid #D4AF37;padding:16px 20px;border-radius:6px;margin-bottom:24px;">
      <div style="font-size:12px;color:#D4AF37;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">⏱ Thời gian gửi</div>
      <div style="font-size:14px;color:#F4F2EC;">${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</div>
    </div>
    <table cellspacing="0" cellpadding="0" border="0" style="margin:0 auto;">
      <tr>
        <td style="padding-right:8px;">
          <a href="tel:${data.phone}" style="display:inline-block;background:${goldGradient};color:#0A0A0A;padding:14px 28px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;letter-spacing:0.5px;">📞 Gọi khách ngay</a>
        </td>
        <td>
          <a href="https://zalo.me/${data.phone}" style="display:inline-block;border:1px solid #D4AF37;color:#D4AF37;padding:13px 28px;border-radius:100px;text-decoration:none;font-weight:600;font-size:14px;letter-spacing:0.5px;">💬 Chat Zalo</a>
        </td>
      </tr>
    </table>
  `;
  return emailWrapper('🚗 Đơn đặt xe mới', body);
}

// ====================== BOOKING EMAIL (gửi cho KHÁCH HÀNG) ======================
function bookingCustomerTemplate(data: BookingData) {
  const body = `
    <p style="font-size:15px;color:#B5B2A8;margin:0 0 24px;line-height:1.7;">
      Kính gửi <strong style="color:#F4F2EC;">${data.fullName}</strong>,<br><br>
      Cảm ơn quý khách đã đặt xe tại <strong style="color:#D4AF37;">${brandName}</strong>. Chúng tôi đã ghi nhận yêu cầu của quý khách và sẽ liên hệ xác nhận trong thời gian sớm nhất (thường trong vòng 15 phút).
    </p>
    <h3 style="font-family:Georgia,serif;font-size:18px;color:#D4AF37;margin:32px 0 16px;font-weight:500;">Thông tin đặt xe của quý khách</h3>
    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
      ${infoRow('Loại xe', data.carType)}
      ${infoRow('Tuyến đường', data.route)}
      ${infoRow('Ngày đón', data.pickupDate)}
      ${infoRow('Giờ đón', data.pickupTime)}
      ${data.passengers ? infoRow('Số khách', data.passengers) : ''}
      ${data.note ? infoRow('Ghi chú', data.note.replace(/\n/g, '<br>')) : ''}
    </table>
    <div style="background:rgba(212,175,55,0.08);border-left:3px solid #D4AF37;padding:20px;border-radius:6px;margin-bottom:24px;">
      <div style="font-size:12px;color:#D4AF37;letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;">✨ Cam kết dịch vụ</div>
      <div style="font-size:14px;color:#F4F2EC;line-height:1.8;">
        • Tài xế đến trước giờ hẹn 10-15 phút<br>
        • Xe đời mới, sạch sẽ, thơm tho<br>
        • Giá minh bạch, không phát sinh<br>
        • Hỗ trợ 24/7 trên toàn hành trình
      </div>
    </div>
    <p style="font-size:14px;color:#B5B2A8;text-align:center;margin:32px 0 0;line-height:1.7;">
      Cần gấp? Quý khách có thể gọi trực tiếp:<br>
      <a href="tel:0905654054" style="font-family:Georgia,serif;font-size:28px;color:#D4AF37;text-decoration:none;font-weight:600;letter-spacing:1px;">0905 654 054</a>
    </p>
  `;
  return emailWrapper(`Xác nhận đặt xe - ${data.carType}`, body);
}

// ====================== CONTACT EMAIL ======================
function contactAdminTemplate(data: ContactData) {
  const body = `
    <p style="font-size:15px;color:#B5B2A8;margin:0 0 24px;line-height:1.7;">
      Có khách hàng mới vừa gửi tin nhắn liên hệ qua website.
    </p>
    <table cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom:24px;">
      ${infoRow('Họ tên', data.fullName, true)}
      ${infoRow('Số điện thoại', `<a href="tel:${data.phone}" style="color:#D4AF37;text-decoration:none;">${data.phone}</a>`, true)}
      ${data.email ? infoRow('Email', `<a href="mailto:${data.email}" style="color:#D4AF37;text-decoration:none;">${data.email}</a>`) : ''}
      ${data.subject ? infoRow('Chủ đề', data.subject) : ''}
    </table>
    <div style="background:rgba(212,175,55,0.06);border:1px solid rgba(212,175,55,0.2);padding:20px;border-radius:8px;margin-bottom:24px;">
      <div style="font-size:11px;letter-spacing:2px;color:#D4AF37;text-transform:uppercase;margin-bottom:10px;">Nội dung tin nhắn</div>
      <div style="font-size:15px;color:#F4F2EC;line-height:1.7;">${data.message.replace(/\n/g, '<br>')}</div>
    </div>
    <div style="background:rgba(212,175,55,0.08);border-left:3px solid #D4AF37;padding:16px 20px;border-radius:6px;margin-bottom:24px;">
      <div style="font-size:12px;color:#D4AF37;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px;">⏱ Thời gian gửi</div>
      <div style="font-size:14px;color:#F4F2EC;">${new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' })}</div>
    </div>
  `;
  return emailWrapper('💬 Liên hệ mới từ website', body);
}

// ====================== SEND FUNCTIONS ======================
export async function sendBookingEmail(data: BookingData) {
  const transporter = getTransporter();
  const from = `"${brandName}" <${process.env.EMAIL_FROM}>`;
  const to = process.env.EMAIL_TO!;

  // 1. Gửi cho ADMIN (chủ doanh nghiệp)
  await transporter.sendMail({
    from,
    to,
    replyTo: data.email || undefined,
    subject: `🚗 Đơn đặt xe mới: ${data.fullName} - ${data.route}`,
    html: bookingAdminTemplate(data),
  });

  // 2. Gửi xác nhận cho KHÁCH (nếu có email)
  if (data.email) {
    await transporter.sendMail({
      from,
      to: data.email,
      subject: `Xác nhận đặt xe tại ${brandName}`,
      html: bookingCustomerTemplate(data),
    });
  }
}

export async function sendContactEmail(data: ContactData) {
  const transporter = getTransporter();
  const from = `"${brandName}" <${process.env.EMAIL_FROM}>`;
  const to = process.env.EMAIL_TO!;

  await transporter.sendMail({
    from,
    to,
    replyTo: data.email || undefined,
    subject: `💬 Liên hệ mới: ${data.fullName}${data.subject ? ' - ' + data.subject : ''}`,
    html: contactAdminTemplate(data),
  });
}

// Optional: Telegram notification
export async function sendTelegramNotification(text: string) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;
  try {
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
    });
  } catch (e) {
    console.error('Telegram error:', e);
  }
}
