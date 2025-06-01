import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-mono font-bold text-[#ff44cc] mb-4">
            About Me
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <p className="text-[#8dc6ff] text-lg mb-6">
              I'm Radhika Audichya, a Front-End and Software Developer pursuing my B.Tech in Communication and Computer Engineering (CCE) at The LNM Institute of Information Technology (LNMIIT). I specialize in building dynamic web and mobile applications using React.js, React Native, Node.js, Express.js, and GenAI tools like Cursor and Bolt. 
            </p>
            
            <p className="text-[#8dc6ff] text-lg mb-6">
              Beyond coding, I led LNMHacks 7.0 as the Lead Organizer, was a Core Member at TEDxLNMIIT, and mentored students through the Counselling Cell. I am passionate about combining technology with creativity to solve real-world problems, foster community growth, and drive innovation.
            </p>
            
            <blockquote className="border-l-4 border-[#8dc6ff] pl-4 py-2 mb-6">
              <p className="text-gray-300 italic">
                "The magic you are looking for is in the work you are avoiding"
              </p>
              <cite className="text-gray-400 text-sm">— Dipen Parmar</cite>
            </blockquote>
            
            <div className="mt-8">
              <h3 className="text-xl font-mono text-[#c2ff00] mb-4">Education</h3>
              <div className="mb-4">
                <h4 className="text-white font-medium">Bachelor's in Computer Science</h4>
                <p className="text-gray-400"> The LNM Institute of Information Technology | 2022 - 2026</p>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-mono text-[#c2ff00] mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-white font-medium">Contributor and Technical Researcher</h4>
                  <p className="text-gray-400">REEF | 2023 </p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-300 flex items-start">
                      <span className="text-[#c2ff00] mr-2">•</span>
                      Completed impactful tasks that supported Reef’s growth strategy, improved internal processes, and contributed to the development of the Reef economy.


                    </li>
                    <li className="text-gray-300 flex items-start">
                      <span className="text-[#c2ff00] mr-2">•</span>
                      Created detailed documentation to support ongoing projects and ensure technical clarity across the team.
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