import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Smartphone,
  Eye,
  Globe,
  Code2,
  Cloud
} from "lucide-react";


const services = [

{
title:"Mobile App Development",
subtitle:"Android & iOS Applications",
description:
"We design and develop smooth mobile experiences with modern interfaces and powerful performance.",
points:[
"Android and iOS solutions",
"Clean user experience",
"Offline functionality",
"Fast performance"
],
icon:Smartphone,
image:
"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
},


{
title:"Industrial Vision AI",
subtitle:"Custom YOLO Object Detection",
description:
"We build intelligent vision systems that help industries automate inspection, safety, and monitoring.",
points:[
"Custom AI models",
"Object detection",
"Quality inspection",
"Safety monitoring"
],
icon:Eye,
image:
"https://images.unsplash.com/photo-1518770660439-4636190af475"
},


{
title:"Web Applications",
subtitle:"Websites & Business Platforms",
description:
"High-performance websites and digital platforms designed for speed and scalability.",
points:[
"E-commerce platforms",
"Business dashboards",
"Responsive design",
"Optimized speed"
],
icon:Globe,
image:
"https://images.unsplash.com/photo-1555066931-4365d14bab8c"
},


{
title:"Custom Software",
subtitle:"Enterprise Solutions",
description:
"Custom software systems built around your business processes and future growth.",
points:[
"Business automation",
"Secure systems",
"Custom platforms",
"Future ready systems"
],
icon:Code2,
image:
"https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
},


{
title:"Cloud & Automation",
subtitle:"Digital Infrastructure",
description:
"Reliable cloud solutions and automation systems that improve efficiency.",
points:[
"Cloud deployment",
"Workflow automation",
"Secure infrastructure",
"Consulting"
],
icon:Cloud,
image:
"https://images.unsplash.com/photo-1451187580459-43490279c0fa"
}

];




export default function Services(){

const [active,setActive]=useState(0);



useEffect(()=>{

const timer=setInterval(()=>{

setActive(prev=>
(prev+1)%services.length
);

},5500);


return ()=>clearInterval(timer);

},[]);



const current=services[active];

const next=
services[(active+1)%services.length];



return (

<section
id="services"
className="
relative
min-h-screen
overflow-hidden
py-28
flex
items-center
"
>


{/* BACKGROUND */}

<AnimatePresence mode="wait">

<motion.div

key={current.image}

initial={{
opacity:0,
scale:1.15
}}

animate={{
opacity:1,
scale:1
}}

exit={{
opacity:0
}}

transition={{
duration:1.4,
ease:"easeOut"
}}

className="
absolute
inset-0
bg-cover
bg-center
"

style={{
backgroundImage:`url(${current.image})`
}}

/>


</AnimatePresence>




{/* IMAGE COLOR TREATMENT */}

<div
className="
absolute
inset-0
bg-[#020617]/55
backdrop-blur-[2px]
"
/>


<div
className="
absolute
inset-0
bg-gradient-to-r
from-[#020617]/90
via-[#07142F]/60
to-[#112250]/30
"
/>



<div
className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[600px]
h-[250px]
bg-blue-500/20
blur-[140px]
"
/>





<div
className="
relative
z-10
max-w-7xl
mx-auto
w-full
px-6
grid
lg:grid-cols-2
gap-16
items-center
"
>



{/* TEXT */}

<div>


<p
className="
text-blue-300
uppercase
tracking-[0.35em]
text-sm
mb-6
"
>
Services
</p>



<AnimatePresence mode="wait">


<motion.div

key={current.title}

initial={{
opacity:0,
y:25,
filter:"blur(15px)"
}}

animate={{
opacity:1,
y:0,
filter:"blur(0)"
}}

exit={{
opacity:0,
y:-25,
filter:"blur(15px)"
}}

transition={{
duration:.7
}}

>


<h2
className="
text-4xl
md:text-5xl
font-semibold
text-[#E8EEFF]
"
>
{current.title}
</h2>



<h3
className="
mt-5
text-xl
text-blue-200
"
>
{current.subtitle}
</h3>



<p
className="
mt-8
text-[#B8C7E6]
leading-relaxed
max-w-xl
"
>
{current.description}
</p>



<ul
className="
mt-8
space-y-4
"
>

{
current.points.map(point=>(

<li
key={point}
className="
flex
items-center
gap-3
text-white
"
>

<span
className="
w-2
h-2
rounded-full
bg-blue-400
"
/>

{point}

</li>

))
}

</ul>


</motion.div>

</AnimatePresence>


</div>






{/* CARDS */}

<div
className="
relative
h-[520px]
flex
items-center
"
>


<AnimatePresence mode="popLayout">


<motion.div

key={current.title}

initial={{
x:150,
opacity:0
}}

animate={{
x:0,
opacity:1
}}

exit={{
x:-150,
opacity:0,
filter:"blur(20px)"
}}

transition={{
duration:.85,
ease:[0.22,1,0.36,1]
}}

className="
absolute
left-0
w-[340px]
h-[480px]
bg-white/[0.16]
backdrop-blur-xl
border
border-white/25
shadow-[0_40px_100px_rgba(37,99,235,.45)]
"
>


<ServiceCard service={current}/>


</motion.div>





<motion.div

key={next.title}

initial={{
x:620,
opacity:0
}}

animate={{
x:400,
opacity:.65
}}

transition={{
duration:.85
}}

className="
absolute
left-0
w-[290px]
h-[420px]
bg-white/[0.12]
backdrop-blur-lg
border
border-white/20
shadow-[0_30px_80px_rgba(37,99,235,.2)]
"
>


<ServiceCard service={next}/>


</motion.div>



</AnimatePresence>


</div>


</div>


</section>

);

}





function ServiceCard({service}){

const Icon=service.icon;


return (

<div
className="
p-10
h-full
text-white
"
>


<div
className="
w-16
h-16
bg-blue-400/20
border
border-blue-300/30
flex
items-center
justify-center
mb-10
shadow-[0_0_40px_rgba(96,165,250,.25)]
"
>

<Icon
size={32}
className="text-blue-200"
/>

</div>



<h3
className="
text-2xl
font-semibold
"
>
{service.title}
</h3>



<p
className="
mt-4
text-blue-200
"
>
{service.subtitle}
</p>



</div>

)

}
