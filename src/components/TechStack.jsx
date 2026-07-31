import React from 'react';

const TechStack = () => {
  const techs = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Python', category: 'Data/AI' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Flutter', category: 'Mobile' },
    { name: 'TypeScript', category: 'Language' },
  ];

  return (
    <section id="tech" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#6D1B2A] font-bold tracking-widest uppercase text-sm mb-3">Our Toolkit</h2>
          <p className="text-4xl font-bold text-[#112250]">Built with Modern Technologies</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-100 rounded-xl flex flex-col items-center justify-center hover:shadow-lg transition-shadow bg-gray-50/30 group"
            >
              <span className="text-xl font-bold text-[#112250] mb-2 group-hover:text-[#6D1B2A] transition-colors">{tech.name}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">{tech.category}</span>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-[#112250] to-[#0A0B2E] rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to transform your business?</h3>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
              Our team is ready to help you navigate the complex world of technology. 
              Let's build something extraordinary together.
            </p>
            <a href="#contact" className="inline-block px-10 py-4 bg-[#6D1B2A] text-white rounded-full font-bold hover:bg-[#8B2336] transition-all transform hover:scale-105 shadow-xl">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;