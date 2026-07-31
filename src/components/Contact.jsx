import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setErrors({});
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      }, 1500);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0A0B2E] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6D1B2A] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3C507D] opacity-10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="animate-fade-in-up">
            <h2 className="text-[#6D1B2A] font-bold tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6D1B2A] via-white to-[#3C507D]">
                Great Together
              </span>
            </h3>
            <p className="text-lg text-gray-400 mb-12 max-w-lg leading-relaxed">
              We're ready to turn your vision into reality. Reach out to our team for expert IT solutions and digital transformation.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#6D1B2A] group-hover:bg-[#6D1B2A] group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Office Location</p>
                  <p className="text-xl font-bold text-white">Rudrapur, Uttarakhand, India</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#6D1B2A] group-hover:bg-[#6D1B2A] group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-bold text-white">hello@parvatiandsons.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-5 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#6D1B2A] group-hover:bg-[#6D1B2A] group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-bold text-white">+91 (594) 400-0000</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin size={20} />, href: "#" },
                { icon: <FaTwitter size={20} />, href: "#" },
                { icon: <FaGithub size={20} />, href: "#" }
              ].map((social, idx) => (
                <a 
                  key={idx}
                  href={social.href}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#6D1B2A] hover:border-[#6D1B2A] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/5 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h4 className="text-3xl font-bold text-white mb-4">Message Sent!</h4>
                  <p className="text-gray-400 mb-8">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 bg-[#6D1B2A] text-white rounded-xl font-bold hover:bg-[#8B2336] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-2xl text-white focus:border-[#6D1B2A] focus:ring-1 focus:ring-[#6D1B2A] outline-none transition-all placeholder:text-gray-600`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-2xl text-white focus:border-[#6D1B2A] focus:ring-1 focus:ring-[#6D1B2A] outline-none transition-all placeholder:text-gray-600`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-2xl text-white focus:border-[#6D1B2A] focus:ring-1 focus:ring-[#6D1B2A] outline-none transition-all placeholder:text-gray-600`}
                        placeholder="+91 00000 00000"
                      />
                      {errors.phone && <p className="mt-1.5 text-xs text-red-500 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 bg-white/5 border ${errors.company ? 'border-red-500' : 'border-white/10'} rounded-2xl text-white focus:border-[#6D1B2A] focus:ring-1 focus:ring-[#6D1B2A] outline-none transition-all placeholder:text-gray-600`}
                        placeholder="Company Inc."
                      />
                      {errors.company && <p className="mt-1.5 text-xs text-red-500 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.company}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Your Message</label>
                    <textarea 
                      name="message"
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 bg-white/5 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-2xl text-white focus:border-[#6D1B2A] focus:ring-1 focus:ring-[#6D1B2A] outline-none transition-all placeholder:text-gray-600 resize-none`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="mt-1.5 text-xs text-red-500 flex items-center"><AlertCircle size={12} className="mr-1" /> {errors.message}</p>}
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#6D1B2A] text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-[#8B2336] transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-[#6D1B2A]/20"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;