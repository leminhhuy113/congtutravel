import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Fleet from '@/components/Fleet';
import Pricing from '@/components/Pricing';
import BookingForm from '@/components/BookingForm';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import RevealObserver from '@/components/RevealObserver';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Fleet />
        <Pricing />
        <BookingForm />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <FloatingContact />
      <RevealObserver />
    </>
  );
}
