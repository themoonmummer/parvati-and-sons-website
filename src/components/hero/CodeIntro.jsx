import React from "react";
import { motion } from "framer-motion";


const codeLines = [
  "import React from 'react';",
  "const system = initialize();",
  "function createSolution(){ }",
  "async function deploy(){ }",
  "return await response;",
  "class DigitalEngine {}",
  "interface FutureCore {}",
  "const future = technology;",
  "const data = await connect();",
  "npm run build",
  "git commit -m innovation",
  "const network = online;",
  "0101010101010101",
  "1010101010101010",
];


const particles = Array.from({
  length:500
});


export default function CodeIntro(){

return (

<motion.div

initial={{
opacity:1
}}

animate={{
opacity:0
}}

transition={{
delay:3.5,
duration:1.8,
ease:[0.22,1,0.36,1],
}}

className="
fixed
inset-0
z-[999]
overflow-hidden
pointer-events-none
"

>


{/* Moving Code Field */}

<motion.div

initial={{
scale:1
}}

animate={{
scale:3.5
}}

transition={{
delay:1.5,
duration:4,
ease:[0.22,1,0.36,1],
}}

className="
absolute
inset-[-80%]
"

>

{
particles.map((_,index)=>(

<motion.div

key={index}

className="
absolute
font-mono
text-[8px]
md:text-[11px]
text-blue-200/10
whitespace-nowrap
"

style={{
top:`${Math.random()*140-20}%`,
left:`${Math.random()*140-20}%`,
}}

animate={{

y:
index % 2 === 0
?
[-1200,1200]
:
[1200,-1200],

}}

transition={{

duration:
1.2 + Math.random()*1,

repeat:Infinity,

ease:"linear",

}}

>

{
codeLines[index % codeLines.length]
}

</motion.div>

))

}

</motion.div>



{/* Cinematic Center Pull */}

<motion.div
initial={{
scale:0.2,
opacity:0.35,
}}

animate={{
scale:6,
opacity:0,
}}

transition={{
delay:1.5,
duration:4,
ease:[0.22,1,0.36,1],
}}

className="
absolute
inset-[-150%]
bg-[radial-gradient(circle_at_center,transparent_30%,rgba(17,34,80,0.12)_55%,transparent_80%)]

"

/>



</motion.div>

);

}
