import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  demoLink,
  codeLink
}) => {
  return (
    <div className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-mono font-bold text-white mb-2" style={{ fontFamily: 'Space Mono, monospace' }}>
            {title}
          </h3>
          <p className="text-gray-300 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-[#4d4dff]/20 text-[#4d4dff] px-3 py-1 rounded-full text-sm font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a 
              href={demoLink}
              className="text-white hover:text-[#c2ff00] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Demo
            </a>
            <a 
              href={codeLink}
              className="text-white hover:text-[#c2ff00] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;