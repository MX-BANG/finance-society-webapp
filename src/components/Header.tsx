'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-navy" aria-label="Finance Society Home">
            <Image
              src="/Logo/Finance Society.webp" 
              alt="Finance Society Logo"
              width={160}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/magazine">Magazine</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/team">Team</NavLink>
          </div>

          <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>

        <MobileMenu isOpen={isOpen}>
          <MobileNavLink href="/" setIsOpen={setIsOpen}>Home</MobileNavLink>
          <MobileNavLink href="/portfolio" setIsOpen={setIsOpen}>Portfolio</MobileNavLink>
          <MobileNavLink href="/magazine" setIsOpen={setIsOpen}>Magazine</MobileNavLink>
          <MobileNavLink href="/events" setIsOpen={setIsOpen}>Events</MobileNavLink>
          <MobileNavLink href="/team" setIsOpen={setIsOpen}>Team</MobileNavLink>
        </MobileMenu>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-gray-600 hover:text-primary-navy transition-colors duration-200">
    {children}
  </Link>
);

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileNavLink = ({ href, children, setIsOpen }: MobileNavLinkProps) => (
  <Link 
    href={href} 
    className="block py-2 text-gray-600 hover:text-primary-navy transition-colors duration-200"
    onClick={() => setIsOpen(false)}
  >
    {children}
  </Link>
);

const MobileMenuButton = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) => (
  <button 
    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-navy"
    onClick={onClick}
    aria-label="Toggle menu"
    aria-expanded={isOpen}
  >
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {isOpen ? (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      )}
    </svg>
  </button>
);

interface MobileMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const MobileMenu = ({ isOpen, children }: MobileMenuProps) => (
  <motion.div
    initial={false}
    animate={{ 
      height: isOpen ? 'auto' : 0,
      opacity: isOpen ? 1 : 0
    }}
    transition={{ duration: 0.2 }}
    className="md:hidden overflow-hidden"
    aria-hidden={!isOpen}
  >
    <div className="py-3 space-y-3">
      {children}
    </div>
  </motion.div>
);

export default Header;