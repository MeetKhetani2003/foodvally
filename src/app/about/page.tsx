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

const timeline = [
  { year: '2005', title: 'The Beginning', desc: 'Founded in Ahmedabad with a singular vision: to redefine luxury catering in India. Our first event served 200 guests at a private corporate dinner.' },
  { year: '2008', title: 'Expanding Horizons', desc: 'Introduced live counter stations and multi-cuisine experiences, becoming the first catering company in Gujarat to offer Japanese and Italian live kitchens.' },
  { year: '2012', title: 'Royal Recognition', desc: 'Chosen as the exclusive caterer for a royal Rajput wedding in Jodhpur. Our work was featured in Vogue India\'s luxury wedding special.' },
  { year: '2016', title: 'Destination Mastery', desc: 'Established our destination wedding catering division, executing events across Goa, Udaipur, Jaipur, and international locations including Dubai and London.' },
  { year: '2020', title: 'Digital Excellence', desc: 'Launched virtual culinary experiences during challenging times, pioneering luxury private dining boxes for discerning clients across India.' },
  { year: '2025', title: 'The Future', desc: 'Now India\'s most sought-after luxury caterer with 2000+ events, 50+ live counter stations, and an unmatched reputation for culinary excellence.' },
];

const team = [
  {
    name: 'Chef Vikram Patel',
    role: 'Executive Chef & Founder',
    desc: 'Trained at Le Cordon Bleu Paris, with experience at Michelin-starred restaurants across Europe and Asia.',
    img: 'https://images.pexels.com/photos/4590941/pexels-photo-4590941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: 'Chef Meera Shah',
    role: 'Head of Indian Cuisine',
    desc: 'Master of traditional and contemporary Indian cooking, specializing in Rajasthani, Gujarati, and Mughlai cuisines.',
    img: 'https://images.pexels.com/photos/8629120/pexels-photo-8629120.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
  {
    name: 'Chef David Chen',
    role: 'Head of International Cuisine',
    desc: 'Expert in Japanese, Chinese, and Thai cuisines with 15 years of experience at five-star hotels across Asia.',
    img: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=400',
  },
];

const values = [
  { icon: '✦', title: 'Uncompromising Excellence', desc: 'Every ingredient is sourced with meticulous care. Every dish is prepared with unwavering precision. We accept nothing less than perfection.' },
  { icon: '◈', title: 'Artful Presentation', desc: 'We believe dining is a visual experience. Our presentation standards rival the finest restaurants in the world.' },
  { icon: '❋', title: 'Personalised Service', desc: 'No two events are alike. Every celebration receives a bespoke culinary narrative crafted around your unique story.' },
  { icon: '◉', title: 'Sustainable Luxury', desc: 'We partner exclusively with ethical, sustainable farms and suppliers who share our commitment to the planet and its people.' },
];

export default function About() {
  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        <img
          src="https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Our Story"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.6) 0%, rgba(9,9,9,0.85) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>OUR STORY</div>
              <h1
                className="font-playfair text-ivory"
                style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}
              >
                The Art of
                <br />
                <span className="text-gold italic">Extraordinary</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <FadeSection>
              <div>
                <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>OUR PHILOSOPHY</div>
                <div className="gold-divider mb-10" />
                <h2
                  className="font-playfair text-ivory mb-8"
                  style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.2 }}
                >
                  Craftsmanship,
                  <br />
                  <span className="text-gold italic">Not Catering</span>
                </h2>
                <p className="font-inter text-stone mb-6" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                  Food Valley was born from a singular belief: that every meal deserves to be a memory. We are not a catering company — we are architects of experience. Every event we touch becomes a chapter in someone's most treasured story.
                </p>
                <p className="font-inter text-stone mb-10" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                  Our approach begins months before your event, with deep conversations about your vision, your guests, and the emotions you wish to evoke. We then translate that vision into a culinary masterpiece that exceeds every expectation.
                </p>
                <blockquote
                  className="font-cormorant text-ivory border-l-2 pl-6 mb-10"
                  style={{ borderColor: '#c9a96e', fontSize: '22px', fontStyle: 'italic', lineHeight: 1.7 }}
                >
                  "We don't serve food. We create moments that become memories for a lifetime."
                </blockquote>
                <p className="font-inter text-gold text-xxs tracking-widest" style={{ letterSpacing: '2px' }}>— Chef Vikram Patel, Founder</p>
              </div>
            </FadeSection>

            <FadeSection delay={0.2}>
              <div className="relative">
                <div className="luxury-img-wrap">
                  <img
                    src="https://images.pexels.com/photos/29486069/pexels-photo-29486069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=750&w=600"
                    alt="Our Philosophy"
                    className="w-full object-cover"
                    style={{ height: '650px' }}
                  />
                </div>
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 border"
                  style={{ borderColor: 'rgba(201,169,110,0.2)' }}
                />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>WHAT WE STAND FOR</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}>
                Our <span className="text-gold italic">Values</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {values.map((value, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div
                  className="p-12 border"
                  style={{ borderColor: 'rgba(201,169,110,0.1)', background: 'rgba(9,9,9,0.6)' }}
                >
                  <div className="text-gold text-2xl mb-6">{value.icon}</div>
                  <h3 className="font-playfair text-ivory text-2xl mb-4">{value.title}</h3>
                  <p className="font-inter text-stone text-xs" style={{ lineHeight: 2 }}>{value.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>OUR JOURNEY</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}>
                Eighteen Years of <span className="text-gold italic">Excellence</span>
              </h2>
            </div>
          </FadeSection>

          <div className="relative">
            <div className="timeline-line hidden lg:block" />
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <FadeSection key={i} delay={i * 0.1}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:text-right' : ''}`}>
                    <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                      <div className="font-cormorant text-gold mb-2" style={{ fontSize: '56px', fontWeight: 300, lineHeight: 1 }}>
                        {item.year}
                      </div>
                      <h3 className="font-playfair text-ivory text-2xl mb-4">{item.title}</h3>
                      <p className="font-inter text-stone text-xs" style={{ lineHeight: 2 }}>{item.desc}</p>
                    </div>
                    <div className={`hidden lg:flex items-center ${i % 2 === 1 ? 'lg:order-1 justify-end' : 'justify-start'}`}>
                      <div
                        className="w-3 h-3 rounded-full border-2"
                        style={{ borderColor: '#c9a96e', background: '#090909' }}
                      />
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>THE MASTERS</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}>
                Culinary <span className="text-gold italic">Artisans</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeSection key={i} delay={i * 0.15}>
                <div>
                  <div className="luxury-img-wrap mb-6" style={{ height: '420px' }}>
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="gold-divider mb-4" style={{ width: '30px' }} />
                  <h3 className="font-playfair text-ivory text-xl mb-1">{member.name}</h3>
                  <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '2px' }}>{member.role.toUpperCase()}</div>
                  <p className="font-inter text-stone text-xs" style={{ lineHeight: 1.9 }}>{member.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen Feature */}
      <section className="relative" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="https://images.pexels.com/photos/8629107/pexels-photo-8629107.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Our Kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(9,9,9,0.75)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeSection>
            <div className="text-center px-6">
              <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>
                BEGIN YOUR EXPERIENCE
              </div>
              <h2
                className="font-playfair text-ivory mb-8"
                style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400 }}
              >
                Ready to Create
                <br />
                <span className="text-gold italic">Something Unforgettable?</span>
              </h2>
              <Link href="/book-event" className="btn-luxury-filled">
                Book Your Event
              </Link>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
