"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const cuisineOptions = [
  'Italian', 'Chinese', 'Japanese', 'Thai', 'Lebanese', 'Mexican',
  'South Indian', 'Punjabi', 'Gujarati', 'Rajasthani', 'Kathiyawadi',
  'Continental', 'Multi-Cuisine',
];

const liveCounterOptions = [
  'Italian Live Kitchen', 'Chinese Wok Station', 'Japanese Counter',
  'Mexican Counter', 'Chaat Studio', 'Luxury Dessert Bar',
  'Mocktail Experience', 'Pizza Oven', 'Pan Experience', 'Pasta Atelier',
];

const eventTypes = [
  'Royal Wedding', 'Wedding Reception', 'Destination Wedding',
  'Corporate Gala', 'Private Dining', 'Birthday Celebration',
  'Outdoor Event', 'Festival Celebration', 'Social Gathering', 'Other',
];

interface ThreeStepBookingFormProps {
  defaultService?: string;
  onSuccess?: () => void;
  className?: string;
}

export default function ThreeStepBookingForm({ defaultService = '', onSuccess, className = '' }: ThreeStepBookingFormProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [selectedCounters, setSelectedCounters] = useState<string[]>([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    venue: '',
    guestCount: '',
    budget: '',
    specialRequests: '',
  });

  useEffect(() => {
    // If a default service is provided (e.g. from a modal), try to prefill or add to special requests
    if (defaultService) {
      if (eventTypes.includes(defaultService)) {
        setForm(prev => ({ ...prev, eventType: defaultService }));
      } else {
        setForm(prev => ({ 
          ...prev, 
          specialRequests: `Interested in: ${defaultService}\n\n` 
        }));
      }
    }
  }, [defaultService]);

  const toggleCuisine = (cuisine: string) => {
    setSelectedCuisines((prev) =>
      prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]
    );
  };

  const toggleCounter = (counter: string) => {
    setSelectedCounters((prev) =>
      prev.includes(counter) ? prev.filter((c) => c !== counter) : [...prev, counter]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const message = `
Event Date: ${form.eventDate}
Venue: ${form.venue || 'Not specified'}
Guests: ${form.guestCount}
Budget: ${form.budget || 'Not specified'}
Cuisines: ${selectedCuisines.join(', ')}
Counters: ${selectedCounters.join(', ')}

Special Requests:
${form.specialRequests}
      `.trim();

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.eventType,
          message: message
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        alert('Failed to submit booking. Please try again.');
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { num: 1, label: 'Event Details' },
    { num: 2, label: 'Cuisine & Counters' },
    { num: 3, label: 'Preferences' },
  ];

  return (
    <div className={`w-full ${className}`}>
      {!submitted ? (
        <>
          {/* Steps indicator */}
          <FadeSection>
            <div className="flex items-center justify-center gap-2 sm:gap-6 mb-12 sm:mb-20">
              {steps.map((s, i) => (
                <div key={s.num} className="flex items-center gap-2 sm:gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: step >= s.num ? '#c9a96e' : 'rgba(201,169,110,0.2)',
                        background: step === s.num ? '#c9a96e' : 'transparent',
                      }}
                    >
                      <span
                        className="font-inter text-xxs"
                        style={{ color: step === s.num ? '#090909' : step > s.num ? '#c9a96e' : '#9e9082' }}
                      >
                        {s.num}
                      </span>
                    </div>
                    <span className="font-inter text-xxs tracking-widest mt-2 hidden sm:block" style={{ color: step >= s.num ? '#c9a96e' : '#9e9082', letterSpacing: '2px' }}>
                      {s.label.toUpperCase()}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-8 sm:w-16 h-px mt-0 sm:mb-5"
                      style={{ background: step > s.num ? '#c9a96e' : 'rgba(201,169,110,0.2)' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </FadeSection>

          <form onSubmit={handleSubmit} className="text-left">
            <AnimatePresence mode="wait">
              {/* STEP 1: Event Details */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-10 sm:mb-12">
                    <div className="font-inter text-gold text-xxs tracking-widest mb-2" style={{ letterSpacing: '4px' }}>STEP 01</div>
                    <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                      Tell us about your <span className="text-gold italic">Event</span>
                    </h2>
                  </div>
                  <div className="gold-divider mb-10 sm:mb-12" />

                  <div className="space-y-8 sm:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                      <div>
                        <label className="label-luxury">Your Name</label>
                        <input type="text" className="input-luxury" placeholder="FULL NAME" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                      </div>
                      <div>
                        <label className="label-luxury">Phone Number</label>
                        <input type="tel" className="input-luxury" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required />
                      </div>
                    </div>
                    <div>
                      <label className="label-luxury">Email Address</label>
                      <input type="email" className="input-luxury" placeholder="YOUR@EMAIL.COM" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                    </div>
                    <div>
                      <label className="label-luxury">Event Type</label>
                      <select className="select-luxury" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} required>
                        <option value="">SELECT EVENT TYPE</option>
                        {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                      <div>
                        <label className="label-luxury">Event Date</label>
                        <input type="date" className="input-luxury" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} required style={{ colorScheme: 'dark' }} />
                      </div>
                      <div>
                        <label className="label-luxury">Expected Guests</label>
                        <select className="select-luxury" value={form.guestCount} onChange={(e) => setForm({ ...form, guestCount: e.target.value })} required>
                          <option value="">SELECT GUEST COUNT</option>
                          <option>10 – 50 Guests</option>
                          <option>51 – 100 Guests</option>
                          <option>101 – 250 Guests</option>
                          <option>251 – 500 Guests</option>
                          <option>501 – 1000 Guests</option>
                          <option>1001 – 2500 Guests</option>
                          <option>2500+ Guests</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="label-luxury">Venue / Location</label>
                      <input type="text" className="input-luxury" placeholder="VENUE NAME OR CITY" value={form.venue} onChange={(e) => setForm({ ...form, venue: e.target.value })} />
                    </div>
                  </div>

                  <div className="mt-14 flex justify-end">
                    <button type="button" onClick={() => setStep(2)} className="btn-luxury-filled">
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Cuisines & Counters */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-10 sm:mb-12">
                    <div className="font-inter text-gold text-xxs tracking-widest mb-2" style={{ letterSpacing: '4px' }}>STEP 02</div>
                    <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                      Choose your <span className="text-gold italic">Cuisines</span>
                    </h2>
                  </div>
                  <div className="gold-divider mb-10 sm:mb-12" />

                  <div className="mb-10 sm:mb-12">
                    <div className="font-inter text-xxs tracking-widest mb-6 text-gold" style={{ letterSpacing: '3px' }}>
                      CUISINE SELECTION (select all that apply)
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {cuisineOptions.map((cuisine) => (
                        <button
                          key={cuisine}
                          type="button"
                          onClick={() => toggleCuisine(cuisine)}
                          className="cuisine-tab"
                          style={{
                            borderColor: selectedCuisines.includes(cuisine) ? '#c9a96e' : 'transparent',
                            color: selectedCuisines.includes(cuisine) ? '#c9a96e' : '#b8ad9e',
                            background: selectedCuisines.includes(cuisine) ? 'rgba(201,169,110,0.05)' : 'transparent',
                          }}
                        >
                          {selectedCuisines.includes(cuisine) && '✦ '}{cuisine}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="gold-divider-full mb-10 sm:mb-12" />

                  <div className="mb-10 sm:mb-12">
                    <div className="font-inter text-xxs tracking-widest mb-6 text-gold" style={{ letterSpacing: '3px' }}>
                      LIVE COUNTER SELECTION (optional)
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {liveCounterOptions.map((counter) => (
                        <button
                          key={counter}
                          type="button"
                          onClick={() => toggleCounter(counter)}
                          className="cuisine-tab"
                          style={{
                            borderColor: selectedCounters.includes(counter) ? '#c9a96e' : 'transparent',
                            color: selectedCounters.includes(counter) ? '#c9a96e' : '#b8ad9e',
                            background: selectedCounters.includes(counter) ? 'rgba(201,169,110,0.05)' : 'transparent',
                          }}
                        >
                          {selectedCounters.includes(counter) && '✦ '}{counter}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-14 flex justify-between">
                    <button type="button" onClick={() => setStep(1)} className="btn-luxury">
                      Back
                    </button>
                    <button type="button" onClick={() => setStep(3)} className="btn-luxury-filled">
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Preferences */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-10 sm:mb-12">
                    <div className="font-inter text-gold text-xxs tracking-widest mb-2" style={{ letterSpacing: '4px' }}>STEP 03</div>
                    <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                      Final <span className="text-gold italic">Preferences</span>
                    </h2>
                  </div>
                  <div className="gold-divider mb-10 sm:mb-12" />

                  <div className="space-y-10">
                    <div>
                      <label className="label-luxury">Approximate Budget</label>
                      <select className="select-luxury" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
                        <option value="">SELECT BUDGET RANGE</option>
                        <option>₹50,000 – ₹1,00,000</option>
                        <option>₹1,00,000 – ₹2,50,000</option>
                        <option>₹2,50,000 – ₹5,00,000</option>
                        <option>₹5,00,000 – ₹10,00,000</option>
                        <option>₹10,00,000 – ₹25,00,000</option>
                        <option>₹25,00,000 – ₹50,00,000</option>
                        <option>₹50,00,000+</option>
                        <option>Custom / Let us propose</option>
                      </select>
                    </div>

                    <div>
                      <label className="label-luxury">Special Requests & Vision</label>
                      <textarea
                        className="input-luxury"
                        placeholder="SHARE YOUR VISION, DIETARY REQUIREMENTS, THEME, OR ANY SPECIAL REQUESTS..."
                        rows={5}
                        value={form.specialRequests}
                        onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                        style={{ resize: 'none' }}
                      />
                    </div>

                    {/* Summary */}
                    {(selectedCuisines.length > 0 || selectedCounters.length > 0) && (
                      <div className="p-8" style={{ background: 'rgba(201,169,110,0.04)', border: '1px solid rgba(201,169,110,0.12)' }}>
                        <div className="font-inter text-xxs tracking-widest text-gold mb-4" style={{ letterSpacing: '3px' }}>YOUR SELECTION</div>
                        {selectedCuisines.length > 0 && (
                          <div className="mb-3">
                            <span className="font-inter text-xxs text-stone">Cuisines: </span>
                            <span className="font-inter text-xxs text-ivory">{selectedCuisines.join(' · ')}</span>
                          </div>
                        )}
                        {selectedCounters.length > 0 && (
                          <div>
                            <span className="font-inter text-xxs text-stone">Live Counters: </span>
                            <span className="font-inter text-xxs text-ivory">{selectedCounters.join(' · ')}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-14 flex justify-between">
                    <button type="button" onClick={() => setStep(2)} className="btn-luxury">Back</button>
                    <button type="submit" disabled={isSubmitting} className="btn-luxury-filled" style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                      {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </>
      ) : (
        /* Success State */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-gold mb-8" style={{ fontSize: '48px' }}>✦</div>
            <div className="gold-divider mx-auto mb-10" />
            <h2 className="font-playfair text-ivory mb-4" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400 }}>
              Your Request Has Been
              <br />
              <span className="text-gold italic">Received</span>
            </h2>
            <p className="font-cormorant text-stone mb-10 mx-auto" style={{ maxWidth: '480px', fontSize: '20px', fontStyle: 'italic', lineHeight: 1.8 }}>
              "Every extraordinary event begins with a single moment of vision. You have taken that step."
            </p>
            <div className="gold-divider mx-auto mb-10" />
            <p className="font-inter text-stone text-xs mb-2" style={{ lineHeight: 2 }}>
              Our dedicated event team will reach out within 24 hours.
            </p>
            <p className="font-inter text-stone text-xs" style={{ lineHeight: 2 }}>
              For urgent inquiries: <span className="text-gold">+91 98765 43210</span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
