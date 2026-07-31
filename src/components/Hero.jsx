import React from 'react';
import { ArrowRight, Code2, Rocket, ShieldCheck, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0B2E] pt-20">
      {/* Background Digital Graphics */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#6D1B2A] opacity-20 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#3C507D] opacity-15 blur-[130px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Abstract Lines/Gradients */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent via-[#0A0B2E]/50 to-[#0A0B2E]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
              <span className="flex h-2 w-2 rounded-full bg-[#6D1B2A] animate-pulse"></span>
              <span className="tracking-wide uppercase text-xs">Innovation • Trust • Expertise</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s' }}>
              Developing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D1B2A] via-white to-[#3C507D]">
                Next-Generation
              </span> <br />
              Services
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
              We build innovative IT solutions and digital products that empower businesses to grow, scale, and succeed. Based in Rudrapur, serving the future.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s' }}>
              <a 
                href="#contact" 
                className="group px-8 py-4 bg-[#6D1B2A] text-white rounded-xl font-bold flex items-center justify-center hover:bg-[#8B2336] transition-all transform hover:scale-105 shadow-2xl shadow-[#6D1B2A]/30"
              >
                Contact Us 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#services" 
                className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold flex items-center justify-center hover:bg-white/10 transition-all backdrop-blur-md hover:border-white/20"
              >
                Explore Services
              </a>
            </div>

            {/* Social Proof/Trust Indicators */}
            <div className="mt-16 flex items-center space-x-8 animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0B2E] bg-gray-700 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">500+ Projects Delivered</p>
                <p className="text-gray-500">Trusted by global enterprises</p>
              </div>
            </div>
          </div>

          {/* Animated Graphic Section */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              
              {/* Main Floating Card */}
              <div className="glass-card p-8 rounded-[2.5rem] w-80 animate-float shadow-2xl relative z-20">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-[#6D1B2A] flex items-center justify-center shadow-lg shadow-[#6D1B2A]/40">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div className="h-2 w-12 bg-white/10 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 bg-white/20 rounded-full w-full"></div>
                  <div className="h-4 bg-white/10 rounded-full w-3/4"></div>
                  <div className="pt-4 flex items-center justify-between">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-tighter">System Active</span>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Elements */}
              <div className="absolute top-10 right-0 glass-card p-6 rounded-3xl w-48 animate-float-delayed shadow-xl z-30">
                <div className="flex items-center space-x-3 mb-3">
                  <TrendingUp className="text-[#3C507D]" size={20} />
                  <span className="text-xs font-bold text-white">Growth Rate</span>
                </div>
                <div className="text-2xl font-black text-white">+124%</div>
              </div>

              <div className="absolute bottom-10 -left-10 glass-card p-6 rounded-3xl w-56 animate-float shadow-xl z-10" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center space-x-3 mb-3">
                  <ShieldCheck className="text-green-400" size={20} />
                  <span className="text-xs font-bold text-white">Security Verified</span>
                </div>
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(i => <div key={i} className="h-1 flex-1 bg-green-400/30 rounded-full"></div>)}
                </div>
              </div>

              {/* Decorative Tech Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full"></div>
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 animate-bounce duration-[4000ms]">
                <Code2 className="text-[#6D1B2A]" size={32} />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50">
        <span className="text-[10px] text-white uppercase tracking-[0.3em] font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#6D1B2A] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;