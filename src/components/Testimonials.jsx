import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Quote,
  Star
} from "lucide-react";

import CodeBackground from "./hero/CodeBackground";


const testimonials=[

{
name:"Mr. Bikash Jain",
company:"Founder, GoIndia",
text:
"Parvati And Sons delivered a flawless travel application. The UI is incredibly smooth, and the backend handles our user requirements efficiently without compromising performance."
},


{
name:"Mr. Deepak Joshi",
company:"UTEC India",
text:
"Thank you for sharing your knowledge and experience with our institution. Your dedication, guidance, and professional approach helped us move forward digitally."
},


{
name:"Mr. Sudhir Kumar",
company:"Manijot",
text:
"Parvati And Sons provided excellent technical support and guidance. Their commitment towards quality work and customer satisfaction is truly appreciated."
},


{
name:"Mr. Rahul Dev Singh",
company:"Priyank Paper Products",
text:
"I got associated with P&S and their professional approach transformed my vision into reality. They understood my requirements and delivered exactly what I imagined."
},


{
name:"Mr. Malkeet Sir",
company:"Meant2Mean",
text:
"Recommended for web design services. They completed my project within the timeline and also provided training so I could manage smaller updates myself."
},


{
name:"Prachi Pathak",
company:"Concept Associates",
text:
"They are diligent and patient. They designed a responsive website while keeping every important detail in mind. It was a great experience working with them."
}

];



export default function Testimonials(){


const [active,setActive]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{

setActive(prev =>
(prev+1)%testimonials.length
)

},6000);


return ()=>clearInterval(timer);


},[]);



const review=testimonials[active];



return (

<section
id="testimonials"
className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
flex
items-center
py-28
"
>



{/* CODE ATMOSPHERE */}

<div
className="
absolute
inset-0
opacity-30
"
>

<CodeBackground/>

</div>



<div
className="
absolute
inset-0
bg-gradient-to-b
from-[#020617]/80
via-[#07142F]/70
to-[#020617]
"
/>





<div
className="
relative
z-10
max-w-5xl
mx-auto
px-6
w-full
text-center
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
Client Experiences
</p>



<h2
className="
text-4xl
md:text-5xl
font-semibold
text-[#E8EEFF]
mb-16
"
>
Trusted By Businesses
</h2>




<AnimatePresence mode="wait">


<motion.div

key={review.name}

initial={{
opacity:0,
x:80,
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

className="
relative
border
border-white/20
bg-white/[0.08]
backdrop-blur-xl
shadow-[0_40px_120px_rgba(37,99,235,.35)]
px-8
md:px-16
py-14
"
>



{/* glow */}

<div
className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[70%]
h-[120px]
bg-blue-500/30
blur-[100px]
"
/>





<div
className="
relative
"
>



<Quote

size={60}

className="
mx-auto
text-blue-300/30
mb-8
"

/>



<div
className="
flex
justify-center
gap-1
mb-8
"
>

{
[1,2,3,4,5].map(i=>(

<Star

key={i}

size={18}

className="
fill-blue-400
text-blue-400
"

/>

))
}

</div>





<p
className="
text-xl
md:text-2xl
leading-relaxed
text-[#E8EEFF]
italic
"
>

"{review.text}"

</p>




<div
className="
mt-10
"
>


<h3
className="
text-xl
font-semibold
text-white
"
>

{review.name}

</h3>


<p
className="
mt-2
text-blue-300
"
>
{review.company}
</p>


</div>



</div>


</motion.div>


</AnimatePresence>






<div
className="
flex
justify-center
gap-3
mt-12
"
>

{
testimonials.map((_,index)=>(

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
