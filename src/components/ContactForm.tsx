'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '', phone: '', email: '', subject: '', message: '', honeypot: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    if (!form.fullName.trim() || !form.phone.trim() || !form.message.trim()) {
      toast.error('Vui lòng nhập đầy đủ Họ tên, SĐT và Nội dung');
      return;
    }
    if (!/^(\+84|0)(3|5|7|8|9)\d{8}$/.test(form.phone.replace(/\s/g, ''))) {
      toast.error('Số điện thoại không hợp lệ');
      return;
    }

    setLoading(true);
    const loadingToast = toast.loading('Đang gửi tin nhắn...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      toast.dismiss(loadingToast);

      if (res.ok && data.ok) {
        toast.success(data.message || 'Gửi liên hệ thành công!', { duration: 6000, icon: '✉️' });
        setForm({ fullName: '', phone: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        toast.error(data.error || 'Có lỗi xảy ra.');
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error('Lỗi kết nối. Vui lòng gọi hotline 0905 654 054');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Liên hệ chúng tôi
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Hỏi đáp <em className="italic gold-gradient">tư vấn</em> miễn phí
          </h2>
          <p className="text-secondary">
            Bạn có câu hỏi về dịch vụ, giá cả hay yêu cầu đặc biệt? Hãy để lại lời nhắn, chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto rounded-3xl border border-subtle bg-card p-8 lg:p-12 shadow-luxe reveal relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 60%)' }} />

          <div className="relative grid sm:grid-cols-2 gap-4 mb-4">
            <label className="block">
              <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">Họ và tên *</span>
              <input
                type="text" name="fullName" value={form.fullName} onChange={handleChange} required
                placeholder="Nguyễn Văn A"
                className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm"
              />
            </label>
            <label className="block">
              <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">Số điện thoại *</span>
              <input
                type="tel" name="phone" value={form.phone} onChange={handleChange} required
                placeholder="0905 xxx xxx"
                className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm"
              />
            </label>
          </div>

          <div className="relative grid sm:grid-cols-2 gap-4 mb-4">
            <label className="block">
              <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">Email</span>
              <input
                type="email" name="email" value={form.email} onChange={handleChange}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm"
              />
            </label>
            <label className="block">
              <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">Chủ đề</span>
              <input
                type="text" name="subject" value={form.subject} onChange={handleChange}
                placeholder="VD: Tư vấn tour Bà Nà 1 ngày"
                className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm"
              />
            </label>
          </div>

          <label className="relative block mb-6">
            <span className="block text-[11px] tracking-widest uppercase text-gold-300 mb-2 font-medium">Nội dung *</span>
            <textarea
              name="message" value={form.message} onChange={handleChange} required rows={6}
              placeholder="Vui lòng nhập câu hỏi hoặc yêu cầu của bạn..."
              className="w-full px-4 py-3 rounded-xl bg-base border border-subtle focus:border-gold-300 transition-colors text-sm resize-none"
            />
          </label>

          <input
            type="text" name="honeypot" value={form.honeypot} onChange={handleChange}
            className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true"
          />

          <button
            type="submit"
            disabled={loading}
            className="relative w-full py-4 rounded-full text-sm font-bold tracking-wide text-[#0A0A0A] transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                Gửi tin nhắn
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
