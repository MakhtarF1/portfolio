import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, Code2 } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: <Briefcase className="w-6 h-6" />, label: "CDI en Cours", value: "W.B.C.C." },
    { icon: <Code2 className="w-6 h-6" />, label: "Projets Réalisés", value: "10+" },
    { icon: <Award className="w-6 h-6" />, label: "Certifications", value: "6+" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              MAKHTAR FALL
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4"
          >
            Développeur Full Stack & Ingénieur Logiciel
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-blue-600 dark:text-teal-400 font-medium mb-8"
          >
            Technicien Supérieur en Développement Web & Mobile
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 text-gray-700 dark:text-gray-300 mb-10"
          >
            <a href="tel:+221770643381" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-teal-400 transition-colors">
              <Phone size={20} />
              <span>+221 77 064 33 81</span>
            </a>
            <a href="mailto:fallmakh026@gmail.com" className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-teal-400 transition-colors">
              <Mail size={20} />
              <span>fallmakh026@gmail.com</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={20} />
              <span>Dakar, Sénégal</span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-4 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/MakhtarF1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/makhtar-fall-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Développeur Full Stack passionné et expérimenté, actuellement en <strong className="text-blue-600 dark:text-teal-400">CDI chez W.B.C.C. (World Business Contact Center)</strong>, spécialisé dans la création d'applications web et mobiles innovantes à grande échelle. Je conçois et maintiens des solutions digitales sécurisées, dont une <strong className="text-blue-600 dark:text-teal-400">plateforme internationale de recherche d'emploi déployée dans plusieurs pays</strong>. Maîtrisant le développement frontend et backend, je mène des projets de bout en bout avec une approche axée sur la qualité, la sécurité et les bonnes pratiques DevOps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-500 to-teal-600 text-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
