const testimonials = [
  {
    initial: 'M',
    name: 'Anh Minh Tuấn',
    role: 'Doanh nhân · Hà Nội',
    text: 'Tài xế đến sân bay sớm 10 phút, đồng phục lịch sự, xe sạch sẽ thơm tho. Cảm giác như được đón bằng dịch vụ limousine cao cấp với giá rất hợp lý.',
  },
  {
    initial: 'L',
    name: 'Chị Linh Phương',
    role: 'Du khách · TP.HCM',
    text: 'Đi tour Bà Nà cả ngày, tài xế cực kỳ nhiệt tình, giới thiệu nhiều địa điểm hay. Xe VinFast Limo Green êm ru, ghế ngồi rộng rãi cho cả gia đình 6 người.',
  },
  {
    initial: 'D',
    name: 'Anh David Kim',
    role: 'Khách nước ngoài · Korea',
    text: 'Thuê xe tự lái 3 ngày để đi Huế. Thủ tục cực nhanh, xe đời mới, hỗ trợ tận tình khi gặp sự cố nhỏ giữa đường. Sẽ quay lại lần sau!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Khách hàng nói gì
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Lời cảm nhận từ <em className="italic gold-gradient">những hành trình</em>
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <article key={t.name} className="reveal relative p-9 rounded-2xl border border-subtle bg-card hover:border-gold-300 hover:-translate-y-1 transition-all duration-500">
              <span className="absolute top-7 right-7 font-display text-7xl text-gold-300 opacity-40 leading-[0.5]">&ldquo;</span>
              <div className="text-gold-300 mb-4 text-sm tracking-[4px]">★ ★ ★ ★ ★</div>
              <p className="font-display text-lg leading-[1.5] mb-7 italic font-normal">{t.text}</p>
              <div className="pt-5 border-t border-subtle flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full grid place-items-center font-display font-semibold text-[#0A0A0A]" style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)' }}>
                  {t.initial}
                </div>
                <div>
                  <strong className="block text-sm font-medium">{t.name}</strong>
                  <small className="text-xs text-muted">{t.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
