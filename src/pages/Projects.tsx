import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const projectCategories = [
    "Tous",
    "En Production",
    "Backend",
    "Frontend",
    "Mobile",
  ];

  const projects = [
    {
      title: "Plateforme Internationale de Recherche d'Emploi",
      description:
        "Plateforme internationale de recherche d'emploi déployée dans plusieurs pays permettant aux candidats de créer leur CV, postuler, passer des tests pratiques, faire des entretiens et signer des contrats électroniquement.",
      technologies: [
        "React",
        "Laravel",
        "TypeScript",
        "MySQL",
        "Docker",
        "GitLab",
      ],
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=80",
      live: "https://job.rymholding.com/",
      category: ["En Production", "Frontend", "Backend"],
      featured: true,
    },
    {
      title: "Extranet W.B.C.C.",
      description:
        "Application d'entreprise pour la gestion des pointages, rendez-vous et congés des employés avec système d'authentification sécurisé et tableaux de bord interactifs.",
      technologies: ["React", "Laravel", "MySQL", "API REST", "Docker"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      live: "https://www.extranet.wbcc.fr/Home/connexion",
      category: ["En Production", "Frontend", "Backend"],
      featured: true,
    },
    {
      title: "API Réseau Social pour Tailleurs",
      description:
        "API backend complète pour un réseau social dédié aux tailleurs, permettant le partage et le stockage de créations via Cloudinary avec gestion des utilisateurs et interactions.",
      technologies: [
        "Node.js",
        "TypeScript",
        "Prisma",
        "MongoDB",
        "Cloudinary",
        "Docker",
      ],
       image:
        "https://media.istockphoto.com/id/1465634394/fr/photo/entrepreneur-africain-en-couture.jpg?s=612x612&w=0&k=20&c=2wLLfjjqUD5_Ol49oHNExN6yztMcL9ufSX-WWL6eKzo=",
      
      github: "https://github.com/MakhtarF1/projet-tailleur-backend-teste.git",
      live: "https://projet-tailleur-backendteste.onrender.com/api-docs-tailleur/",
      category: ["Backend"],
    },
    {
      title: "API Gestion des Apprenants",
      description:
        "API backend pour la gestion complète des apprenants, référentiels, promotions et notes avec architecture MVC et Firebase pour la sécurité des données.",
      technologies: ["Laravel", "PostgreSQL", "Firebase", "Swagger", "API REST"],
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/MakhtarF1/ProjetGestionApprenantLaravel.git",
      category: ["Backend"],
    },
    {
      title: "Système de Gestion des Dettes",
      description:
        "Application de gestion des dettes pour boutiques avec architecture MVC, documentation Swagger interactive et conteneurisation Docker.",
      technologies: [
        "Laravel",
        "Swagger",
        "Docker",
        "PostgreSQL",
        "API REST",
      ],
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/MakhtarF1/gestion-dette-laravel.git",
      category: ["Backend", "Frontend"],
    },
    {
      title: "Application de Gestion de Cargaison",
      description:
        "Plateforme web complète de gestion de cargaisons avec suivi des expéditions en temps réel et interface utilisateur responsive.",
      technologies: ["HTML", "Tailwind CSS", "PHP", "TypeScript"],
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/MakhtarF1/Cargaison.git",
      category: ["Frontend"],
    },
    {
      title: "Application Mobile Wave Clone",
      description:
        "Application mobile de transfert d'argent inspirée de Wave, développée avec Flutter et GetX pour une gestion d'état optimale.",
      technologies: ["Flutter", "Dart", "GetX", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
      github: "https://github.com/MakhtarF1/waveMobile.git",
      category: ["Mobile"],
    },
  ];

  const filteredProjects =
    activeFilter === "Tous"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-center"
        >
          Mes Projets
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Une sélection de projets professionnels et personnels démontrant mes
          compétences en développement Full Stack et mon expertise technique.
        </motion.p>

        {/* Filtres */}
        <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-2">
          {projectCategories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.image}
              githubUrl={project.github}
              liveUrl={project.live}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Message vide */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Aucun projet dans cette catégorie
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
