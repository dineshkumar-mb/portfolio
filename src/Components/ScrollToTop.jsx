import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollToTop = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we are at the very top, force down arrow
      if (currentScrollY <= 50) {
        setScrollDirection('down');
      } 
      // If we are at the very bottom, force up arrow
      else if (currentScrollY + window.innerHeight >= document.documentElement.scrollHeight - 50) {
        setScrollDirection('up');
      }
      // Otherwise, track direction
      else if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = () => {
    if (scrollDirection === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-[0_8px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center border border-white/10"
        aria-label={scrollDirection === 'up' ? "Scroll to top" : "Scroll to bottom"}
      >
        <AnimatePresence mode="wait">
          {scrollDirection === 'up' ? (
            <motion.div
              key="up"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUp className="w-6 h-6 stroke-[2.5px]" />
            </motion.div>
          ) : (
            <motion.div
              key="down"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowDown className="w-6 h-6 stroke-[2.5px]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </AnimatePresence>
  );
};

export default ScrollToTop;
