import React from 'react';
import SkillCategory from './SkillCategory';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "HTML", "CSS", "Python"]
    },
    {
      title: "Frontend",
      skills: ["React", "React Native", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Firebase"]
    },
    {
      title: "DevOps & Deployment",
      skills: ["Git", "Docker", "AWS", "Vercel"]
    },
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    },
    {
      title: "Other Tools",
      skills: ["VS Code", "Cursor", "Git", "Bolt"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-[#ff44cc] mb-4">
            Technical Skills
          </h2>
          <p className="text-[#4d4dff] max-w-2xl mx-auto">
            A collection of technologies and tools I've worked with extensively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;