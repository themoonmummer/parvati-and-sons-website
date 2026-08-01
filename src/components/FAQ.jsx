import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    question: "What services does Parvati And Sons provide?",
    answer:
      "We provide modern IT solutions including software development, web applications, automation systems, cloud solutions, and digital transformation services."
  },
  {
    question: "How can Parvati And Sons help my business grow?",
    answer:
      "We build scalable technology solutions that improve efficiency, streamline operations, and help businesses adapt to the digital future."
  },
  {
    question: "Do you create custom software solutions?",
    answer:
      "Yes. Every solution is designed around your specific business requirements, goals, and technical needs."
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, enterprises, and organizations looking to build reliable and future-ready digital products."
  },
  {
    question: "How can I start a project with your team?",
    answer:
      "You can contact our team through the contact section. We will discuss your requirements and guide you through the next steps."
  }
];


const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`
        border-b border-blue-300/10 last:border-none
        transition-all duration-500
        ${isOpen ? "bg-blue-500/5" : ""}
      `}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-6 px-6 md:px-10 py-7 text-left group"
      >
        <span
          className={`
            text-base md:text-lg font-semibold
            transition-colors duration-300
            ${
              isOpen
                ? "text-[#8FAFFF]"
                : "text-[#E8EEFF] group-hover:text-[#8FAFFF]"
            }
          `}
        >
          {question}
        </span>


        <div
          className={`
            flex-shrink-0 w-10 h-10 rounded-full
            flex items-center justify-center
            border transition-all duration-500
            ${
              isOpen
                ? "bg-blue-500/20 border-blue-400/40 text-[#8FAFFF] rotate-180"
                : "bg-white/5 border-white/10 text-[#B8C7E6]"
            }
          `}
        >
          <ChevronDown size={20} />
        </div>
      </button>


      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0
            }}
            animate={{
              height: "auto",
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut"
            }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-10 pb-8 text-[#B8C7E6] leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};


const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(0);


  return (
    <section
      id="faq"
      className="
        relative py-28 overflow-hidden
        bg-[#020617]
      "
    >

      {/* Ambient lights */}
      <div className="
        absolute top-20 left-1/2
        -translate-x-1/2
        w-[600px] h-[300px]
        bg-blue-500/10
        blur-[120px]
        rounded-full
      "/>


      <div className="
        relative max-w-5xl mx-auto
        px-5 sm:px-8
      ">


        {/* Header */}

        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.7
          }}
          className="text-center mb-16"
        >

          <div
            className="
              inline-flex items-center justify-center
              w-14 h-14 rounded-2xl
              bg-blue-500/10
              border border-blue-400/20
              text-[#8FAFFF]
              mb-6
              shadow-lg shadow-blue-500/10
            "
          >
            <HelpCircle size={28}/>
          </div>


          <h2
            className="
              text-4xl md:text-5xl
              font-bold
              text-[#E8EEFF]
              tracking-tight
            "
          >
            Frequently Asked Questions
          </h2>


          <div
            className="
              w-24 h-[3px]
              mx-auto mt-6
              rounded-full
              bg-gradient-to-r
              from-blue-400
              to-cyan-300
            "
          />


          <p
            className="
              mt-6
              text-[#B8C7E6]
              text-lg
              max-w-2xl
              mx-auto
            "
          >
            Everything you need to know about our services,
            technology solutions, and development process.
          </p>

        </motion.div>



        {/* FAQ Glass Card */}

        <motion.div
          initial={{
            opacity:0,
            scale:.97,
            y:30
          }}
          whileInView={{
            opacity:1,
            scale:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:.8
          }}
          className="
            rounded-[2rem]
            overflow-hidden
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            shadow-2xl
            shadow-blue-900/20
          "
        >

          {faqData.map((item,index)=>(
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex===index}
              onClick={() =>
                setOpenIndex(
                  openIndex===index ? -1 : index
                )
              }
            />
          ))}

        </motion.div>



        {/* Contact CTA */}

        <motion.div
          initial={{
            opacity:0
          }}
          whileInView={{
            opacity:1
          }}
          viewport={{
            once:true
          }}
          transition={{
            delay:.3
          }}
          className="
            text-center mt-12
            text-[#B8C7E6]
          "
        >

          Still have questions?

          <a
            href="#contact"
            className="
              ml-2
              text-[#8FAFFF]
              font-semibold
              hover:text-white
              transition-colors
            "
          >
            Contact our team
          </a>

        </motion.div>


      </div>

    </section>
  );
};


export default FAQ;
