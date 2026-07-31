import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight,Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <FaGithub size={20} />, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#0A0B2E] transition-colors duration-300 pt-24 pb-12 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-black tracking-tighter text-[#112250] dark:text-white">
                PARVATI<span className="text-[#6D1B2A]">AND</span>SONS
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-xs">
              Developing next-generation services and technology solutions for business growth. Based in Rudrapur, serving global enterprises.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-11 h-11 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-white hover:bg-[#6D1B2A] hover:border-[#6D1B2A] transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[#112250] dark:text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#6D1B2A] rounded-full"></span>
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-[#6D1B2A] dark:hover:text-white flex items-center group transition-colors"
                  >
                    <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-[#112250] dark:text-white font-bold text-lg mb-8 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#6D1B2A] rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-[#6D1B2A] shrink-0 mt-1" />
                <span>Rudrapur, Uttarakhand, India - 263153</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Mail size={20} className="text-[#6D1B2A] shrink-0" />
                <a href="mailto:hello@parvatiandsons.com" className="hover:text-[#6D1B2A] transition-colors">hello@parvatiandsons.com</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <Phone size={20} className="text-[#6D1B2A] shrink-0" />
                <span>+91 (594) 400-0000</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-[#112250] dark:text-white font-bold text-lg mb-8 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#6D1B2A] rounded-full"></span>
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">Subscribe to get the latest tech insights.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white outline-none focus:border-[#6D1B2A] transition-all"
              />
              <button 
                type="submit"
                className="mt-3 w-full bg-[#6D1B2A] text-white py-3 rounded-xl font-bold hover:bg-[#8B2336] transition-all shadow-lg shadow-[#6D1B2A]/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-10 border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-sm text-gray-500 dark:text-gray-500">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
              <p>© {currentYear} Parvati & Sons. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#6D1B2A] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#6D1B2A] transition-colors">Terms of Service</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={14} className="text-[#6D1B2A] fill-current" />
              <span>in Rudrapur</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;