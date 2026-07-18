"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
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

const testimonials = [
  {
    quote: 'Food Valley transformed our wedding into an extraordinary culinary journey. Every detail was perfection — from the live counters to the gourmet dessert bar. Our 800 guests are still talking about the experience months later.',
    name: 'Priya & Arjun Mehta',
    occasion: 'Royal Wedding Reception, Udaipur',
    rating: 5,
    date: 'November 2024',
    featured: true,
  },
  {
    quote: 'We have partnered with Food Valley for all our corporate galas for the past six years. Their ability to execute flawlessly at the highest level of luxury is unmatched in India.',
    name: 'Rahul Singhania',
    occasion: 'CEO, Singhania Industries',
    rating: 5,
    date: 'September 2024',
    featured: false,
  },
  {
    quote: 'The destination wedding catering experience in Goa was nothing short of Michelin-quality. The presentation, the flavours, the service — everything was absolutely world-class.',
    name: 'Kavya & Shreyas Patel',
    occasion: 'Destination Wedding, Goa',
    rating: 5,
    date: 'December 2024',
    featured: false,
  },
  {
    quote: 'I have attended events catered by the best companies in India, and Food Valley stands alone at the top. Their Italian live counter was the highlight of our entire evening.',
    name: 'Nisha Agarwal',
    occasion: 'Birthday Celebration, Ahmedabad',
    rating: 5,
    date: 'October 2024',
    featured: false,
  },
  {
    quote: 'Our annual corporate dinner has never received such rave reviews. Food Valley elevated a business event into a memorable experience. Their team is professional, punctual, and passionate.',
    name: 'Vikram Tata',
    occasion: 'Director, Tata Consultancy',
    rating: 5,
    date: 'August 2024',
    featured: false,
  },
  {
    quote: 'The royal reception for my daughter\'s wedding was breathtaking. 1200 guests, 12 live counters, and flawless service throughout the night. Food Valley is in a league of its own.',
    name: 'Dr. Ramesh Shah',
    occasion: 'Royal Reception, Jaipur',
    rating: 5,
    date: 'February 2025',
    featured: true,
  },
  {
    quote: 'Their Gujarati and Kathiyawadi menu at our traditional family event was absolutely authentic. You could taste the love and craftsmanship in every dish.',
    name: 'Hetal & Dhruv Modi',
    occasion: 'Family Celebration, Ahmedabad',
    rating: 5,
    date: 'March 2025',
    featured: false,
  },
  {
    quote: 'As a food critic, I am extremely particular about quality. Food Valley not only met my expectations — they exceeded them dramatically. A truly elite catering experience.',
    name: 'Ananya Krishnan',
    occasion: 'Food Critic & Writer',
    rating: 5,
    date: 'January 2025',
    featured: false,
  },
  {
    quote: 'The mocktail station and dessert bar at our event were absolute showstoppers. Every single item was photographed and shared — Food Valley knows how to create Instagram-worthy luxury.',
    name: 'Rhea Kapoor',
    occasion: 'Social Celebration, Mumbai',
    rating: 5,
    date: 'April 2025',
    featured: false,
  },
];

export default function Testimonials() {
  const featured = testimonials.filter((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
        <img
          src="https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Testimonials"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.4) 0%, rgba(9,9,9,0.9) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>CLIENT VOICES</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Stories of
                <br />
                <span className="text-gold italic">Excellence</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="font-cormorant text-gold" style={{ fontSize: '80px', fontWeight: 300, lineHeight: 1 }}>4.9</div>
                <div className="flex justify-center gap-1 mt-2 mb-3">
                  {[1,2,3,4,5].map((s) => <span key={s} className="star">★</span>)}
                </div>
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2px' }}>AVERAGE RATING</div>
              </div>
              <div>
                <div className="font-cormorant text-gold" style={{ fontSize: '80px', fontWeight: 300, lineHeight: 1 }}>500+</div>
                <div className="gold-divider mx-auto mt-4 mb-3" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2px' }}>VERIFIED REVIEWS</div>
              </div>
              <div>
                <div className="font-cormorant text-gold" style={{ fontSize: '80px', fontWeight: 300, lineHeight: 1 }}>98%</div>
                <div className="gold-divider mx-auto mt-4 mb-3" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2px' }}>WOULD RECOMMEND</div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>FEATURED STORIES</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}>
                Words from Our <span className="text-gold italic">Guests</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {featured.map((t, i) => (
              <FadeSection key={i} delay={i * 0.15}>
                <div
                  className="p-12 relative"
                  style={{ border: '1px solid rgba(201,169,110,0.2)', background: 'rgba(21,21,21,0.6)' }}
                >
                  <div className="quote-mark mb-2" style={{ fontSize: '100px', lineHeight: 0.6 }}>"</div>
                  <p className="font-cormorant text-ivory mb-8" style={{ fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: 1.8, fontStyle: 'italic' }}>
                    {t.quote}
                  </p>
                  <div className="gold-divider mb-6" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="star">★</span>
                    ))}
                  </div>
                  <div className="font-inter text-gold text-sm mb-1" style={{ letterSpacing: '1px' }}>{t.name}</div>
                  <div className="font-inter text-stone text-xxs" style={{ letterSpacing: '1px' }}>{t.occasion}</div>
                  <div className="absolute top-8 right-8 font-inter text-stone text-xxs" style={{ letterSpacing: '2px' }}>{t.date}</div>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* All testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rest.map((t, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div
                  className="p-8"
                  style={{ border: '1px solid rgba(201,169,110,0.1)', background: 'rgba(15,15,15,0.5)' }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="star" style={{ fontSize: '12px' }}>★</span>
                    ))}
                  </div>
                  <p className="font-cormorant text-ivory mb-6" style={{ fontSize: '17px', lineHeight: 1.8, fontStyle: 'italic' }}>
                    "{t.quote}"
                  </p>
                  <div className="gold-divider mb-4" style={{ width: '24px' }} />
                  <div className="font-inter text-gold text-xs mb-1">{t.name}</div>
                  <div className="font-inter text-stone text-xxs">{t.occasion}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Banner */}
      <section className="py-20" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center">
              <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>VERIFIED ON GOOGLE</div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => <span key={s} className="star" style={{ fontSize: '24px' }}>★</span>)}
                </div>
                <span className="font-cormorant text-ivory" style={{ fontSize: '32px', fontWeight: 300 }}>4.9</span>
              </div>
              <p className="font-inter text-stone text-xs mb-8" style={{ letterSpacing: '2px' }}>
                BASED ON 500+ GOOGLE REVIEWS
              </p>
              <a
                href="#"
                className="btn-luxury"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Reviews
              </a>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black text-center">
        <div className="container-luxury">
          <FadeSection>
            <div className="gold-divider mx-auto mb-10" />
            <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400 }}>
              Create Your Own
              <br />
              <span className="text-gold italic">Story</span>
            </h2>
            <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '460px', lineHeight: 2, fontSize: '16px' }}>
              Join thousands of families and organisations who have trusted Food Valley to make their most important moments extraordinary.
            </p>
            <Link href="/book-event" className="btn-luxury-filled">Begin Your Journey</Link>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
