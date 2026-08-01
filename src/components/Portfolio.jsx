import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  GraduationCap,
  Cpu,
  Plane,
  HeartPulse,
  Stethoscope
} from "lucide-react";

const projects = [

{
title:"Chanakya Law College",
category:"Education Software",
description:
"We developed a complete digital ecosystem including a responsive website and mobile applications to simplify student management, admissions, and fee operations.",
stats:[
"Instant Student Access",
"100% Digital Management"
],
tags:[
"Web App",
"Android App",
"iOS App"
],
icon:GraduationCap,
image:
"https://images.unsplash.com/photo-1564981797816-1043664bf78d"
},


{
title:"Automotive Vision AI",
category:"Industrial AI Solution",
description:
"A smart computer vision system designed for automotive manufacturing. The solution uses AI models and sensors to improve safety and automate object detection.",
stats:[
"99.9% Accuracy",
"Improved Safety"
],
tags:[
"AI Models",
"Object Detection",
"Smart Sensors"
],
icon:Cpu,
image:
"https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
},


{
title:"Go India Travel App",
category:"Travel & Booking",
description:
"A modern travel application focused on simple booking experiences, fast performance, and secure digital payments for travelers across India.",
stats:[
"Super Fast Booking",
"4.8/5 User Rating"
],
tags:[
"Mobile App",
"Quick Booking",
"Secure Payment"
],
icon:Plane,
image:
"https://images.unsplash.com/photo-1488646953014-85cb44e25828"
},


{
title:"Medical Seva",
category:"Social Health Platform",
description:
"A healthcare awareness platform connecting people with trusted medical information and experts through a secure digital environment.",
stats:[
"10k+ People Reach",
"High Impact Awareness"
],
tags:[
"Social Platform",
"Secure Data",
"Health Information"
],
icon:HeartPulse,
image:
"https://images.unsplash.com/photo-1586773860418-d37222d8fce3"
},
{
title:"Prodonto Dental",
category:"Healthcare Software",
description:
"A specialized dental clinic management platform designed to simplify appointments, patient records, and daily clinic operations through a modern digital experience.",
stats:[
"Auto Managed Bookings",
"100% Digital Records"
],
tags:[
"Web App",
"Clinic Management",
"Patient Portal"
],
icon:Stethoscope,
image:
"https://images.unsplash.com/photo-1559757175-0eb30cd8c063"
}


];


export default function Portfolio(){


const [active,setActive]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{

setActive(prev =>
(prev+1)%projects.length
)

},6000);



return ()=>clearInterval(timer);


},[]);



const project=projects[active];

const Icon=project.icon;



return (

<section
id="portfolio"
className="
relative
min-h-screen
bg-[#020617]
overflow-hidden
flex
items-center
py-28
"
>



{/* Ambient lights */}

<div
className="
absolute
top-20
right-20
w-[500px]
h-[500px]
bg-blue-500/20
blur-[150px]
"
/>



<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
w-full
"
>



<div
className="
text-center
mb-16
"
>


<p
className="
text-blue-300
uppercase
tracking-[0.4em]
text-sm
mb-5
"
>
Portfolio
</p>


<h2
className="
text-4xl
md:text-5xl
font-semibold
text-[#E8EEFF]
"
>
Projects We Delivered
</h2>


</div>






<div
className="
grid
lg:grid-cols-2
gap-16
items-center
"
>




{/* LEFT CONTENT */}


<AnimatePresence mode="wait">


<motion.div

key={project.title}

initial={{
opacity:0,
x:-80,
filter:"blur(15px)"
}}

animate={{
opacity:1,
x:0,
filter:"blur(0)"
}}

exit={{
opacity:0,
x:-80,
filter:"blur(15px)"
}}

transition={{
duration:.8
}}

>



<div
className="
w-14
h-14
border
border-blue-300/30
bg-blue-400/20
flex
items-center
justify-center
mb-8
"
>

<Icon
size={30}
className="text-blue-200"
/>

</div>



<p
className="
text-blue-300
uppercase
tracking-widest
text-sm
"
>
{project.category}
</p>



<h3
className="
mt-4
text-4xl
font-semibold
text-[#E8EEFF]
"
>
{project.title}
</h3>




<p
className="
mt-8
text-[#B8C7E6]
leading-relaxed
max-w-xl
"
>
{project.description}
</p>





<div
className="
mt-10
grid
grid-cols-2
gap-5
"
>

{
project.stats.map(stat=>(

<div
key={stat}
className="
border
border-white/10
bg-white/[0.05]
px-5
py-5
text-blue-100
"
>
{stat}
</div>

))
}

</div>





<div
className="
flex
gap-3
mt-8
flex-wrap
"
>

{
project.tags.map(tag=>(

<span

key={tag}

className="
px-4
py-2
bg-white/10
border
border-white/10
text-sm
text-blue-100
"
>

{tag}

</span>

))
}

</div>


</motion.div>


</AnimatePresence>







{/* RIGHT IMAGE */}


<AnimatePresence mode="wait">


<motion.div

key={project.image}

initial={{
opacity:0,
x:80,
scale:.95
}}

animate={{
opacity:1,
x:0,
scale:1
}}

exit={{
opacity:0,
x:80,
scale:.95
}}

transition={{
duration:1
}}

className="
relative
"
>


<div
className="
absolute
inset-0
bg-blue-500/30
blur-[80px]
"
/>



<div
className="
relative
border
border-white/20
bg-white/10
backdrop-blur-xl
overflow-hidden
shadow-[0_40px_100px_rgba(37,99,235,.35)]
"
>


<img

src={project.image}

alt={project.title}

className="
w-full
h-[520px]
object-cover
"
/>


<div
className="
absolute
inset-0
bg-gradient-to-t
from-[#020617]
via-transparent
to-transparent
"
/>


</div>


</motion.div>


</AnimatePresence>



</div>





{/* Indicators */}

<div
className="
flex
justify-center
gap-3
mt-16
"
>

{
projects.map((_,index)=>(

<div
key={index}
className={`
transition-all duration-500
h-1
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
