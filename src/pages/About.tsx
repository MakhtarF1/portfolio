import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Layout, Server, 
  Trello, Kanban, Target, PenTool, 
  Figma, Workflow, LayoutGrid 
} from 'lucide-react';

const About = () => {
  const [activeSection, setActiveSection] = useState('Skills');

  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "TypeScript", "Flutter"]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["PHP", "Laravel", "Node.js", "Express", "Java", "Python"]
    },
    {
      category: "Bases de données",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"]
    },
    {
      category: "Outils & DevOps",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "Docker", "API RESTful", "Swagger", "CI/CD"]
    }
  ];

  const projectManagementSkills = [
    {
      title: "Méthodes Agiles",
      description: "Expertise dans les méthodologies Scrum et Kanban, facilitant une collaboration efficace et une livraison itérative.",
      icon: <Kanban />,
      tools: ["Jira", "Trello", "Asana", "Monday.com"]
    },
    {
      title: "Gestion de Projet",
      description: "Planification, suivi et optimisation des workflows de développement avec des outils modernes.",
      icon: <Workflow />,
      tools: ["GitHub Projects", "Notion", "ClickUp", "Linear"]
    },
    {
      title: "UI/UX Design",
      description: "Création d'interfaces utilisateur intuitives et attrayantes avec une approche centrée sur l'expérience utilisateur.",
      icon: <PenTool />,
      tools: ["Figma", "Adobe XD", "Sketch", "InVision"]
    }
  ];

  const designProcessSteps = [
    {
      title: "Recherche & Conception",
      icon: <Target />,
      description: "Analyse des besoins utilisateurs, création de personas et user journeys."
    },
    {
      title: "Prototypage",
      icon: <Figma />,
      description: "Développement de wireframes et prototypes interactifs pour validation."
    },
    {
      title: "Design System",
      icon: <LayoutGrid />,
      description: "Création de composants réutilisables et cohérents pour l'ensemble de l'interface."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            À Propos de Moi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
            Développeur Full Stack passionné, je combine expertise technique et sensibilité design 
            pour créer des solutions numériques innovantes et centrées utilisateur.
          </p>
        </motion.div>

        {/* Navigation Sections */}
        <div className="flex justify-center mb-12 space-x-4">
          {['Skills', 'Gestion de Projet', 'Processus Design'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSection === section 
                  ? 'bg-violet-600 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Dynamic Content Sections */}
        {activeSection === 'Skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-violet-600 dark:text-violet-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeSection === 'Gestion de Projet' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projectManagementSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <div className="text-violet-600 dark:text-violet-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeSection === 'Processus Design' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center"
              >
                <div className="text-violet-600 dark:text-violet-400 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;