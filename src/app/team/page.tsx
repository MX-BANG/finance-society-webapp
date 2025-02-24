'use client';

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'John Doe',
    role: 'President',
    bio: 'Finance professional with 5+ years of experience in investment banking.',
    image: '/team/john-doe.jpg',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
  {
    name: 'Jane Smith',
    role: 'Vice President',
    bio: 'Specializes in market analysis and trading strategies.',
    image: '/team/jane-smith.jpg',
    linkedin: 'https://linkedin.com/in/janesmith'
  },
  {
    name: 'Mike Johnson',
    role: 'Events Coordinator',
    bio: 'Experienced in organizing financial workshops and conferences.',
    image: '/team/mike-johnson.jpg',
    linkedin: 'https://linkedin.com/in/mikejohnson'
  }
];

const TeamPage = () => {
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
            Meet Our Team
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600"
            variants={itemVariants}
          >
            We are a group of passionate individuals dedicated to empowering future financial leaders through education and practical experience.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="glass-card p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="aspect-square rounded-full bg-gray-200 mb-4 overflow-hidden">
                {/* Placeholder for member image */}
                <div className="w-full h-full bg-primary-navy/10"></div>
              </div>
              <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
              <p className="text-primary-navy font-medium mb-3">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <a 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-navy hover:text-accent-blue transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate individuals to join our team. 
            If you're interested in contributing to the Finance Society, we'd love to hear from you.
          </p>
          <button className="btn-primary">
            Apply Now
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamPage;
