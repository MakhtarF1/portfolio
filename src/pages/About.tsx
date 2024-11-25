import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      technologies: ["HTML", "CSS", "Tailwind", "JavaScript", "React", "TypeScript", "Flutter"]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: ["PHP", "Laravel", "Node.js", "Express", "Java"]
    },
    {
      category: "Bases de données",
      icon: <Database className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"]
    },
    {
      category: "Outils & DevOps",
      icon: <Code2 className="w-6 h-6" />,
      technologies: ["Git", "GitHub", "Docker", "API RESTful", "Swagger"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            À Propos de Moi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Je suis un développeur Full Stack passionné par la création d'applications web et mobiles innovantes.
            Mon parcours m'a permis d'acquérir une expertise approfondie dans le développement frontend et backend,
            me permettant de mener des projets de bout en bout avec une approche axée sur la qualité et les bonnes pratiques.
          </p>
        </motion.div>

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
      </div>
    </div>
  );
};

export default About;