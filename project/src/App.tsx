import React, { useEffect } from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Layout/Footer';





function App() {
  useEffect(() => {
    // Update document title
    document.title = "Radhika's Portfolio";

    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e: Event) => {
      e.preventDefault();

      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
      if (!href) return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    // Cleanup: remove event listeners when component unmounts
    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        

        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
