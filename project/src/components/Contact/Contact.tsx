import React, { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert("Thanks for your message! This is a demo form.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-[#ff44cc] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#8dc6ff] max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a 
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="font-mono text-[#c2ff00] text-xl mb-6 flex items-center">
              <Mail className="mr-2" /> Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-gray-300 mb-2"
                >
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#c2ff00] transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="block text-gray-300 mb-2"
                >
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#c2ff00] transition-colors"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#c2ff00] transition-colors"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-[#c2ff00] hover:bg-[#a9df00] text-black font-medium py-2 px-6 rounded transition-colors flex items-center"
              >
                Send Message <Send size={16} className="ml-2" />
              </button>
            </form>
          </div>
          
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 flex flex-col">
            <div>
              <h3 className="font-mono text-[#c2ff00] text-xl mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out through any of these platforms. I'm always open 
                to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mb-8">
                <a 
                  href="radhikaaudi11@gmail.com" 
                  className="flex items-center text-gray-300 hover:text-[#c2ff00] transition-colors"
                >
                  <Mail size={20} className="mr-3" /> radhikaaudi11@gmail.com
                </a>
                <a 
                  href="https://github.com/radhikaaudi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-[#c2ff00] transition-colors"
                >
                  <Github size={20} className="mr-3" /> github.com/radhikaaudi
                </a>
                <a 
                  href="https://www.linkedin.com/in/radhika-audichya-813295255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-[#c2ff00] transition-colors"
                >
                  <Linkedin size={20} className="mr-3" /> linkedin.com/in/Radhika
                </a>
              </div>
            </div>
            
            <div className="mt-auto">
              <p className="text-gray-400 italic">
                "The best way to predict the future is to create it."
              </p>
              <p className="text-gray-500 text-sm mt-2">
                — Abraham Lincoln
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;