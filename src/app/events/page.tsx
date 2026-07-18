"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import BookingModal from '../../components/BookingModal';

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

const events = [
  {
    type: 'Luxury Weddings',
    tagline: 'The Celebration of a Lifetime',
    desc: 'A wedding is the most sacred celebration in Indian culture — and we treat it as such. Our wedding catering teams work months in advance to create a multi-day culinary experience that honours the magnitude of this occasion. Every meal, from the mehendi morning to the grand reception night, is a curated masterpiece.',
    img: 'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    stats: [
      { num: '500+', label: 'Weddings Executed' },
      { num: '5000+', label: 'Max Guest Count' },
      { num: '15+', label: 'Live Stations Available' },
    ],
  },
  {
    type: 'Royal Receptions',
    tagline: 'Grandeur Without Equal',
    desc: 'Receptions demand spectacle. Our royal reception packages transform any venue into a palace of culinary magnificence. Elaborate multi-counter setups, premium décor coordination, themed food stations, and a service team dedicated to ensuring every guest experiences royalty.',
    img: 'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    stats: [
      { num: '300+', label: 'Royal Events' },
      { num: '100+', label: 'Cuisines Offered' },
      { num: '24/7', label: 'Dedicated Support' },
    ],
    reverse: true,
  },
  {
    type: 'Corporate Events',
    tagline: 'Where Business Meets Excellence',
    desc: 'Your corporate event is an expression of your company\'s identity. Whether it\'s an annual gala for 3000 employees or an intimate board dinner for 20, we bring the same unwavering attention to detail, quality, and service that your brand deserves.',
    img: 'https://images.pexels.com/photos/36766881/pexels-photo-36766881.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    stats: [
      { num: '400+', label: 'Corporate Events' },
      { num: '50+', label: 'Fortune Companies' },
      { num: '100%', label: 'Client Retention' },
    ],
  },
  {
    type: 'Destination Weddings',
    tagline: 'Love Knows No Boundaries',
    desc: 'From the pink palaces of Jaipur to the sun-kissed beaches of Goa, from the misty hills of Mussoorie to international destinations, our destination wedding team travels wherever your love story takes you. We handle every culinary detail, no matter the location.',
    img: 'https://images.pexels.com/photos/34342527/pexels-photo-34342527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    stats: [
      { num: '150+', label: 'Destination Events' },
      { num: '20+', label: 'Cities Served' },
      { num: '10+', label: 'International Events' },
    ],
    reverse: true,
  },
  {
    type: 'Private Celebrations',
    tagline: 'Intimate and Extraordinary',
    desc: 'For the most personal moments — milestone birthdays, anniversaries, family reunions, and intimate celebrations — we create bespoke experiences that feel both deeply personal and utterly magnificent.',
    img: 'https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    stats: [
      { num: '600+', label: 'Private Events' },
      { num: '10', label: 'Min Guest Count' },
      { num: '100%', label: 'Customisation' },
    ],
  },
  {
    type: 'Festival Events',
    tagline: 'Culture in Every Bite',
    desc: 'Festival events carry the weight of tradition and the joy of community. From Diwali galas to Navratri feasts, from Holi celebrations to Eid dinners, we bring authentic festive cuisines to life with modern luxury and deep cultural respect.',
    img: 'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1400',
    stats: [
      { num: '200+', label: 'Festival Events' },
      { num: '25+', label: 'Festival Types' },
      { num: '100%', label: 'Authentic Recipes' },
    ],
    reverse: true,
  },
];

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '65vh', minHeight: '450px' }}>
        <img
          src="https://images.pexels.com/photos/36766850/pexels-photo-36766850.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt="Events"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.4) 0%, rgba(9,9,9,0.9) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>EXPERIENCES WE CREATE</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Extraordinary
                <br />
                <span className="text-gold italic">Events</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events */}
      {events.map((event, i) => (
        <section key={event.type} className="section-padding bg-black">
          <div className="container-luxury">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${event.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <FadeSection delay={0.1} className={event.reverse ? 'lg:col-start-2' : ''}>
                <div className="luxury-img-wrap" style={{ height: '580px' }}>
                  <img src={event.img} alt={event.type} className="w-full h-full object-cover" />
                  <div className="img-overlay" />
                  <div className="absolute bottom-8 left-8">
                    <div className="font-playfair text-ivory text-2xl italic">{event.type}</div>
                  </div>
                </div>
              </FadeSection>

              {/* Content */}
              <FadeSection delay={0.2} className={event.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div>
                  <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '4px' }}>
                    {event.tagline.toUpperCase()}
                  </div>
                  <div className="gold-divider mb-8" />
                  <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.15 }}>
                    {event.type}
                  </h2>
                  <p className="font-inter text-stone mb-12" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                    {event.desc}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-12 py-8" style={{ borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)' }}>
                    {event.stats.map((stat, j) => (
                      <div key={j} className="text-center">
                        <div className="font-cormorant text-gold mb-1" style={{ fontSize: '36px', fontWeight: 300, lineHeight: 1 }}>
                          {stat.num}
                        </div>
                        <div className="font-inter text-stone" style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => openModal(event.type)} className="btn-luxury">
                    Plan This Event
                  </button>
                </div>
              </FadeSection>
            </div>

            {i < events.length - 1 && (
              <div className="gold-divider-full mt-20" />
            )}
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="section-padding" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-20">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>HOW WE WORK</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', fontWeight: 400 }}>
                Our <span className="text-gold italic">Process</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Initial Consultation', desc: 'A deep conversation about your vision, preferences, and the story you want your event to tell.' },
              { num: '02', title: 'Bespoke Design', desc: 'Our culinary team designs a completely custom menu and counter setup tailored to your celebration.' },
              { num: '03', title: 'Menu Tasting', desc: 'A private tasting session where you experience and refine your menu before the big day.' },
              { num: '04', title: 'Flawless Execution', desc: 'Our experienced team arrives hours early, sets up meticulously, and delivers an experience beyond expectations.' },
            ].map((step, i) => (
              <FadeSection key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-cormorant text-gold mb-4" style={{ fontSize: '64px', fontWeight: 300, lineHeight: 1, opacity: 0.4 }}>
                    {step.num}
                  </div>
                  <div className="gold-divider mx-auto mb-6" style={{ width: '30px' }} />
                  <h3 className="font-playfair text-ivory text-lg mb-3">{step.title}</h3>
                  <p className="font-inter text-stone text-xs" style={{ lineHeight: 2 }}>{step.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-center">
        <div className="container-luxury">
          <FadeSection>
            <div className="gold-divider mx-auto mb-10" />
            <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400 }}>
              Your Perfect Event
              <br />
              <span className="text-gold italic">Awaits</span>
            </h2>
            <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '460px', lineHeight: 2, fontSize: '16px' }}>
              Whatever the occasion, we have the expertise, creativity, and passion to make it extraordinary.
            </p>
            <button onClick={() => openModal('General Event Inquiry')} className="btn-luxury-filled">Begin Planning</button>
          </FadeSection>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />
    </div>
  );
}
