"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const allImages = [
  { id: 1, src: 'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900', alt: 'Luxury Event Hall', category: 'Venues', span: 'tall' },
  { id: 2, src: 'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900', alt: 'Grand Reception', category: 'Weddings', span: 'wide' },
  { id: 3, src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&h=700&w=600&q=80', alt: 'Indian Thali', category: 'Cuisine', span: 'normal' },
  { id: 4, src: 'https://images.pexels.com/photos/17001844/pexels-photo-17001844.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900', alt: 'Wedding Hall', category: 'Venues', span: 'tall' },
  { id: 5, src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&h=700&w=900&q=80', alt: 'Vegetarian Buffet', category: 'Buffets', span: 'normal' },
  { id: 6, src: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=700', alt: 'Chef Plating', category: 'Chefs', span: 'normal' },
  { id: 7, src: 'https://images.pexels.com/photos/34342527/pexels-photo-34342527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900', alt: 'Beachfront Wedding', category: 'Destination', span: 'wide' },
  { id: 8, src: 'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=800', alt: 'Dessert Table', category: 'Desserts', span: 'normal' },
  { id: 9, src: 'https://images.pexels.com/photos/16935916/pexels-photo-16935916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900', alt: 'Table Setting', category: 'Styling', span: 'tall' },
  { id: 10, src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&h=600&w=800&q=80', alt: 'Gourmet Dessert', category: 'Cuisine', span: 'normal' },
  { id: 11, src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&h=700&w=900&q=80', alt: 'Indian Feast', category: 'Buffets', span: 'wide' },
  { id: 12, src: 'https://images.pexels.com/photos/37828118/pexels-photo-37828118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900', alt: 'Outdoor Wedding', category: 'Destination', span: 'normal' },
  { id: 13, src: 'https://images.pexels.com/photos/14646769/pexels-photo-14646769.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900', alt: 'Luxury Dining', category: 'Styling', span: 'tall' },
  { id: 14, src: 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900', alt: 'Live Counter', category: 'Chefs', span: 'normal' },
  { id: 15, src: 'https://images.pexels.com/photos/34672241/pexels-photo-34672241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900', alt: 'Grand Banquet', category: 'Venues', span: 'wide' },
  { id: 16, src: 'https://images.pexels.com/photos/35985229/pexels-photo-35985229.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=800', alt: 'Luxury Chocolates', category: 'Desserts', span: 'normal' },
  { id: 17, src: 'https://images.pexels.com/photos/14703685/pexels-photo-14703685.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=900', alt: 'Garden Wedding', category: 'Destination', span: 'tall' },
  { id: 18, src: 'https://images.pexels.com/photos/17001762/pexels-photo-17001762.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900', alt: 'Floral Display', category: 'Styling', span: 'normal' },
];

const categories = ['All', 'Venues', 'Weddings', 'Cuisine', 'Buffets', 'Chefs', 'Destination', 'Desserts', 'Styling'];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<typeof allImages[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? allImages
    : allImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
        <img
          src="https://images.pexels.com/photos/16935916/pexels-photo-16935916.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Gallery"
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
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>VISUAL STORIES</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Event <span className="text-gold italic">Gallery</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 bg-black sticky top-20 z-40" style={{ borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div className="container-luxury">
          <div className="scroll-x flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cuisine-tab ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="masonry-grid"
            >
              {filtered.map((img, i) => (
                <FadeSection key={img.id} delay={i * 0.04} className="masonry-item">
                  <div
                    className="gallery-item cursor-pointer"
                    style={{
                      height: img.span === 'tall' ? '480px' : img.span === 'wide' ? '300px' : '360px',
                    }}
                    onClick={() => setLightboxImg(img)}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <div className="gallery-item-overlay">
                      <div className="text-center">
                        <div className="text-gold text-3xl mb-2 opacity-0 group-hover:opacity-100">⊕</div>
                        <div className="font-inter text-ivory text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>
                          {img.category.toUpperCase()}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightboxImg(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                className="w-full object-contain"
                style={{ maxHeight: '85vh' }}
              />
              <div className="flex items-center justify-between px-2 mt-4">
                <div>
                  <div className="font-playfair text-ivory">{lightboxImg.alt}</div>
                  <div className="font-inter text-gold text-xxs tracking-widest mt-1" style={{ letterSpacing: '3px' }}>
                    {lightboxImg.category.toUpperCase()}
                  </div>
                </div>
                <button
                  onClick={() => setLightboxImg(null)}
                  className="font-inter text-stone hover:text-gold transition-colors text-xs tracking-widest"
                  style={{ letterSpacing: '3px' }}
                >
                  CLOSE ×
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
