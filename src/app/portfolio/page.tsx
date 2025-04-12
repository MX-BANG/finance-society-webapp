'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    title: 'International Conference on Islamic Banking & Finance (ICIBF)',
    images: ['/Portfolio/icibf1.webp', '/Portfolio/ftimg-4.webp', '/Portfolio/icibf2.webp'],
    description: 'The International Conference on Islamic Banking & Finance (ICIBF) is the Finance Society’s flagship event, held annually for 8 consecutive years. It has grown into a premier platform for discussing the latest trends, challenges, and innovations in Islamic finance.',
    themes: [
      'Sustainability and Ethical Finance: Explored the role of Islamic finance in promoting sustainable development and ethical investment practices.',
      'Digital Transformation: Focused on integrating FinTech, blockchain, and digital wallets in Islamic banking.',
      'Financial Inclusion: Highlighted the importance of microfinance and SMEs in driving economic growth in underdeveloped regions.'
    ],
    impact: [
      'The ICIBF has played a pivotal role in shaping the future of Islamic finance, fostering collaboration between academia and industry.',
      'It has empowered students with the knowledge and skills to address global financial challenges through an Islamic finance lens.',
    ]
  },
  {
    title: 'General Body Meetings (GBM)',
    images: ['/Portfolio/gbm2.webp', '/Portfolio/gbm3.webp', '/Portfolio/gbm1.webp'],
    description: 'General Body Meetings (GBMs) form the foundation of the Finance Society’s strategic planning and operational framework. These meetings bring together members to set goals, share ideas, and foster a sense of community.',
    themes: [
      'Strategic Planning: Outlined the society’s vision, mission, and key initiatives for the academic year.',
      'Team Building: Encouraged collaboration and leadership among members through interactive sessions and workshops.',
      'Event Roadmap: Discussed upcoming events, including workshops, competitions, and industry collaborations.'
    ],
    impact: [
      'The GBM has been instrumental in ensuring the society’s success, providing a clear direction for its activities.',
      'It has fostered a culture of teamwork and accountability, empowering members to take ownership of their roles.'
    ]
  },
  {
    title: 'Open House',
    images: ['/Portfolio/openhouse2.webp', '/Portfolio/ftimg-2.webp', '/Portfolio/openhouse3.webp'],
    description: 'The Open House events have been a cornerstone of the Finance Society’s outreach efforts, introducing students to the world of finance and the opportunities offered by the society',
    themes: [
      'Interactive Sessions: Engaged students through Q&A sessions, discussions, and networking opportunities..',
      'Onboarding: Provided students with information about the society’s mission, events, and membership benefits.',
      'Inclusivity: Welcomed students from diverse academic backgrounds, fostering a culture of inclusion and collaboration.'
    ],
    impact: [
      'The Open House has consistently attracted new members, expanding the society’s reach and impact.',
      'It has inspired students to explore finance-related topics and take their first steps toward financial literacy.'
    ]
  },
  {
    title: 'Industry Expert & Guest Speaker Sessions',
    images: ['/Portfolio/ftimg-1.webp', '/Portfolio/js-1.webp', '/Portfolio/guest-talk-3.webp'],
    description: 'The Finance Society has hosted numerous industry expert and guest speaker sessions, providing students with unparalleled insights into the financial world',
    themes: [
      'Sharing insights into market dynamics, investment strategies, and the future of the Pakistan Stock Exchange (PSX).',
      'Introduced students to mutual funds and launched the JS Campus Ambassador Program, offering hands-on experience in the financial industry.',
      'Focused on becoming a SMART and informed investor, with practical advice on equities, bonds, and risk management.'

    ],
    impact: [
      'Bridged the gap between academia and industry.',
      'Equipped students with the tools to excel in the financial sector'
    ]
  }
];

export default function PortfolioPage() {
  return (
    <div className="space-y-15 py-5">
      {/* Hero Section */}
      <motion.section className="relative h-[90vh] flex items-center justify-center text-center pt-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Logo/pe.webp"
            alt="Finance Society Events Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Past Events by Finance Society
          </motion.h1>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section className="py-16 space-y-20">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className="max-w-6xl mx-auto space-y-6 px-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {event.images.map((img, i) => (
                <div key={i} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={img}
                    alt={`${event.title} - Image ${i+1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>

            {/* Event Details */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6">{event.description}</p>
              
              <div className="text-left max-w-3xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Key Themes:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-8">
                  {event.themes.map((theme, i) => (
                    <li key={`theme-${i}`} className="text-base md:text-lg">{theme}</li>
                  ))}
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Impact:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {event.impact.map((impact, i) => (
                    <li key={`impact-${i}`} className="text-base md:text-lg">{impact}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}