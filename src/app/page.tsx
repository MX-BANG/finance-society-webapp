'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Import or define events data
const events = [
  {
    id: 1,
    title: 'IOBM Stock Challenge',
    date: 'April 29 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'Institute of Business and Management',
    description: 'Join our annual trading competition and test your skills in a simulated market environment. Prizes for top performers!',
    category: 'Competition',
    registrationDeadline: 'April 26, 2025',
    registrationLink: 'https://forms.gle/JkhGQmrToS2jauq27'
  },
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
    <div className="space-y-15 py-0">
      {/* Hero Section */}
      <motion.section 
        className="relative h-[90vh] flex items-center justify-center text-center pt-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/events/ISC Front-1.png"
            alt="Finance background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            IOBM Stock Challenge
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-200 mb-8"
            variants={itemVariants}
          >
            For the first time ever at Institute of Business Management, Finance
            Society is presenting an exciting competition that will mimic the
            real-world trading scenario,establishing the Trader&rsquo;s Mindset for the youth
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Link href="https://forms.gle/JkhGQmrToS2jauq27"  target="_blank" className="btn-primary">
              Register Now
            </Link>
            <Link href="/isc" className="btn-secondary">
              Explore
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
    {features.map((feature) => (
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
          className="text-primary-navy hover:text-accent-blue transition-colors group"
        >
          {feature.title === 'Our Portfolio' && (
            <>
              View Gallery <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
          {feature.title === 'Events & Competitions' && (
            <>
              Join Now <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
          {feature.title === 'Financial Magazine' && (
            <>
              Read Latest <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
          {feature.title === 'Expert Team' && (
            <>
              Meet Us <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
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
              <div className="w-full md:w-1/2 relative aspect-video">
                <Image
                  src="/Portfolio/ftimg-4.webp"
                  alt="ICIBF"
                  fill
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">International Conference on Islamic Banking & Finance (ICIBF)</h3>
                <p className="text-gray-600">
                  The International Conference on Islamic Banking & Finance (ICIBF) is the Finance Society&apos;s flagship
                  event, held annually for 8 consecutive years. It has grown into a premier platform for discussing the
                  latest trends, challenges, and innovations in Islamic finance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col md:flex-row items-center gap-16"
              variants={itemVariants}
            >
              <div className="w-full md:w-1/2 relative aspect-video">
                <Image
                  src="/Portfolio/ftimg-1.webp"
                  alt="JS Session"
                  fill
                  className="rounded-lg shadow-lg object-cover"
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
            variants={itemVariants}
          >
            Our Sponsors
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {[
              '/Sponsors/Meezan.webp',
              '/Sponsors/dubaiIslamic.webp',
              '/Sponsors/soneri.webp',
              '/Sponsors/bankislami.webp',
              '/Sponsors/AlBaraka.webp',
              '/Sponsors/Alfalah.webp',
              '/Sponsors/BML.webp',
              '/Sponsors/Pakqatar.webp',
              '/Sponsors/UBL.webp',
              '/Sponsors/MeezanInvest.webp',
              '/Sponsors/HabibMetro.webp',
              '/Sponsors/EFU.webp',
              '/Sponsors/NBP.webp',
              '/Sponsors/BOP.webp'
            ].map((src, index) => (
              <div key={index} className="relative h-24 w-full">
                <Image
                  src={src}
                  alt={`Sponsor ${index + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <motion.div 
            className="mt-8"
            variants={itemVariants}
          >
            <Link 
              href="/become-a-sponsor" 
              className="text-sm text-gray-500 hover:text-primary-navy transition-colors underline underline-offset-4 decoration-1"
            >
              Become a Sponsor
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
                  <Link
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    <motion.span
                      className="inline-block w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Register Now
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}