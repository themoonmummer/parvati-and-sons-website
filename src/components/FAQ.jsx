import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: "What services does Parvati And Sons provide?",
    answer: "We provide IT services including software development, web solutions, consulting, automation, and digital products."
  },
  {
    question: "How can you help my business grow?",
    answer: "We create technology solutions designed to improve efficiency and business performance."
  },
  {
    question: "Do you build custom software?",
    answer: "Yes, we develop customized solutions according to business requirements."
  },
  {
    question: "How can I contact your team?",
    answer: "You can reach us through the contact section on this website."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border-b border-gray-100 last:border-0 transition-all duration-300 ${isOpen ? 'bg-gray-50/50' : 'bg-transparent'}`}>
      <button
        onClick={onClick}
        className="w-full py-6 px-4 md:px-8 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-[#6D1B2A]' : 'text-[#112250] group-hover:text-[#6D1B2A]'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#6D1B2A] text-white rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-4 md:px-8 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-[#6D1B2A]/5 rounded-2xl text-[#6D1B2A] mb-4">
            <HelpCircle size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#112250] mb-6">Frequently Asked Questions</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#6D1B2A] to-[#3C507D] mx-auto rounded-full mb-8"></div>
          <p className="text-gray-500 text-lg">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Bottom Support Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Still have questions? {' '}
            <a href="#contact" className="text-[#6D1B2A] font-bold hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;