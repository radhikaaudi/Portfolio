import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animated text appearing effect
    const elements = [nameRef.current, titleRef.current, descriptionRef.current];
    
    elements.forEach((element, index) => {
      if (element) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 300 * index);
      }
    });

    // Image frame animation
    if (imageRef.current) {
      setTimeout(() => {
        imageRef.current?.classList.add('opacity-100', 'translate-y-0');
        imageRef.current?.classList.remove('opacity-0', 'translate-y-8');
      }, 900);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-7/12">
            <div>
              <h2 
                ref={nameRef}
                className="font-mono opacity-0 transform translate-y-8 transition-all duration-700 text-xl md:text-2xl text-white mb-4"
              >
                hey, i'm
              </h2>
              <h1 
                ref={titleRef}
                className="font-mono opacity-0 transform translate-y-8 transition-all duration-700 delay-300 text-4xl sm:text-5xl md:text-7xl font-bold text-[#c2ff00] mb-6"
              >
                RADHIKA AUDICHYA
              </h1>
              <h3 className="font-mono text-xl md:text-2xl text-[#ff44cc] mb-8">
                FRONT-END DEV AND SOFTWARE DEVELOPER
              </h3>
              <p 
                ref={descriptionRef}
                className="opacity-0 transform translate-y-8 transition-all duration-700 delay-600 text-[#4d4dff] text-lg md:text-xl max-w-2xl mb-12"
              >
               I'm Radhika Audichya, a Front-End and Software Developer pursuing my B.Tech in Communication and Computer Engineering (CCE) at The LNM Institute of Information Technology (LNMIIT). I specialize in building dynamic web and mobile applications using React.js, React Native, Node.js, Express.js, and GenAI tools like Cursor and Bolt. I am also exploring the integration of AI into applications, working with LLM integrations to enhance user experiences.

Beyond coding, I led LNMHacks 7.0 as the Lead Organizer, was a Core Member at TEDxLNMIIT, and mentored students through the Counselling Cell. I am passionate about combining technology with creativity to solve real-world problems, foster community growth, and drive innovation.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <a 
                  href="#projects" 
                  className="bg-[#c2ff00] hover:bg-[#a9df00] text-black font-medium py-2 px-6 rounded transition-colors"
                >
                  View Projects
                </a>
                <a 
                  href="#contact" 
                  className="border border-[#c2ff00] text-[#c2ff00] hover:bg-[#c2ff00] hover:text-black font-medium py-2 px-6 rounded transition-colors"
                >
                  Contact Me
                </a>
              </div>
              
              <div className="flex space-x-8">
                <a 
                  href="https://github.com/radhikaaudi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#c2ff00] transition-colors"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/radhika-audichya-813295255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#c2ff00] transition-colors"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="https://www.instagram.com/radhikaaudi_15/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#c2ff00] transition-colors"
                >
                  <Instagram size={28} />
                </a>
                <a 
                  href="https://x.com/AudichyaRadhika" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#c2ff00] transition-colors"
                >
                  <Twitter size={28} />
                </a>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="lg:w-4/12 opacity-0 translate-y-8 transition-all duration-1000"
          >
            {/* TV Frame Effect */}
            <div className="relative">
              {/* Outer Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4d4dff] via-[#ff44cc] to-[#c2ff00] rounded-2xl opacity-50 blur-lg animate-pulse"></div>
              
              {/* Inner Frame */}
              <div className="relative bg-black rounded-xl p-3">
                {/* Screen Frame */}
                <div className="relative rounded-lg overflow-hidden bg-[#4d4dff]/10 backdrop-blur-sm">
                  {/* Image Container */}
                  <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                    <img 
                      src="" 
                      alt="Profile"
                      className="w-full h-full object-cover mix-blend-luminosity"
                    />
                    {/* Scan Line Animation */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4d4dff]/10 to-transparent opacity-50 animate-scan"></div>
                    {/* CRT Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;