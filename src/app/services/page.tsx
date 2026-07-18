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

const services = [
  {
    id: '01',
    title: 'Royal Wedding Catering',
    subtitle: 'The Ultimate Celebration',
    desc: 'Every wedding is a once-in-a-lifetime masterpiece. We craft multi-day culinary journeys with multiple live counters, bespoke menus, and service that rivals the finest five-star hotels. From intimate ceremonies to grand celebrations of 5000 guests.',
    img: 'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
    features: ['Custom menu design', 'Multi-cuisine live stations', 'Premium table styling', 'White-glove service'],
  },
  {
    id: '02',
    title: 'Corporate Galas',
    subtitle: 'Business at its Finest',
    desc: 'We understand that a corporate event is a reflection of your brand\'s values. Our corporate catering transforms business gatherings into prestigious occasions that leave lasting impressions on clients, partners, and employees alike.',
    img: 'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
    features: ['Brand-aligned menus', 'Dietary accommodations', 'Professional service crew', 'AV coordination'],
    reverse: true,
  },
  {
    id: '03',
    title: 'Destination Weddings',
    subtitle: 'Love Without Boundaries',
    desc: 'We travel where love takes us. From the beaches of Goa to the palaces of Rajasthan, from the hills of Himachal to international destinations, our team executes flawless culinary experiences regardless of location.',
    img: 'https://images.pexels.com/photos/34342527/pexels-photo-34342527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
    features: ['Pan-India & international', 'Location scouting', 'Local ingredient sourcing', 'Full logistics management'],
  },
  {
    id: '04',
    title: 'Luxury Private Dining',
    subtitle: 'Intimacy Perfected',
    desc: 'For the most intimate celebrations, our private dining experiences bring the finest restaurant quality directly to your home, villa, or private venue. A personal chef, bespoke menu, and impeccable service await.',
    img: 'https://images.pexels.com/photos/33033776/pexels-photo-33033776.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
    features: ['Private chef experience', 'Custom tasting menus', 'Wine & mocktail pairing', 'Intimate settings'],
    reverse: true,
  },
  {
    id: '05',
    title: 'Royal Receptions',
    subtitle: 'Grandeur Elevated',
    desc: 'Receptions demand nothing short of spectacular. Our royal reception packages include elaborate multi-counter setups, themed culinary stations, premium décor coordination, and a service team that ensures every guest feels like royalty.',
    img: 'https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
    features: ['Multi-station layouts', 'Royal-grade presentation', 'Themed culinary design', 'Guest management'],
  },
  {
    id: '06',
    title: 'Birthday Celebrations',
    subtitle: 'Milestone Moments',
    desc: 'Whether it\'s a milestone birthday or an intimate gathering, we create celebrations filled with extraordinary food, beautiful presentation, and the kind of attention that makes every guest feel special.',
    img: 'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1200',
    features: ['Customized themes', 'Premium cake designs', 'Live dessert stations', 'Personalized menus'],
    reverse: true,
  },
];

export default function Services() {
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
          src="https://images.pexels.com/photos/36766850/pexels-photo-36766850.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Our Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.5) 0%, rgba(9,9,9,0.85) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>WHAT WE DO</div>
              <h1
                className="font-playfair text-ivory"
                style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}
              >
                Signature
                <br />
                <span className="text-gold italic">Experiences</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="gold-divider mx-auto mb-8" />
              <p
                className="font-cormorant text-ivory"
                style={{ fontSize: 'clamp(20px, 3vw, 30px)', lineHeight: 1.8, fontStyle: 'italic' }}
              >
                "From intimate private dinners to grand royal celebrations, each service we offer is a category unto itself — defined by precision, passion, and an absolute refusal to compromise on excellence."
              </p>
              <div className="gold-divider mx-auto mt-8" />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section key={service.id} className="section-padding bg-black">
          <div className="container-luxury">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${service.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <FadeSection delay={0.1} className={service.reverse ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <div className="luxury-img-wrap" style={{ height: '580px' }}>
                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                  </div>
                  <div
                    className="absolute -bottom-4 font-cormorant text-gold opacity-10 pointer-events-none select-none"
                    style={{ fontSize: '180px', lineHeight: 1, right: service.reverse ? 'auto' : '-20px', left: service.reverse ? '-20px' : 'auto' }}
                  >
                    {service.id}
                  </div>
                </div>
              </FadeSection>

              {/* Content */}
              <FadeSection delay={0.2} className={service.reverse ? 'lg:col-start-1 lg:row-start-1' : ''}>
                <div>
                  <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '4px' }}>
                    {service.subtitle.toUpperCase()}
                  </div>
                  <div className="gold-divider mb-8" />
                  <h2
                    className="font-playfair text-ivory mb-6"
                    style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.15 }}
                  >
                    {service.title}
                  </h2>
                  <p className="font-inter text-stone mb-10" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                    {service.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-10">
                    {service.features.map((feat, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="text-gold mt-1" style={{ fontSize: '8px' }}>✦</span>
                        <span className="font-inter text-stone text-xs" style={{ lineHeight: 1.6 }}>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={() => openModal(service.title)} className="btn-luxury">
                    Enquire Now
                  </button>
                </div>
              </FadeSection>
            </div>
          </div>

          {i < services.length - 1 && (
            <div className="container-luxury mt-20">
              <div className="gold-divider-full" />
            </div>
          )}
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center mb-16">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>MORE EXPERIENCES</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400 }}>
                Every Occasion, <span className="text-gold italic">Perfected</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: 'Outdoor Catering', desc: 'Garden parties, farmhouse events, and outdoor celebrations with premium setup and weather-proof execution.', icon: '◈' },
              { title: 'Luxury Buffets', desc: 'Grand multi-cuisine buffet spreads that become the centrepiece of your event, featuring 50+ dishes across global cuisines.', icon: '❋' },
              { title: 'Theme Catering', desc: 'From Mughal-era feasts to contemporary art-themed dining, we bring your most imaginative concepts to life.', icon: '✦' },
              { title: 'VIP Hospitality', desc: 'Exclusive VIP sections with personal service, premium menus, and the finest hospitality standards for your most important guests.', icon: '◉' },
              { title: 'Festival Events', desc: 'Traditional festivals celebrated with authentic regional cuisines, creating immersive cultural experiences.', icon: '❖' },
              { title: 'Event Planning', desc: 'Beyond catering — comprehensive event management including décor, florals, audio-visual, and vendor coordination.', icon: '◇' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 0.08}>
                <div
                  className="p-10 border h-full"
                  style={{ borderColor: 'rgba(201,169,110,0.1)', minHeight: '200px' }}
                >
                  <div className="text-gold text-xl mb-4">{item.icon}</div>
                  <h3 className="font-playfair text-ivory text-xl mb-3">{item.title}</h3>
                  <p className="font-inter text-stone text-xs" style={{ lineHeight: 2 }}>{item.desc}</p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center">
              <div className="gold-divider mx-auto mb-10" />
              <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400 }}>
                Tell Us Your <span className="text-gold italic">Vision</span>
              </h2>
              <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '480px', lineHeight: 2, fontSize: '16px' }}>
                Every extraordinary event begins with a single conversation. Let us transform your vision into an unforgettable reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button onClick={() => openModal('General Service Inquiry')} className="btn-luxury-filled">Book Your Event</button>
                <Link href="/contact" className="btn-luxury">Contact Us</Link>
              </div>
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
