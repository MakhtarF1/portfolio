import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", label: "Accueil" },
    { path: "/about", label: "À Propos" },
    { path: "/projects", label: "Projets" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* === NAVBAR DESKTOP === */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
            >
              MF
            </NavLink>

            {/* Liens principaux */}
            <div className="flex space-x-8 items-center">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors font-medium ${
                      isActive ? "text-blue-600 dark:text-teal-400" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              {/* Bouton Télécharger CV */}
              <a
                href="/cv/Cv_Makhtar_FALL.pdf"
                download="Cv_Makhtar_FALL.pdf"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Download size={18} />
                <span>Télécharger CV</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* === NAVBAR MOBILE === */}
      <div className="fixed bottom-4 left-4 z-50 md:hidden">
        {/* Bouton menu */}
        <button
          className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} className="text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu size={24} className="text-gray-700 dark:text-gray-300" />
          )}
        </button>

        {/* Menu déroulant */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, transformOrigin: "bottom left" }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute bottom-full mb-3 ml-1 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="p-2 space-y-1">
                {links.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors rounded-md ${
                        isActive
                          ? "text-blue-600 dark:text-teal-400 bg-blue-50 dark:bg-teal-900/20"
                          : ""
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                {/* Bouton Télécharger CV mobile */}
                <a
                  href="/cv/Cv_Makhtar_FALL.pdf"
                  download="Cv_Makhtar_FALL.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2 mt-2 text-white bg-gradient-to-r from-blue-600 to-teal-600 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <Download size={18} />
                  <span>CV</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
