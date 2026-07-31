import React from 'react';
import { 
  Code2, 
  Globe, 
  Cpu, 
  BarChart3, 
  Layers, 
  Zap, 
  ArrowUpRight 
} from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Building scalable software solutions tailored to business needs.',
    icon: <Code2 size={28} />,
    gradient: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Web Development',
    description: 'Creating responsive and high-performance websites.',
    icon: <Globe size={28} />,
    gradient: 'from-purple-500 to-pink-400'
  },
  {
    title: 'Digital Solutions',
    description: 'Helping businesses transform with modern technology.',
    icon: <Cpu size={28} />,
    gradient: 'from-orange-400 to-red-500'
  },
  {
    title: 'IT Consulting',
    description: 'Providing strategic technology guidance for growth.',
    icon: <BarChart3 size={28} />,
    gradient: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Product Development',
    description: 'Developing innovative digital products.',
    icon: <Layers size={28} />,
    gradient: 'from-[#6D1B2A] to-[#8B2336]'
  },
  {
    title: 'Business Automation',
    description: 'Improving efficiency through smart automation.',
    icon: <Zap size={28} />,
    gradient: 'from-indigo-500 to-blue-600'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#6D1B2A]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#112250]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[#6D1B2A] font-bold tracking-[0.2em] uppercase text-sm mb-4">Expertise</h2>
          <p className="text-4xl md:text-5xl font-black text-[#112250] mb-6">Our Services</p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D1B2A] to-[#3C507D] mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg">
            Empowering your digital journey with cutting-edge technology and strategic innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-0.5 rounded-3xl transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Gradient Border Backdrop */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500 shadow-xl`}></div>
              
              {/* Card Content - Glassmorphism */}
              <div className="relative h-full bg-white/80 backdrop-blur-xl p-8 rounded-[1.4rem] border border-gray-100 flex flex-col group-hover:bg-white/90 transition-colors">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-[#112250] mb-4 group-hover:text-[#6D1B2A] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#112250]/40 uppercase tracking-widest group-hover:text-[#6D1B2A] transition-colors">
                    Explore
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#112250] group-hover:bg-[#6D1B2A] group-hover:text-white group-hover:border-transparent transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Services */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6 italic">Need a specialized solution not listed here?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center space-x-2 text-[#6D1B2A] font-bold hover:underline group"
          >
            <span>Talk to our experts</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;