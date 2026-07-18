"use client";

import { motion } from 'framer-motion';

const items = [
  'Royal Weddings',
  '✦',
  'Destination Events',
  '✦',
  'Corporate Galas',
  '✦',
  'Private Dining',
  '✦',
  'Live Counter Ateliers',
  '✦',
  'Luxury Buffets',
  '✦',
  'Chef\'s Table Experience',
  '✦',
  'Grand Receptions',
  '✦',
];

export default function MarqueeBanner() {
  return (
    <div
      className="overflow-hidden py-5"
      style={{ borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)', background: '#0a0a0a' }}
    >
      <div className="flex">
        {[0, 1].map((idx) => (
          <motion.div
            key={idx}
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="flex flex-shrink-0 gap-8 items-center"
          >
            {items.map((item, i) => (
              <span
                key={i}
                className={`font-inter whitespace-nowrap ${item === '✦' ? 'text-gold' : 'text-stone'}`}
                style={{
                  fontSize: item === '✦' ? '10px' : '10px',
                  letterSpacing: item === '✦' ? '0' : '3px',
                  textTransform: item === '✦' ? 'none' : 'uppercase',
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
