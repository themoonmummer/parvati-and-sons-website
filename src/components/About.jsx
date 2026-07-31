import React from 'react';
import { Award, Users, CheckCircle, TrendingUp, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    {
      label: 'Years of Experience',
      value: '10+',
      icon: <Award className="text-[#6D1B2A]" size={24} />,
      description: 'Decades of collective IT expertise.'
    },
    {
      label: 'Dedicated Team',
      value: 'Expert',
      icon: <Users className="text-[#3C507D]" size={24} />,
      description: 'Highly educated professionals.'
    },
    {
      label: 'Quality Solutions',
      value: 'Top-Tier',
      icon: <CheckCircle className="text-green-600" size={24} />,
      description: 'Commitment to excellence.'
    },
    {
      label: 'Business Growth Focus',
      value: 'Proven',
      icon: <TrendingUp className="text-[#6D1B2A]" size={24} />,
      description: 'Scaling through technology.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Company Story */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#6D1B2A]/5 border border-[#6D1B2A]/10 text-[#6D1B2A] text-xs font-bold uppercase tracking-widest mb-6">
              <Lightbulb size={14} />
              <span>Our Legacy</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-[#112250] mb-8 leading-tight">
              Driving Innovation Through <br />
              <span className="text-[#6D1B2A]">Experience & Dedication</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Parvati And Sons has years of experience in the IT sector. Our approach is focused on creating services and products that help businesses achieve growth through technology.
              </p>
              <p>
                We have a highly educated and dedicated team committed to delivering quality solutions. Helping people and businesses succeed through technology is our responsibility and pride.
              </p>
            </div>

            {/* Statistics Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl hover:border-[#6D1B2A]/10 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="p-2 rounded-lg bg-white shadow-sm group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-2xl font-black text-[#112250]">{stat.value}</span>
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{stat.label}</h4>
                  <p className="text-xs text-gray-500">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Modern Technology Illustration Placeholder */}
          <div className="relative lg:ml-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Technology and Engineering" 
                className="w-full h-full object-cover aspect-square md:aspect-auto md:h-[600px]"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#112250]/40 to-transparent"></div>
              
              {/* Floating Element */}
              <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border border-white/20 backdrop-blur-md animate-float">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#6D1B2A] flex items-center justify-center text-white shrink-0">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Quality Assured</p>
                    <p className="text-white/80 text-sm">Certified IT Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#6D1B2A]/10 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#3C507D]/10 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;