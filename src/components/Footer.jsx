import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Heart
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from "react-icons/fa";
import { motion } from "framer-motion";


const Footer = () => {

  const currentYear = new Date().getFullYear();


  const footerLinks = [
    { name:"Home", href:"#home" },
    { name:"About", href:"#about" },
    { name:"Services", href:"#services" },
    { name:"Portfolio", href:"#portfolio" },
    { name:"Contact", href:"#contact" }
  ];


  const socialLinks = [
    {
      icon:<FaLinkedin size={18}/>,
      label:"LinkedIn"
    },
    {
      icon:<FaTwitter size={18}/>,
      label:"Twitter"
    },
    {
      icon:<FaGithub size={18}/>,
      label:"Github"
    }
  ];



  return (

<footer
className="
relative
overflow-hidden
bg-[#020617]
pt-20
pb-10
border-t
border-white/10
"
>


{/* background glow */}

<div
className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[600px]
h-[250px]
bg-[#112250]
opacity-40
blur-[130px]
rounded-full
"
/>



<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
"
>



<div
className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-10
mb-16
"
>



{/* Brand */}


<motion.div

initial={{opacity:0,y:20}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}

>


<h3
className="
text-2xl
font-semibold
tracking-tight
text-[#E8EEFF]
mb-5
"
>

PARVATI
<span className="text-[#8FAFFF]">
AND
</span>
SONS

</h3>


<p
className="
text-sm
leading-relaxed
text-[#B8C7E6]
max-w-xs
"
>
Building modern digital solutions through
technology, innovation, and reliable engineering.
</p>



<div
className="
flex
gap-3
mt-7
"
>


{
socialLinks.map((social,index)=>(

<a
key={index}
href="#"
aria-label={social.label}
className="
w-10
h-10
rounded-xl
border
border-white/10
bg-white/[0.04]
flex
items-center
justify-center
text-[#B8C7E6]
hover:text-white
hover:border-[#8FAFFF]/40
hover:bg-[#112250]
transition-all
"
>

{social.icon}

</a>

))
}


</div>


</motion.div>







{/* Links */}


<div>


<h4
className="
text-sm
uppercase
tracking-wider
text-[#E8EEFF]
font-medium
mb-6
"
>
Navigation
</h4>


<ul className="space-y-4">


{
footerLinks.map(link=>(

<li key={link.name}>

<a
href={link.href}
className="
group
flex
items-center
gap-2
text-sm
text-[#B8C7E6]
hover:text-[#8FAFFF]
transition
"
>

<ArrowUpRight
size={13}
className="
opacity-0
group-hover:opacity-100
transition
"
/>

{link.name}

</a>

</li>

))
}


</ul>


</div>







{/* Contact */}


<div>


<h4
className="
text-sm
uppercase
tracking-wider
text-[#E8EEFF]
font-medium
mb-6
"
>
Contact
</h4>


<div
className="
space-y-5
text-sm
text-[#B8C7E6]
"
>


<div
className="
flex
gap-3
"
>

<MapPin
size={18}
className="text-[#8FAFFF] shrink-0"
/>

<span>
Rudrapur, Haldwani,
<br/>
Uttarakhand - 263153
</span>

</div>



<div
className="
flex
gap-3
items-center
"
>

<Mail
size={18}
className="text-[#8FAFFF]"
/>

<span>
info@parvatiandsons.com
</span>

</div>




<div
className="
flex
gap-3
items-center
"
>

<Phone
size={18}
className="text-[#8FAFFF]"
/>

<span>
9368321402
</span>

</div>



</div>


</div>








{/* CTA */}


<div>


<h4
className="
text-sm
uppercase
tracking-wider
text-[#E8EEFF]
font-medium
mb-6
"
>
Stay Connected
</h4>


<p
className="
text-sm
text-[#B8C7E6]
mb-5
"
>
Receive technology insights and updates.
</p>



<div
className="
rounded-2xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-4
"
>


<input
type="email"
placeholder="Email address"
className="
w-full
bg-transparent
text-white
text-sm
outline-none
placeholder:text-[#6F80A5]
mb-4
"
/>



<button
className="
relative
overflow-hidden
w-full
py-3
rounded-xl
bg-[#3C507D]
text-white
text-sm
font-medium
transition-all
shadow-[0_0_25px_rgba(60,80,125,0.45)]
hover:shadow-[0_0_40px_rgba(143,175,255,0.45)]
hover:bg-[#50658F]
"
>

Subscribe

</button>


</div>


</div>




</div>







{/* Bottom */}


<div
className="
pt-8
border-t
border-white/10
flex
flex-col
md:flex-row
justify-between
items-center
gap-5
text-xs
text-[#6F80A5]
"
>


<p>
© {currentYear} Parvati & Sons. All rights reserved.
</p>



<div
className="
flex
items-center
gap-2
"
>

<span>
Made with
</span>


<Heart
size={14}
className="
text-[#8FAFFF]
fill-current
"
/>


<span>
in Rudrapur
</span>


</div>


</div>




</div>


</footer>

  );

};


export default Footer;
