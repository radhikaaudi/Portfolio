import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#ff44cc] font-mono text-xl mb-4">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:you@example.com" 
                className="flex items-center text-gray-300 hover:text-[#c2ff00] transition-colors"
              >
                <Mail size={16} className="mr-2" /> radhikaaudi11@gmail.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin size={16} className="mr-2" /> Jaipur, India
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#c2ff00] transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#c2ff00] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <nav className="flex space-x-6 mb-4">
              <a href="#home" className="text-gray-400 hover:text-[#c2ff00] text-sm">Home</a>
              <a href="#skills" className="text-gray-400 hover:text-[#c2ff00] text-sm">Skills</a>
              <a href="#projects" className="text-gray-400 hover:text-[#c2ff00] text-sm">Projects</a>
              <a href="#about" className="text-gray-400 hover:text-[#c2ff00] text-sm">About</a>
            </nav>
            <p className="text-gray-500 text-sm">© {currentYear} | All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;