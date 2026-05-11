'use client';

import { useState } from 'react';

const contacts = [
  { href: 'tel:0905654054', label: 'Gọi 0905 654 054', bg: 'linear-gradient(135deg, #00C853, #00A040)', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.4-5.2-3.7-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.1-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" /></svg> },
  { href: 'https://zalo.me/0905654054', label: 'Chat Zalo', bg: 'linear-gradient(135deg, #0084FF, #0068CC)', icon: <span className="font-extrabold text-[12px] tracking-tight">Zalo</span> },
  { href: 'https://m.me/congtutravel', label: 'Facebook Messenger', bg: 'linear-gradient(135deg, #00B2FF, #006AFF)', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.1 2 11.2c0 2.9 1.5 5.5 3.8 7.2v3.5l3.5-1.9c.9.3 1.8.4 2.7.4 5.5 0 10-4.1 10-9.2S17.5 2 12 2zm1 12.4l-2.5-2.7-4.9 2.7 5.4-5.7 2.6 2.7 4.8-2.7-5.4 5.7z" /></svg> },
  { href: 'https://wa.me/84905654054', label: 'WhatsApp', bg: 'linear-gradient(135deg, #25D366, #128C7E)', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.8 4.5 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg> },
  { href: 'weixin://dl/chat?0905654054', label: 'WeChat', bg: 'linear-gradient(135deg, #07C160, #06AD56)', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M9 11.5c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1zm6 0c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.5 1-1 1zM12 2C6.5 2 2 5.9 2 10.6c0 2.6 1.4 5 3.6 6.5l-.9 2.8 3.3-1.7c1.2.3 2.5.5 3.8.5h.4l-.1-.7c0-3.1 2.8-5.6 6.4-5.6.4 0 .8 0 1.2.1.3 0 .5.1.8.2-.5-4.2-4.6-7.5-9.6-7.5h.1zm10 11.8c0-3.1-3.1-5.6-6.8-5.6-3.9 0-6.8 2.5-6.8 5.6 0 3.1 3.1 5.6 6.8 5.6.8 0 1.6-.1 2.4-.3l2.4 1.3-.7-2.2c1.7-1.3 2.7-3.1 2.7-5.4z" /></svg> },
];

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[90] flex flex-col items-end gap-3">
      <div className={`flex flex-col gap-2.5 items-end transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-5'}`}>
        {contacts.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target={c.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={c.label}
            className="group w-12 h-12 rounded-full grid place-items-center text-white shadow-lg hover:-translate-x-1.5 transition-transform relative"
            style={{ background: c.bg }}
          >
            {c.icon}
            <span className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 bg-card border border-subtle px-3 py-1.5 rounded-lg text-xs whitespace-nowrap text-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {c.label}
            </span>
          </a>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Đóng menu liên hệ' : 'Mở menu liên hệ'}
        aria-expanded={open}
        className={`w-14 h-14 md:w-15 md:h-15 rounded-full grid place-items-center text-[#0A0A0A] cursor-pointer transition-all duration-500 hover:scale-110 ${open ? 'rotate-45' : ''} ${!open ? 'animate-pulse-gold' : ''}`}
        style={{ background: 'linear-gradient(135deg, #D4AF37, #B8893D)', boxShadow: '0 10px 30px rgba(212,175,55,0.35)' }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </div>
  );
}
