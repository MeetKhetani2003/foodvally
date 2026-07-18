"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { useRef } from 'react';
import MarqueeBanner from '../components/MarqueeBanner';

const HERO_BG = 'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1080&w=1920';
const ABOUT_IMG = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=700';
const SERVICE_1 = 'https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200';
const SERVICE_2 = 'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200';
const SERVICE_3 = 'https://images.pexels.com/photos/36430149/pexels-photo-36430149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200';
const CUISINE_1 = 'https://images.pexels.com/photos/35420072/pexels-photo-35420072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500';
const CUISINE_2 = 'https://images.pexels.com/photos/29486069/pexels-photo-29486069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500';
const CUISINE_3 = 'https://images.pexels.com/photos/32149261/pexels-photo-32149261.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500';
const CUISINE_4 = 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500';
const GALLERY_1 = 'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900';
const GALLERY_2 = 'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900';
const GALLERY_3 = 'https://images.pexels.com/photos/35985243/pexels-photo-35985243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900';
const COUNTER_IMG = 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200';

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { number: '2000+', label: 'Events Crafted' },
  { number: '18', label: 'Years of Excellence' },
  { number: '50+', label: 'Live Counter Stations' },
  { number: '10K+', label: 'Happy Guests Daily' },
];

const testimonials = [
  {
    quote: 'Food Valley transformed our wedding into an extraordinary culinary journey. Every detail was perfection — from the live counters to the gourmet dessert bar. Our guests still talk about it.',
    name: 'Priya & Arjun Mehta',
    occasion: 'Royal Wedding Reception, Udaipur',
    rating: 5,
  },
  {
    quote: 'We have partnered with Food Valley for all our corporate galas for the past six years. Their ability to execute flawlessly at the highest level of luxury is unmatched in India.',
    name: 'Rahul Singhania',
    occasion: 'CEO, Singhania Industries',
    rating: 5,
  },
  {
    quote: 'The destination wedding catering experience was nothing short of Michelin-quality. The presentation, the flavours, the service — everything was absolutely world-class.',
    name: 'Kavya & Shreyas Patel',
    occasion: 'Destination Wedding, Goa',
    rating: 5,
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <div className="bg-black">

      {/* ═══ HERO ═══ */}
      <section className="relative h-screen overflow-hidden" ref={heroRef}>
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src={HERO_BG}
            alt="Luxury Event Hall"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(9,9,9,0.5) 0%, rgba(9,9,9,0.3) 40%, rgba(9,9,9,0.85) 100%)',
            }}
          />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mb-6"
          >
            <div
              className="font-inter text-gold tracking-widest"
              style={{ fontSize: '10px', letterSpacing: '6px', textTransform: 'uppercase' }}
            >
              Est. 2005 — Ahmedabad, India
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8 flex flex-col items-center justify-center"
          >
            <img src="/logo-foodvally.png" alt="FOOD VALLEY" style={{ height: 'auto', width: 'clamp(280px, 40vw, 600px)', maxWidth: '100%' }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="font-inter text-stone-light mb-12"
            style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#b8ad9e' }}
          >
            Luxury Catering & Event Management
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Link href="/services" className="btn-luxury">
              Explore Experiences
            </Link>
            <Link href="/book-event" className="btn-luxury-filled">
              Book Your Event
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
          />
        </motion.div>

        {/* Side decorative text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
          style={{ writingMode: 'vertical-rl' }}
        >
          <div className="w-px h-16" style={{ background: 'rgba(201,169,110,0.4)' }} />
          <span className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>LUXURY CATERING</span>
          <div className="w-px h-16" style={{ background: 'rgba(201,169,110,0.4)' }} />
        </motion.div>

        {/* Left side text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
          style={{ writingMode: 'vertical-rl', transform: 'translateY(-50%) rotate(180deg)' }}
        >
          <div className="w-px h-16" style={{ background: 'rgba(201,169,110,0.4)' }} />
          <span className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>EST. 2005</span>
          <div className="w-px h-16" style={{ background: 'rgba(201,169,110,0.4)' }} />
        </motion.div>
      </section>

      {/* ═══ MARQUEE ═══ */}
      <MarqueeBanner />

      {/* ═══ BRAND INTRO ═══ */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeSection>
              <div className="relative">
                <div className="luxury-img-wrap">
                  <img
                    src={ABOUT_IMG}
                    alt="Culinary Excellence"
                    className="w-full object-cover"
                    style={{ height: '620px' }}
                  />
                </div>
                <div
                  className="absolute -bottom-8 -right-8 bg-charcoal p-8 border border-gold-muted"
                  style={{ borderColor: 'rgba(201,169,110,0.2)' }}
                >
                  <div className="font-playfair text-gold text-4xl mb-1">18</div>
                  <div className="font-inter text-stone text-xxs tracking-widest">YEARS OF EXCELLENCE</div>
                </div>
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div>
                <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>
                  OUR PHILOSOPHY
                </div>
                <div className="gold-divider mb-8" />
                <h2
                  className="font-playfair text-ivory mb-8"
                  style={{ fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.15, fontWeight: 400 }}
                >
                  Where Cuisine
                  <br />
                  Becomes <span className="text-gold italic">Art</span>
                </h2>
                <p className="font-inter text-stone mb-6" style={{ lineHeight: 2, fontSize: '16px' }}>
                  At Food Valley, we believe that exceptional cuisine is the soul of every memorable event. For eighteen years, we have curated extraordinary culinary journeys for India's most discerning families and organisations.
                </p>
                <p className="font-inter text-stone mb-10" style={{ lineHeight: 2, fontSize: '16px' }}>
                  From intimate private dinners to grand royal receptions, every experience we craft is a reflection of our uncompromising commitment to excellence, craftsmanship, and the art of hospitality.
                </p>
                <Link href="/about" className="btn-luxury">
                  Our Story
                </Link>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══ STATISTICS ═══ */}
      <section className="py-20" style={{ background: 'linear-gradient(to right, #090909, #151515, #090909)' }}>
        <div className="container-luxury">
          <div className="gold-divider-full mb-16" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <FadeSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="stat-number mb-2">{stat.number}</div>
                  <div className="gold-divider mx-auto mb-3" style={{ width: '30px' }} />
                  <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>
                    {stat.label.toUpperCase()}
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
          <div className="gold-divider-full mt-16" />
        </div>
      </section>

      {/* ═══ RECOGNITION BAR ═══ */}
      <section className="py-16 bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-12">
              <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '4px' }}>AS SEEN IN & RECOGNISED BY</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {['Vogue India', 'Architectural Digest', 'Condé Nast Traveller', 'The Hindu', 'Business Standard', 'Forbes India'].map((brand) => (
                <div
                  key={brand}
                  className="font-playfair text-stone italic"
                  style={{ fontSize: 'clamp(14px, 2vw, 18px)', opacity: 0.45, letterSpacing: '1px' }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ═══ SIGNATURE SERVICES ═══ */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>
                SIGNATURE EXPERIENCES
              </div>
              <h2
                className="font-playfair text-ivory"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.1 }}
              >
                Crafted for the
                <span className="text-gold italic"> Extraordinary</span>
              </h2>
            </div>
          </FadeSection>

          {/* Service 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-2">
            <FadeSection>
              <div className="luxury-img-wrap" style={{ height: '500px' }}>
                <img src={SERVICE_1} alt="Wedding Catering" className="w-full h-full object-cover" />
                <div className="img-overlay" />
                <div className="absolute bottom-10 left-10">
                  <div className="font-playfair text-ivory text-3xl italic mb-2">Royal Weddings</div>
                  <div className="font-inter text-gold text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>LUXURY WEDDING CATERING</div>
                </div>
              </div>
            </FadeSection>

            <div className="grid grid-rows-2 gap-2">
              <FadeSection delay={0.1}>
                <div className="luxury-img-wrap relative" style={{ height: '246px' }}>
                  <img src={SERVICE_2} alt="Destination Weddings" className="w-full h-full object-cover" />
                  <div className="img-overlay" />
                  <div className="absolute bottom-6 left-6">
                    <div className="font-playfair text-ivory text-xl italic">Destination Events</div>
                  </div>
                </div>
              </FadeSection>
              <FadeSection delay={0.2}>
                <div className="luxury-img-wrap relative" style={{ height: '246px' }}>
                  <img src={SERVICE_3} alt="Corporate Galas" className="w-full h-full object-cover" />
                  <div className="img-overlay" />
                  <div className="absolute bottom-6 left-6">
                    <div className="font-playfair text-ivory text-xl italic">Corporate Galas</div>
                  </div>
                </div>
              </FadeSection>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-luxury">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CUISINE SHOWCASE ═══ */}
      <section className="section-padding" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <FadeSection>
              <div>
                <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>
                  CULINARY ARTISTRY
                </div>
                <div className="gold-divider mb-8" />
                <h2
                  className="font-playfair text-ivory"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400, lineHeight: 1.15 }}
                >
                  A World of
                  <br />
                  <span className="text-gold italic">Flavours</span>
                </h2>
              </div>
            </FadeSection>
            <FadeSection delay={0.2}>
              <p className="font-inter text-stone" style={{ lineHeight: 2, fontSize: '16px' }}>
                From the delicate art of Japanese cuisine to the bold spices of Rajasthani cooking, our culinary masters traverse the world's finest gastronomic traditions. Every menu is a curated journey across cultures, crafted specifically for your celebration.
              </p>
            </FadeSection>
          </div>

          {/* Horizontal scroll cuisine */}
          <div className="scroll-x flex gap-4 pb-4">
            {[
              { img: CUISINE_1, label: 'Japanese', sub: 'Fine Cuisine' },
              { img: CUISINE_2, label: 'Grand Buffet', sub: 'International Spread' },
              { img: CUISINE_3, label: 'Dessert Bar', sub: 'Sweet Indulgence' },
              { img: CUISINE_4, label: 'Gourmet', sub: 'Culinary Art' },
              { img: 'https://images.pexels.com/photos/30469689/pexels-photo-30469689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500', label: 'Fine Plating', sub: 'Chef\'s Creations' },
              { img: 'https://images.pexels.com/photos/35985229/pexels-photo-35985229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=500', label: 'Luxury Sweets', sub: 'Gold Collection' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex-none"
                style={{ width: '280px' }}
              >
                <div className="luxury-img-wrap relative" style={{ height: '380px' }}>
                  <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                  <div className="img-overlay" />
                  <div className="absolute bottom-6 left-6">
                    <div className="font-playfair text-ivory text-xl italic mb-1">{item.label}</div>
                    <div className="font-inter text-gold text-xxs tracking-widest" style={{ letterSpacing: '2px' }}>{item.sub.toUpperCase()}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-luxury">
              Explore Menu Experience
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ LIVE COUNTERS FEATURE ═══ */}
      <section className="relative overflow-hidden" style={{ height: '70vh' }}>
        <img src={COUNTER_IMG} alt="Live Counter" className="w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(9,9,9,0.95) 40%, rgba(9,9,9,0.3) 100%)' }}
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <FadeSection>
              <div className="max-w-xl">
                <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>
                  SIGNATURE EXPERIENCE
                </div>
                <h2
                  className="font-playfair text-ivory mb-6"
                  style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 400, lineHeight: 1.15 }}
                >
                  Live Counter
                  <br />
                  <span className="text-gold italic">Ateliers</span>
                </h2>
                <p className="font-inter text-stone mb-10" style={{ lineHeight: 2, fontSize: '16px' }}>
                  Watch our master chefs craft dishes with theatrical precision. From Italian pasta to Japanese teppanyaki, each live counter is a culinary performance your guests will never forget.
                </p>
                <Link href="/live-counters" className="btn-luxury">
                  Discover Live Counters
                </Link>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* ═══ GALLERY PREVIEW ═══ */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>
                  SELECTED WORKS
                </div>
                <h2
                  className="font-playfair text-ivory"
                  style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}
                >
                  Event <span className="text-gold italic">Gallery</span>
                </h2>
              </div>
              <Link href="/gallery" className="btn-luxury hidden md:flex">
                View All
              </Link>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[GALLERY_1, GALLERY_2, GALLERY_3].map((img, i) => (
              <FadeSection key={i} delay={i * 0.15}>
                <div className="gallery-item" style={{ height: i === 1 ? '500px' : '380px' }}>
                  <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
                  <div className="gallery-item-overlay">
                    <div className="text-gold text-2xl">+</div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>
                CLIENT VOICES
              </div>
              <h2
                className="font-playfair text-ivory"
                style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}
              >
                Stories of
                <span className="text-gold italic"> Excellence</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <FadeSection key={i} delay={i * 0.15}>
                <div
                  className="p-10 border"
                  style={{ borderColor: 'rgba(201,169,110,0.12)', background: 'rgba(21,21,21,0.5)' }}
                >
                  <div className="quote-mark mb-4">"</div>
                  <p className="font-cormorant text-ivory mb-8" style={{ fontSize: '18px', lineHeight: 1.8, fontStyle: 'italic' }}>
                    {t.quote}
                  </p>
                  <div className="gold-divider mb-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="star">★</span>
                    ))}
                  </div>
                  <div className="font-inter text-gold text-xs tracking-wide" style={{ letterSpacing: '1px' }}>{t.name}</div>
                  <div className="font-inter text-stone text-xxs mt-1" style={{ letterSpacing: '1px' }}>{t.occasion}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHILOSOPHY STRIP ═══ */}
      <section className="py-24 overflow-hidden" style={{ background: '#090909' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="gold-divider mx-auto mb-10" />
              <blockquote
                className="font-cormorant text-ivory"
                style={{ fontSize: 'clamp(22px, 3.5vw, 40px)', fontStyle: 'italic', lineHeight: 1.7, fontWeight: 300 }}
              >
                "We believe that the finest moments in life are defined not by what you see,
                but by what you <span className="text-gold">taste</span>, what you{' '}
                <span className="text-gold">feel</span>, and what you{' '}
                <span className="text-gold">remember</span> forever."
              </blockquote>
              <div className="gold-divider mx-auto mt-10 mb-6" />
              <p className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '4px' }}>
                — CHEF VIKRAM PATEL, FOUNDER & EXECUTIVE CHEF
              </p>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ═══ BOOKING CTA ═══ */}
      <section className="relative overflow-hidden" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="https://images.pexels.com/photos/34672241/pexels-photo-34672241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Luxury Event"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(9,9,9,0.82)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeSection>
            <div className="text-center px-6">
              <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>
                BEGIN YOUR JOURNEY
              </div>
              <h2
                className="font-playfair text-ivory mb-6"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400 }}
              >
                Create Something
                <br />
                <span className="text-gold italic">Extraordinary</span>
              </h2>
              <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '480px', lineHeight: 2, fontSize: '16px' }}>
                Every great event begins with a conversation. Share your vision with us and we will craft an experience beyond imagination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book-event" className="btn-luxury-filled">
                  Book Your Event
                </Link>
                <Link href="/contact" className="btn-luxury">
                  Get in Touch
                </Link>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

    </div>
  );
}
