import React, { useState, useEffect, useRef } from 'react';
import { Users, CheckCircle, TrendingUp, Cpu, HeartHandshake, ShieldCheck } from 'lucide-react';

const StatCounter = ({ end, duration = 2000, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <div ref={countRef} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-[#6D1B2A] mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{label}</div>
    </div>
  );
};

const WhyUs = () => {
  const features = [
    {
      title: "Experienced Team",
      description: "Skilled professionals dedicated to delivering reliable solutions.",
      icon: <Users className="text-[#6D1B2A]" size={32} />,
      color: "bg-red-50"
    },
    {
      title: "Quality First Approach",
      description: "We focus on creating high-quality services and products.",
      icon: <CheckCircle className="text-[#3C507D]" size={32} />,
      color: "bg-blue-50"
    },
    {
      title: "Business Growth Focus",
      description: "Our solutions are designed to support customer success.",
      icon: <TrendingUp className="text-green-600" size={32} />,
      color: "bg-green-50"
    },
    {
      title: "Innovative Technology",
      description: "We adopt modern technologies to solve complex challenges.",
      icon: <Cpu className="text-purple-600" size={32} />,
      color: "bg-purple-50"
    },
    {
      title: "Customer-Centric Approach",
      description: "We prioritize customer satisfaction and long-term relationships.",
      icon: <HeartHandshake className="text-orange-600" size={32} />,
      color: "bg-orange-50"
    },
    {
      title: "Reliable Security",
      description: "Ensuring your data and systems are protected with industry standards.",
      icon: <ShieldCheck className="text-teal-600" size={32} />,
      color: "bg-teal-50"
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-white overflow-hidden">
      {/* Technology-inspired background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gray-50/50 -z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-[#6D1B2A] font-bold tracking-[0.2em] uppercase text-sm mb-4">Value Proposition</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#112250] mb-6">Why Choose Parvati And Sons?</h3>
          <div className="w-24 h-1.5 bg-[#6D1B2A] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            We combine technical expertise with a deep understanding of business needs to deliver 
            solutions that don't just work, but excel.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Decorative background shape */}
              <div className={`absolute -right-8 -top-8 w-24 h-24 ${feature.color} opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-[#112250] mb-4 group-hover:text-[#6D1B2A] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Counters Section */}
        <div className="bg-[#112250] rounded-[3rem] p-12 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#6D1B2A] opacity-10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3C507D] opacity-10 blur-[100px] rounded-full"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div className="border-r border-white/10 last:border-0">
              <StatCounter end={10} suffix="+" label="Years Experience" />
            </div>
            <div className="border-r border-white/10 last:border-0">
              <StatCounter end={500} suffix="+" label="Projects Delivered" />
            </div>
            <div className="border-r border-white/10 last:border-0">
              <StatCounter end={200} suffix="+" label="Happy Clients" />
            </div>
            <div className="last:border-0">
              <StatCounter end={50} suffix="+" label="Expert Staff" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;