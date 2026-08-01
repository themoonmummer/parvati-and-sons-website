import React from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Award,
  Headphones,
} from "lucide-react";

import CodeBackground from "./hero/CodeBackground";

const stats = [
  {
    value: "120+",
    title: "Projects Delivered",
    icon: BriefcaseBusiness,
  },
  {
    value: "80+",
    title: "Happy Clients",
    icon: Users,
  },
  {
    value: "7+",
    title: "Years of Experience",
    icon: Award,
  },
  {
    value: "24/7",
    title: "Technical Support",
    icon: Headphones,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28"
    >
      {/* Same Environment as Hero */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,#112250_0%,#07142F_45%,#020617_78%,#000000_100%)]
        "
      />

      {/* Ambient Lights */}

      <div
        className="
          absolute
          -top-60
          right-[-180px]
          w-[900px]
          h-[900px]
          rounded-full
          bg-[#3C507D]
          opacity-15
          blur-[220px]
        "
      />

      <div
        className="
          absolute
          -bottom-72
          left-[-220px]
          w-[850px]
          h-[850px]
          rounded-full
          bg-[#112250]
          opacity-20
          blur-[220px]
        "
      />

      {/* Code Background */}

      <CodeBackground />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
        "
      >

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
            filter: "blur(15px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <p
            className="
              uppercase
              tracking-[0.45em]
              text-xs
              text-[#8FAFFF]/70
              mb-6
            "
          >
            ABOUT PARVATI & SONS
          </p>

          <h2
            className="
              text-[#E8EEFF]
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Engineering{" "}

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-[#E8EEFF]
                via-[#8FAFFF]
                to-[#3C507D]
              "
            >
              Digital Solutions
            </span>

            <br />

            That Move Businesses Forward.
          </h2>

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mt-8
              max-w-3xl
              mx-auto
              space-y-6
              text-[#B8C7E6]/80
              text-base
              md:text-lg
              leading-8
            "
          >
            <p>
              At Parvati & Sons, we build modern websites,
              enterprise software, mobile applications,
              e-commerce platforms, and AI-powered
              solutions that help businesses innovate,
              automate, and grow with confidence.
            </p>

            <p>
              Every solution is designed with performance,
              scalability, and long-term value in mind.
              By combining thoughtful design with reliable
              engineering, we create digital experiences
              that businesses can depend on today and
              tomorrow.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats */}

        <div
          className="
            mt-20
            grid
            grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div

                key={stat.title}

                initial={{
                  opacity: 0,
                  y: 35,
                  filter: "blur(10px)",
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}

                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}

                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.05]
                  backdrop-blur-xl
                  p-6
                  md:p-7
                  transition-all
                  duration-500
                  hover:border-[#8FAFFF]/30
                  hover:bg-white/[0.08]
                "

              >

                {/* Card Glow */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-500
                    bg-gradient-to-br
                    from-[#8FAFFF]/10
                    via-transparent
                    to-[#112250]/20
                  "
                />


                <div
                  className="
                    relative
                    z-10
                  "
                >

                  <div
                    className="
                      w-12
                      h-12
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-[#112250]/70
                      border
                      border-[#8FAFFF]/20
                      mb-6
                    "
                  >

                    <Icon
                      size={22}
                      className="
                        text-[#8FAFFF]
                      "
                    />

                  </div>


                  <h3
                    className="
                      text-3xl
                      md:text-4xl
                      font-bold
                      text-[#E8EEFF]
                      mb-2
                    "
                  >

                    {stat.value}

                  </h3>


                  <p
                    className="
                      text-sm
                      text-[#B8C7E6]/70
                      leading-relaxed
                    "
                  >

                    {stat.title}

                  </p>


                </div>


              </motion.div>

            );

          })}

        </div>
      </div>


      {/* Bottom Decorative Glow */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[200px]
          bg-[#3C507D]/10
          blur-[120px]
          rounded-full
        "
      />

    </section>
  );
};


export default About;
