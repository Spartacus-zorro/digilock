'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { footerData } from '@/data/data';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-black"
          >
            {footerData.companyName}
          </motion.a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Contact
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
            >
              Let's Talk
            </motion.a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
