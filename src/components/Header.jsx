import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cpu } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      role="banner"
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-[#0A0B2E]/95 backdrop-blur-lg py-3 shadow-xl border-b border-gray-100 dark:border-white/10' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center" aria-label="Main Navigation">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center space-x-2 group cursor-pointer" aria-label="Parvati And Sons Home">
            <div className="bg-[#6D1B2A] p-2 rounded-lg transform group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-[#6D1B2A]/20">
              <Cpu className="text-white" size={24} />
            </div>
            <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? 'text-[#112250] dark:text-white' : 'text-[#112250] dark:text-white'
            }`}>
              Parvati <span className="text-[#6D1B2A]">And</span> Sons
            </span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full relative group ${
                  activeSection === link.href.substring(1)
                    ? 'text-[#6D1B2A]'
                    : 'text-[#112250] dark:text-gray-300 hover:text-[#6D1B2A] dark:hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#6D1B2A] rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? 'opacity-100' : 'opacity-0'
                }`} />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 focus:ring-2 focus:ring-[#6D1B2A] ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
              }`}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a
              href="#contact"
              className="hidden sm:block bg-[#6D1B2A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#8B2336] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#6D1B2A]/20"
            >
              Get Started
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#112250] dark:text-white focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute w-full transition-all duration-500 ease-in-out overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="bg-white dark:bg-[#0A0B2E] border-t border-gray-100 dark:border-white/10 shadow-2xl">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-4 text-lg font-medium border-b border-gray-50 dark:border-white/5 text-[#112250] dark:text-gray-300 hover:text-[#6D1B2A] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a
                href="#contact"
                className="block w-full text-center bg-[#6D1B2A] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#8B2336] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;