"use client";

import { motion } from 'framer-motion';
import ThreeStepBookingForm from '../../components/ThreeStepBookingForm';

export default function BookEvent() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '50vh', minHeight: '360px' }}>
        <img
          src="https://images.pexels.com/photos/17001849/pexels-photo-17001849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1600"
          alt="Book an Event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.5) 0%, rgba(9,9,9,0.92) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>BEGIN YOUR JOURNEY</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(36px, 6vw, 80px)', fontWeight: 400, lineHeight: 1 }}>
                Book Your
                <br />
                <span className="text-gold italic">Experience</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <div className="max-w-3xl mx-auto">

            <ThreeStepBookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
