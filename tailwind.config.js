/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          100: '#F5E7C4',
          200: '#E8D08F',
          300: '#D4AF37',
          400: '#C5A04C',
          500: '#B8893D',
        },
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float': 'float 4s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s infinite',
        'scroll-x': 'scrollX 30s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%': { boxShadow: '0 10px 30px rgba(212,175,55,0.35), 0 0 0 0 rgba(212,175,55,0.6)' },
          '70%': { boxShadow: '0 10px 30px rgba(212,175,55,0.35), 0 0 0 20px rgba(212,175,55,0)' },
          '100%': { boxShadow: '0 10px 30px rgba(212,175,55,0.35), 0 0 0 0 rgba(212,175,55,0)' },
        },
        scrollX: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
