'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

const carOptions = [
  'Kia K3 Premium - 5 chỗ',
  'VinFast Limo Green - 7 chỗ',
  'Xe khác (Liên hệ tư vấn)',
];

const routeOptions = [
  'Đà Nẵng - Hội An',
  'Đà Nẵng - Bà Nà Hills',
  'Đà Nẵng - VinWonders Nam Hội An',
  'Đà Nẵng - Huế',
  'Đà Nẵng - Chùa Linh Ứng',
  'Sân bay - Trung tâm Đà Nẵng',
  'Đà Nẵng - Núi Thần Tài',
  'Đà Nẵng - Cù Lao Chàm',
  'City Tour Đà Nẵng',
  'Thuê xe theo giờ / Tự lái',
  'Tuyến khác (ghi chú bên dưới)',
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    carType: carOptions[0],
    route: routeOptions[0],
    pickupDate: '',
    pickupTime: '',
    passengers: '',
    note: '',
    honeypot: '', // anti-bot field
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    // Frontend validation
    if (!form.fullName.trim() || !form.phone.trim()) {
      toast.error('Vui lòng nhập họ tên và số điện thoại');
      return;
    }
    if (!/^(\+84|0)(3|5|7|8|9)\d{8}$/.test(form.phone.replace(/\s/g, ''))) {
      toast.error('Số điện thoại không hợp lệ');
      return;
    }
    if (!form.pickupDate || !form.pickupTime) {
      toast.error('Vui lòng chọn ngày và giờ đón');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Đang gửi yêu cầu đặt xe...');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      toast.dismiss(loadingToast);
      if (res.ok && data.ok) {
        toast.success(data.message || 'Đặt xe thành công!', { duration: 6000, icon: '🚗' });
        setForm({
          fullName: '', phone: '', email: '',
          carType: carOptions[0], route: routeOptions[0],
          pickupDate: '', pickupTime: '', passengers: '', note: '', honeypot: '',
        });
      } else {
        toast.error(data.error || 'Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('Lỗi kết nối. Vui lòng gọi hotline 0905 654 054');
    } finally {
      setLoading(false);
    }
  };

  // Min date = today
  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="booking" className="py-24 lg:py-32 bg-elev relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)' }} />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08), transparent 70%)' }} />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Đặt xe online
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Sẵn sàng cho <em className="italic gold-gradient">hành trình</em> của bạn
          </h2>
          <p className="text-secondary">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ xác nhận trong vòng <strong className="text-gold-300">15 phút</strong>.
          </p>
        </header>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 reveal">
          {/* Side panel: contact info */}
          <aside className="rounded-3xl border border-subtle bg-card p-8 lg:p-10 relative overflow-hidden shadow-luxe">
            <div className="absolute -top-32 -right-32 w-80 h-80" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.15), transparent 60%)' }} />
            <div className="relative">
              <h3 className="font-display text-3xl font-medium mb-2">Liên hệ trực tiếp</h3>
              <p className="text-secondary text-sm mb-8">Chúng tôi luôn sẵn sàng phục vụ 24/7. Gọi ngay để được tư vấn miễn phí.</p>

              <div className="space-y-5">
                <a href="tel:0905654054" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gold-soft border border-subtle grid place-items-center text-gold-300 group-hover:bg-gold-300 group-hover:text-[#0A0A0A] transition-all flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted">Hotline 1</div>
                    <div className="font-display text-xl font-medium group-hover:text-gold-300 transition-colors">0905 654 054</div>
                  </div>
                </a>

                <a href="tel:0934995223" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gold-soft border border-subtle grid place-items-center text-gold-300 group-hover:bg-gold-300 group-hover:text-[#0A0A0A] transition-all flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted">Hotline 2</div>
                    <div className="font-display text-xl font-medium group-hover:text-gold-300 transition-colors">0934 995 223</div>
                  </div>
                </a>

                <a href="mailto:congtutravel@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gold-soft border border-subtle grid place-items-center text-gold-300 group-hover:bg-gold-300 group-hover:text-[#0A0A0A] transition-all flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted">Email</div>
                    <div className="text-base font-medium group-hover:text-gold-300 transition-colors break-all">congtutravel@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-soft border border-subtle grid place-items-center text-gold-300 flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted">Khu vực phục vụ</div>
                    <div className="text-base font-medium">Đà Nẵng · Hội An · Huế và toàn miền Trung</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold-soft border border-subtle grid place-items-center text-gold-300 flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-widest uppercase text-muted">Giờ phục vụ</div>
                    <div className="text-base font-medium">24/7 - 365 ngày trong năm</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-subtle">
                <div className="text-[10px] tracking-widest uppercase text-muted mb-3">Kết nối nhanh</div>
                <div className="flex gap-3">
                  <a href="https://zalo.me/0905654054" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full text-center text-xs font-semibold tracking-wide text-white" style={{ background: 'linear-gradient(135deg, #0084FF, #0068CC)' }}>Zalo</a>
                  <a href="https://wa.me/84905654054" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full text-center text-xs font-semibold tracking-wide text-white" style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>WhatsApp</a>
                  <a href="https://m.me/congtutravel" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 rounded-full text-center text-xs font-semibold tracking-wide text-white" style={{ background: 'linear-gradient(135deg, #00B2FF, #006AFF)' }}>Chat</a>
                </div>
              </div>
            </div>
          </aside>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="rounded-3xl border border-subtle bg-card p-8 lg:p-10 shadow-luxe">
            <h3 className="font-display text-3xl font-medium mb-2">Form đặt xe</h3>
            <p className="text-secondary text-sm mb-8">Điền đầy đủ thông tin bên dưới để chúng tôi phục vụ tốt nhất.</p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Field label="Họ và tên *" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Nguyễn Văn A" required />
              <Field label="Số điện thoại *" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="0905 xxx xxx" required />
            </div>

            <div className="mb-4">
              <Field label="Email (không bắt buộc)" name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@example.com" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <SelectField label="Loại xe *" name="carType" value={form.carType} onChange={handleChange} options={carOptions} />
              <SelectField label="Tuyến đường *" name="route" value={form.route} onChange={handleChange} options={routeOptions} />
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mb-4">
              <Field label="Ngày đón *" name="pickupDate" type="date" value={form.pickupDate} onChange={handleChange} min={today} required />
              <Field label="Giờ đón *" name="pickupTime" type="time" value={form.pickupTime} onChange={handleChange} required />
              <Field label="Số khách" name="passengers" type="number" value={form.passengers} onChange={handleChange} placeholder="VD: 4" />
            </div>

            <div className="mb-6">
              <label className="block">
                <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">Ghi chú thêm</span>
                <textarea
                  name="note"
                  value={form.note}
                  onChange={handleChange}
                  rows={4}
                  placeholder="VD: Đón tại sân bay terminal nội địa, có 2 vali lớn..."
                  className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm resize-none"
                />
              </label>
            </div>

            {/* Honeypot - anti bot */}
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full text-sm font-bold tracking-wide text-[#0A0A0A] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 flex items-center justify-center gap-2"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 10px 25px rgba(212,175,55,0.3)' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  Đang gửi...
                </>
              ) : (
                <>
                  Gửi yêu cầu đặt xe
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </>
              )}
            </button>

            <p className="text-xs text-muted text-center mt-4">
              Bằng cách gửi form, bạn đồng ý nhận liên hệ từ Công Tú TravelCAR qua điện thoại/email.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

// ============= Helper input components =============
function Field({
  label, name, type = 'text', value, onChange, placeholder, required, min,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm text-primary"
      />
    </label>
  );
}

function SelectField({
  label, name, value, onChange, options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm text-primary cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}
