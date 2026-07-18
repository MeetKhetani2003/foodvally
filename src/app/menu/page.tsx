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
  'Beverages',
  'Starters',
  'Live Counters',
  'International',
  'Indian',
  'Breads & Rice',
  'Desserts',
];

const cuisineData = [
  {
    category: 'Beverages',
    title: 'Fresh Juices & Mocktails',
    subtitle: 'A Refreshing Prelude',
    img: 'https://images.pexels.com/photos/17001793/pexels-photo-17001793.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'A curated selection of freshly pressed juices, artisan mocktails, and refreshing elixirs that set the tone for the culinary journey ahead.',
    items: ['Watermelon Rose Fizz', 'Mango Lassi Royale', 'Cucumber Mint Cooler', 'Virgin Mojito', 'Fresh Orange Press', 'Pineapple Ginger Sparkle', 'Blue Lagoon', 'Lychee Basil Lemonade'],
  },
  {
    category: 'Starters',
    title: 'Soups & Starters',
    subtitle: 'The First Impression',
    img: 'https://images.pexels.com/photos/35985243/pexels-photo-35985243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'From delicate consommés to bold street-inspired bites, our starters are crafted to awaken the palate and anticipate the feast to follow.',
    items: ['Truffle Mushroom Soup', 'Tom Yum Lemongrass', 'Hariyali Tikka', 'Paneer Malai Kebab', 'Seekh Kebab', 'Crispy Corn Chaat', 'Dahi Puri', 'Pani Puri Station'],
  },
  {
    category: 'Live Counters',
    title: 'Live Counter Experiences',
    subtitle: 'Theatre of Taste',
    img: 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Watch our chefs craft dishes with theatrical precision. Each live counter is a performance, a journey, an unforgettable culinary story.',
    items: ['Italian Pasta Atelier', 'Chinese Wok Station', 'Japanese Sushi Counter', 'Chaat Studio', 'Pizza Oven', 'Taco Bar', 'Dosa Station', 'Tandoor Counter'],
  },
  {
    category: 'International',
    title: 'Italian Cuisine',
    subtitle: 'La Dolce Vita',
    img: 'https://images.pexels.com/photos/35420072/pexels-photo-35420072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Authentic Italian preparations crafted with imported ingredients, artisan techniques, and the soul of the Mediterranean.',
    items: ['Truffle Penne', 'Pesto Genovese', 'Mushroom Risotto', 'Quattro Formaggi Pizza', 'Caprese Salad', 'Tiramisu', 'Panna Cotta', 'Bruschetta Platter'],
  },
  {
    category: 'International',
    title: 'Chinese Cuisine',
    subtitle: 'Eastern Mastery',
    img: 'https://images.pexels.com/photos/24246114/pexels-photo-24246114.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'From dim sum to Sichuan specialties, our Chinese kitchen masters the art of balance — sweet, sour, spicy, and umami in perfect harmony.',
    items: ['Wok Tossed Vegetables', 'Dim Sum Selection', 'Kung Pao Paneer', 'Chilli Garlic Noodles', 'Manchurian Gravy', 'Fried Rice Station', 'Spring Rolls', 'Hakka Noodles'],
  },
  {
    category: 'International',
    title: 'Japanese Cuisine',
    subtitle: 'Zen on the Plate',
    img: 'https://images.pexels.com/photos/33033776/pexels-photo-33033776.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The art of minimalism perfected. Each Japanese creation reflects a deep reverence for ingredients, technique, and presentation.',
    items: ['Avocado Maki Rolls', 'Edamame', 'Miso Soup', 'Teriyaki Station', 'Tempura Vegetables', 'Japanese Fried Rice', 'Gyoza', 'Matcha Desserts'],
  },
  {
    category: 'International',
    title: 'Thai & Lebanese Cuisine',
    subtitle: 'Aromatic Excellence',
    img: 'https://images.pexels.com/photos/30469689/pexels-photo-30469689.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Fragrant Thai curries and authentic Lebanese mezze — a celebration of bold aromatics and the finest Middle Eastern traditions.',
    items: ['Green Thai Curry', 'Pad Thai', 'Hummus & Pita', 'Falafel', 'Som Tam', 'Tom Kha Soup', 'Baba Ganoush', 'Lebanese Wraps'],
  },
  {
    category: 'International',
    title: 'Mexican Cuisine',
    subtitle: 'Fiesta Flavours',
    img: 'https://images.pexels.com/photos/36242488/pexels-photo-36242488.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'Vibrant, bold, and festive — our Mexican station brings the spirit of celebration with authentic flavours and live preparations.',
    items: ['Taco Station', 'Burrito Bowl', 'Guacamole & Nachos', 'Quesadillas', 'Mexican Rice', 'Enchiladas', 'Salsa Bar', 'Churros'],
  },
  {
    category: 'Indian',
    title: 'South Indian Cuisine',
    subtitle: 'Coastal Elegance',
    img: 'https://images.pexels.com/photos/29486069/pexels-photo-29486069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The gentle complexity of South Indian cooking — coconut, curry leaves, mustard, and spices — presented with modern elegance.',
    items: ['Masala Dosa Station', 'Idli & Sambar', 'Uthappam', 'Medu Vada', 'Avial', 'Kerala Fish Curry', 'Chettinad Gravy', 'Payasam'],
  },
  {
    category: 'Indian',
    title: 'Punjabi & Mughlai',
    subtitle: 'Royal Heritage',
    img: 'https://images.pexels.com/photos/19748941/pexels-photo-19748941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The grandeur of Mughal kitchens and the heartiness of Punjab\'s finest — slow-cooked gravies, tandoor masterpieces, and aromatic biryanis.',
    items: ['Dal Makhani', 'Paneer Butter Masala', 'Chicken Biryani', 'Seekh Kebab', 'Shahi Korma', 'Butter Chicken', 'Tandoori Platter', 'Naan Varieties'],
  },
  {
    category: 'Indian',
    title: 'Gujarati & Kathiyawadi',
    subtitle: 'Home & Heritage',
    img: 'https://images.pexels.com/photos/35985243/pexels-photo-35985243.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    desc: 'The warmth of Gujarati hospitality on the plate. Authentic family recipes elevated with premium ingredients and masterful technique.',
    items: ['Undhiyu', 'Kathiyawadi Sev Tameta', 'Handvo', 'Dhokla', 'Gujarati Dal', 'Ringan No Olo', 'Bajra Rotla', 'Srikhand'],
  },
  {
    category: 'Indian',
    title: 'Rajasthani Cuisine',
    subtitle: 'Royal Desert Flavours',
    img: 'https://images.pexels.com/photos/29486071/pexels-photo-29486071.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The regal traditions of Rajputana cuisine — bold, hearty, and deeply flavourful. A culinary legacy of centuries presented with contemporary refinement.',
    items: ['Dal Baati Churma', 'Laal Maas', 'Ker Sangri', 'Ghewar', 'Bajre Ki Roti', 'Gatte Ki Sabzi', 'Bajra Khichdi', 'Mawa Kachori'],
  },
  {
    category: 'Breads & Rice',
    title: 'Indian Breads',
    subtitle: 'The Staff of Life',
    img: 'https://images.pexels.com/photos/31970807/pexels-photo-31970807.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'From paper-thin roomali roti to puffed tandoori naan — our bread station is a living bakery where tradition meets craftsmanship.',
    items: ['Tandoori Naan', 'Roomali Roti', 'Stuffed Parathas', 'Kulcha', 'Bajra Rotla', 'Phulka', 'Missi Roti', 'Laccha Paratha'],
  },
  {
    category: 'Breads & Rice',
    title: 'Dal, Rice & Accompaniments',
    subtitle: 'Complete & Comforting',
    img: 'https://images.pexels.com/photos/37116449/pexels-photo-37116449.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'The foundation of every great Indian meal — perfectly cooked dals, aromatic rice preparations, and an array of freshly prepared accompaniments.',
    items: ['Dal Tadka', 'Dal Makhani', 'Jeera Rice', 'Vegetable Biryani', 'Saffron Pulao', 'Papad', 'Pickles', 'Raita Varieties'],
  },
  {
    category: 'Desserts',
    title: 'Desserts & Luxury Sweets',
    subtitle: 'Sweet Finales',
    img: 'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=900',
    desc: 'A symphony of sweetness that concludes every celebration perfectly. From artisan chocolates to traditional Indian sweets, each creation is a masterpiece.',
    items: ['Gold Leaf Gulab Jamun', 'Rose Kulfi Bar', 'Chocolate Fountain', 'Tiramisu Cups', 'Rabdi Jalebi', 'Mango Phirni', 'Luxury Barfi', 'Live Ice Cream Station'],
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
