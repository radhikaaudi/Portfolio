import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  return (
    <a 
      href={href} 
      className="text-gray-300 hover:text-[#c2ff00] transition-colors font-medium"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default NavLink;