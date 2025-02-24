'use client';

import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  onClick?: () => void;
}

const Card = ({ 
  children, 
  className = '', 
  animate = true,
  onClick
}: CardProps) => {
  const baseStyles = 'glass-card rounded-xl overflow-hidden';
  
  if (!animate) {
    return (
      <div 
        className={`${baseStyles} ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={`${baseStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;
