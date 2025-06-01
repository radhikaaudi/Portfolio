import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import myImage from "../../assets/pic4.jpeg";


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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black  py-12 px-6 md:px-12">
      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <div className="grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full sm:w-11/12 md:w-10/12 lg:w-7/12">
            <div>
              <h2 
                ref={nameRef}
                className="font-mono opacity-0 transform translate-y-8 transition-all duration-700 text-xl md:text-2xl text-white mb-4"
              >
                Hey, I'm
              </h2>
              <h1 
                ref={titleRef}
                className="font-mono opacity-0 transform translate-y-8 transition-all duration-700 delay-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
 font-bold text-[#c2ff00] mb-6"
              >
                RADHIKA AUDICHYA
              </h1>
              <h3 className="font-mono text-lg sm:text-xl md:text-2xl
 text-[#ff44cc] mb-8">
                FRONT-END DEV AND SOFTWARE DEVELOPER
              </h3>
              <p 
                ref={descriptionRef}
                className="opacity-0 transform translate-y-8 transition-all duration-700 delay-600 text-[#5851db] text-base sm:text-lg md:text-xl max-w-2xl mb-12"
              >
              I’m currently pursuing B.Tech in CCE at LNMIIT. I love crafting dynamic web and mobile apps using React.js, React Native, Node.js, and exploring GenAI tools like Cursor and Bolt to build smarter experiences with LLM integrations.


I’m driven by the blend of tech and creativity to solve real-world problems and build communities that grow together.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-12">
                <a 
                  href="https://drive.google.com/file/d/1iApJPFZxH_zNjzrap1jI-Y2fo771S_us/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  className="bg-[#c2ff00] hover:bg-[#a9df00] text-black font-medium py-2 px-6 rounded transition-colors"
                >
                  View Resume
                </a>
                <a 
                  href="#contact" 
                  className="border border-[#c2ff00] text-[#c2ff00] hover:bg-[#c2ff00] hover:text-black font-medium py-2 px-6 rounded transition-colors"
                >
                  Contact Me
                </a>
              </div>
              
              <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
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
            className="w-full sm:w-8/12 md:w-6/12 lg:w-4/12 mt-10 lg:mt-0 opacity-0 translate-y-8 transition-all duration-1000"
          >
           {/* TV Frame Effect */}
<div className="relative">
  {/* Outer Frame */}
  <div className="absolute -inset-3 bg-gradient-to-r from-[#4d4dff] via-[#ff44cc] to-[#4d4dff] rounded-xl opacity-40 blur-md animate-pulse"></div>

  {/* Inner Frame */}
  <div className="relative bg-black rounded-xl p-3">
    {/* Screen Frame */}
    <div className="relative rounded-lg overflow-hidden bg-[#4d4dff]/10 backdrop-blur-sm">
      {/* Image Container */}
      <div className="aspect-[3.9/3.5] relative overflow-hidden rounded-lg">
        {/* Your content here */}
      

                    <img 
                      src={myImage}
                      alt="Meri_image"
                      className="w-full h-full object-cover contrast-110"
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