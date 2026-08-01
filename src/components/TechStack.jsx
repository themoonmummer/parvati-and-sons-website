import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const technologies = [
  {
    name: "React",
    category: "Frontend Development",
    description:
      "Building fast, scalable, and interactive web experiences with modern component architecture.",
  },
  {
    name: "Node.js",
    category: "Backend Engineering",
    description:
      "Developing powerful server-side applications with reliable APIs and scalable infrastructure.",
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    description:
      "Creating secure cloud systems with automation, deployment pipelines, and high availability.",
  },
  {
    name: "Python",
    category: "AI & Machine Learning",
    description:
      "Developing intelligent systems, automation workflows, and advanced data-driven solutions.",
  },
  {
    name: "Flutter",
    category: "Mobile Applications",
    description:
      "Creating premium cross-platform mobile applications with smooth native performance.",
  },
  {
    name: "Docker",
    category: "DevOps Engineering",
    description:
      "Managing consistent deployment environments with modern container technologies.",
  },
];


export default function TechStack() {

  const [active,setActive] = useState(0);
  const [rotation,setRotation] = useState(0);


  const radius = 450;


  useEffect(()=>{

    const timer=setInterval(()=>{

      setActive(prev=>{

        const next =
          (prev + 1) % technologies.length;


        return next;

      });


      setRotation(prev=>prev-90);


    },3500);


    return ()=>clearInterval(timer);

  },[]);



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


{/* Ambient lighting */}

<div className="absolute inset-0">

<div
className="
absolute
left-[-250px]
top-1/2
h-[900px]
w-[900px]
-translate-y-1/2
rounded-full
bg-blue-500/10
blur-[160px]
"
/>


<div
className="
absolute
right-0
top-1/2
h-[500px]
w-[500px]
-translate-y-1/2
rounded-full
bg-blue-400/10
blur-[140px]
"
/>

</div>




{/* LEFT ROTATING WHEEL */}

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
rotate:rotation
}}

transition={{
duration:1.4,
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


const angle =
index * 60;


const x =
Math.cos(angle*Math.PI/180)
*
radius;


const y =
Math.sin(angle*Math.PI/180)
*
radius;



return (

<motion.div

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


animate={{
rotate:-rotation
}}

transition={{
duration:1.4,
ease:[0.22,1,0.36,1]
}}

>


<div

className={`
rounded-full
px-6
py-3
border
text-sm
tracking-wide
whitespace-nowrap
backdrop-blur-xl

${
active===index

?

"border-blue-400 bg-blue-500/20 text-white shadow-[0_0_40px_rgba(59,130,246,0.8)] scale-125"

:

"border-blue-300/20 bg-white/5 text-blue-200"
}

`}

>

{tech.name}

</div>


</motion.div>


)

})

}



</motion.div>


</div>






{/* RIGHT INFORMATION */}

<div
className="
relative
z-10
ml-auto
w-full
max-w-xl
px-10
lg:px-0
lg:mr-[12%]
"
>


<p
className="
mb-4
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
y:30,
filter:"blur(12px)"
}}

animate={{
opacity:1,
y:0,
filter:"blur(0px)"
}}

exit={{
opacity:0,
y:-20,
filter:"blur(12px)"
}}

transition={{
duration:0.7
}}

>


<h2
className="
text-5xl
font-semibold
text-white
md:text-6xl
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

  );
}
