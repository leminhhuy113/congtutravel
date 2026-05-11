'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

const navItems = [
  { href: '#home', label: 'Trang chủ' },
  { href: '#services', label: 'Dịch vụ' },
  { href: '#fleet', label: 'Dòng xe' },
  { href: '#pricing', label: 'Bảng giá' },
  { href: '#booking', label: 'Đặt xe' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Liên hệ' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'glass border-b border-subtle py-3' : 'py-5 bg-transparent'
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-6 flex items-center justify-between gap-6" aria-label="Main">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <span className="relative w-11 h-11 rounded-full grid place-items-center" style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 0 30px rgba(212,175,55,0.35)' }}>
            <span className="absolute inset-[3px] rounded-full bg-base" />
            <span className="relative font-display font-semibold text-lg gold-gradient">C</span>
          </span>
          <span className="flex flex-col leading-none">
            <strong className="font-display font-medium text-lg tracking-wide">Công Tú</strong>
            <small className="text-[9px] tracking-[0.3em] text-gold-300 uppercase mt-1 font-sans">TravelCAR</small>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[13px] tracking-wider text-secondary hover:text-gold-300 transition-colors relative py-1.5 group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-gold-300 group-hover:w-full transition-all duration-500" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-subtle grid place-items-center hover:border-gold-300 hover:text-gold-300 transition-all hover:rotate-[20deg]"
            aria-label="Chuyển đổi giao diện sáng/tối"
            title={theme === 'dark' ? 'Chuyển sang giao diện sáng' : 'Chuyển sang giao diện tối'}
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            )}
          </button>

          <a
            href="#booking"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13px] font-semibold tracking-wide text-[#0A0A0A] transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 8px 20px rgba(212,175,55,0.3)' }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Đặt xe ngay
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-subtle grid place-items-center"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-subtle">
          <ul className="px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-[15px] tracking-wide text-secondary hover:text-gold-300 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
