const features = [
  { num: '01', title: 'Đội xe đời mới — bảo dưỡng nghiêm ngặt', desc: 'Kia K3 Premium & VinFast Limo Green đời 2024, bảo dưỡng định kỳ hàng tháng theo tiêu chuẩn hãng.' },
  { num: '02', title: 'Tài xế lịch lãm — am hiểu địa phương', desc: 'Trang phục chỉnh tề, nói tiếng Anh cơ bản, biết kể chuyện về văn hoá miền Trung. Kinh nghiệm 5+ năm.' },
  { num: '03', title: 'Giá minh bạch — không phát sinh', desc: 'Bảng giá công khai cho từng tuyến. Cam kết không phụ thu ẩn, không phát sinh ngoài thoả thuận.' },
  { num: '04', title: 'Hỗ trợ 24/7 — đặt xe linh hoạt', desc: 'Hotline trực tiếp cả ngày lẫn đêm. Đặt xe online, qua Zalo, WhatsApp — phản hồi trong 5 phút.' },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[4/5] rounded-3xl border border-subtle overflow-hidden reveal" style={{ background: 'linear-gradient(135deg, rgb(var(--bg-card)) 0%, rgb(var(--bg-base)) 100%)' }}>
          <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="luxgrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="250" r="180" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.5" />
            <circle cx="200" cy="250" r="140" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" />
            <circle cx="200" cy="250" r="100" fill="url(#luxgrad)" stroke="rgba(212,175,55,0.5)" strokeWidth="1" />
            <text x="200" y="265" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="80" fontStyle="italic" fill="#D4AF37" opacity="0.8">C</text>
            <text x="200" y="320" textAnchor="middle" fontFamily="Manrope, sans-serif" fontSize="11" letterSpacing="6" fill="#D4AF37" opacity="0.7">SINCE 2013</text>
            <g stroke="rgba(212,175,55,0.4)" strokeWidth="1" fill="none">
              <path d="M30 30 L 30 70 M 30 30 L 70 30" />
              <path d="M370 30 L 370 70 M 370 30 L 330 30" />
              <path d="M30 470 L 30 430 M 30 470 L 70 470" />
              <path d="M370 470 L 370 430 M 370 470 L 330 470" />
            </g>
          </svg>
        </div>

        <div className="reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Vì sao chọn Công Tú TravelCAR
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Hơn cả một chuyến xe — <em className="italic gold-gradient">là sự yên tâm</em>
          </h2>
          <p className="text-secondary mb-9">
            Suốt hơn một thập kỷ, chúng tôi không chỉ đưa khách đến nơi — chúng tôi đồng hành cùng những kỷ niệm. Mỗi tài xế là một người bạn am hiểu vùng đất, mỗi chiếc xe là không gian riêng tư của bạn.
          </p>

          <div className="grid gap-6">
            {features.map((f) => (
              <div key={f.num} className="flex gap-5 pl-5 border-l-2 border-subtle hover:border-gold-300 hover:pl-7 transition-all duration-300">
                <span className="font-display text-3xl italic text-gold-300 leading-none">{f.num}</span>
                <div>
                  <h4 className="font-medium text-base md:text-lg mb-2">{f.title}</h4>
                  <p className="text-secondary text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
