'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Giá thuê xe du lịch Đà Nẵng bao nhiêu?',
    a: 'Giá thuê xe 4 chỗ Đà Nẵng — Hội An từ 550.000đ, xe 7 chỗ từ 650.000đ (giá 2 chiều). Đưa đón sân bay từ 120.000đ. Tất cả các giá đã bao gồm tài xế, xăng dầu, phí cầu đường. Xem chi tiết tại bảng giá phía trên.',
  },
  {
    q: 'Công Tú TravelCAR có những dòng xe nào?',
    a: 'Hai dòng xe chủ lực: Kia K3 Premium (sedan 5 chỗ, đời 2024) và VinFast Limo Green (MPV điện 7 chỗ, đời 2024). Ngoài ra chúng tôi còn cung cấp các dòng xe khác như Innova, Fortuner, Limousine 9-16 chỗ — vui lòng liên hệ hotline để được tư vấn.',
  },
  {
    q: 'Có dịch vụ thuê xe tự lái Đà Nẵng không?',
    a: 'Có. Chúng tôi cung cấp dịch vụ thuê xe tự lái với thủ tục nhanh gọn (CCCD + Bằng lái B1/B2 + đặt cọc). Xe đời 2024 còn mới, bảo hiểm thân vỏ đầy đủ, hỗ trợ kỹ thuật 24/7 trên toàn miền Trung.',
  },
  {
    q: 'Tôi đặt xe trước bao lâu là tốt nhất?',
    a: 'Đặt xe sân bay và city tour nên báo trước tối thiểu 2-3 tiếng. Tour dài ngày (Hội An, Bà Nà, Huế) nên đặt trước 1 ngày. Mùa cao điểm (lễ Tết, hè) nên đặt trước 3-7 ngày để đảm bảo có xe đúng dòng yêu cầu.',
  },
  {
    q: 'Phương thức thanh toán như thế nào?',
    a: 'Chúng tôi nhận thanh toán linh hoạt: tiền mặt VNĐ, chuyển khoản ngân hàng, ví điện tử MoMo/ZaloPay/VNPay. Với tour dài ngày, khách có thể đặt cọc 30% trước, thanh toán phần còn lại sau chuyến đi.',
  },
  {
    q: 'Tài xế có biết tiếng Anh không?',
    a: 'Tất cả tài xế đều biết tiếng Anh giao tiếp cơ bản, đủ để hỗ trợ khách quốc tế. Với khách yêu cầu tài xế thông thạo tiếng Anh hoặc tiếng Hàn/Trung, vui lòng báo trước khi đặt xe để chúng tôi sắp xếp.',
  },
];

// FAQ Schema for SEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-elev">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-[1280px] mx-auto px-6">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Câu hỏi thường gặp
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Mọi điều bạn cần <em className="italic gold-gradient">biết trước</em>
          </h2>
        </header>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-subtle py-6 reveal">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 text-left group"
                aria-expanded={active === i}
              >
                <h3 className={`font-display text-lg md:text-xl font-medium transition-colors ${active === i ? 'text-gold-300' : 'group-hover:text-gold-300'}`}>
                  {faq.q}
                </h3>
                <span className={`flex-shrink-0 w-9 h-9 rounded-full border border-subtle grid place-items-center text-gold-300 transition-all duration-500 ${active === i ? 'rotate-45 bg-gold-soft border-gold-300' : ''}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${active === i ? 'max-h-96 pt-5' : 'max-h-0'}`}>
                <p className="text-secondary text-[15px] leading-[1.75]">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
