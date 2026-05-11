const pricingData = [
  { route: 'Đà Nẵng — Hội An', p4: '550.000', p7: '650.000', extra: 'Rừng Dừa · Làng Đá' },
  { route: 'Đà Nẵng — Bà Nà', p4: '600.000', p7: '700.000', extra: '—' },
  { route: 'Đà Nẵng — VinWonders Nam Hội An', p4: '900.000', p7: '1.000.000', extra: '—' },
  { route: 'Đà Nẵng — Huế', p4: '1.800.000', p7: '2.000.000', extra: 'Tham quan 4 điểm' },
  { route: 'Đà Nẵng — Chùa Linh Ứng', p4: '250.000', p7: '350.000', extra: '—' },
  { route: 'Sân bay — Trung tâm', p4: '120.000', p7: '140.000', extra: 'Sau 22h +30K' },
  { route: 'Đà Nẵng — Núi Thần Tài', p4: '700.000', p7: '800.000', extra: '—' },
  { route: 'Đà Nẵng — Cù Lao Chàm', p4: '600.000', p7: '700.000', extra: '—' },
  { route: 'City Tour (50km / 6 tiếng)', p4: '700.000', p7: '900.000', extra: '—' },
  { route: 'City Tour (100km / 10 tiếng)', p4: '1.000.000', p7: '1.200.000', extra: '—' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.08), transparent 60%)' }} />

      <div className="max-w-[1280px] mx-auto px-6 relative">
        <header className="text-center max-w-[720px] mx-auto mb-16 reveal">
          <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.35em] text-gold-300 uppercase font-medium">
            <span className="w-7 h-px bg-gold-300" />
            Bảng giá xe du lịch 2026
            <span className="w-7 h-px bg-gold-300" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light my-5">
            Minh bạch <em className="italic gold-gradient">đúng giá</em> — không phát sinh
          </h2>
          <p className="text-secondary">
            Giá đã bao gồm tài xế, xăng dầu, phí cầu đường. Cam kết không phụ thu, không phát sinh ngoài bảng giá công bố.
          </p>
        </header>

        <div className="relative reveal rounded-3xl border border-subtle shadow-luxe overflow-hidden" style={{ background: 'linear-gradient(135deg, rgb(var(--bg-card)) 0%, rgb(var(--bg-elev)) 100%)' }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
          <div className="absolute -top-48 -right-48 w-[500px] h-[500px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12), transparent 60%)' }} />

          <div className="relative p-8 md:p-14">
            <div className="flex flex-wrap justify-between items-end gap-5 mb-10">
              <h3 className="font-display text-3xl md:text-4xl font-medium">
                Tourist Car Price List <em className="italic gold-gradient">2026</em>
              </h3>
              <div className="text-xs tracking-wider text-muted">
                Giá / Price (2 chiều / Round Trip) · ĐVT: VNĐ
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-strong">
                    <th className="text-left py-4 px-3 md:px-5 text-[11px] tracking-widest uppercase text-gold-300 font-medium">Tuyến đường / Route</th>
                    <th className="text-center py-4 px-3 md:px-5 text-[11px] tracking-widest uppercase text-gold-300 font-medium">4 chỗ</th>
                    <th className="text-center py-4 px-3 md:px-5 text-[11px] tracking-widest uppercase text-gold-300 font-medium">7 chỗ</th>
                    <th className="text-left py-4 px-3 md:px-5 text-[11px] tracking-widest uppercase text-gold-300 font-medium hidden md:table-cell">Phụ thu</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, i) => (
                    <tr key={i} className="border-b border-subtle hover:bg-gold-soft transition-colors">
                      <td className="py-5 px-3 md:px-5 font-display text-base md:text-lg font-medium">{row.route}</td>
                      <td className="py-5 px-3 md:px-5 text-center">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-gold-soft text-gold-300 font-semibold text-sm tabular-nums">{row.p4}</span>
                      </td>
                      <td className="py-5 px-3 md:px-5 text-center">
                        <span className="inline-block px-3 py-1.5 rounded-lg bg-gold-soft text-gold-300 font-semibold text-sm tabular-nums">{row.p7}</span>
                      </td>
                      <td className="py-5 px-3 md:px-5 text-xs text-muted italic hidden md:table-cell">{row.extra}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 pt-8 border-t border-subtle flex flex-wrap justify-between items-center gap-5">
              <div className="text-sm text-secondary">
                📞 Hotline đặt xe: <strong className="text-gold-300 text-lg font-display">0905 654 054</strong>
              </div>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[13px] font-semibold tracking-wide text-[#0A0A0A] hover:-translate-y-0.5 transition-all"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 8px 20px rgba(212,175,55,0.3)' }}
              >
                Đặt xe ngay
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
