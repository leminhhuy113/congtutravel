export default function Marquee() {
  const items = ['Premium Fleet', 'Tài xế lịch lãm', 'An toàn tuyệt đối', 'Đúng giờ — Đúng hẹn', 'VIP Transport', 'Đà Nẵng · Hội An · Huế'];
  return (
    <div className="border-y border-subtle py-7 overflow-hidden relative">
      <div className="flex gap-20 animate-scroll-x whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-xl md:text-2xl text-secondary italic flex items-center gap-20 flex-shrink-0">
            {item}
            <span className="text-gold-300 not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
