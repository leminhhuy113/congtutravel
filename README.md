# 🚗 Công Tú TravelCAR — Website Cao Cấp

Website thuê xe du lịch cao cấp tại Đà Nẵng, xây dựng bằng **Next.js 14 + TypeScript + TailwindCSS** với:

- ✅ **Giao diện Sáng/Tối** tự động lưu trong trình duyệt
- ✅ **Font chữ hiện đại** (Cormorant Garamond + Manrope) qua `next/font`
- ✅ **SEO chuẩn**: metadata, sitemap, robots, schema.org LocalBusiness + FAQPage
- ✅ **Form đặt xe** + **Form liên hệ** với **gửi email tự động** qua Nodemailer
- ✅ **Toast thông báo** đẹp khi gửi thành công/thất bại
- ✅ **Chống bot**: honeypot + rate-limit (5 requests/phút/IP)
- ✅ **Responsive** mọi thiết bị
- ✅ Floating contact (Zalo, Messenger, WhatsApp, WeChat, Call)

---

## 🚀 Cách chạy

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Cấu hình email (BẮT BUỘC để form gửi được)

Copy `.env.example` thành `.env.local`:

```bash
cp .env.example .env.local
```

Sửa file `.env.local`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=congtutravel@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx     # Gmail App Password — KHÔNG dùng mật khẩu Gmail thường!
EMAIL_TO=congtutravel@gmail.com   # Email nhận thông báo
EMAIL_FROM=congtutravel@gmail.com
BRAND_NAME="Công Tú TravelCAR"
```

#### 📩 Cách lấy Gmail App Password:

1. Bật **Xác minh 2 bước**: <https://myaccount.google.com/security>
2. Tạo App Password: <https://myaccount.google.com/apppasswords>
3. Đặt tên (VD: "CongTuTravel Website") → Copy mật khẩu 16 ký tự
4. Dán vào `SMTP_PASS` (có thể có hoặc không có khoảng trắng đều được)

> ⚠️ Tuyệt đối **KHÔNG** commit file `.env.local` lên Git.

### 3. Chạy ở chế độ phát triển

```bash
npm run dev
```

Mở <http://localhost:3000>

### 4. Build production

```bash
npm run build
npm run start
```

---

## 📧 Luồng email khi khách đặt xe

Khi khách nhấn nút **"Gửi yêu cầu đặt xe"**, hệ thống sẽ:

1. **Gửi email cho ADMIN** (chủ doanh nghiệp) tại `EMAIL_TO` — gồm đầy đủ thông tin khách + nút "Gọi ngay" / "Chat Zalo"
2. **Gửi email xác nhận cho KHÁCH HÀNG** (nếu khách điền email) — thông tin đặt xe + cam kết dịch vụ
3. **Hiển thị toast thành công** trên website
4. (Tuỳ chọn) Gửi thông báo qua Telegram nếu cấu hình `TELEGRAM_BOT_TOKEN`

Form liên hệ cũng gửi email tương tự cho ADMIN.

---

## 🌗 Chuyển đổi Sáng/Tối

- Nhấn nút **mặt trăng/mặt trời** ở góc phải header
- Trạng thái được lưu vào `localStorage`, tự động khôi phục lần sau
- Mặc định: theo system preference của trình duyệt

---

## 🔍 Kiểm tra SEO

- `https://congtutravelcar.vn/sitemap.xml` — sitemap tự sinh
- `https://congtutravelcar.vn/robots.txt` — robots
- Schema.org LocalBusiness + FAQPage đã embed
- Metadata Open Graph + Twitter card đầy đủ

---

## 📦 Cấu trúc thư mục

```
congtu-travelcar/
├── public/                  # Static assets (favicon, og-image)
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── booking/route.ts    # API đặt xe + gửi mail
│   │   │   └── contact/route.ts    # API liên hệ + gửi mail
│   │   ├── globals.css
│   │   ├── layout.tsx              # Root + SEO + ThemeProvider
│   │   ├── page.tsx                # Trang chủ
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   ├── components/
│   │   ├── BookingForm.tsx         # ⭐ Form đặt xe
│   │   ├── ContactForm.tsx         # ⭐ Form liên hệ
│   │   ├── ThemeProvider.tsx       # ⭐ Theme sáng/tối
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Fleet.tsx
│   │   ├── Pricing.tsx
│   │   ├── WhyUs.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── FloatingContact.tsx
│   │   ├── Footer.tsx
│   │   ├── Marquee.tsx
│   │   └── RevealObserver.tsx
│   └── lib/
│       └── email.ts                # ⭐ Templates email + Nodemailer
├── .env.example
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🌐 Deploy lên Vercel (miễn phí, khuyên dùng)

1. Push code lên GitHub
2. Vào <https://vercel.com> → Import Project
3. Vào **Settings → Environment Variables** → thêm tất cả biến từ `.env.example`
4. Deploy → Có domain miễn phí `.vercel.app`
5. Trỏ domain riêng (congtutravelcar.vn) tại tab Domains

---

## 🛠 Tuỳ chỉnh nhanh

| Mục cần đổi | File |
|---|---|
| Số hotline, email | `src/components/Header.tsx`, `Footer.tsx`, `BookingForm.tsx`, `lib/email.ts` |
| Bảng giá | `src/components/Pricing.tsx` (mảng `pricingData`) |
| Dòng xe | `src/components/Fleet.tsx` (mảng `fleet`) |
| Tuyến đường trong form | `src/components/BookingForm.tsx` (mảng `routeOptions`) |
| FAQ | `src/components/FAQ.tsx` (mảng `faqs`) |
| Màu sắc theme | `src/app/globals.css` (CSS variables) |
| SEO metadata | `src/app/layout.tsx` |

---

## 📞 Hỗ trợ

- Hotline: **0905 654 054** · **0934 995 223**
- Email: **congtutravel@gmail.com**

© 2026 Công Tú TravelCAR — Luxury Private Transport
