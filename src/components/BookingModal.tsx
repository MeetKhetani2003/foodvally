"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThreeStepBookingForm from './ThreeStepBookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function BookingModal({ isOpen, onClose, serviceName = '' }: BookingModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[10000] p-4 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-[#090909] border w-full max-w-3xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl relative"
              style={{ borderColor: 'rgba(201,169,110,0.2)' }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-stone hover:text-gold transition-colors z-10"
                aria-label="Close"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="p-8 sm:p-12">
                <div className="text-center mb-10">
                  <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>
                    INQUIRY
                  </div>
                  <h2 className="font-playfair text-ivory text-3xl sm:text-4xl mb-6">
                    Book <span className="text-gold italic">Service</span>
                  </h2>
                  <div className="gold-divider mx-auto" />
                </div>

                <ThreeStepBookingForm 
                  defaultService={serviceName} 
                  onSuccess={onClose}
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
