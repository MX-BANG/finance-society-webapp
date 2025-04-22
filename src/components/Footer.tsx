'use client';

import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white py-6">
        <div className="flex justify-center space-x-6 mt-0">
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/company/finance-society-of-iobm/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          {/* Instagram Icon */}
          <a 
            href="https://www.instagram.com/fs.iobm20/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/portfolio" className="text-white hover:underline">Portfolio</a>
          <a href="/magazine" className="text-white hover:underline">Magazine</a>
          <a href="/events" className="text-white hover:underline">Events</a>
          <a href="/team" className="text-white hover:underline">Team</a>
        </div>
        <div className="container mx-auto text-center mt-3">
      <p className="text-sm">
          &copy; {new Date().getFullYear()} Finance Society. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
