import { motion } from "framer-motion";

const codeLines = [
  "import React from 'react';",
  "const system = initialize();",
  "function createSolution() {",
  "async function deploy() {",
  "return await response;",
  "export default Application;",
  "class DigitalEngine {}",
  "interface NetworkCore {}",
  "while(true) { process(); }",
  "const future = technology;",
  "npm run build",
  "git commit -m 'innovation'",
  "const data = await connect();",
  "function optimizeExperience() {}",
  "01001010 01110100 01101001",
];

const layers = [
  {
    speed: 25,
    opacity: 0.08,
    size: "text-sm",
  },
  {
    speed: 40,
    opacity: 0.12,
    size: "text-base",
  },
  {
    speed: 60,
    opacity: 0.06,
    size: "text-xs",
  },
];

export default function CodeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {layers.map((layer, layerIndex) => (
        <motion.div
          key={layerIndex}
          className={`absolute inset-0 ${layer.size}`}
          initial={{
            scale: 1,
            rotate: 0,
          }}
          animate={{
            scale: 1.15,
            rotate: 0,
          }}
          transition={{
            duration: layer.speed,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            opacity: layer.opacity,
          }}
        >
          {codeLines.map((line, index) => (
            <motion.p
              key={`${layerIndex}-${index}`}
              className="absolute font-mono text-blue-300"
              style={{
                top: `${(index * 13) % 100}%`,
                left: `${(index * 17) % 100}%`,
                rotate: "0deg",
              }}
              animate={{
                y: [0, -40, 0],
                rotate: 0,
              }}
              transition={{
                duration: 10 + index,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      ))}

    </div>
  );
}
