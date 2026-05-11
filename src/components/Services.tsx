const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>
    ),
    title: 'Đưa đón sân bay',
    desc: 'Dịch vụ đưa đón sân bay Đà Nẵng 24/7. Tài xế đợi tại sảnh đến, hỗ trợ hành lý, đảm bảo đúng giờ tuyệt đối cho mọi chuyến bay.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
    ),
    title: 'City Tour Đà Nẵng',
    desc: 'Khám phá thành phố biển xinh đẹp với hành trình 6-10 giờ. Cầu Rồng, Bán Đảo Sơn Trà, Ngũ Hành Sơn — mỗi điểm dừng là một câu chuyện.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /></svg>
    ),
    title: 'Tour Hội An',
    desc: 'Phố cổ Hội An, Rừng Dừa Bảy Mẫu, Làng Đá Non Nước. Hành trình ngắm hoàng hôn bên dòng Thu Bồn với những chiếc đèn lồng lung linh.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>
    ),
    title: 'Tour Bà Nà Hills',
    desc: 'Chinh phục đỉnh Bà Nà — "lạc bước vào châu Âu" với Cầu Vàng huyền thoại, làng Pháp cổ kính và cáp treo dài nhất thế giới.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22h20M4 22V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v17M7 7h.01M11 7h.01M15 7h.01M7 11h.01M11 11h.01M15 11h.01M7 15h.01M11 15h.01M15 15h.01" /></svg>
    ),
    title: 'Tour Cố Đô Huế',
    desc: 'Hành trình về Cố đô Huế qua đèo Hải Vân hùng vĩ. Tham quan Đại Nội, lăng tẩm vua chúa triều Nguyễn, chùa Thiên Mụ trầm mặc.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    ),
    title: 'Thuê xe tự lái',
    desc: 'Kia K3 Premium đời mới cho khách hàng tự cầm lái. Thủ tục nhanh gọn, bảo hiểm đầy đủ, hỗ trợ 24/7 trên mọi cung đường.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-6">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Dịch vụ của chúng tôi
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Mỗi hành trình, một <em className="italic gold-gradient">trải nghiệm riêng</em>
          </h2>
          <p className="text-secondary">
            Từ đưa đón sân bay đến những tour khám phá di sản miền Trung — chúng tôi mang đến dịch vụ vận tải cao cấp được cá nhân hoá cho từng khách hàng.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden p-9 rounded-2xl border border-subtle bg-card hover:border-gold-300 hover:-translate-y-1.5 transition-all duration-500 hover:shadow-card cursor-pointer"
            >
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
              <div className="absolute -right-1/2 top-1/2 w-[200%] h-[200%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 50%)' }} />

              <div className="relative w-14 h-14 rounded-2xl border border-subtle bg-gold-soft grid place-items-center mb-6 text-gold-300">
                {s.icon}
              </div>
              <h3 className="relative font-display text-2xl font-medium mb-3">{s.title}</h3>
              <p className="relative text-secondary text-sm leading-[1.7]">{s.desc}</p>
              <a href="#booking" className="relative mt-6 inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold-300 group-hover:gap-3.5 transition-all">
                Đặt ngay
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
