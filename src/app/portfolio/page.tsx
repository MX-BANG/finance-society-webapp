'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {
    title: 'Annual Trading Competition 2024',
    image: '/event1.jpg',
    description: 'The most competitive event of the year where students showcased their trading skills, competing for top prizes and recognition.',
  },
  {
    title: 'Investment Workshop Series',
    image: '/event2.jpg',
    description: 'A series of expert-led sessions on financial markets, investment strategies, and portfolio management.',
  },
  {
    title: 'Finance Society Networking Gala',
    image: '/event3.jpg',
    description: 'An exclusive networking event bringing together finance professionals, alumni, and students for insightful discussions and career opportunities.',
  },
  {
    title: 'Stock Market Simulation 2023',
    image: '/event4.jpg',
    description: 'An interactive, real-time stock market simulation where students managed portfolios and made strategic investment decisions.',
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-15 py-5">
      {/* Hero Section */}
      <motion.section className="relative h-[90vh] flex items-center justify-center text-center pt-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/portfolio-bg.jpg')" }} />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Event Highlights
          </motion.h1>
          <motion.p className="text-xl text-gray-200 mb-8">
            Relive the best moments from our past events.
          </motion.p>
        </div>
      </motion.section>

      {/* Events Section */}
      <motion.section className="py-16 space-y-20">
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            className={`max-w-6xl mx-auto flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={event.image} alt={event.title} width={700} height={500} className="rounded-lg shadow-lg" />
            <div>
              <h2 className="text-4xl font-bold mb-6">{event.title}</h2>
              <p className="text-xl text-gray-700">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Call-to-Action Footer */}
      <motion.section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to be part of our next event?</h2>
        <Link href="/join" className="btn-primary">Join the Finance Society</Link>
      </motion.section>
    </div>
  );
}
