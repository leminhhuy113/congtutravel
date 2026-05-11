export default function Footer() {
  return (
    <footer className="bg-elev pt-20 pb-8 border-t border-subtle">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-15 mb-15">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-5">
              <span className="relative w-11 h-11 rounded-full grid place-items-center" style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 0 30px rgba(212,175,55,0.35)' }}>
                <span className="absolute inset-[3px] rounded-full bg-base" />
                <span className="relative font-display font-semibold text-lg gold-gradient">C</span>
              </span>
              <span className="flex flex-col leading-none">
                <strong className="font-display font-medium text-lg">Công Tú</strong>
                <small className="text-[9px] tracking-[0.3em] text-gold-300 uppercase mt-1">TravelCAR</small>
              </span>
            </a>
            <p className="text-sm text-secondary leading-[1.9] mb-6">
              Dịch vụ vận tải hành khách cao cấp tại Đà Nẵng. Đưa đón sân bay, city tour, tour Hội An, Bà Nà Hills, Huế với đội xe sang trọng và tài xế chuyên nghiệp.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 rounded-full border border-subtle grid place-items-center hover:border-gold-300 hover:text-gold-300 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://zalo.me/0905654054" aria-label="Zalo" className="w-10 h-10 rounded-full border border-subtle grid place-items-center text-[11px] font-bold hover:border-gold-300 hover:text-gold-300 transition-all">Zalo</a>
              <a href="https://wa.me/84905654054" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-subtle grid place-items-center hover:border-gold-300 hover:text-gold-300 transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.8 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-gold-300 mb-6 font-semibold">Dịch vụ</h5>
            <ul className="space-y-2 text-sm text-secondary">
              {['Xe sân bay Đà Nẵng', 'City Tour Đà Nẵng', 'Tour Hội An', 'Tour Bà Nà Hills', 'Tour Huế', 'Thuê xe tự lái'].map((s) => (
                <li key={s}><a href="#services" className="hover:text-gold-300 transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-gold-300 mb-6 font-semibold">Liên kết</h5>
            <ul className="space-y-2 text-sm text-secondary">
              <li><a href="#home" className="hover:text-gold-300 transition-colors">Trang chủ</a></li>
              <li><a href="#fleet" className="hover:text-gold-300 transition-colors">Dòng xe</a></li>
              <li><a href="#pricing" className="hover:text-gold-300 transition-colors">Bảng giá</a></li>
              <li><a href="#booking" className="hover:text-gold-300 transition-colors">Đặt xe</a></li>
              <li><a href="#about" className="hover:text-gold-300 transition-colors">Giới thiệu</a></li>
              <li><a href="#faq" className="hover:text-gold-300 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-gold-300 mb-6 font-semibold">Liên hệ</h5>
            <ul className="space-y-3 text-sm text-secondary">
              <li>
                <strong className="text-gold-300 block text-xs uppercase tracking-wider mb-0.5">Hotline 1</strong>
                <a href="tel:0905654054" className="hover:text-gold-300 transition-colors">0905 654 054</a>
              </li>
              <li>
                <strong className="text-gold-300 block text-xs uppercase tracking-wider mb-0.5">Hotline 2</strong>
                <a href="tel:0934995223" className="hover:text-gold-300 transition-colors">0934 995 223</a>
              </li>
              <li>
                <strong className="text-gold-300 block text-xs uppercase tracking-wider mb-0.5">Email</strong>
                <a href="mailto:congtutravel@gmail.com" className="hover:text-gold-300 transition-colors break-all">congtutravel@gmail.com</a>
              </li>
              <li>
                <strong className="text-gold-300 block text-xs uppercase tracking-wider mb-0.5">Khu vực</strong>
                Đà Nẵng · Hội An · Huế
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-subtle flex flex-wrap justify-between items-center gap-4">
          <p className="text-xs text-muted">© 2026 Công Tú TravelCAR. Luxury Private Transport — VIP Services Only.</p>
          <p className="text-xs text-muted">Designed with ❤ for premium travel experiences</p>
        </div>
      </div>
    </footer>
  );
}
