import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-[#ff44cc] mb-4">
            About Me
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <p className="text-[#4d4dff] text-lg mb-6">
              I am a passionate Front-End developer with a knack for
              solving complex challenges and crafting creative solutions.
              I excel at quickly transforming designs into real-world Full
              Stack projects using cutting-edge technologies and
              frameworks.
            </p>
            
            <p className="text-[#4d4dff] text-lg mb-6">
              Beyond coding, I led LNMHacks 7.0 as the Lead Organizer, was a Core Member at TEDxLNMIIT, and mentored students through the Counselling Cell. I am passionate about combining technology with creativity to solve real-world problems, foster community growth, and drive innovation.
            </p>
            
            <blockquote className="border-l-4 border-[#c2ff00] pl-4 py-2 mb-6">
              <p className="text-gray-300 italic">
                "The magic you are looking for is in the work you are avoiding"
              </p>
              <cite className="text-gray-400 text-sm">— Farrell Williams</cite>
            </blockquote>
            
            <div className="mt-8">
              <h3 className="text-xl font-mono text-[#c2ff00] mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="text-white font-medium">Bachelor's in Computer Science</h4>
                <p className="text-gray-400">University Name | 2022 - 2026</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-mono text-[#c2ff00] mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium">Senior Front-End Developer</h4>
                  <p className="text-gray-400">Company Name | 2022 - Present</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-[#c2ff00] mr-2">•</span>
                      Led the development of responsive web applications
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-[#c2ff00] mr-2">•</span>
                      Collaborated with designers to implement UI/UX designs
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-white font-medium">Web Developer</h4>
                  <p className="text-gray-400">Previous Company | 2020 - 2022</p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-[#c2ff00] mr-2">•</span>
                      Developed and maintained client websites
                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-[#c2ff00] mr-2">•</span>
                      Implemented responsive designs and optimized performance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;