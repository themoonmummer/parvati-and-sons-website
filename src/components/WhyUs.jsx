import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CodeBackground from "./hero/CodeBackground";

import {
  Target,
  Eye,
  ShieldCheck,
  Rocket
} from "lucide-react";


const slides = [

{
title:"Our Mission",
icon:Target,
description:
"To build reliable digital solutions that help businesses adapt, grow, and succeed in a rapidly evolving technology landscape.",
points:[
"Innovation driven development",
"Business-focused solutions",
"Technology that creates impact"
]
},


{
title:"Our Vision",
icon:Eye,
description:
"To become a trusted technology partner delivering intelligent solutions that connect businesses with the future.",
points:[
"Future-ready systems",
"Long-term partnerships",
"Continuous improvement"
]
},


{
title:"Engineering Excellence",
icon:ShieldCheck,
description:
"We follow modern engineering practices to create secure, scalable, and maintainable digital products.",
points:[
"Clean architecture",
"Secure development",
"Quality-driven approach"
]
},


{
title:"What We Provide",
icon:Rocket,
description:
"From software development to AI solutions, we provide complete technology services designed around real business needs.",
points:[
"Custom software",
"AI-powered solutions",
"Digital transformation"
]
}

];




export default function WhyUs(){


const [active,setActive]=useState(0);



useEffect(()=>{

const timer=setInterval(()=>{

setActive(prev =>
(prev+1)%slides.length
);

},5000);


return ()=>clearInterval(timer);

},[]);



const current=slides[active];

const Icon=current.icon;



return (

<section
id="whyus"
className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
flex
items-center
justify-center
py-28
"
>



{/* HERO CODE ATMOSPHERE */}

<div
className="
absolute
inset-0
opacity-40
"
>

<CodeBackground />

</div>



{/* DARK BLEND */}

<div
className="
absolute
inset-0
bg-gradient-to-b
from-[#020617]/70
via-[#07142F]/70
to-[#020617]
"
/>



<div
className="
relative
z-10
w-full
max-w-5xl
px-6
text-center
"
>



<motion.p

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

className="
text-blue-300
uppercase
tracking-[0.4em]
text-sm
mb-6
"
>
Why Choose Us
</motion.p>



<AnimatePresence mode="wait">


<motion.div

key={current.title}

initial={{
opacity:0,
scale:.95,
y:30,
filter:"blur(15px)"
}}

animate={{
opacity:1,
scale:1,
y:0,
filter:"blur(0)"
}}

exit={{
opacity:0,
scale:.95,
y:-30,
filter:"blur(15px)"
}}

transition={{
duration:.8
}}

className="
relative
mx-auto
min-h-[430px]
w-full
border
border-blue-300/20
bg-white/[0.10]
backdrop-blur-xl
shadow-[0_40px_120px_rgba(37,99,235,.35)]
flex
items-center
justify-center
"
>



{/* Bottom Glow */}

<div
className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[70%]
h-[100px]
bg-blue-500/30
blur-[90px]
"
/>



<div
className="
relative
max-w-3xl
px-10
py-12
"
>



<div
className="
mx-auto
mb-8
w-16
h-16
border
border-blue-300/30
bg-blue-400/20
flex
items-center
justify-center
shadow-[0_0_40px_rgba(96,165,250,.3)]
"
>

<Icon
size={32}
className="
text-blue-200
"
/>

</div>



<h2
className="
text-3xl
md:text-5xl
font-semibold
text-[#E8EEFF]
"
>

{current.title}

</h2>



<p
className="
mt-8
text-lg
leading-relaxed
text-[#B8C7E6]
"
>

{current.description}

</p>




<div
className="
mt-10
grid
md:grid-cols-3
gap-5
"
>


{
current.points.map(point=>(

<div

key={point}

className="
border
border-white/10
bg-white/[0.05]
px-5
py-4
text-sm
text-blue-100
"
>

{point}

</div>

))
}


</div>


</div>



</motion.div>


</AnimatePresence>




{/* indicators */}

<div
className="
flex
justify-center
gap-3
mt-10
"
>

{
slides.map((_,index)=>(

<div

key={index}

className={`
h-1
transition-all
duration-500
${
active===index
?
"w-12 bg-blue-400"
:
"w-4 bg-white/20"
}
`}

/>

))
}


</div>


</div>



</section>

);

}
