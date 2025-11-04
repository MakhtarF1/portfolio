import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  featured = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className={`flex flex-col bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        featured ? "border-2 border-blue-500 dark:border-teal-500" : ""
      }`}
    >
      {/* Image */}
      <div className="relative group overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full aspect-[16/10] object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
            En Production
          </div>
        )}
        {(liveUrl || githubUrl) && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {liveUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-lg"
              >
                <ExternalLink size={20} className="text-blue-600" />
              </motion.a>
            )}
            {githubUrl && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Github size={20} className="text-gray-900" />
              </motion.a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
