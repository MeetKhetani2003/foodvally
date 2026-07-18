"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const articles = [
  {
    title: 'The Art of the Grand Buffet: How We Design Culinary Spectacles',
    category: 'Culinary Excellence',
    excerpt: 'Behind every breathtaking buffet lies months of planning, sourcing, and creative vision. Our executive chef shares the philosophy behind Food Valley\'s legendary spreads.',
    img: 'https://images.pexels.com/photos/29486069/pexels-photo-29486069.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1200',
    date: 'April 2025',
    readTime: '8 min read',
    featured: true,
  },
  {
    title: 'Why Your Wedding Deserves More Than Just "Good Catering"',
    category: 'Wedding Wisdom',
    excerpt: 'The difference between a catered wedding and a curated culinary experience is everything. Here\'s how to elevate your most important day.',
    img: 'https://images.pexels.com/photos/19986452/pexels-photo-19986452.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    date: 'March 2025',
    readTime: '6 min read',
    featured: false,
  },
  {
    title: 'Live Counters: The Secret to an Unforgettable Event',
    category: 'Event Secrets',
    excerpt: 'Our live counter stations have become the talking point of every event they appear at. Discover the magic behind these culinary theatre experiences.',
    img: 'https://images.pexels.com/photos/8629103/pexels-photo-8629103.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    date: 'February 2025',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Destination Weddings: Our Most Extraordinary Journeys',
    category: 'Destination Stories',
    excerpt: 'From a 500-guest palace wedding in Jodhpur to an intimate beachfront celebration in the Maldives, our destination team tells their most remarkable stories.',
    img: 'https://images.pexels.com/photos/34342527/pexels-photo-34342527.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=1200',
    date: 'January 2025',
    readTime: '10 min read',
    featured: true,
  },
  {
    title: 'The Luxury Dessert Bar: An Architectural Achievement',
    category: 'Culinary Excellence',
    excerpt: 'Our dessert bars are not just food stations — they are architectural installations that become the visual centrepiece of every celebration.',
    img: 'https://images.pexels.com/photos/29098355/pexels-photo-29098355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    date: 'December 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    title: 'Italian Cuisine at Indian Weddings: A Perfect Love Story',
    category: 'Cuisine Stories',
    excerpt: 'How Italian live kitchens became the most requested addition to Indian weddings, and why the combination works so beautifully.',
    img: 'https://images.pexels.com/photos/35420072/pexels-photo-35420072.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    date: 'November 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    title: 'Planning a Corporate Gala: The Definitive Guide',
    category: 'Event Planning',
    excerpt: 'Everything a corporate event planner needs to know about creating a memorable gala dinner that impresses even the most discerning executives.',
    img: 'https://images.pexels.com/photos/4717550/pexels-photo-4717550.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    date: 'October 2024',
    readTime: '9 min read',
    featured: false,
  },
  {
    title: 'Rajasthani Cuisine: Honouring Heritage on the Luxury Table',
    category: 'Cuisine Stories',
    excerpt: 'How we preserve the ancient culinary traditions of Rajasthan while presenting them with contemporary luxury standards worthy of the finest dining tables.',
    img: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=600&w=900',
    date: 'September 2024',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = ['All', 'Culinary Excellence', 'Wedding Wisdom', 'Event Secrets', 'Destination Stories', 'Cuisine Stories', 'Event Planning'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = articles.filter((a) => a.featured);
  const filtered = activeCategory === 'All'
    ? articles.filter((a) => !a.featured)
    : articles.filter((a) => a.category === activeCategory && !a.featured);

  return (
    <div className="bg-black">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ height: '55vh', minHeight: '380px' }}>
        <img
          src="https://images.pexels.com/photos/17001762/pexels-photo-17001762.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600"
          alt="Blog"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(9,9,9,0.4) 0%, rgba(9,9,9,0.88) 100%)' }} />
        <div className="absolute inset-0 flex items-end pb-16">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>STORIES & INSPIRATION</div>
              <h1 className="font-playfair text-ivory" style={{ fontSize: 'clamp(44px, 7vw, 96px)', fontWeight: 400, lineHeight: 1 }}>
                The <span className="text-gold italic">Journal</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="section-padding bg-black">
        <div className="container-luxury">
          <FadeSection>
            <div className="mb-16">
              <div className="font-inter text-gold text-xxs tracking-widest mb-4" style={{ letterSpacing: '4px' }}>EDITOR'S PICKS</div>
              <h2 className="font-playfair text-ivory" style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 400 }}>
                Featured <span className="text-gold italic">Stories</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {featured.map((article, i) => (
              <FadeSection key={i} delay={i * 0.15}>
                <div className="group cursor-pointer">
                  <div className="luxury-img-wrap mb-6" style={{ height: '400px' }}>
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                    <div className="img-overlay" />
                    <div className="absolute top-6 left-6">
                      <span
                        className="font-inter text-xxs tracking-widest px-4 py-2"
                        style={{ letterSpacing: '2px', background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)', color: '#c9a96e' }}
                      >
                        {article.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-inter text-stone text-xxs" style={{ letterSpacing: '2px' }}>{article.date.toUpperCase()}</span>
                    <span className="text-gold text-xxs">✦</span>
                    <span className="font-inter text-stone text-xxs" style={{ letterSpacing: '2px' }}>{article.readTime.toUpperCase()}</span>
                  </div>
                  <h3
                    className="font-playfair text-ivory mb-4 group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 30px)', fontWeight: 400, lineHeight: 1.3 }}
                  >
                    {article.title}
                  </h3>
                  <p className="font-inter text-stone text-xs mb-6" style={{ lineHeight: 2 }}>{article.excerpt}</p>
                  <div className="flex items-center gap-3 text-gold">
                    <span className="font-inter text-xxs tracking-widest" style={{ letterSpacing: '3px' }}>READ MORE</span>
                    <div className="w-8 h-px bg-gold" />
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>

          {/* Category filter */}
          <div className="gold-divider-full mb-16" />
          <div className="scroll-x flex gap-2 mb-16">
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

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((article, i) => (
              <FadeSection key={i} delay={i * 0.08}>
                <div className="group cursor-pointer">
                  <div className="luxury-img-wrap mb-5" style={{ height: '260px' }}>
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="font-inter text-gold text-xxs tracking-widest mb-3" style={{ letterSpacing: '2px', fontSize: '9px' }}>
                    {article.category.toUpperCase()} · {article.readTime.toUpperCase()}
                  </div>
                  <h3
                    className="font-playfair text-ivory mb-3 group-hover:text-gold transition-colors duration-300"
                    style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 400, lineHeight: 1.4 }}
                  >
                    {article.title}
                  </h3>
                  <p className="font-inter text-stone text-xxs mb-4 line-clamp-3" style={{ lineHeight: 1.9 }}>{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-gold">
                    <span className="font-inter" style={{ fontSize: '10px', letterSpacing: '3px' }}>READ</span>
                    <div className="w-6 h-px bg-gold" />
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24" style={{ background: '#0d0d0d' }}>
        <div className="container-luxury">
          <FadeSection>
            <div className="max-w-xl mx-auto text-center">
              <div className="gold-divider mx-auto mb-8" />
              <h2 className="font-playfair text-ivory mb-4" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}>
                Stay <span className="text-gold italic">Inspired</span>
              </h2>
              <p className="font-inter text-stone mb-10 text-xs" style={{ lineHeight: 2 }}>
                Subscribe to our journal for exclusive stories, culinary inspiration, and behind-the-scenes glimpses of our most extraordinary events.
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="YOUR EMAIL ADDRESS"
                  className="input-luxury flex-1"
                  style={{ borderBottom: '1px solid rgba(201,169,110,0.3)' }}
                />
                <button className="btn-luxury-filled" style={{ padding: '14px 32px', whiteSpace: 'nowrap' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
