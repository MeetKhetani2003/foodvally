"use client";

import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Animated gold lines */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)',
          }}
        />
      </motion.div>

      {/* Logo */}
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <img src="/logo-foodvally.png" alt="FOOD VALLEY" style={{ height: '80px', objectFit: 'contain', margin: '0 auto' }} />
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3"
        >
          <div
            style={{
              width: '120px',
              height: '1px',
              background: 'rgba(201,169,110,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, delay: 1, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent, #c9a96e, transparent)',
              }}
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="font-inter text-stone mt-6"
          style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}
        >
          Luxury Catering & Event Management
        </motion.p>
      </div>
    </motion.div>
  );
}
