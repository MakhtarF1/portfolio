import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            MAKHTAR FALL
          </h1>
          <h2 className="text-xl md:text-2xl text-violet-600 dark:text-violet-400 mb-6">
            Développeur Full Stack
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600 dark:text-gray-300 mb-8">
            <a href="tel:+221770643381" className="flex items-center gap-2 hover:text-violet-600">
              <Phone size={18} />
              +221 77 064 33 81
            </a>
            <a href="mailto:fallmakh026@gmail.com" className="flex items-center gap-2 hover:text-violet-600">
              <Mail size={18} />
              fallmakh026@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={18} />
              Senegal, Dakar, Grd-Mbao
            </span>
          </div>

          <div className="flex justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://https://github.com/MakhtarF1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-900 dark:text-violet-100"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.linkedin.com/in/makhtar-fall-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-violet-100 dark:bg-violet-900 text-violet-900 dark:text-violet-100"
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Développeur Full Stack passionné et expérimenté, spécialisé dans la création 
            d'applications web et mobiles innovantes. Maîtrisant le développement frontend 
            et backend, je mène des projets de bout en bout avec une approche axée sur la 
            qualité et les bonnes pratiques.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;