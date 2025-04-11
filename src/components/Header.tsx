'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authApi } from '../services/authApi'; // Corrected import path
import Button from './Button';

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const user = authApi.getCurrentUser();
      setCurrentUser(user);
    };
    
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    authApi.logout();
    setCurrentUser(null);
    router.push('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3"> {/* Changed from py-4 to py-3 */}
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-navy">
            <img src="/Logo/Finance Society.webp" alt="Finance Society Logo" className="h-16 w-auto custom-logo" /> {/* Changed from h-16 to h-14 */}
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-navy">Home</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-primary-navy">Portfolio</Link>
            <Link href="/magazine" className="text-gray-600 hover:text-primary-navy">Magazine</Link>
            <Link href="/events" className="text-gray-600 hover:text-primary-navy">Events</Link>
            <Link href="/team" className="text-gray-600 hover:text-primary-navy">Team</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-3 space-y-3"> {/* Changed from py-4 space-y-4 */}
            <Link href="/" className="block text-gray-600 hover:text-primary-navy">Home</Link>
            <Link href="/portfolio" className="block text-gray-600 hover:text-primary-navy">Portfolio</Link>
            <Link href="/magazine" className="block text-gray-600 hover:text-primary-navy">Magazine</Link>
            <Link href="/events" className="block text-gray-600 hover:text-primary-navy">Events</Link>
            <Link href="/team" className="block text-gray-600 hover:text-primary-navy">Team</Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;