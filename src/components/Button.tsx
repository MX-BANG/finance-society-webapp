'use client';

import { motion, MotionProps } from 'framer-motion';
import { ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  children: React.ReactNode;
};

type ButtonProps = ButtonBaseProps & 
  ButtonHTMLAttributes<HTMLButtonElement> & 
  MotionProps;

const Button = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-blue';
  const variantStyles = {
    primary: 'bg-primary-navy text-white hover:bg-opacity-90',
    secondary: 'bg-primary-grey text-white hover:bg-opacity-90'
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;