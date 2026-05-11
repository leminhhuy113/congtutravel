import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'vietnamese'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F3' },
    { media: '(prefers-color-scheme: dark)', color: '#07070A' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://congtutravelcar.vn'),
  title: {
    default: 'Công Tú TravelCAR | Thuê Xe Du Lịch Đà Nẵng Cao Cấp - Hotline 0905 654 054',
    template: '%s | Công Tú TravelCAR',
  },
  description:
    'Công Tú TravelCAR - Dịch vụ thuê xe du lịch Đà Nẵng cao cấp. Xe sân bay, city tour, tour Hội An, Bà Nà, Huế. Kia K3 Premium, VinFast Limo Green. Tài xế chuyên nghiệp 24/7. Đặt xe ngay 0905 654 054.',
  keywords: [
    'thuê xe Đà Nẵng',
    'xe du lịch Đà Nẵng',
    'thuê xe tự lái Đà Nẵng',
    'xe sân bay Đà Nẵng',
    'tour Hội An',
    'xe 7 chỗ Đà Nẵng',
    'Kia K3 thuê tự lái',
    'VinFast Limo Green',
    'thuê xe có tài xế Đà Nẵng',
    'Công Tú TravelCAR',
    'xe đi Bà Nà',
    'xe đi Huế',
  ],
  authors: [{ name: 'Công Tú TravelCAR' }],
  creator: 'Công Tú TravelCAR',
  publisher: 'Công Tú TravelCAR',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://congtutravelcar.vn',
    siteName: 'Công Tú TravelCAR',
    title: 'Công Tú TravelCAR | Thuê Xe Du Lịch Đà Nẵng Cao Cấp',
    description: 'Dịch vụ thuê xe du lịch Đà Nẵng cao cấp - Sang trọng, đúng giờ, an toàn. Hotline 0905 654 054',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Công Tú TravelCAR' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Công Tú TravelCAR | Thuê Xe Du Lịch Đà Nẵng',
    description: 'Dịch vụ xe du lịch VIP tại Đà Nẵng. Hotline 0905 654 054',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://congtutravelcar.vn',
  name: 'Công Tú TravelCAR',
  image: 'https://congtutravelcar.vn/logo.jpg',
  description: 'Dịch vụ thuê xe du lịch cao cấp tại Đà Nẵng - Tour Hội An, Bà Nà, Huế, sân bay, city tour',
  url: 'https://congtutravelcar.vn',
  telephone: ['+84905654054', '+84934995223'],
  email: 'congtutravel@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Đà Nẵng',
    addressCountry: 'VN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 16.0544, longitude: 108.2022 },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: ['https://www.facebook.com/congtutravelcar', 'https://zalo.me/0905654054'],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '847' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'rgb(var(--bg-card))',
                color: 'rgb(var(--text-primary))',
                border: '1px solid rgb(var(--border-strong))',
                borderRadius: '12px',
                padding: '14px 18px',
                fontSize: '14px',
                boxShadow: 'var(--shadow-card)',
              },
              success: { iconTheme: { primary: '#D4AF37', secondary: '#fff' } },
              error: { iconTheme: { primary: '#dc2626', secondary: '#fff' } },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
