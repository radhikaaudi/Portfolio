import React from 'react';

interface SkillBadgeProps {
  name: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name }) => {
  return (
    <span className="bg-black border border-[#4d4dff] text-white px-3 py-1 rounded-full text-sm inline-block transition-all duration-300 hover:bg-[#4d4dff]/10 hover:border-[#4d4dff]">
      {name}
    </span>
  );
};

export default SkillBadge;