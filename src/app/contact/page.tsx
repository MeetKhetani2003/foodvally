"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThreeStepBookingForm from '../../components/ThreeStepBookingForm';

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

export default function Contact() {

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="https://images.pexels.com/photos/34672241/pexels-photo-34672241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.5) 0%, rgba(9,9,9,0.88) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>GET IN TOUCH</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Let's Create
                <br />
                <span className="text-gold italic">Together</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Info */}
            <FadeSection>
              <div>
                <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>CONTACT INFORMATION</div>
                <div className="gold-divider mb-10" />
                <p className="font-inter text-stone mb-12" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                  Every extraordinary event begins with a single conversation. Share your vision with us — our dedicated team will reach out within 24 hours to begin crafting your unforgettable experience.
                </p>

                <div className="space-y-8 mb-12">
                  {[
                    { label: 'PHONE', value: '+91 98765 43210', sub: 'Available 9 AM – 9 PM IST' },
                    { label: 'WHATSAPP', value: '+91 98765 43210', sub: 'Available 24/7 for urgent inquiries' },
                    { label: 'EMAIL', value: 'events@foodvalley.in', sub: 'Response within 24 hours' },
                    { label: 'ADDRESS', value: 'Food Valley Culinary House', sub: 'Prahlad Nagar, Ahmedabad, Gujarat 380015, India' },
                  ].map((info) => (
                    <div key={info.label} className="flex gap-6 items-start">
                      <div className="text-gold pt-1" style={{ fontSize: '8px' }}>✦</div>
                      <div>
                        <div className="font-inter text-xxs tracking-widest mb-1 text-gold" style={{ letterSpacing: '3px' }}>{info.label}</div>
                        <div className="font-inter text-ivory text-sm mb-1">{info.value}</div>
                        <div className="font-inter text-stone text-xxs" style={{ letterSpacing: '1px' }}>{info.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="p-8" style={{ border: '1px solid rgba(201,169,110,0.15)' }}>
                  <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '3px' }}>BUSINESS HOURS</div>
                  {[
                    { day: 'Monday — Friday', time: '9:00 AM – 8:00 PM' },
                    { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
                    { day: 'Sunday', time: 'By Appointment Only' },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-3" style={{ borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
                      <span className="font-inter text-stone text-xs">{h.day}</span>
                      <span className="font-inter text-ivory text-xs">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeSection>

            {/* Form */}
            <FadeSection delay={0.2} className="lg:col-span-2 mt-8 lg:mt-0">
              <div className="bg-[#111] p-8 sm:p-12 border" style={{ borderColor: 'rgba(201,169,110,0.15)' }}>
                <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>SEND AN INQUIRY</div>
                <div className="gold-divider mb-10" />

                <ThreeStepBookingForm />
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-black">
        <div className="container-luxury pb-20">
          <FadeSection>
            <div
              className="w-full flex items-center justify-center"
              style={{
                height: '400px',
                background: '#151515',
                border: '1px solid rgba(201,169,110,0.1)',
              }}
            >
              <div className="text-center">
                <div className="text-gold text-3xl mb-4">◉</div>
                <div className="font-playfair text-ivory text-xl mb-2">Food Valley Culinary House</div>
                <div className="font-inter text-stone text-xs tracking-widest" style={{ letterSpacing: '2px' }}>
                  PRAHLAD NAGAR, AHMEDABAD, GUJARAT
                </div>
                <div className="mt-6">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury"
                    style={{ fontSize: '10px', padding: '12px 28px' }}
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-24" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="text-center">
              <div className="gold-divider mx-auto mb-8" />
              <h2 className="font-playfair text-ivory mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                Prefer to Chat? <span className="text-gold italic">We're Available</span>
              </h2>
              <p className="font-inter text-stone mb-10 text-xs mx-auto" style={{ maxWidth: '400px', lineHeight: 2 }}>
                For quick inquiries, reach us directly on WhatsApp. Our team responds promptly to all messages.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-filled inline-flex items-center gap-3"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
