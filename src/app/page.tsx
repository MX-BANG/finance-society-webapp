'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const features = [
    {
      title: 'Trading Platform',
      description: 'Access real-time market data and practice trading in a risk-free environment.',
      icon: '📈',
      link: '/trading'
    },
    {
      title: 'Events & Competitions',
      description: 'Participate in trading competitions and educational workshops.',
      icon: '🏆',
      link: '/events'
    },
    {
      title: 'Financial Magazine',
      description: 'Stay informed with our curated articles and market insights.',
      icon: '📰',
      link: '/magazine'
    },
    {
      title: 'Expert Team',
      description: 'Learn from experienced professionals in the finance industry.',
      icon: '👥',
      link: '/team'
    }
  ];

  return (
    <div className="space-y-15 py-5"> {/* Reduced padding */}

     {/* Hero Section */}
<motion.section 
  className="relative h-[90vh] flex items-center justify-center text-center pt-0"
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/stocksbg.jpg')" }}
  />

  {/* Overlay (optional, for better text visibility) */}
  <div className="absolute inset-0 bg-black/50 z-10" /> {/* Add z-index to overlay */}

  {/* Text Container */}
  <div className="max-w-4xl mx-auto px-4 relative z-20"> {/* Add z-index to text container */}
    <motion.h1 
      className="text-4xl md:text-6xl font-bold text-white mb-6"
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      Welcome to Finance Society
    </motion.h1>
    <motion.p 
      className="text-xl text-gray-200 mb-8"
      variants={itemVariants}
    >
      Empowering future financial leaders through education, experience, and excellence
    </motion.p>
    <motion.div 
      className="flex flex-wrap justify-center gap-4"
      variants={itemVariants}
    >
      <Link href="/register" className="btn-primary">
        Join Now
      </Link>
      <Link href="/events" className="btn-secondary">
        Explore Events
      </Link>
    </motion.div>
  </div>
</motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          variants={itemVariants}
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="glass-card p-6 rounded-xl text-center"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-grey mb-4">{feature.description}</p>

              <Link 
                href={feature.link}
                className="text-primary-navy hover:text-accent-blue transition-colors"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

   {/* CTA Section */}
<motion.section 
  className="py-16"
  style={{ backgroundImage: "url('/candlestick-patterns.webp')" }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  <div className="max-w-4xl mx-auto text-center px-4">
    <motion.h2 
      className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg"  // Added drop-shadow class here
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      Ready to Start Your Financial Journey?
    </motion.h2>
    <motion.p 
      className="text-xl text-gray-300 mb-8 drop-shadow-lg stroke-text" // Added stroke-text class here
      variants={itemVariants}
    >
      Join our community of aspiring financial professionals and gain access to exclusive resources and opportunities.
    </motion.p>
    <motion.div 
      className="flex flex-wrap justify-center gap-4"
      variants={itemVariants}
    >
      <Link href="/register" className="btn-primary bg-white text-primary-navy hover:bg-gray-100">
        Get Started
      </Link>
      <Link href="/team" className="btn-secondary border border-white">
        Meet the Team
      </Link>
    </motion.div>
  </div>
</motion.section>

      {/* Latest Events Preview */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="flex justify-between items-center mb-8"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Link 
              href="/events"
              className="text-primary-navy hover:text-accent-blue transition-colors"
            >
              View All Events →
            </Link>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {/* Event Preview Cards */}
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  Upcoming
                </span>
                <h3 className="text-xl font-semibold mb-2">Event Title</h3>
                <p className="text-gray-600 mb-4">Brief description of the upcoming event...</p>
                <Link 
                  href="/events"
                  className="btn-primary inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
