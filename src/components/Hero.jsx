import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import CodeBackground from "./hero/CodeBackground";
import BinaryCorner from "./hero/BinaryCorner";
import CodeIntro from "./hero/CodeIntro";


const Hero = () => {

  return (

    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-black
      "
    >


      {/* Midnight Environment */}
    <div
  className="
    absolute
    inset-0
    bg-[radial-gradient(ellipse_at_center,#112250_0%,#07142F_45%,#020617_75%,#000000_100%)]
  "
/>


      {/* Ambient Light */}
      <div
  className="
    absolute
    top-[-250px]
    right-[-150px]
    w-[1000px]
    h-[1000px]
    rounded-full
    bg-[#3C507D]
    opacity-15
    blur-[220px]
  "
/>

<div
  className="
    absolute
    bottom-[-300px]
    left-[-200px]
    z-0
    w-[800px]
    h-[800px]
    rounded-full
    bg-[#112250]
    opacity-20
    blur-[220px]
  "
/>


      <CodeIntro />

  <CodeBackground />

      <BinaryCorner />





      {/* Main Hero Reveal */}


      <motion.div

        initial={{

          opacity:0,

          scale:1.03,

          y:45,

          filter:"blur(18px)",

        }}


        animate={{

          opacity:1,

          scale:1,

          y:0,

          filter:"blur(0px)",

        }}


        transition={{

          delay:5.35,

          duration:2.8,

          ease:[0.22,1,0.36,1],

        }}


        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          w-full
        "

      >


        <div className="max-w-3xl">


          {/* Label */}


          <motion.p

            initial={{

              opacity:0,

              y:35,

              filter:"blur(12px)",

            }}


            animate={{

              opacity:1,

              y:0,

              filter:"blur(0px)",

            }}


            transition={{

              delay:5.5,

              duration:1.8,

              ease:[0.22,1,0.36,1],

            }}


            className="
              text-[#8FAFFF]/80
              uppercase
              tracking-[0.4em]
              text-sm
              mb-8
            "

          >

            Information Technology & Services

          </motion.p>





          {/* Heading */}


          <motion.h1

            initial={{

              opacity:0,

              y:55,

              filter:"blur(20px)",

            }}


            animate={{

              opacity:1,

              y:0,

              filter:"blur(0px)",

            }}


            transition={{

              delay:5.7,

              duration:2.2,

              ease:[0.22,1,0.36,1],

            }}


            className="
              text-[#E8EEFF]
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-[1.05]
              tracking-tight
            "

          >

            Developing

            <br />


            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#DCE8FF]
                via-[#6F9CFF]
                to-[#3C507D]
              "
            >

              Next-Generation

            </span>


            <br />

            Services


          </motion.h1>





          {/* Description */}


          <motion.p

            initial={{

              opacity:0,

              y:35,

              filter:"blur(12px)",

            }}


            animate={{

              opacity:1,

              y:0,

              filter:"blur(0px)",

            }}


            transition={{

              delay:6.1,

              duration:1.8,

              ease:[0.22,1,0.36,1],

            }}


            className="
              mt-8
              max-w-2xl
              text-lg
              text-[#B8C7E6]/70
              leading-relaxed
            "

          >

            Building intelligent digital solutions that help businesses
            evolve through technology, innovation, and modern engineering.

          </motion.p>





          {/* Buttons */}


          <motion.div

            initial={{

              opacity:0,

              y:35,

              filter:"blur(10px)",

            }}


            animate={{

              opacity:1,

              y:0,

              filter:"blur(0px)",

            }}


            transition={{

              delay:6.5,

              duration:1.6,

              ease:[0.22,1,0.36,1],

            }}


            className="
              mt-12
              flex
              gap-5
              flex-wrap
            "

          >


            <a
              href="#contact"
              className="
                group
                flex
                items-center
                gap-3
                px-8
                py-4
                rounded-xl
                bg-blue-500/20
                border
                border-blue-300/20
                text-[#E8EEFF]
                backdrop-blur-xl
                hover:bg-blue-500/30
                transition-all
              "
            >

              Contact Us


              <ArrowRight
                size={20}
                className="
                  group-hover:translate-x-1
                  transition-transform
                "
              />


            </a>



            <a
              href="#services"
              className="
                px-8
                py-4
                rounded-xl
                border
                border-white/10
                text-[#C9D7F5]/80
                hover:bg-white/5
                transition-all
              "
            >

              Explore Services

            </a>


          </motion.div>


        </div>


      </motion.div>




      <div
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-blue-200/50
          text-xs
          tracking-[0.5em]
        "
      >

        SCROLL

      </div>



    </section>

  );

};


export default Hero;
