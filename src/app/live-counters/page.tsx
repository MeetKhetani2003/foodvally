"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import BookingModal from '../../components/BookingModal';

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

const counters = [
  {
    id: '01',
    title: 'Mocktail Counter',
    subtitle: 'Refreshing Coolers & Blends',
    desc: 'Handcrafted non-alcoholic drinks, tropical coolers, and crushed fruit margaritas made live to complement every meal.',
    img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Kiwi Margherita', 'Pina Colada', 'Blue Lagoon', 'Orange Tarana'],
    highlight: 'Refreshing live mocktails served chilled with fresh fruit garnishes.',
  },
  {
    id: '02',
    title: 'Chat Counter',
    subtitle: 'Authentic Indian Street Food',
    desc: 'Crispy, tangy, and spicy live street food stations featuring freshly fried samosas, golden tikkis, and sweet-spicy chutneys.',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Papdi Chat', 'Aloo Tikki Chaat', 'Chhole Samosa', 'Pani Puri'],
    highlight: 'The ultimate crowd favorite with customizable spicy and sweet chutneys.',
  },
  {
    id: '03',
    title: 'Chinese Counter',
    subtitle: 'Classic Indo-Chinese Fare',
    desc: 'A fusion of rich oriental sauces, crispy fried paneer, and appetizing wok-tossed snacks.',
    img: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Chinese Bhel', 'Paneer Chilli Fry', 'Dry Manchurian', 'Vegetable Noodles'],
    highlight: 'Bold, flavorful Indo-Chinese delicacies loved by all guests.',
  },
  {
    id: '04',
    title: 'Italian Live Counter',
    subtitle: 'Sizzling Pasta & Breads',
    desc: 'Interactive live cooking featuring freshly boiled pastas, gourmet Italian sauces, warm garlic breads, and crispy rosti.',
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Italian Pasta (3 Types)', 'Ravioli with Garlic Bread', 'Cheese Potato Rosti', 'Thin Crust Pizza'],
    highlight: 'Freshly prepared pasta customized live with your choice of white, red, or mixed sauces.',
  },
  {
    id: '05',
    title: 'Chinese Live Counter',
    subtitle: 'High-Heat Wok Tossed',
    desc: 'Theatrical wok cooking with high-flame sautéing of crisp vegetables, Hakka noodles, and rich Schezwan gravies.',
    img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Hakka Noodles', 'Manchurian Gravy', 'Fried Rice', 'Paneer with Schezwan'],
    highlight: 'Sizzling hot woks bringing authentic live street-style noodles and gravies.',
  },
  {
    id: '06',
    title: 'Japanese Counter',
    subtitle: 'Zen Delicacies & Teppanyaki',
    desc: 'An elegant vegetarian Japanese counter featuring delicate avocado rolls, crispy vegetable tempura, and teppanyaki rice.',
    img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Avocado Sushi', 'Vegetable Tempura', 'Miso Soup', 'Teppan Garlic Rice'],
    highlight: 'Exquisite presentation of 100% vegetarian Japanese culinary classics.',
  },
  {
    id: '07',
    title: 'Italian Counter',
    subtitle: 'Artisan Wood-Fired & Bakes',
    desc: 'Traditional oven-baked thin crust pizzas, cheese-stuffed ravioli, and rich Alfredo bakes prepared with fragrant herbs.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEO05SgSVJWfAdp0Uyl8l7z7t7VgP4ZB5aO6KoIatKVQ&s=10',
    offerings: ['Pasta (Alfredo/Roma)', 'Ravioli (Cheese/Tomato)', 'Thin Crust Pizza', 'Broccoli Reaby Loaf'],
    highlight: 'Melted cheeses, aromatic basil, and freshly baked thin crusts.',
  },
  {
    id: '08',
    title: 'Lebanese Counter',
    subtitle: 'Mediterranean Delights',
    desc: 'Authentic Middle Eastern dips, freshly baked pita pockets, golden falafel balls, and savory stuffed wraps.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpsAr7dac0FN3ynoU4zHeC4vNqMTXcFsQmldqX1iEuBnVo5nku4WpKqiY-&s=10',
    offerings: ['Pita Pockets', 'Falafel', 'Baba Ghanoush', 'Hummus with Kabuli Chana'],
    highlight: 'Healthy, aromatic Mediterranean dishes paired with signature artisan dips.',
  },
  {
    id: '09',
    title: 'Mongolian Counter',
    subtitle: 'Flamed Stir-Fry',
    desc: 'Customizable noodle and rice bowls tossed live with fresh sautéed vegetables and bold Mongolian sauces.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBfk_Ev1l6cl74rK8aSoiymsICrV2uA-tOXb46B7UcTsxwyHbzJ611f8&s=10',
    offerings: ['Thai Flat Noodles / Rice', 'Assorted Sauteed Vegetables', 'Arrabbiata & Black Bean Sauce', 'Mongolian Spicy Sauce'],
    highlight: 'Interactive live bowl building cooked fresh on flat griddles.',
  },
  {
    id: '10',
    title: 'Thai Counter',
    subtitle: 'Aromatic Southeast Asian',
    desc: 'Fragrant lemongrass, rich coconut milk curries, crispy spring rolls, and Thai jasmine basil rice.',
    img: 'https://images.happycow.net/venues/1024/24/19/hcmp241933_1403496.jpeg',
    offerings: ['Thai Green Curry', 'Thai Red Curry', 'Thai Spring Roll', 'Basil Rice'],
    highlight: 'A delicate harmony of sweet, sour, spicy, and coconut flavors.',
  },
  {
    id: '11',
    title: 'Mexican Counter',
    subtitle: 'Fiesta & Tacos',
    desc: 'Crispy taco shells, loaded corn chips, sizzling quesadillas, and cheesy enchiladas served with tangy tomato salsa.',
    img: 'https://thecharcuterieco.in/cdn/shop/files/TCC-19-Copy_1200x1200.jpg?v=1684998671',
    offerings: ['Mexican Tacos', 'Nachos with Cheese Sauce', 'Mexican Enchiladas', 'Quesadilla with Salsa'],
    highlight: 'Vibrant, cheesy, and spicy Tex-Mex favorites made fresh on order.',
  },
  {
    id: '12',
    title: 'Amritsari Counter',
    subtitle: 'North Indian Heritage',
    desc: 'Richly spiced Amritsari chhole paired with piping hot stuffed kulchas, onion rings, lemon, and tangy raita.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lSpyO9ASAjxkZGqhHwkpWZCvtfM5YheUxZbvCC1LKeZ-AZPdsmiv5sOD&s=10',
    offerings: ['Amritsari Chhole', 'Butter Kulcha', 'Raita - Achar', 'Pyaaz - Limbu'],
    highlight: 'Authentic North Indian dhaba flavors with hot, fluffy kulchas.',
  },
  {
    id: '13',
    title: 'Kathiyawadi Counter',
    subtitle: 'Traditional Gujarati Feast',
    desc: 'Rustic, spice-infused regional Gujarati fare including smoky brinjal bhartha, millet rotlas, and wholesome khichdi.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR75y-ynFhgxzxMcALgH7OhGkwg4-twKDzFFh_qiFP-yrShn7SKnEoixwpK&s=10',
    offerings: ['Bengan Bhartha', 'Bajre Ka Rotla', 'Sev Tameta nu Shak', 'Kathiyawadi Khichdi & Kadhi'],
    highlight: 'Traditional Gujarati recipes prepared with jaggery, pure ghee, and green garlic.',
  },
  {
    id: '14',
    title: 'Indian Live Vegetable Counter',
    subtitle: 'Royal Paneer & Gravies',
    desc: 'Freshly simmered Punjabi gravies, tender cottage cheese cubes, and rich koftas served hot straight from copper handis.',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Paneer Avadhi', 'Paneer Amritsari', 'Balti Paneer', 'Veg Tarkari'],
    highlight: 'Rich paneer gravies infused with aromatic Indian spices.',
  },
  {
    id: '15',
    title: 'Special Salad Counter',
    subtitle: 'Gourmet Garden Crunchy',
    desc: 'Fresh artisan salads, tossed garden greens, exotic kimchi, and creamy dressings for a crisp, healthy indulgence.',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&h=800&w=1200&q=80',
    offerings: ['Veg Crunchy Salad', 'Greek Monsa Salad', 'Tokye Kimchi Salad', '365 Days Green Garden Healthy Salad'],
    highlight: 'Vibrant, nutrient-rich garden salads with custom house dressings.',
  },
  {
    id: '16',
    title: 'Pan Counter',
    subtitle: 'Traditional Banarasi & Sweet Paan',
    desc: 'An exquisite post-meal paan counter offering hand-rolled sweet betel leaves, paan shots, and refreshing digestive mukhwas.',
    img: 'https://static.vecteezy.com/system/resources/previews/010/601/009/large_2x/pan-image-hd-outdoor-shoot-photo.JPG',
    offerings: ['Sweet Pan', 'Pan Bida', 'Lili Variyali', 'Pan Shots'],
    highlight: 'The perfect traditional Indian digestive finish to a royal banquet.',
  },
];

export default function LiveCounters() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openModal = (service: string) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '70vh', minHeight: '500px' }}>
        <img
          src="https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600"
          alt="Live Counters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(9,9,9,0.95) 30%, rgba(9,9,9,0.4) 100%)' }} />
        <div className="absolute inset-0 flex items-center">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-xl"
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>CULINARY THEATRE</div>
              <h1 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                Live
                <br />
                <span className="text-gold italic">Counters</span>
              </h1>
              <p className="font-inter text-stone" style={{ lineHeight: 2, fontSize: '16px', maxWidth: '380px' }}>
                Where dining becomes performance. Each live counter is a world unto itself — a stage where our culinary artists create magic before your eyes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <FadeSection>
              <div className="text-center lg:text-left">
                <div className="font-cormorant text-gold" style={{ fontSize: '72px', fontWeight: 300, lineHeight: 1 }}>10+</div>
                <div className="gold-divider mt-4 mb-3" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>LIVE COUNTER TYPES</div>
              </div>
            </FadeSection>
            <FadeSection delay={0.1}>
              <div className="text-center">
                <div className="font-cormorant text-gold" style={{ fontSize: '72px', fontWeight: 300, lineHeight: 1 }}>50+</div>
                <div className="gold-divider mx-auto mt-4 mb-3" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>STATION SETUPS AVAILABLE</div>
              </div>
            </FadeSection>
            <FadeSection delay={0.2}>
              <div className="text-center lg:text-right">
                <div className="font-cormorant text-gold" style={{ fontSize: '72px', fontWeight: 300, lineHeight: 1 }}>100%</div>
                <div className="gold-divider mt-4 mb-3 ml-auto" />
                <div className="font-inter text-stone text-xxs tracking-widest" style={{ letterSpacing: '2.5px' }}>LIVE PREPARED FRESH</div>
              </div>
            </FadeSection>
          </div>
        </div>
      </section>

      {/* Counters */}
      {counters.map((counter, i) => (
        <section key={counter.id} className="section-padding bg-black">
          <div className="container-luxury">
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Image */}
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <FadeSection delay={0.1}>
                  <div className="relative">
                    <div className="luxury-img-wrap" style={{ height: '520px' }}>
                      <img src={counter.img} alt={counter.title} className="w-full h-full object-cover" />
                    </div>
                    <div
                      className="absolute top-6 right-6 font-cormorant text-gold opacity-20 select-none pointer-events-none"
                      style={{ fontSize: '120px', lineHeight: 1 }}
                    >
                      {counter.id}
                    </div>
                    <div
                      className="absolute bottom-8 left-8 right-8 p-6"
                      style={{ background: 'rgba(9,9,9,0.85)', borderTop: '1px solid rgba(201,169,110,0.2)' }}
                    >
                      <p className="font-cormorant text-ivory" style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: 1.6 }}>
                        "{counter.highlight}"
                      </p>
                    </div>
                  </div>
                </FadeSection>
              </div>

              {/* Content */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <FadeSection delay={0.2}>
                  <div>
                    <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '4px' }}>
                      COUNTER {counter.id}
                    </div>
                    <div className="gold-divider mb-8" />
                    <h2 className="font-playfair text-ivory mb-2" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                      {counter.title}
                    </h2>
                    <p className="font-cormorant text-gold mb-6" style={{ fontSize: '18px', fontStyle: 'italic' }}>{counter.subtitle}</p>
                    <p className="font-inter text-stone mb-10" style={{ lineHeight: 2.2, fontSize: '16px' }}>
                      {counter.desc}
                    </p>

                    <div className="mb-8">
                      <div className="font-inter text-xxs tracking-widest mb-4" style={{ letterSpacing: '3px', color: '#c9a96e', fontSize: '10px' }}>
                        OFFERINGS INCLUDE
                      </div>
                      <div className="space-y-2">
                        {counter.offerings.map((offering, j) => (
                          <div key={j} className="flex items-center gap-3">
                            <div className="w-6 h-px" style={{ background: 'rgba(201,169,110,0.5)' }} />
                            <span className="font-inter text-stone text-xs">{offering}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => openModal(counter.title)} className="btn-luxury">
                      Add to My Event
                    </button>
                  </div>
                </FadeSection>
              </div>
            </div>

            {i < counters.length - 1 && (
              <div className="gold-divider-full mt-20" />
            )}
          </div>
        </section>
      ))}

      {/* Customization CTA */}
      <section className="relative" style={{ height: '60vh', minHeight: '400px' }}>
        <img
          src="https://images.pexels.com/photos/36430149/pexels-photo-36430149.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Custom Counters"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(9,9,9,0.8)' }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <FadeSection>
            <div className="text-center px-6">
              <div className="font-inter text-gold text-xxs tracking-widest mb-6" style={{ letterSpacing: '4px' }}>
                BESPOKE SOLUTIONS
              </div>
              <h2 className="font-playfair text-ivory mb-6" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 400 }}>
                Design Your
                <br />
                <span className="text-gold italic">Perfect Counter Setup</span>
              </h2>
              <p className="font-inter text-stone mb-10 mx-auto" style={{ maxWidth: '480px', lineHeight: 2, fontSize: '16px' }}>
                Mix and match counters, create custom stations, or design something entirely new. Our team brings any culinary vision to life.
              </p>
              <button onClick={() => openModal('Custom Counter Setup')} className="btn-luxury-filled">Plan My Event</button>
            </div>
          </FadeSection>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />
    </div>
  );
}
