"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const footerLinks = {
  Experiences: [
    { label: 'Wedding Catering', path: '/services' },
    { label: 'Corporate Events', path: '/services' },
    { label: 'Destination Weddings', path: '/services' },
    { label: 'Private Dining', path: '/services' },
    { label: 'Royal Receptions', path: '/services' },
  ],
  Discover: [
    { label: 'About Us', path: '/about' },
    { label: 'Menu Experience', path: '/menu' },
    { label: 'Live Counters', path: '/live-counters' },
    { label: 'Event Gallery', path: '/gallery' },
    { label: 'Stories', path: '/blog' },
  ],
  Connect: [
    { label: 'Book an Event', path: '/book-event' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact Us', path: '/contact' },
    { label: 'WhatsApp', path: '#' },
    { label: 'Instagram', path: '#' },
  ],
};

export default function Footer() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <footer ref={ref} className="bg-black border-t pt-20 " style={{ borderColor: 'rgba(201,169,110,0.1)' }}>
      {/* Top section */}
      <div className="container-luxury pt-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Brand */}
          <div className="lg:col-span-2 py-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img src="/logo-foodvally.png" alt="FOOD VALLEY" style={{ height: '64px', objectFit: 'contain', marginBottom: '24px' }} />
              <div className="gold-divider mb-8" />
              <p className="text-stone font-inter text-xs leading-relaxed mb-8" style={{ maxWidth: '300px', lineHeight: '2' }}>
                India's most prestigious luxury catering and event management company, crafting unforgettable culinary experiences since 2005. Every event is a masterpiece.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xxs">✦</span>
                  <span className="text-stone text-xxs tracking-widest">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xxs">✦</span>
                  <span className="text-stone text-xxs tracking-widest">events@foodvalley.in</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-gold text-xxs">✦</span>
                  <span className="text-stone text-xxs tracking-widest">Ahmedabad, Gujarat, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.2 }}
            >
              <h4
                className="font-inter text-xxs tracking-widest uppercase text-gold mb-6"
                style={{ letterSpacing: '3px' }}
              >
                {category}
              </h4>
              <div className="space-y-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.path}
                    className="block font-inter text-xs text-stone hover:text-gold transition-colors duration-300"
                    style={{ letterSpacing: '0.5px' }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div
        className="border-t py-10"
        style={{ borderColor: 'rgba(201,169,110,0.1)' }}
      >
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone text-xxs tracking-widest" style={{ letterSpacing: '1.5px' }}>
            © 2025 FOOD VALLEY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <span className="text-stone text-xxs tracking-widest">PRIVACY POLICY</span>
            <span className="text-gold text-xxs">✦</span>
            <span className="text-stone text-xxs tracking-widest">TERMS OF SERVICE</span>
            <span className="text-gold text-xxs">✦</span>
            <span className="text-stone text-xxs tracking-widest">CRAFTED WITH EXCELLENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
