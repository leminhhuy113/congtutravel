export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 20% 40%, rgba(212,175,55,0.18), transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(212,175,55,0.10), transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(rgba(212,175,55,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.05) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          }}
        />
        {/* Dragon bridge silhouette */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-40 pointer-events-none"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <g stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" fill="none">
            <path d="M0 320 Q 200 280 360 290 Q 520 300 720 270 Q 920 240 1080 280 Q 1240 320 1440 300 L 1440 400 L 0 400 Z" fill="rgba(212,175,55,0.05)" />
            <path d="M200 320 Q 360 220 520 290 M520 290 Q 680 180 840 290 M840 290 Q 1000 200 1160 290" strokeWidth="2" />
            <g fill="rgba(212,175,55,0.15)" stroke="none">
              <rect x="50" y="260" width="40" height="60" />
              <rect x="100" y="240" width="50" height="80" />
              <rect x="160" y="270" width="35" height="50" />
              <rect x="1200" y="220" width="60" height="100" />
              <rect x="1270" y="200" width="50" height="120" />
              <rect x="1330" y="250" width="40" height="70" />
              <rect x="1380" y="230" width="45" height="90" />
            </g>
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-15 items-center w-full" style={{ gap: '60px' }}>
        {/* Text */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium font-sans">
            <span className="w-7 h-px bg-gold-300" />
            Luxury Private Transport · Đà Nẵng
          </span>
          <h1 className="font-display font-light text-5xl md:text-7xl lg:text-[96px] leading-[1.05] tracking-tight my-6 md:my-7">
            Hành trình
            <br />
            <em className="italic gold-gradient font-normal">đẳng cấp</em> bắt đầu
            <br />
            từ chiếc ghế ngồi
          </h1>
          <p className="text-base md:text-lg text-secondary max-w-[520px] mb-10 leading-[1.7] font-light">
            Công Tú TravelCAR — dịch vụ xe du lịch cao cấp tại Đà Nẵng. Đội xe đời mới Kia K3 Premium & VinFast Limo Green, tài xế lịch lãm, đúng giờ, an toàn. Đưa đón sân bay, city tour, tour Hội An, Bà Nà, Huế.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold tracking-wide text-[#0A0A0A] transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 8px 20px rgba(212,175,55,0.3)' }}
            >
              Đặt xe online
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a
              href="tel:0905654054"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-strong text-[13px] font-medium tracking-wide text-primary hover:bg-gold-soft hover:border-gold-300 hover:text-gold-300 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              0905 654 054
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-subtle grid grid-cols-3 gap-6">
            {[
              { num: '12+', label: 'Năm kinh nghiệm' },
              { num: '10K+', label: 'Khách hài lòng' },
              { num: '24/7', label: 'Phục vụ 365 ngày' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-[42px] font-medium gold-gradient leading-none">{s.num}</div>
                <div className="text-[11px] tracking-[0.15em] uppercase text-muted mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden border border-subtle shadow-luxe bg-card"
               style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.08), transparent), rgb(var(--bg-card))' }}>
            <div className="absolute inset-0 grid place-items-center p-10">
              <svg viewBox="0 0 400 240" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="heroCarBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2a2a32" />
                    <stop offset="100%" stopColor="#0a0a0e" />
                  </linearGradient>
                  <linearGradient id="heroCarHi" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <ellipse cx="200" cy="200" rx="160" ry="8" fill="rgba(212,175,55,0.15)" />
                <path d="M60 170 Q 65 130 120 115 Q 160 100 200 100 Q 240 100 280 115 Q 335 130 340 170 L 340 185 Q 340 195 330 195 L 70 195 Q 60 195 60 185 Z" fill="url(#heroCarBody)" stroke="#D4AF37" strokeWidth="1.5" />
                <path d="M120 115 Q 140 70 200 70 Q 260 70 280 115" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(20,20,26,0.8)" />
                <path d="M135 115 Q 150 85 195 80 L 195 115 Z" fill="rgba(212,175,55,0.15)" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M205 80 Q 250 85 265 115 L 205 115 Z" fill="rgba(212,175,55,0.15)" stroke="#D4AF37" strokeWidth="0.5" />
                <line x1="60" y1="170" x2="340" y2="170" stroke="url(#heroCarHi)" strokeWidth="2" />
                <circle cx="115" cy="195" r="22" fill="#0a0a0e" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="115" cy="195" r="10" fill="#1a1a22" stroke="#D4AF37" strokeWidth="0.8" />
                <circle cx="285" cy="195" r="22" fill="#0a0a0e" stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="285" cy="195" r="10" fill="#1a1a22" stroke="#D4AF37" strokeWidth="0.8" />
                <ellipse cx="335" cy="150" rx="8" ry="4" fill="#F5E7C4" opacity="0.8" />
                <ellipse cx="335" cy="150" rx="30" ry="12" fill="#D4AF37" opacity="0.2" />
              </svg>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 p-8 z-[2]"
              style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.85), transparent)' }}
            >
              <h3 className="font-display text-3xl font-medium mb-1 text-white">Kia K3 Premium</h3>
              <p className="text-sm text-white/70 tracking-wide">Sedan 5 chỗ · Đời 2024 · Tài xế chuyên nghiệp</p>
            </div>
          </div>

          {/* Floating badges */}
          <div className="absolute -right-5 top-6 glass border border-subtle rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-card animate-float">
            <div className="w-9 h-9 rounded-full bg-gold-soft grid place-items-center text-gold-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            </div>
            <div>
              <div className="text-[10px] text-muted tracking-widest uppercase">Đánh giá</div>
              <div className="text-sm font-semibold">4.9 / 5.0</div>
            </div>
          </div>

          <div className="absolute -left-8 bottom-24 glass border border-subtle rounded-2xl px-5 py-3.5 flex items-center gap-3 shadow-card animate-float" style={{ animationDelay: '2s' }}>
            <div className="w-9 h-9 rounded-full bg-gold-soft grid place-items-center text-gold-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
            </div>
            <div>
              <div className="text-[10px] text-muted tracking-widest uppercase">Đặt xe</div>
              <div className="text-sm font-semibold">24/7 Online</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
