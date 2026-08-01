import React from "react";
import { motion } from "framer-motion";

const binaryLines = [
  "0101010101010101010101010101",
  "  10101010101010101010101010",
  "    010101010101010101010101",
  "      1010101010101010101010",
  "        01010101010101010101",
  "          01010101001010101",
  "            0101010101010101",
  "              10101010101010",
  "                010101010101",
  "                 10101010101",
  "                  0101010101",
  "                    10101010",
  "                      010101",
  "                        1010",
  "                          01",
];

const BinaryCorner = () => {
  return (
    <motion.div

      initial={{
        opacity:0
      }}

      animate={{
        opacity:1
      }}

      transition={{
        delay:4.3,
        duration:1.5,
        ease:[0.22,1,0.36,1]
      }}

      className="
        absolute
        top-[-100px]
        right-[-80px]
        w-[85%]
        h-[120%]
        overflow-hidden
        pointer-events-none
        z-0
      "

    >

      <motion.div

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          delay:4.5,
          duration:2
        }}

        className="
          absolute
          top-[-80px]
          right-[-20px]
          rotate-[-22deg]
          font-mono
          text-xl
          md:text-3xl
          lg:text-4xl
          font-semibold
          leading-relaxed
          text-blue-300/15
          select-none
        "
      >

        {binaryLines.map((line,index)=>(

          <motion.div

            key={index}

            initial={{
              opacity:0,
              x:50
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              delay:4.5 + index*0.08,
              duration:1.2,
              ease:[0.22,1,0.36,1]
            }}

            className="
              whitespace-pre
            "

          >

            {line}

          </motion.div>

        ))}

      </motion.div>

    </motion.div>
  );
};

export default BinaryCorner;
