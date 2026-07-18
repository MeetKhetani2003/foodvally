"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Menu', path: '/menu' },
  { label: 'Live Counters', path: '/live-counters' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'nav-blur border-b border-gold-muted' : ''
        }`}
        style={{
          background: scrolled ? 'rgba(9,9,9,0.92)' : 'transparent',
          borderBottomColor: scrolled ? 'rgba(201,169,110,0.15)' : 'transparent',
        }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col items-start">
              <img src="/logo-foodvally.png" alt="FOOD VALLEY" style={{ height: '76px', objectFit: 'contain' }} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 7).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="nav-link"
                  style={{
                    color: pathname === link.path ? '#c9a96e' : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/contact" className="nav-link">Contact</Link>
              <Link href="/book-event" className="btn-luxury" style={{ padding: '10px 28px', fontSize: '10px' }}>
                Book Event
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-px bg-gold transition-all" />
              <span className="block w-4 h-px bg-gold transition-all" />
              <span className="block w-6 h-px bg-gold transition-all" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mobile-menu"
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <span className="text-gold text-2xl font-light">×</span>
            </button>

            <div className="text-center mb-12">
              <img src="/logo-foodvally.png" alt="FOOD VALLEY" style={{ height: '96px', objectFit: 'contain', margin: '0 auto' }} />
            </div>

            <div className="gold-divider mx-auto mb-10" />

            <div className="flex flex-col items-center gap-7">
              {[...navLinks, { label: 'Book Event', path: '/book-event' }].map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.path}
                    className="font-cormorant text-2xl text-ivory hover:text-gold transition-colors duration-300"
                    style={{ fontStyle: 'italic', letterSpacing: '1px' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-14 text-center">
              <p className="text-stone text-xxs tracking-widest">+91 98765 43210</p>
              <p className="text-stone text-xxs tracking-widest mt-2">events@foodvalley.in</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
