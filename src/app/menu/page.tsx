"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import BookingModal from '../../components/BookingModal';

function FadeSection({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = [
  'All',
  'Soups & Refreshments',
  'Starters & Chaat',
  'Live Counters',
  'Regional Indian',
  'Main Course',
  'Breads & Rice',
  'Desserts',
];

const cuisineData = [
  {
    category: 'Soups & Refreshments',
    title: 'Juices & Coolers',
    subtitle: 'Fresh & Vibrant',
    img: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'A curated selection of fresh juices and coolers. The perfect refreshing start to your luxury culinary experience.',
    items: ['Pineapple Juice', 'Green Grapes & Kiwi Juice', 'Kiwi Margherita', 'Blue Lagoon', 'Ginger & Mint Cooler', 'Fruit Punch', 'Orange Tarana', 'Pina Colada'],
  },
  {
    category: 'Soups & Refreshments',
    title: 'Luxury Soups',
    subtitle: 'Warm Beginnings',
    img: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'From comforting clear soups to rich cappuccinos, our soup station offers a warm, elegant beginning to the feast.',
    items: ['Tomato Coriander Soup', 'Mexican Tortilla Soup', 'Bouillabaisse French Soup', 'Tom Yam Soup', 'Cheese Corn Tomato Soup', 'Broccoli Almond Soup', 'Potato Leek Soup', 'Roasted Tomato Bell Pepper Soup'],
  },
  {
    category: 'Starters & Chaat',
    title: 'Mobile & Regular Starters',
    subtitle: 'Bite-sized Perfection',
    img: 'https://images.pexels.com/photos/2089711/pexels-photo-2089711.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Delicate, artistic, and incredibly flavourful. Our starters roam the venue or stand ready at dedicated counters.',
    items: ['Hungarian Potatoes', 'Paneer Tikka in Pita Pocket', 'Thai Lettuce Wraps', 'Barbequed Paneer Teppanyaki', 'Vietnamese Roll', 'Cheese Fondue', 'Mexican Quesadilla', 'Potato Rosti'],
  },
  {
    category: 'Starters & Chaat',
    title: 'Cold & Hot Chaat',
    subtitle: 'Street Food Elevated',
    img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The nostalgic flavours of India\'s beloved street food, reimagined with premium ingredients and impeccable hygiene.',
    items: ['Kalkatti Pan Chaat', 'Navratna Rajbhog Chaat', 'Fresh Fruit Papadi Chaat', 'Papdi Chat', 'Aloo Tikki Chaat', 'Modi Nagar ki Tikki', 'Pani Puri', 'Jaipuri Chilla'],
  },
  {
    category: 'Main Course',
    title: 'Farsan',
    subtitle: 'Traditional Savouries',
    img: 'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Fried, steamed, and tawa-cooked — an authentic spread of traditional farsan that brings the true taste of Gujarat.',
    items: ['Tirangi Patties', 'Pyaaz Kachori', 'Ravioli Pasta with Tar Tar', 'Hungarian Potato', 'Patra', 'Khandvi', 'Lilva na Ghughra', 'Corn Samosa'],
  },
  {
    category: 'Main Course',
    title: 'Indian Vegetables',
    subtitle: 'Hearty & Flavourful',
    img: 'https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'A magnificent selection of Punjabi, Gujarati, and regional Indian vegetable preparations, cooked to perfection.',
    items: ['Paneer Patiyala', 'Methi Malai Matar Paneer', 'Punjabi Chhole', 'Surti Masala Undhiya', 'Turiya Patra Vatana', 'Hyderabadi Potato', 'Tawa Sabji', 'Green Undhiyu'],
  },
  {
    category: 'Breads & Rice',
    title: 'Indian Breads',
    subtitle: 'Fresh from the Tandoor',
    img: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'From paper-thin roomali rotis to rich, stuffed parathas, our bread station serves them fresh and hot.',
    items: ['Masala Puri', 'Rumali Roti', 'Baajri na Rotla', 'Cheese Paneer Paratha', 'Pudina Naan', 'Amritsari Kulcha', 'Baby Butter Naan', 'Biscuit Bhakhri'],
  },
  {
    category: 'Breads & Rice',
    title: 'Dal, Rice & Kadhi',
    subtitle: 'The Soul of the Meal',
    img: 'https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The comforting foundation of Indian dining, featuring aromatic biryanis, perfectly tempered dals, and traditional kadhis.',
    items: ['Dal Makhani', 'Gujarati Dal', 'Hyderabadi Biryani', 'Damfuk Biryani', 'Jeera Rice', 'Taj Laving Rice', 'Gujarati Kadhi', 'Rajasthani Kadhi'],
  },
  {
    category: 'Accompaniments',
    title: 'Salads & Accompaniments',
    subtitle: 'Fresh & Crisp',
    img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'An array of fresh green salads, fruit-based salads, raitas, pickles, and crisp papads to complement your meal.',
    items: ['Green Garden Kitchen Salad', 'Mexican Salad', 'Fruit Bolar Salad', 'Mix Fruit Raita', 'Khajur Palak Raita', 'Mix Panjabi Achar', 'Masala Papad', 'Cheese Mayonnaise'],
  },
  {
    category: 'Desserts',
    title: 'Luxury Sweets & Desserts',
    subtitle: 'The Grand Finale',
    img: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'A breathtaking conclusion to your feast. Traditional Indian sweets, modern desserts, and an artisan Mukhwas counter.',
    items: ['Strawberry Sandesh', 'Pista Samosa', 'Dryfruit Shrikhand', 'Sitafal Basundi', 'Ghever Rabdi', 'Hot Brownie', 'Ice-Cream', 'Pan Shots'],
  },
  {
    category: 'Live Counters',
    title: 'World Vision (International)',
    subtitle: 'Global Flavours',
    img: 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'A passport to global cuisine. Live stations featuring the best of Italian, Chinese, Japanese, Lebanese, and Mexican culinary arts.',
    items: ['Italian Pasta', 'Thin Crust Pizza', 'Manchurian Noodles', 'Avocado Sushi', 'Falafel & Hummus', 'Thai Red Curry', 'Mexican Tacos', 'Vegetable Momos'],
  },
  {
    category: 'Regional Indian',
    title: 'Pan-Indian Live Stations',
    subtitle: 'Heritage on a Plate',
    img: 'https://images.pexels.com/photos/331107/pexels-photo-331107.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Authentic regional experiences bringing the true essence of Panjabi Dhaba, Rajasthani, Kathiyawadi, and South Indian cuisines.',
    items: ['Sarson da Saag & Makki di Roti', 'Dal Baati Churma', 'Kathiyawadi Khichdi', 'Jodhpuri Dosa', 'Medu Vada', 'Appam', 'Amritsari Chhole Kulcha', 'Bajre Ka Rotla'],
  },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof cuisineData[0] | null>(null);
  
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState('');

  const openBookingModal = (service: string) => {
    setBookingService(service);
    setIsBookingModalOpen(true);
    setSelectedItem(null); // Close the menu item modal if it's open
  };

  const filtered = activeCategory === 'All'
    ? cuisineData
    : cuisineData.filter((c) => c.category === activeCategory);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '65vh', minHeight: '450px' }}>
        <img
          src="https://images.pexels.com/photos/30469689/pexels-photo-30469689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Menu Experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.4) 0%, rgba(9,9,9,0.9) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>CULINARY JOURNEY</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Menu
                <br />
                <span className="text-gold italic">Experience</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="max-w-2xl mx-auto text-center">
              <div className="gold-divider mx-auto mb-8" />
              <p className="font-cormorant text-ivory" style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', lineHeight: 1.8, fontStyle: 'italic' }}>
                Our menu is not a list of dishes — it is a curated journey across the world's finest culinary traditions, each experience designed to evoke emotion, memory, and delight.
              </p>
              <div className="gold-divider mx-auto mt-8" />
            </div>
          </FadeSection>
        </div>
      </section>

      {/* Category Filter */}
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

      {/* Cuisine Grid */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-32"
            >
              {filtered.map((cuisine, i) => (
                <FadeSection key={cuisine.title} delay={i * 0.05}>
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image */}
                    <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div
                        className="luxury-img-wrap cursor-pointer"
                        style={{ height: '500px' }}
                        onClick={() => setSelectedItem(cuisine)}
                      >
                        <img src={cuisine.img} alt={cuisine.title} className="w-full h-full object-cover" />
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
                          style={{ background: 'rgba(9,9,9,0.5)' }}
                          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                        >
                          <div className="text-center">
                            <div className="text-gold text-3xl mb-2">+</div>
                            <div className="font-inter text-ivory text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>VIEW MENU</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                      <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '4px' }}>
                        {cuisine.category.toUpperCase()}
                      </div>
                      <div className="gold-divider mb-8" />
                      <h2 className="font-playfair text-ivory mb-2" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                        {cuisine.title}
                      </h2>
                      <p className="font-cormorant text-gold mb-6" style={{ fontSize: '18px', fontStyle: 'italic' }}>
                        {cuisine.subtitle}
                      </p>
                      <p className="font-inter text-stone mb-10" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                        {cuisine.desc}
                      </p>

                      {/* Items */}
                      <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-10">
                        {cuisine.items.map((item, j) => (
                          <div key={j} className="flex items-center gap-2">
                            <div className="w-4 h-px" style={{ background: 'rgba(201,169,110,0.4)' }} />
                            <span className="font-inter text-stone text-xs">{item}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedItem(cuisine)}
                        className="btn-luxury"
                      >
                        Full Menu Details
                      </button>
                    </div>
                  </div>

                  {i < filtered.length - 1 && (
                    <div className="gold-divider-full mt-20" />
                  )}
                </FadeSection>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-2xl w-full mx-4"
              style={{ background: '#151515', border: '1px solid rgba(201,169,110,0.2)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ height: '260px' }} className="overflow-hidden">
                <img src={selectedItem.img} alt={selectedItem.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-10">
                <h3 className="font-playfair text-ivory text-3xl mb-2">{selectedItem.title}</h3>
                <p className="font-cormorant text-gold mb-4" style={{ fontSize: '18px', fontStyle: 'italic' }}>{selectedItem.subtitle}</p>
                <p className="font-inter text-stone text-xs mb-8" style={{ lineHeight: 2 }}>{selectedItem.desc}</p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {selectedItem.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-gold text-xxs">✦</span>
                      <span className="font-inter text-stone text-xs">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button onClick={() => openBookingModal(selectedItem.title)} className="btn-luxury-filled" style={{ flex: 1, justifyContent: 'center' }}>Include in My Event</button>
                  <button onClick={() => setSelectedItem(null)} className="btn-luxury" style={{ padding: '16px 24px' }}>Close</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Menu CTA */}
      <section className="py-32 bg-black" style={{ borderTop: '1px solid rgba(201,169,110,0.1)' }}>
        <div className="container-luxury text-center">
          <FadeSection>
            <div className="gold-divider mx-auto mb-10" />
            <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400 }}>
              Create Your <span className="text-gold italic">Bespoke Menu</span>
            </h2>
            <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '460px', lineHeight: 2, fontSize: '16px' }}>
              Every menu at Food Valley is crafted bespoke for your event. Share your preferences and let our culinary team design an extraordinary dining journey.
            </p>
            <button onClick={() => openBookingModal('Menu Design Inquiry')} className="btn-luxury-filled">Design My Menu</button>
          </FadeSection>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        serviceName={bookingService}
      />
    </div>
  );
}
