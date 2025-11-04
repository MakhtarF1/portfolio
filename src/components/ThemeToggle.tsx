import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-3 rounded-full bg-gradient-to-br from-blue-500 to-teal-600 text-white z-50 shadow-lg hover:shadow-xl transition-shadow"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </motion.button>
  );
};

export default ThemeToggle;
