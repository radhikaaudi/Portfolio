import React from 'react';
import SkillBadge from './SkillBadge';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 transition-transform hover:scale-[1.02] duration-300">
      <h3 className="text-xl font-mono font-semibold text-[0000] mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <SkillBadge key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;