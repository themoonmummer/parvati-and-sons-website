import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Business Management Platform",
    description: "A comprehensive ERP solution designed to streamline internal operations, resource planning, and real-time reporting for mid-sized enterprises.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tags: ["React", "Node.js", "Database"],
    link: "#"
  },
  {
    title: "E-Commerce Solution",
    description: "High-performance digital storefront with seamless inventory management, secure checkout flows, and integrated analytics dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    tags: ["Frontend", "Backend", "Payment Integration"],
    link: "#"
  },
  {
    title: "Enterprise Web Application",
    description: "Scalable cloud-native architecture supporting thousands of concurrent users with advanced security protocols and modular service design.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    tags: ["Cloud", "APIs", "Modern Frameworks"],
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#6D1B2A] font-bold tracking-[0.2em] uppercase text-sm mb-4">Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#112250] mb-6">Our Recent Work</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D1B2A] to-[#3C507D] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore our latest projects where innovation meets execution. We take pride in delivering 
            digital excellence across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112250]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <span className="text-white font-bold flex items-center space-x-2">
                    <span>View Case Study</span>
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-3 py-1 bg-gray-50 text-gray-500 text-xs font-bold rounded-full border border-gray-100 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-2xl font-bold text-[#112250] mb-4 group-hover:text-[#6D1B2A] transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="pt-6 border-t border-gray-50 mt-auto">
                  <a 
                    href={project.link}
                    className="inline-flex items-center space-x-2 text-[#112250] font-bold hover:text-[#6D1B2A] transition-colors group/btn"
                  >
                    <span>View Project</span>
                    <ExternalLink size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 bg-transparent border-2 border-[#112250] text-[#112250] rounded-full font-bold hover:bg-[#112250] hover:text-white transition-all transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;