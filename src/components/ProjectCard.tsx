import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  uiUxDescription?: string;
  figmaLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  uiUxDescription,
  figmaLink
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative group">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        {(liveUrl || githubUrl) && (
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <ExternalLink size={20} className="text-gray-900" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
              >
                <Github size={20} className="text-gray-900" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {uiUxDescription && (
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            <strong>UI/UX Design:</strong> {uiUxDescription}
          </div>
        )}

        {figmaLink && (
          <a
            href={figmaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 hover:underline text-sm"
          >
            Voir le design Figma
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;