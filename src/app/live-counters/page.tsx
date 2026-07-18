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

const counters = [
  {
    id: '01',
    title: 'Italian & Mexican Live',
    subtitle: 'Pasta & Fiesta',
    desc: 'From hand-rolled pasta and wood-fired pizzas to vibrant street-style tacos and enchiladas. A dual-continent celebration of fresh ingredients.',
    img: 'https://images.pexels.com/photos/1279326/pexels-photo-1279326.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Hand-rolled Pasta', 'Ravioli & Pizza', 'Live Taco Bar', 'Quesadillas & Burrito Bowls'],
    highlight: 'Our most popular international fusion counter.',
  },
  {
    id: '02',
    title: 'Chinese & Mongolian',
    subtitle: 'Eastern Fire',
    desc: 'The rhythmic toss of the wok and the visual spectacle of flames dancing. Experience high-heat wok cooking with Manchurian, Hakka noodles, and Mongolian Stir-Fry.',
    img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Wok Tossed Noodles', 'Manchurian Live', 'Mongolian Stir-Fry', 'Dim Sum'],
    highlight: 'High-heat wok cooking with theatrical flair and bold flavours.',
  },
  {
    id: '03',
    title: 'Japanese & Thai',
    subtitle: 'Zen Precision',
    desc: 'Serene, precise, and deeply beautiful. Watch our chefs prepare vegetarian avocado sushi, crisp tempura, and aromatic Thai curries with the calm precision of a Zen master.',
    img: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Avocado Sushi Rolls', 'Tempura Station', 'Thai Red & Green Curry', 'Pad Thai'],
    highlight: 'An experience of exquisite restraint, perfection, and aromatics.',
  },
  {
    id: '04',
    title: 'Lebanese & Barbeque',
    subtitle: 'Middle Eastern Roasts',
    desc: 'Aromatic Falafel, fresh Hummus, and Pita pockets met with the smoky brilliance of African and Afghani vegetarian barbeque.',
    img: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Falafel & Hummus', 'Pita Pockets', 'Lahori Paneer Tikka', 'Afghani Barbeque'],
    highlight: 'Smoky, charred, and deeply flavourful Middle Eastern classics.',
  },
  {
    id: '05',
    title: 'Panjabi Dhaba',
    subtitle: 'Hearty Classics',
    desc: 'The soul of Punjab brought to life. Sarson da Saag, Makki di Roti, and fresh buttermilk served with the rustic charm of an authentic Dhaba.',
    img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Sarson da Saag', 'Makki di Roti', 'Gud & Makhan', 'Butter Milk'],
    highlight: 'A true rustic Punjabi experience.',
  },
  {
    id: '06',
    title: 'Rajasthani & Kathiyawadi',
    subtitle: 'Royal Desert Flavours',
    desc: 'The regal traditions of Rajputana and Kathiyawad. A culinary legacy featuring Dal Baati Churma, Bajre Ka Rotla, and Kathiyawadi Khichdi.',
    img: 'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Dal Baati Churma', 'Gatta nu Shaak', 'Bajre Ka Rotla', 'Kathiyawadi Khichdi'],
    highlight: 'Heritage Indian cuisine elevated for luxury dining.',
  },
  {
    id: '07',
    title: 'South Indian & Chaat',
    subtitle: 'Coastal & Street',
    desc: 'From the delicate crispness of Jodhpuri Dosa and Medu Vada to the elevated nostalgia of premium Chaat (Pani Puri, Aloo Tikki).',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Jodhpuri Dosa', 'Medu Vada & Rasam', 'Pani Puri', 'Aloo Tikki Chaat'],
    highlight: 'Always the most crowded counters at every event.',
  },
  {
    id: '08',
    title: 'Luxury Dessert & Pan',
    subtitle: 'The Perfect Finale',
    desc: 'A breathtaking visual installation featuring live ice cream, artisan confections, premium Indian sweets, and an exquisite Pan station.',
    img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Live Ice Cream', 'Hot Brownie', 'Meetha Pan', 'Special Banarasi Pan'],
    highlight: 'The grand finale that every guest photographs and remembers.',
  },
];

export default function LiveCounters() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        <img
          src="https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt="Live Counters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(9,9,9,0.95) 30%, rgba(9,9,9,0.4) 100%)' }} />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-xl"
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>CULINARY THEATRE</div>
              <h1 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Live
                <br />
                <span className="text-gold italic">Counters</span>
              </h1>
              <p className="font-inter text-stone" style={{ lineHeight: 2, fontSize: '16px', maxWidth: '380px' }}>
                Where dining becomes performance. Each live counter is a world unto itself — a stage where our culinary artists create magic before your eyes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <FadeSection>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-gold" style={{ fontSize: '72px', fontWeight: 300, lineHeight: 1 }}>10+</div>
                <div className="gold-divider mt-4 mb-3" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>LIVE COUNTER TYPES</div>
              </div>
            </FadeSection>
            <FadeSection delay={0.1}>
              <div className="text-center">
                <div className="font-cormorant text-gold" style={{ fontSize: '72px', fontWeight: 300, lineHeight: 1 }}>50+</div>
                <div className="gold-divider mx-auto mt-4 mb-3" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>STATION SETUPS AVAILABLE</div>
              </div>
            </FadeSection>
            <FadeSection delay={0.2}>
              <div className="text-center lg:text-right">
                <div className="font-cormorant text-gold" style={{ fontSize: '72px', fontWeight: 300, lineHeight: 1 }}>100%</div>
                <div className="gold-divider mt-4 mb-3 ml-auto" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>LIVE PREPARED FRESH</div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Counters */}
      {counters.map((counter, i) => (
        <section key={counter.id} className="section-padding bg-black">
          <div className="container-luxury">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <FadeSection delay={0.1}>
                  <div className="relative">
                    <div className="luxury-img-wrap" style={{ height: '520px' }}>
                      <img src={counter.img} alt={counter.title} className="w-full h-full object-cover" />
                    </div>
                    <div
                      className="absolute top-6 right-6 font-cormorant text-gold opacity-20 select-none pointer-events-none"
                      style={{ fontSize: '120px', lineHeight: 1 }}
                    >
                      {counter.id}
                    </div>
                    <div
                      className="absolute bottom-8 left-8 right-8 p-6"
                      style={{ background: 'rgba(9,9,9,0.85)', borderTop: '1px solid rgba(201,169,110,0.2)' }}
                    >
                      <p className="font-cormorant text-ivory" style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
                        "{counter.highlight}"
                      </p>
                    </div>
                  </div>
                </FadeSection>
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <FadeSection delay={0.2}>
                  <div>
                    <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '4px' }}>
                      COUNTER {counter.id}
                    </div>
                    <div className="gold-divider mb-8" />
                    <h2 className="font-playfair text-ivory mb-2" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                      {counter.title}
                    </h2>
                    <p className="font-cormorant text-gold mb-6" style={{ fontSize: '18px', fontStyle: 'italic' }}>{counter.subtitle}</p>
                    <p className="font-inter text-stone mb-10" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                      {counter.desc}
                    </p>

                    <div className="mb-8">
                      <div className="font-inter text-xxs tracking-widest mb-4" style={{ letterSpacing: '3px', color: '#c9a96e', fontSize: '10px' }}>
                        OFFERINGS INCLUDE
                      </div>
                      <div className="space-y-2">
                        {counter.offerings.map((offering, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-6 h-px" style={{ background: 'rgba(201,169,110,0.5)' }} />
                            <span className="font-inter text-stone text-xs">{offering}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => openModal(counter.title)} className="btn-luxury">
                      Add to My Event
                    </button>
                  </div>
                </FadeSection>
              </div>
            </div>

            {i < counters.length - 1 && (
              <div className="gold-divider-full mt-20" />
            )}
          </div>
        </section>
      ))}

      {/* Customization CTA */}
      <section className="relative" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="https://images.pexels.com/photos/36430149/pexels-photo-36430149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Custom Counters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(9,9,9,0.8)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeSection>
            <div className="text-center px-6">
              <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>
                BESPOKE SOLUTIONS
              </div>
              <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400 }}>
                Design Your
                <br />
                <span className="text-gold italic">Perfect Counter Setup</span>
              </h2>
              <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '480px', lineHeight: 2, fontSize: '16px' }}>
                Mix and match counters, create custom stations, or design something entirely new. Our team brings any culinary vision to life.
              </p>
              <button onClick={() => openModal('Custom Counter Setup')} className="btn-luxury-filled">Plan My Event</button>
            </div>
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
