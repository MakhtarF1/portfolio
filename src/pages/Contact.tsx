import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Message envoyé avec succès! Je vous répondrai dans les plus brefs délais.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "+221 77 064 33 81",
      href: "tel:+221770643381"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "fallmakh026@gmail.com",
      href: "mailto:fallmakh026@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localisation",
      value: "Dakar, Grand-Mbao, Sénégal"
    }
  ];

  const references = [
    {
      name: "Birane Baillo Wane",
      role: "Coach Formateur - Orange Digital Center",
      email: "douvewane@gmail.com",
      phone: "777 66 95 95"
    },
    {
      name: "Aly Tall Niang",
      role: "Coach Formateur - Orange Digital Center",
      email: "niangalytall@gmail.com",
      phone: "771 82 54 14"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          Contactez-moi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Vous avez un projet en tête ? N'hésitez pas à me contacter.
          Je serais ravi de discuter de vos besoins.
        </motion.p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-600 dark:text-teal-400" />
                Informations de contact
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="text-blue-600 dark:text-teal-400 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-teal-400 font-medium transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white font-medium">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600 dark:text-teal-400" />
                Références Professionnelles
              </h2>
              <div className="space-y-4">
                {references.map((ref, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + 0.1 * index }}
                    className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg"
                  >
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {ref.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {ref.role}
                    </p>
                    <div className="space-y-1 text-sm">
                      <a
                        href={`mailto:${ref.email}`}
                        className="block text-blue-600 dark:text-teal-400 hover:underline"
                      >
                        {ref.email}
                      </a>
                      <a
                        href={`tel:+221${ref.phone.replace(/\s/g, '')}`}
                        className="block text-gray-700 dark:text-gray-300"
                      >
                        {ref.phone}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg h-full">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-blue-600 dark:text-teal-400" />
                Envoyez-moi un message
              </h2>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800"
                >
                  {status}
                </motion.div>
              )}
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all"
                    required
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Votre message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 dark:focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    required
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  <Send size={18} />
                  Envoyer le message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
