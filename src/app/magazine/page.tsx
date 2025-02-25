'use client';

import { motion } from 'framer-motion';
import { useState } from 'react'; // Import useState
import Link from 'next/link'; // Import Link
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
    excerpt: 'A comprehensive guide to understanding and navigating market volatility in today\'s dynamic financial landscape.',
    image: '/articles/market-volatility.jpg',
  },
  {
    id: 2,
    title: 'The Rise of Sustainable Investing',
    category: 'ESG',
    author: 'Michael Chen',
    date: 'February 25, 2024',
    readTime: '7 min read',
    excerpt: 'Exploring the growing trend of ESG investing and its impact on portfolio management strategies.',
    image: '/articles/sustainable-investing.jpg',
  },
  {
    id: 3,
    title: 'Cryptocurrency: A Technical Analysis',
    category: 'Crypto',
    author: 'Alex Thompson',
    date: 'February 22, 2024',
    readTime: '10 min read',
    excerpt: 'Deep dive into the technical aspects of cryptocurrency trading and blockchain technology.',
    image: '/articles/crypto-analysis.jpg',
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
  const [selectedCategory, setSelectedCategory] = useState('All Articles'); // State to track selected category

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

  // Filter articles based on selected category
  const filteredArticles = selectedCategory === 'All Articles'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

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
              onClick={() => setSelectedCategory(category)} // Update selected category on click
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Article */}
        <motion.div
          className="relative h-[400px] rounded-2xl overflow-hidden mb-16"
          variants={itemVariants}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
          <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
            <span className="text-sm font-medium mb-2">Featured Article</span>
            <h2 className="text-3xl font-bold mb-4">The Future of Financial Technology</h2>
            <p className="text-gray-200 mb-6 max-w-2xl">
              Discover how emerging technologies are reshaping the financial industry and what it means for investors.
            </p>
            <Button variant="primary">Read Article</Button>
          </div>
        </motion.div>

        {/* Articles Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {filteredArticles.map((article) => (
            <Card key={article.id} className="p-0">
              <div
                className="aspect-video bg-gray-100 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }} // Use the article image
              />
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Card>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MagazinePage;