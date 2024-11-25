import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "API Réseau Social Tailleurs",
      description: "Backend développé avec Node.js, TypeScript, et MongoDB. Gestion des utilisateurs et de leurs créations.",
      technologies: ["Node.js", "TypeScript", "Prisma", "MongoDB", "Cloudinary", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=800&auto=format&fit=crop&q=60",
      githubUrl: "https://github.com/yourusername/tailleur-api",
      liveUrl: "https://projet-tailleur-backendteste.onrender.com/api-docs-tailleur/"
    },
    {
      title: "Gestion des Apprenants",
      description: "API backend pour la gestion des apprenants, référentiels et notes.",
      technologies: ["Laravel", "PostgreSQL", "Firebase"],
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
      githubUrl: "https://github.com/yourusername/gestion-apprenants"
    },
    {
      title: "Application de Cargaison",
      description: "Plateforme de gestion de cargaisons permettant le suivi des expéditions.",
      technologies: ["HTML", "Tailwind CSS", "PHP", "TypeScript"],
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60",
      githubUrl: "https://github.com/yourusername/cargo-app"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Mes Projets
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;