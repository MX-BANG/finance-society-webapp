'use client';

import { motion } from 'framer-motion';

const events = [
  {
    id: 1,
    title: 'Trading Competition 2024',
    date: 'March 15, 2024',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual Event',
    description: 'Join our annual trading competition and test your skills in a simulated market environment. Prizes for top performers!',
    category: 'Competition',
    registrationDeadline: 'March 10, 2024'
  },
  {
    id: 2,
    title: 'Investment Workshop Series',
    date: 'April 5-7, 2024',
    time: '2:00 PM - 5:00 PM',
    location: 'Finance Lab',
    description: 'Three-day workshop covering fundamental and technical analysis, portfolio management, and risk assessment.',
    category: 'Workshop',
    registrationDeadline: 'April 1, 2024'
  },
  {
    id: 3,
    title: 'FinTech Innovation Summit',
    date: 'May 20, 2024',
    time: '9:00 AM - 6:00 PM',
    location: 'Main Auditorium',
    description: 'Explore the intersection of finance and technology with industry leaders and innovative startups.',
    category: 'Conference',
    registrationDeadline: 'May 15, 2024'
  }
];

const EventsPage = () => {
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

  return (
    <div className="section-padding py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Upcoming Events
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600"
            variants={itemVariants}
          >
            Join us for exciting events, workshops, and competitions designed to enhance your financial knowledge and skills.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to stay updated on upcoming events and opportunities.
          </p>
          <button className="btn-secondary">
            Subscribe to Updates
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EventsPage;
