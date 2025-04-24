'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
  {
    name: 'Manesh Kumar',
    role: 'President',
    bio: 'Investment Analyst at Lumida Wealth.',
    image: '/Team/Manesh.webp',
    linkedin: 'https://www.linkedin.com/in/maneshkh/',
    category: 'Top Bodies'
  },
  {
    name: 'Ayesha Issa',
    role: 'Vice President',
    bio: 'Specializes in market analysis and trading strategies.',
    image: '/Team/AyeshaIssa.webp',
    linkedin: 'https://www.linkedin.com/in/ayesha-issa-3b999b279/',
    category: 'Top Bodies'
  },
  {
    name: 'Manoj Kumar',
    role: 'Vice President',
    bio: 'Specializes in market analysis and trading strategies.',
    image: '/Team/ManojLohana.webp',
    linkedin: 'https://www.linkedin.com/in/manoj-lohana/',
    category: 'Top Bodies'
  },
  {
    name: 'Muhammad Hammad',
    role: 'General Secretary',
    bio: 'The driving force behind our operations as General Secretary!',
    image: '/Team/MuhammadHammad.webp',
    linkedin: 'https://www.linkedin.com/in/muhammad-h-4ab414203/',
    category: 'Top Bodies'
  },
  {
    name: 'Hafsa Sohail',
    role: 'Finance Secretary',
    bio: 'overseeing budgets and ensuring smooth financial operations.',
    image: '/Team/HafsaSohail.webp',
    linkedin: 'https://www.linkedin.com/in/hafsa-sohail-943931330/',
    category: 'Top Bodies'
  },
  {
    name: 'Isra Ghous',
    role: 'Group Head',
    bio: 'leading strategic initiatives and financial leadership within Finance Society',
    image: '/Team/IsraGhous.webp',
    linkedin: 'https://www.linkedin.com/in/isra-ghous-1a5511244/',
    category: 'Top Bodies'
  },
  {
    name: 'Hussain Abbas',
    role: 'Group Head',
    bio: 'Group Head of Finance Society, steering financial strategy and fostering collaborative team growth',
    image: '/Team/HussainAbbas.webp',
    linkedin: 'https://www.linkedin.com/in/hussainabbas4144/',
    category: 'Top Bodies'
  },
  {
    name: 'Moiz Ali Siddiqui',
    role: 'Developer',
    bio: 'Full Stack Developer with AI integration expertise.',
    image: '/Team/moiz-picture.webp',
    linkedin: 'https://www.linkedin.com/in/moizalisiddiqui/',
    category: 'Top Bodies'
  },

  // Marketing
  {
    name: 'Arej Khan',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Arej Khan.webp',
    linkedin: 'https://www.linkedin.com/in/arej-fasih-730782283/',
    category: 'Marketing'
  },
  {
    name: 'Khadija Akbar',
    role: 'Director',
    bio: '',
    image: '/Directors/Khadija Akbar.webp',
    linkedin: '#',
    category: 'Marketing'
  },
  {
    name: 'Haris Alam',
    role: 'Director',
    bio: '',
    image: '/Directors/Syed Haris Alam.webp',
    linkedin: '#',
    category: 'Marketing'
  },
  {
    name: 'Manahil Qadeer Khan',
    role: 'Director',
    bio: '',
    image: '/Directors/Manahil Qadeer Khan.webp',
    linkedin: '#',
    category: 'Marketing'
  },
  // {
  //   name: 'Hamza Naseem Elahi',
  //   role: 'Director',
  //   bio: '',
  //   image: '/Directors/Hamza Naseem Elahi.webp',
  //   linkedin: '#',
  //   category: 'Marketing'
  // },

  // Publications
  {
    name: 'Mahnoor Sajid Khan',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Mahnoor sajid Khan.webp',
    linkedin: 'https://www.linkedin.com/in/mahnoor-sajid-khan-24b99327b/',
    category: 'Publications'
  },
  {
    name: 'Amna Ayub Siddiqui',
    role: 'Director',
    bio: '',
    image: '/Team/pfpicon.webp',
    linkedin: '#',
    category: 'Publications'
  },
  {
    name: 'Syed Ibrahim Hussain',
    role: 'Director',
    bio: '',
    image: '/Directors/Syed Ibrahim Hussain.webp',
    linkedin: '#',
    category: 'Publications'
  },

  // HR
  {
    name: 'Mustabshirah Hanif',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Mustabshirah Hanif.webp',
    linkedin: 'https://www.linkedin.com/in/mustabshirah-hanif/',
    category: 'HR'
  },
  {
    name: 'Pranjal Kumari',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Pranjal Kumari.webp',
    linkedin: 'https://www.linkedin.com/in/pranjal-kumari-b59207282/',
    category: 'HR'
  },
  {
    name: 'Imamah Hanif',
    role: 'Director',
    bio: '',
    image: '/Directors/Imamah Hanif.webp',
    linkedin: '#',
    category: 'HR'
  },
  {
    name: 'Muhammad Ibrahim',
    role: 'Director',
    bio: '',
    image: '/Directors/Muhammad Ibrahim.webp',
    linkedin: '#',
    category: 'HR'
  },
  {
    name: 'Sameen Syed',
    role: 'Director',
    bio: '',
    image: '/Directors/Sameen Syed.webp',
    linkedin: '#',
    category: 'HR'
  },
  {
    name: 'Kalpana Ratan',
    role: 'Director',
    bio: '',
    image: '/Directors/Kalpana Ratan.webp',
    linkedin: '#',
    category: 'HR'
  },
  {
    name: 'Aizah Rasheed',
    role: 'Director',
    bio: '',
    image: '/Directors/Aizah Rasheed.webp',
    linkedin: '#',
    category: 'HR'
  },

  // Events
  {
    name: 'Maha Yasir',
    role: ' Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Maha Yasir.webp',
    linkedin: 'https://www.linkedin.com/in/maha-yasir-a37768286/',
    category: 'Events'
  },
  {
    name: 'Faiz Khan Nizamani',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Faiz Khan Nizamani.webp',
    linkedin: 'https://www.linkedin.com/in/faiz-khan-nizamani/',
    category: 'Events'
  },
  {
    name: 'Syed Usarim Ali Shah',
    role: 'Director',
    bio: '',
    image: '/Directors/Syed Usarim Ali Shah.webp',
    linkedin: '#',
    category: 'Events'
  },
  {
    name: 'Javeria Abdul Wahid',
    role: 'Director',
    bio: '',
    image: '/Directors/Javeria Abdul Wahid.webp',
    linkedin: '#',
    category: 'Events'
  },
  
  

  // Corporate
  {
    name: 'Abdul Qadir',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Abdul Qadir.webp',
    linkedin: 'https://www.linkedin.com/in/abdul-qadir-akhlaq/',
    category: 'Corporate'
  },
  {
    name: 'Lerish',
    role: 'Director',
    bio: '',
    image: '/Directors/Lerish.webp',
    linkedin: '#',
    category: 'Corporate'
  },
  {
    name: 'Muhammad Umair',
    role: 'Director',
    bio: '',
    image: '/Directors/Muhammad Umair.webp',
    linkedin: '#',
    category: 'Corporate'
  },
  {
    name: 'Humna Sajjad',
    role: 'Director',
    bio: '',
    image: '/Directors/Humna Sajjad.webp',
    linkedin: '#',
    category: 'Corporate'
  },
  {
    name: 'Israh Mazhar',
    role: 'Director',
    bio: '',
    image: '/Directors/Israh Mazhar.webp',
    linkedin: '#',
    category: 'Corporate'
  },

  // Logistics
  {
    name: 'Syed M Ali',
    role: 'Executive Director',
    bio: '',
    image: '/ExecutiveDirectors/Syed Mohammad Ali.webp',
    linkedin: '#',
    category: 'Logistics'
  },
  {
    name: 'M Taha',
    role: 'Director',
    bio: '',
    image: '/Directors/Muhammad Taha.webp',
    linkedin: '#',
    category: 'Logistics'
  },
  {
    name: 'Usman Ul Haq',
    role: 'Director',
    bio: '',
    image: '/Directors/Usman Ul Haq.webp',
    linkedin: '#',
    category: 'Logistics'
  },
  {
    name: 'Hammadullah Khan',
    role: 'Director',
    bio: '',
    image: '/Directors/Hammadullah Khan.webp',
    linkedin: '#',
    category: 'Logistics'
  }
];

const TeamPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Top Bodies');
  const categories = ['Top Bodies', 'HR', 'Marketing', 'Events', 'Corporate', 'Logistics', 'Publications'];

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

  const filteredMembers = teamMembers.filter(member => member.category === selectedCategory);
  
  return (
    <div className="section-padding py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        {/* Header Section */}
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

        {/* Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? 'bg-primary-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Show ${category} team members`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Team Members Grid - PRESERVING ORIGINAL SIZES */}
        {filteredMembers.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {filteredMembers.map((member) => (
              <motion.div
                key={`${member.name}-${member.role}`}
                className="glass-card p-6 rounded-xl flex flex-col" // Your original card class
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Image - PRESERVING ORIGINAL SIZE */}
                <div className="aspect-square rounded-full bg-gray-200 mb-4 overflow-hidden w-full">
                  <Image
                    src={member.image}
                    alt={`${member.name}'s profile`} // Fixed alt text
                    width={300} // Your original size
                    height={300} // Your original size
                    className="object-cover w-full h-full" // Your original styling
                  />
                </div>

                <h2 className="text-xl font-semibold mb-2 text-center">{member.name}</h2>
                <p className="text-primary-navy font-medium mb-3 text-center">{member.role}</p>
                {member.bio && <p className="text-gray-600 mb-4 text-center">{member.bio}</p>}
                
                {member.linkedin && member.linkedin !== '#' && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto mx-auto inline-flex items-center text-primary-navy hover:text-accent-blue transition-colors"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <span>Connect on LinkedIn</span>
                    <svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.p 
            className="text-center text-gray-600 py-12"
            variants={itemVariants}
          >
            No team members found in this category.
          </motion.p>
        )}

        {/* Join Our Team Section */}
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re always looking for passionate individuals to join our team. 
            If you&apos;re interested in contributing to the Finance Society, we&apos;d love to hear from you.
          </p>
          <Link 
            href="https://forms.gle/qNLhAnMURrMwFAoe7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Apply Now
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TeamPage;