import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const technologies = [
  {
    name:"React",
    category:"Frontend Development",
    description:
    "Building fast, scalable, and interactive web experiences with modern component architecture."
  },
  {
    name:"Node.js",
    category:"Backend Engineering",
    description:
    "Developing powerful server-side applications with reliable APIs and scalable infrastructure."
  },
  {
    name:"AWS",
    category:"Cloud Infrastructure",
    description:
    "Creating secure cloud systems with automation, deployment pipelines, and high availability."
  },
  {
    name:"Python",
    category:"AI & Machine Learning",
    description:
    "Developing intelligent systems, automation workflows, and advanced data-driven solutions."
  },
  {
    name:"Flutter",
    category:"Mobile Applications",
    description:
    "Creating premium cross-platform mobile applications with smooth native performance."
  },
  {
    name:"Docker",
    category:"DevOps Engineering",
    description:
    "Managing consistent deployment environments with modern container technologies."
  }
];



export default function TechStack(){
const [active, setActive] = useState(0);
const [rotation, setRotation] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setRotation((prev) => prev - 60);

    setActive((prev) => (prev + 1) % technologies.length);
  }, 5000);

  return () => clearInterval(timer);
}, []);

const angle = active * 60;


const buttonX =
Math.cos(angle*Math.PI/180)*450;


const buttonY =
Math.sin(angle*Math.PI/180)*450;




return (

<section

id="technology"

className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
flex
items-center
"


>


<div

className="
absolute
left-[-520px]
top-1/2
-translate-y-1/2
"


>
<motion.div
animate={{
rotate: rotation
}}

transition={{

duration:1.5,

ease:[0.22,1,0.36,1]

}}

className="
relative
h-[1100px]
w-[1100px]
rounded-full
border
border-blue-400/20
"


>


<div

className="
absolute
inset-[120px]
rounded-full
border
border-blue-300/10
"

/>



<div

className="
absolute
inset-[250px]
rounded-full
border
border-blue-300/10
"

/>






{
technologies.map((tech,index)=>{


const a=index*60;


const x=
Math.cos(a*Math.PI/180)*450;


const y=
Math.sin(a*Math.PI/180)*450;



return (

<div

key={tech.name}

className="
absolute
left-1/2
top-1/2
"


style={{

transform:
`
translate(${x}px,${y}px)
translate(-50%,-50%)
`

}}



>


<motion.div

animate={{
rotate: -rotation
}}

transition={{
duration:1.5,
ease:[0.22,1,0.36,1]
}}

className={`
rounded-full
px-6
py-3
border
text-sm
whitespace-nowrap

${
index===active

?

"opacity-0"

:

"border-blue-300/20 bg-white/5 text-blue-200"

}

`}

>

{tech.name}

</motion.div>



</div>

)


})

}


{/* ACTIVE MOVING BUTTON */}


<div

className="
absolute
left-1/2
top-1/2
"

style={{

transform:
`
translate(${buttonX}px,${buttonY}px)
translate(-50%,-50%)
`

}}

>


<div

className="
h-20
w-20
rounded-full
flex
items-center
justify-center
border
border-blue-300
bg-[#112250]
text-white
shadow-[0_0_45px_rgba(96,165,250,.9)]
"

>

<motion.span

key={technologies[active].name}

initial={{
opacity:0,
scale:.7
}}

animate={{
opacity:1,
scale:1,
rotate:-rotation
}}

transition={{
duration:.4
}}

className="
text-sm
font-medium
"

>

{technologies[active].name}

</motion.span>

</div>



</div>






</motion.div>



</div>








{/* RIGHT CONTENT */}



<div

className="
relative
z-10
ml-auto
mr-[12%]
max-w-xl
"

>


<p

className="
text-sm
uppercase
tracking-[0.35em]
text-blue-300
"

>

Technology Stack

</p>




<AnimatePresence mode="wait">


<motion.div

key={technologies[active].name}

initial={{
opacity:0,
y:25
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-25
}}

transition={{
duration:.5
}}

>


<h2

className="
mt-5
text-6xl
font-semibold
text-white
"

>

{technologies[active].name}

</h2>


<h3

className="
mt-4
text-xl
text-blue-300
"

>

{technologies[active].category}

</h3>


<p

className="
mt-6
max-w-md
leading-relaxed
text-[#B8C7E6]
"

>

{technologies[active].description}

</p>



</motion.div>


</AnimatePresence>



</div>



</section>

)

}
