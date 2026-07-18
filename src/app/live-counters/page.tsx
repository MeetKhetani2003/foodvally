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
    title: 'Italian Live Kitchen',
    subtitle: 'Pasta Atelier',
    desc: 'Watch our Italian culinary masters craft hand-rolled pasta, creamy risottos, and wood-fired pizzas with theatrical elegance. The aroma of saffron and truffle fills the air as your guests gather around this centrepiece station.',
    img: 'https://images.pexels.com/photos/36430153/pexels-photo-36430153.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Hand-rolled Pasta', 'Truffle Risotto', 'Wood-fired Pizza', 'Tiramisu Live'],
    highlight: 'Our most popular counter — a true theatre of Italian culinary craft.',
  },
  {
    id: '02',
    title: 'Chinese Wok Station',
    subtitle: 'Eastern Fire',
    desc: 'The rhythmic toss of the wok, the fragrant cloud of garlic and ginger, the visual spectacle of flames dancing — our Chinese station is as much a performance as it is a meal.',
    img: 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Wok Tossed Noodles', 'Manchurian Live', 'Fried Rice', 'Dim Sum'],
    highlight: 'High-heat wok cooking with theatrical flair and bold flavours.',
  },
  {
    id: '03',
    title: 'Japanese Counter',
    subtitle: 'Zen Precision',
    desc: 'Serene, precise, and deeply beautiful — our Japanese counter is a meditation in culinary art. Watch as our chef prepares sushi, sashimi, and tempura with the calm precision of a Zen master.',
    img: 'https://images.pexels.com/photos/33033776/pexels-photo-33033776.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Sushi Rolls', 'Tempura Station', 'Miso Station', 'Matcha Desserts'],
    highlight: 'An experience of exquisite restraint and perfection.',
  },
  {
    id: '04',
    title: 'Mexican Counter',
    subtitle: 'Festive Fiesta',
    desc: 'Vibrant, colourful, and full of life — our Mexican station brings an infectious energy to your event. From street-style tacos to gourmet burritos, every bite is a celebration.',
    img: 'https://images.pexels.com/photos/36430149/pexels-photo-36430149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Live Taco Bar', 'Burrito Bowl', 'Guacamole Fresh', 'Churros Live'],
    highlight: 'The most festive and lively counter at any event.',
  },
  {
    id: '05',
    title: 'Chaat Studio',
    subtitle: 'The Beloved Classic',
    desc: 'Nostalgia elevated. Our Chaat Studio reimagines India\'s most beloved street food traditions with premium ingredients, hygienic preparation, and presentation worthy of a five-star kitchen.',
    img: 'https://images.pexels.com/photos/35985243/pexels-photo-35985243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Pani Puri', 'Sev Puri', 'Bhel Puri', 'Dahi Vada', 'Aloo Tikki'],
    highlight: 'Always the most crowded counter at every event — for good reason.',
  },
  {
    id: '06',
    title: 'Luxury Dessert Bar',
    subtitle: 'Sweet Indulgence',
    desc: 'A breathtaking visual installation that doubles as the grand finale of your culinary journey. Chocolate fountains, live ice cream, artisan confections, and premium Indian sweets create an unforgettable experience.',
    img: 'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Chocolate Fountain', 'Live Ice Cream', 'Gulab Jamun Bar', 'Waffle Station'],
    highlight: 'The grand finale that every guest photographs and remembers.',
  },
  {
    id: '07',
    title: 'Mocktail Experience',
    subtitle: 'Artisan Beverages',
    desc: 'Our mixologists craft spectacular visual and taste experiences with fresh fruits, premium syrups, edible flowers, and artisan techniques that make every glass a work of art.',
    img: 'https://images.pexels.com/photos/17001793/pexels-photo-17001793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Signature Mocktails', 'Fresh Juice Bar', 'Lemonade Station', 'Infused Waters'],
    highlight: 'Visually spectacular and endlessly refreshing.',
  },
  {
    id: '08',
    title: 'Pan Experience',
    subtitle: 'The Perfect Finale',
    desc: 'A traditional Indian ritual reimagined as a luxury experience. Our Pan station offers an artisan selection of meetha and special pans, presented with exquisite care and premium ingredients.',
    img: 'https://images.pexels.com/photos/37116449/pexels-photo-37116449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200',
    offerings: ['Meetha Pan', 'Sada Pan', 'Special Banarasi', 'Dry Fruit Pan'],
    highlight: 'The perfect, elegant finale to any Indian celebration.',
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
