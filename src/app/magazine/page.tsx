'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from '../../components/Card';
import Button from '../../components/Button';

const articles = [
  {
    id: 1,
    title: 'Understanding Market Volatility',
    category: 'Market Analysis',
    author: 'Sarah Johnson',
    date: 'February 28, 2024',
    readTime: '5 min read',
    excerpt: 'A comprehensive guide to understanding and navigating market volatility in today&apos;s dynamic financial landscape.',
    image: '/Magazine/Magzinetest.webp',
    link: 'https://open.substack.com/pub/stockinsider/p/warren-buffett-sells-the-s-and-p500?utm_campaign=post&utm_medium=web',
  },
  {
    id: 2,
    title: 'The Rise of Sustainable Investing',
    category: 'ESG',
    author: 'Michael Chen',
    date: 'February 25, 2024',
    readTime: '7 min read',
    excerpt: 'Exploring the growing trend of ESG investing and its impact on portfolio management strategies.',
    image: '/Magazine/mag1.webp',
    link: '/magazine/the-rise-of-sustainable-investing',
  },
  {
    id: 3,
    title: 'Cryptocurrency: A Technical Analysis',
    category: 'Crypto',
    author: 'Alex Thompson',
    date: 'February 22, 2024',
    readTime: '10 min read',
    excerpt: 'Deep dive into the technical aspects of cryptocurrency trading and blockchain technology.',
    image: '/Magazine/crypto.webp',
    link: '/magazine/cryptocurrency-technical-analysis',
  },
];

const categories = [
  'All Articles',
  'Market Analysis',
  'Trading Strategies',
  'ESG',
  'Crypto',
  'Personal Finance',
];

const MagazinePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const filteredArticles = selectedCategory === 'All Articles'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email.includes('@') || !email.includes('.')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      console.log('Mock subscription for:', email);
      setIsSubscribed(true);
      setEmail('');
      setIsLoading(false);
      
      // Reset subscription message after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1000);
  };

  return (
    <div className="section-padding py-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            Finance Society Magazine
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            variants={itemVariants}
          >
            Stay informed with the latest insights, analysis, and trends in finance.
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
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${
                  selectedCategory === category
                    ? 'bg-primary-navy text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filteredArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Link href={article.link} passHref legacyBehavior>
                <a className="block h-full" aria-label={`Read ${article.title}`}>
                  <Card className="p-0 h-full flex flex-col">
                    <div className="relative aspect-video">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-4">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Card>
                </a>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-primary-navy text-white rounded-2xl p-8 md:p-12 mt-16"
          variants={itemVariants}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-300 mb-6">
              Get the latest financial insights and analysis delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow max-w-md"
                required
                aria-label="Email address for newsletter subscription"
                disabled={isLoading}
              />
              <Button 
                variant="secondary" 
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            
            {/* Success message */}
            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg inline-block"
              >
                Thank you for subscribing! 🎉
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MagazinePage;