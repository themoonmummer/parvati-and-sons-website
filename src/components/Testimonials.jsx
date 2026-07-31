import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Global",
    role: "CEO & Founder",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "Parvati And Sons delivered an exceptional ERP system that completely transformed our internal operations. Their attention to detail and technical expertise is truly unmatched in the industry."
  },
  {
    name: "Michael Chen",
    company: "Innovate Solutions",
    role: "Product Director",
    image: "https://i.pravatar.cc/150?u=michael",
    rating: 5,
    text: "The mobile application they developed for us has seen incredible user growth since launch. They are a truly dedicated team that understands how to align technology with business goals."
  },
  {
    name: "Emily Rodriguez",
    company: "Global Retail Dynamics",
    role: "Marketing Head",
    image: "https://i.pravatar.cc/150?u=emily",
    rating: 5,
    text: "Professional, reliable, and innovative. They didn't just build a website; they built a comprehensive digital experience that has significantly increased our customer engagement rates."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#6D1B2A] font-bold tracking-[0.2em] uppercase text-sm mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#112250] mb-6">What Our Clients Say</h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D1B2A] to-[#3C507D] mx-auto rounded-full"></div>
        </div>

        {/* Testimonials Grid/Carousel Container */}
        <div className="flex overflow-x-auto pb-12 lg:pb-0 lg:grid lg:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-full snap-center"
            >
              <div className="h-full bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex flex-col relative group">
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#6D1B2A]/10 transition-colors duration-500">
                  <Quote size={60} strokeWidth={3} />
                </div>

                {/* Star Rating */}
                <div className="flex space-x-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow relative z-10 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-50 relative z-10">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#6D1B2A] rounded-full scale-110 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#112250] text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.role}, <span className="text-[#6D1B2A]">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Indicator (Visible only on small screens) */}
        <div className="flex justify-center space-x-2 mt-8 lg:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === 0 ? 'w-8 bg-[#6D1B2A]' : 'w-2 bg-gray-300'}`}></div>
          ))}
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;