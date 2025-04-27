import React from 'react';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Slot Flow",
      description: "A scheduling application for efficient time management",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "CryptoX",
      description: "Digital currency exchange platform",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "TypeScript", "Web3.js", "Tailwind"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Rewire",
      description: "AI-powered learning management system",
      image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Vue.js", "Python", "TensorFlow", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "AI Summarizer",
      description: "Text summarization using OpenAI GPT-4",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "OpenAI API", "Node.js", "Express"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Skin-Sense",
      description: "AI-powered skin condition analysis app",
      image: "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React Native", "TensorFlow", "Python", "Flask"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Telemetry Control Unit",
      description: "IoT device management dashboard",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["React", "Socket.io", "Node.js", "InfluxDB"],
      demoLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-mono font-bold text-white text-center mb-16" style={{ fontFamily: 'Space Mono, monospace' }}>
          Most Recent Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="/resume.pdf" 
            className="inline-flex items-center gap-2 bg-[#4d4dff] hover:bg-[#3a3abf] text-white font-mono py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Resume
            <span className="text-xl">⚡</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;