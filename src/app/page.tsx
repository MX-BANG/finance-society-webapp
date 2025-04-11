'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// Import or define events data
const events = [
  {
    id: 1,
    title: 'Trading Competition 2024',
    date: 'March 15, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual Event',
    description: 'Join our annual trading competition and test your skills in a simulated market environment. Prizes for top performers!',
    category: 'Competition',
    registrationDeadline: 'March 10, 2024'
  },
  {
    id: 2,
    title: 'Investment Workshop Series',
    date: 'April 5, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Finance Lab',
    description: 'Three-day workshop covering fundamental and technical analysis, portfolio management, and risk assessment.',
    category: 'Workshop',
    registrationDeadline: 'April 1, 2024'
  },
  {
    id: 3,
    title: 'FinTech Innovation Summit',
    date: 'May 20, 2025',
    time: '9:00 AM - 6:00 PM',
    location: 'Main Auditorium',
    description: 'Explore the intersection of finance and technology with industry leaders and innovative startups.',
    category: 'Conference',
    registrationDeadline: 'May 15, 2024'
  }
];

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
      title: 'Our Portfolio',
      description: 'Experience our past events and discover the moments that made them unforgettable.',
      icon: '📈',
      link: '/portfolio'
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
    <div className="space-y-15 py-5">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[90vh] flex items-center justify-center text-center pt-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/stocksbg.webp')" }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-20">
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

      {/* Featured Events Section */}
      <motion.section 
        className="py-16 space-y-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div 
          className="max-w-6xl mx-auto px-4"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Events</h2>
          
          <div className="space-y-24">
          <motion.div 
              className="flex flex-col md:flex-row-reverse items-center gap-16"
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src="/Portfolio/ftimg-4.webp" 
                  alt="ICIBF" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">International Conference on Islamic Banking & Finance (ICIBF)</h3>
                <p className="text-gray-600">
                The International Conference on Islamic Banking & Finance (ICIBF) is the Finance Society’s flagship
                event, held annually for 8 consecutive years. It has grown into a premier platform for discussing the
                latest trends, challenges, and innovations in Islamic finance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center gap-16"
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src="/Portfolio/ftimg-1.webp" 
                  alt="JS Session" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">JS Session</h3>
                <p className="text-gray-600">
                  Introduced students to mutual funds and launched the JS Campus Ambassador Program, offering hands-on experience in the financial industry.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Sponsors Section */}
      <motion.section 
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-navy mb-6"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            Our Sponsors
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <img src="/Sponsors/Meezan.webp" alt="Sponsor 1" className="object-contain h-24" />
          <img src="/Sponsors/dubaiIslamic.webp" alt="Sponsor 2" className="object-contain h-24" />
          <img src="/Sponsors/soneri.webp" alt="Sponsor 3" className="object-contain h-24" />
          <img src="/Sponsors/bankislami.webp" alt="Sponsor 4" className="object-contain h-24" />
          <img src="/Sponsors/AlBaraka.webp" alt="Sponsor 5" className="object-contain h-24" />
          <img src="/Sponsors/Alfalah.webp" alt="Sponsor 6" className="object-contain h-24" />
          <img src="/Sponsors/BML.webp" alt="Sponsor 7" className="object-contain h-24" />
          <img src="/Sponsors/Pakqatar.webp" alt="Sponsor 8" className="object-contain h-24" />
          <img src="/Sponsors/UBL.webp" alt="Sponsor 9" className="object-contain h-24" />
          <img src="/Sponsors/MeezanInvest.webp" alt="Sponsor 10" className="object-contain h-24" />
          <img src="/Sponsors/HabibMetro.webp" alt="Sponsor 11" className="object-contain h-24" />
          <img src="/Sponsors/EFU.webp" alt="Sponsor 12" className="object-contain h-24" />
          <img src="/Sponsors/faysalBank.webp" alt="Sponsor 13" className="object-contain h-24" />
          <img src="/Sponsors/NBP.webp" alt="Sponsor 14" className="object-contain h-24" />
          <img src="/Sponsors/BOP.webp" alt="Sponsor 15" className="object-contain h-24" />
          </div>
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
            {events.map((event) => (
              <motion.div
                key={event.id}
                className="glass-card p-6 rounded-xl"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                      ${event.category === 'Competition' ? 'bg-blue-100 text-blue-800' : 
                        event.category === 'Workshop' ? 'bg-green-100 text-green-800' : 
                        'bg-purple-100 text-purple-800'}`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </motion.button>
                </div>

                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Registration Deadline: {event.registrationDeadline}
                  </p>
                  <motion.button
                    className="btn-primary w-full"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Register Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}