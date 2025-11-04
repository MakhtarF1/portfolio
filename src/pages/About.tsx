import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2, Database, Layout, Server,
  Globe, Smartphone, Award, BookOpen,
  Target, Zap, Users, Lightbulb, Brain,
  Handshake, Link as LinkIcon, Rocket
} from "lucide-react";

const About = () => {
  const [activeSection, setActiveSection] = useState("Compétences");

  // 🧠 COMPÉTENCES
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="w-6 h-6" />,
      technologies: [
        "HTML5", "CSS3", "SASS", "TailwindCSS", "JavaScript (ES6+)",
        "React", "Next.js", "TypeScript", "Angular", "Vue.js", "Flutter", "React Native"
      ]
    },
    {
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        "PHP", "Laravel", "Node.js", "Express.js", "NestJS", "Python", "Java (Spring Boot)", "REST & GraphQL APIs"
      ]
    },
    {
      category: "Bases de données",
      icon: <Database className="w-6 h-6" />,
      technologies: [
        "MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore", "SQLite", "Redis"
      ]
    },
    {
      category: "Outils & DevOps",
      icon: <Code2 className="w-6 h-6" />,
      technologies: [
        "Git / GitHub / GitLab", "Docker", "CI/CD", "Swagger", "Nginx", "Linux", "VS Code", "Figma", "Postman"
      ]
    },
    {
      category: "Mobile & Cloud",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: [
        "React Native", "Flutter", "AWS Beanstalk", "Firebase", "Supabase", "Vercel", "Netlify"
      ]
    }
  ];

  // 🎓 FORMATION
  const education = [
    {
      degree: "Licence en Génie Logiciel",
      institution: "Institut Supérieur Informatique (ISI)",
      year: "2024-2025",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      degree: "Certification École du Code",
      institution: "Sonatel Academy",
      year: "2023-2024",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "BTS - Mention Assez Bien",
      institution: "Institut Supérieur Informatique (ISI)",
      year: "2022-2023",
      icon: <Award className="w-6 h-6" />
    },
    {
      degree: "Baccalauréat S2 - Sciences Expérimentales",
      institution: "Groupe Scolaire Seydou Nourou Tall de Pikine",
      year: "2019-2020",
      icon: <Award className="w-6 h-6" />
    }
  ];

  // 🏅 CERTIFICATIONS
  const certifications = [
    {
      title: "Learn About JSON with JavaScript",
      platform: "Coursera Project Network",
      link: "https://www.linkedin.com/in/makhtar-fall-dev/overlay/1733328195606/single-media-viewer/?profileId=ACoAAEx1GkkBpWDrrnGxnIt8h8cJLHB_CRhfc5k"
    },
    {
      title: "Learn Object-Oriented Programming with PHP",
      platform: "Coursera Project Network",
      link: "https://www.linkedin.com/in/makhtar-fall-dev/overlay/1733327490381/single-media-viewer/?profileId=ACoAAEx1GkkBpWDrrnGxnIt8h8cJLHB_CRhfc5k"
    },
    {
      title: "Utilisation efficace de TypeScript",
      platform: "Coursera Project Network",
      link: "https://www.linkedin.com/in/makhtar-fall-dev/details/certifications/1733328468928/single-media-viewer/?profileId=ACoAAEx1GkkBpWDrrnGxnIt8h8cJLHB_CRhfc5k"
    },
    {
      title: "Introduction to JavaScript",
      platform: "Coursera Project Network",
      link: "https://coursera.org"
    },
    {
      title: "AWS Elastic Beanstalk: Build & Deploy a Node.js RESTful API",
      platform: "Coursera Project Network",
      link: "https://coursera.org"
    },
    {
      title: "Advanced TypeScript: Interfaces, Generics & Decorators",
      platform: "Coursera Project Network",
      link: "https://coursera.org"
    }
  ];

  // 💪 QUALITÉS
  const qualities = [
    {
      title: "Autonomie",
      description: "Capacité à gérer un projet de bout en bout sans supervision constante.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Rigueur & Organisation",
      description: "Méthodologie claire, respect des délais et de la qualité du code.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Créativité & Résolution de Problèmes",
      description: "Proposer des solutions techniques efficaces et innovantes.",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      title: "Veille Technologique",
      description: "Suivi constant des tendances du développement web & mobile.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Travail d'Équipe",
      description: "Excellente communication et intégration dans les environnements agiles.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Leadership Technique",
      description: "Capacité à guider une équipe vers des solutions cohérentes et efficaces.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Adaptabilité",
      description: "Rapidité d’apprentissage face à de nouveaux environnements technologiques.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Fiabilité & Engagement",
      description: "Toujours orienté résultats et satisfaction du client.",
      icon: <Handshake className="w-6 h-6" />
    }
  ];

  // 🧩 RENDER
  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        {/* === HEADER === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            À Propos de Moi
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center leading-relaxed">
            Développeur Full Stack ambitieux et passionné par les technologies modernes.  
            Je conçois des solutions performantes et évolutives, alliant créativité et rigueur technique.
          </p>
        </motion.div>

        {/* === NAVIGATION SECTIONS === */}
        <div className="flex justify-center mb-12 space-x-4 flex-wrap gap-2">
          {["Compétences", "Formation", "Certifications", "Qualités"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeSection === section
                  ? "bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* === SECTIONS === */}

        {/* COMPÉTENCES */}
        {activeSection === "Compétences" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-blue-600 dark:text-teal-400">{skill.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* FORMATION */}
        {activeSection === "Formation" && (
          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-600 dark:text-teal-400 mt-1">{edu.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-blue-600 dark:text-teal-400 font-medium">{edu.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CERTIFICATIONS */}
        {activeSection === "Certifications" && (
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-blue-600 dark:text-teal-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Certifications Coursera
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-all group"
                    whileHover={{ scale: 1.03 }}
                  >
                    <LinkIcon className="w-4 h-4 text-blue-600 dark:text-teal-400 mt-1 group-hover:rotate-12 transition-transform" />
                    <div>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {cert.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {cert.platform}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        )}

        {/* QUALITÉS */}
        {activeSection === "Qualités" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {qualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-blue-500 to-teal-600 text-white rounded-xl p-6 shadow-lg text-center hover:shadow-2xl transition-all"
              >
                <div className="flex justify-center mb-4">{quality.icon}</div>
                <h3 className="text-lg font-bold mb-3">{quality.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
