const fleet = [
  {
    tag: 'Sedan · 5 chỗ',
    name: 'Kia K3 Premium',
    desc: 'Sedan hạng C cao cấp đời 2024 — ghế da, điều hòa 2 vùng, hệ thống an toàn ADAS',
    meta: [
      { label: 'Chỗ ngồi', value: '5 chỗ' },
      { label: 'Đời xe', value: '2024' },
      { label: 'Hành lý', value: '3-4 vali' },
    ],
    features: [
      'Nội thất da cao cấp, điều hoà 2 vùng độc lập',
      'Cảm biến hỗ trợ lái, camera 360°',
      'Phù hợp cặp đôi, gia đình nhỏ, công tác',
    ],
    bodyGradient: ['#2a2a32', '#0a0a0e'],
  },
  {
    tag: 'MPV Điện · 7 chỗ',
    name: 'VinFast Limo Green',
    desc: 'MPV điện 7 chỗ — êm ái tuyệt đối, không khí thải, dẫn động điện hiện đại',
    meta: [
      { label: 'Chỗ ngồi', value: '7 chỗ' },
      { label: 'Đời xe', value: '2024' },
      { label: 'Hành lý', value: '5-6 vali' },
    ],
    features: [
      'Xe điện thuần — vận hành êm ru, không độ rung',
      'Khoang hành khách rộng rãi, ghế chỉnh điện',
      'Lý tưởng cho gia đình lớn, nhóm bạn, tour dài ngày',
    ],
    bodyGradient: ['#1a3a2e', '#0a1a14'],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 lg:py-32 bg-elev relative">
      <div className="max-w-[1280px] mx-auto px-6">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Đội xe cao cấp
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Đẳng cấp <em className="italic gold-gradient">định nghĩa</em> bởi từng chi tiết
          </h2>
          <p className="text-secondary">
            Đội xe được tuyển chọn kỹ lưỡng, bảo dưỡng định kỳ, nội thất nguyên bản — đảm bảo mỗi chuyến đi là một trải nghiệm sang trọng.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {fleet.map((car, i) => (
            <article key={car.name} className="reveal group rounded-3xl overflow-hidden border border-subtle bg-card hover:border-gold-300 hover:-translate-y-2 hover:shadow-luxe transition-all duration-500">
              <div className="relative aspect-video grid place-items-center overflow-hidden" style={{ background: `linear-gradient(135deg, ${car.bodyGradient[0]} 0%, ${car.bodyGradient[1]} 100%)` }}>
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
                <span className="absolute top-5 left-5 glass border border-subtle px-3.5 py-1.5 rounded-full text-[11px] tracking-widest uppercase text-gold-300 z-[2]">
                  {car.tag}
                </span>
                <svg viewBox="0 0 400 200" width="85%" aria-label={car.name}>
                  <defs>
                    <linearGradient id={`fleet${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={car.bodyGradient[0]} />
                      <stop offset="100%" stopColor={car.bodyGradient[1]} />
                    </linearGradient>
                  </defs>
                  <ellipse cx="200" cy="170" rx="150" ry="6" fill="rgba(212,175,55,0.2)" />
                  <path d="M60 140 Q 65 105 115 92 Q 155 80 200 80 Q 245 80 285 92 Q 335 105 340 140 L 340 155 Q 340 162 333 162 L 67 162 Q 60 162 60 155 Z" fill={`url(#fleet${i})`} stroke="#D4AF37" strokeWidth="1.2" />
                  <path d="M115 92 Q 135 55 200 55 Q 265 55 285 92" stroke="#D4AF37" strokeWidth="1.2" fill="rgba(20,20,26,0.8)" />
                  <path d="M130 92 Q 145 68 195 65 L 195 92 Z" fill="rgba(212,175,55,0.18)" />
                  <path d="M205 65 Q 255 68 270 92 L 205 92 Z" fill="rgba(212,175,55,0.18)" />
                  <circle cx="115" cy="162" r="18" fill="#0a0a0e" stroke="#D4AF37" strokeWidth="1.2" />
                  <circle cx="115" cy="162" r="8" fill="#1a1a22" />
                  <circle cx="285" cy="162" r="18" fill="#0a0a0e" stroke="#D4AF37" strokeWidth="1.2" />
                  <circle cx="285" cy="162" r="8" fill="#1a1a22" />
                  <ellipse cx="335" cy="125" rx="6" ry="3" fill="#F5E7C4" />
                </svg>
              </div>

              <div className="p-8">
                <h3 className="font-display text-3xl font-medium mb-2">{car.name}</h3>
                <p className="text-secondary text-sm">{car.desc}</p>

                <div className="my-5 py-4 border-y border-subtle flex gap-6">
                  {car.meta.map((m) => (
                    <div key={m.label}>
                      <div className="text-[11px] text-muted tracking-widest uppercase">{m.label}</div>
                      <strong className="block text-base font-medium mt-1">{m.value}</strong>
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 my-5">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-300 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3 mt-6">
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide text-[#0A0A0A]"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)' }}
                  >
                    Đặt xe ngay
                  </a>
                  <a href="tel:0905654054" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-strong text-[13px] font-medium hover:bg-gold-soft hover:border-gold-300 hover:text-gold-300 transition-all">
                    Tư vấn
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center mt-10 text-muted italic font-display text-lg">
          Ngoài ra còn nhiều dòng xe khác — <a href="tel:0905654054" className="text-gold-300 border-b border-current">vui lòng liên hệ</a>
        </p>
      </div>
    </section>
  );
}
