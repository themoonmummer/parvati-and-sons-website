import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";


const Header = () => {

  const [introFinished, setIntroFinished] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");


  const navLinks = [
    { name:"Home", href:"#home" },
    { name:"About", href:"#about" },
    { name:"Services", href:"#services" },
    { name:"Portfolio", href:"#portfolio" },
    { name:"Contact", href:"#contact" },
  ];


  useEffect(() => {


    const introTimer = setTimeout(()=>{

      setIntroFinished(true);

    },5200);



    const handleScroll = () => {

      setIsScrolled(window.scrollY > 80);


      const current = navLinks.find((link)=>{

        const section = document.getElementById(
          link.href.replace("#","")
        );


        if(!section) return false;


        const rect = section.getBoundingClientRect();


        return (
          rect.top <= 150 &&
          rect.bottom >= 150
        );

      });



      if(current){

        setActiveSection(
          current.href.replace("#","")
        );

      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>{

      clearTimeout(introTimer);

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };


  },[]);



  return (

    <motion.header


      initial={{
        opacity:0,
        y:-20,
      }}


      animate={{

        opacity:introFinished ? 1 : 0,

        y:introFinished ? 0 : -20,

      }}


      transition={{

        duration:0.8,

        ease:[0.22,1,0.36,1],

      }}


      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-700

        ${
          isScrolled

          ?

          "bg-[#07142F]/70 backdrop-blur-xl border-b border-blue-300/10 py-4"

          :

          "bg-transparent py-6"

        }
      `}


    >


      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >


        <nav
          className="
            flex
            items-center
            justify-between
          "
        >



          {/* Logo */}


          <a
            href="#home"
            className="
              flex
              items-center
              gap-3
            "
          >


            <div

              className="
                w-11
                h-11
                rounded-xl
                flex
                items-center
                justify-center
                bg-blue-500/20
                border
                border-blue-300/20
                text-blue-200
                font-bold
                text-lg
                backdrop-blur-xl
              "

            >

              P&S

            </div>



            <div
              className="
                hidden
                sm:block
                text-[#E8EEFF]
                font-semibold
                tracking-wide
              "
            >

              Parvati And Sons

            </div>


          </a>




          {/* Desktop Navigation */}


          <div

            className="
              hidden
              lg:flex
              items-center
              gap-2
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-full
              px-3
              py-2
            "

          >


            {
              navLinks.map((link)=>{


                const active =
                  activeSection ===
                  link.href.replace("#","");


                return (

                  <a

                    key={link.name}

                    href={link.href}

                    className={`

                      relative
                      px-5
                      py-2
                      rounded-full
                      text-sm
                      transition-all
                      duration-500

                      ${
                        active

                        ?

                        "text-white"

                        :

                        "text-blue-100/60 hover:text-white"

                      }

                    `}

                  >

                    {link.name}


                    <span

                      className={`

                        absolute
                        bottom-1
                        left-1/2
                        -translate-x-1/2
                        w-1.5
                        h-1.5
                        rounded-full
                        bg-blue-400
                        transition-all
                        duration-500

                        ${
                          active

                          ?

                          "opacity-100 scale-100"

                          :

                          "opacity-0 scale-0"

                        }

                      `}

                    />


                  </a>

                );


              })
            }


          </div>





          {/* CTA */}


          <a

            href="#contact"

            className="
              hidden
              sm:flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-blue-500/20
              border
              border-blue-300/20
              text-[#E8EEFF]
              text-sm
              backdrop-blur-xl
              hover:bg-blue-500/30
              transition-all
            "

          >

            Start Project

            <ArrowUpRight size={16}/>


          </a>





          {/* Mobile Button */}


          <button

            onClick={()=>setMobileOpen(!mobileOpen)}

            className="
              lg:hidden
              text-blue-100
            "

          >

            {
              mobileOpen
              ?
              <X size={28}/>
              :
              <Menu size={28}/>
            }


          </button>



        </nav>


      </div>




      {/* Mobile Menu */}


      {
        mobileOpen && (

          <div

            className="
              lg:hidden
              mt-5
              mx-6
              rounded-2xl
              bg-[#07142F]/90
              backdrop-blur-xl
              border
              border-blue-300/10
              p-5
            "

          >


            {
              navLinks.map((link)=>(

                <a

                  key={link.name}

                  href={link.href}

                  onClick={()=>setMobileOpen(false)}

                  className="
                    block
                    py-4
                    text-blue-100
                    border-b
                    border-white/5
                  "

                >

                  {link.name}

                </a>

              ))
            }


          </div>

        )
      }


    </motion.header>

  );

};


export default Header;
