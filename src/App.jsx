import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  // SEO and Meta Management
  useEffect(() => {
    document.title = "Parvati And Sons | Next Generation IT Services";
    
    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Parvati And Sons builds innovative IT services and digital solutions that help businesses grow.";
  }, []);

  useEffect(() => {
    // Handle theme persistence
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Intersection Observer for Scroll Reveal (More performant than scroll listener)
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-[#05061B] selection:bg-[#6D1B2A] selection:text-white">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main id="main-content">
        <section id="home" className="reveal-on-scroll opacity-0">
          <Hero />
        </section>
        
        <section id="about" className="reveal-on-scroll opacity-0">
          <About />
        </section>

        <section id="services" className="reveal-on-scroll opacity-0">
          <Services />
        </section>

        <div className="reveal-on-scroll opacity-0">
          <WhyUs />
        </div>

        <section id="portfolio" className="reveal-on-scroll opacity-0">
          <Portfolio />
        </section>

        <section id="testimonials" className="reveal-on-scroll opacity-0">
          <Testimonials />
        </section>

        <section id="tech" className="reveal-on-scroll opacity-0">
          <TechStack />
        </section>

        <div className="reveal-on-scroll opacity-0">
          <FAQ />
        </div>

        <section id="contact" className="reveal-on-scroll opacity-0">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 p-4 bg-[#6D1B2A] text-white rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 active:scale-95 focus:ring-4 focus:ring-[#6D1B2A]/30 ${
          showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
}

export default App;