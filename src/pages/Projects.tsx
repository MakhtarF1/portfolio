import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, Code, Database, Globe, 
  Figma, BrushIcon, PaletteIcon, 
  LayoutGridIcon, Smartphone 
} from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const projectCategories = [
    'Tous', 'Backend', 'Frontend', 'Mobile', 'UI/UX'
  ];

  const projects = [
    {
      title: "API Réseau Social Tailleurs",
      description: "Développement backend d'une API pour un réseau social dédié aux tailleurs, avec gestion des utilisateurs et de leurs créations.",
      technologies: ["Node.js", "TypeScript", "Prisma", "MongoDB", "Cloudinary", "Docker"],
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&auto=format&fit=crop&q=60",
      github: "https://github.com/MakhtarF1/projet-tailleur-backend-teste.git",
      live: "https://projet-tailleur-backendteste.onrender.com/api-docs-tailleur/",
      category: ['Backend'],
      uiUxDescription: "Interface utilisateur épurée avec des composants modulaires pour la gestion des profils de tailleurs.",
      figmaLink: "https://www.figma.com/file/votre-design-tailleur"
    },
    {
      title: "Gestion des Apprenants",
      description: "Développement backend d'une API pour la gestion des apprenants, des référentiels et des notes.",
      technologies: ["Laravel", "PostgreSQL", "Firebase"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
      github: "https://github.com/MakhtarF1/ProjetGestionApprenantLaravel.git",
      live: "https://projet-gestion-apprenants.com",
      category: ['Backend', 'Frontend'],
      uiUxDescription: "Tableau de bord responsive avec des visualisations de données et des graphiques interactifs.",
      figmaLink: "https://www.figma.com/file/votre-design-apprenants"
    },
    {
      title: "Gestion de Boutique",
      description: "Développement d'une API backend pour la gestion d'une boutique en ligne, incluant la gestion des produits, des commandes et des utilisateurs.",
      technologies: ["Laravel", "MySQL", "Vue.js"],
      image: "https://images.ctfassets.net/8dreszsahte7/0611cf2bff814b50a2d581be116c5c3a/d9971d72a6f389cca9b405a80d850be2/image.png?w=310&h=210&q=100&fm=png&fit=fill&bg=transparent",
      github: "https://github.com/MakhtarF1/gestion-dette-laravel.git",
      live: "https://projet-gestion-boutique.com", // Remplacez par le lien réel si nécessaire
      category: ['Backend', 'Frontend'],
      uiUxDescription: "Interface utilisateur intuitive pour la gestion des produits et des commandes.",
      figmaLink: "https://www.figma.com/file/votre-design-boutique"
    },
    {
      title: "Application de Cargaison",
      description: "Développement d'une plateforme web de gestion de cargaisons permettant le suivi des expéditions.",
      technologies: ["HTML", "Tailwind CSS", "PHP", "TypeScript"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
      github: "https://github.com/MakhtarF1/Cargaison.git",
      live: "https://projet-cargaison.com",
      category: ['Frontend', 'UI/UX'],
      uiUxDescription: "Design moderne avec une navigation intuitive et des composants de suivi en temps réel.",
      figmaLink: "https://www.figma.com/file/votre-design-cargaison"
    },
    {
      title: "Application Wave",
      description: "Développement mobile d'une application de gestion de transactions comme wave avec Flutter(GetX).",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: "https://www.shutterstock.com/image-vector/mobile-money-transfer-app-web-260nw-1197934099.jpg",
      github: "https://github.com/MakhtarF1/waveMobile.git",
      live: "https://projet-wave.com",
      category: ['Mobile', 'UI/UX'],
      uiUxDescription: "Interface mobile élégante avec des interactions fluides et un design centré sur l'utilisateur.",
      figmaLink: "https://www.figma.com/file/votre-design-wave"
    },
    {
      title: "Portfolio Personnel",
      description: "Design et développement d'un portfolio personnel mettant en valeur mes compétences et projets.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop&q=60",
      github: "https://github.com/MakhtarF1/portfolio.git",
      live: "https://votre-portfolio.com",
      category: ['Frontend', 'UI/UX'],
      uiUxDescription: "Design minimaliste et responsive avec des animations subtiles et une navigation intuitive.",
      figmaLink: "https://www.figma.com/file/votre-design-portfolio"
    }
  ];

  const filteredProjects = activeFilter === 'Tous' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Mes Projets & Designs
        </motion.h1>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.image}
                githubUrl={project.github}
                liveUrl={project.live}
                uiUxDescription={project.uiUxDescription}
                figmaLink={project.figmaLink}
              />
            </motion.div>
          ))}
        </div>

        {/* Design & UI/UX Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Compétences en Design & UI/UX
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Figma />, title: 'Figma', description: 'Prototypage & Design' },
              { icon: <BrushIcon />, title: 'Design', description: 'Création d\'interfaces' },
              { icon: <PaletteIcon />, title: 'UI', description: 'Design d\'interface' },
              { icon: <LayoutGridIcon />, title: 'UX', description: 'Expérience utilisateur' },
              { icon: <Smartphone />, title: 'Responsive', description: 'Design adaptatif' },
              { icon: <Code />, title: 'Intégration', description: 'Code & Design' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-violet-600 dark:text-violet-400 mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
