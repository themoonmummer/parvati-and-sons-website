import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";


const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };


  const contactInfo = [
    {
      icon: <MapPin size={22} />,
      title: "Office",
      text: "Rudrapur, Haldwani, Uttarakhand - 263153"
    },
    {
      icon: <Mail size={22} />,
      title: "Email",
      text: "info@parvatiandsons.com"
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      text: "9368321402"
    }
  ];


  return (

    <section
      id="contact"
      className="
      relative
      overflow-hidden
      py-24
      bg-[#020617]
      "
    >


      {/* Background Code Atmosphere */}

      <div
        className="
        absolute inset-0
        opacity-[0.035]
        pointer-events-none
        "
      >

        <pre
          className="
          font-mono
          text-[#8FAFFF]
          text-xs
          leading-7
          whitespace-pre-wrap
          "
        >
{`
const company = "Parvati And Sons";

technology.build({
 software:true,
 cloud:true,
 automation:true
});

SYSTEM_READY
DIGITAL_FUTURE_LOADING
0101010101
`.repeat(6)}
        </pre>

      </div>



      {/* Ambient Light */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[300px]
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
        max-w-6xl
        mx-auto
        px-6
        "
      >



        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:25
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          className="
          text-center
          mb-14
          "
        >

          <p
            className="
            text-[#8FAFFF]
            text-xs
            tracking-[0.3em]
            uppercase
            mb-4
            "
          >
            Get In Touch
          </p>


          <h2
            className="
            text-3xl
            md:text-4xl
            font-semibold
            text-[#E8EEFF]
            "
          >
            Build Something
            <span className="text-[#8FAFFF]">
              {" "}Future Ready
            </span>
          </h2>


          <p
            className="
            mt-5
            max-w-xl
            mx-auto
            text-[#B8C7E6]
            text-sm
            "
          >
            Connect with Parvati And Sons and explore
            modern digital solutions for your business.
          </p>


        </motion.div>





        {/* Glass Form */}


        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          max-w-4xl
          mx-auto
          "
        >


          <div
            className="
            relative
            rounded-3xl
            border
            border-white/10
            bg-white/[0.06]
            backdrop-blur-2xl
            shadow-2xl
            shadow-black/40
            p-8
            md:p-10
            "
          >


            <div
              className="
              absolute
              top-0
              left-10
              right-10
              h-px
              bg-white/20
              "
            />



            {
              submitted ? (

                <div
                  className="
                  py-12
                  text-center
                  "
                >

                  <CheckCircle2
                    size={55}
                    className="
                    mx-auto
                    text-[#8FAFFF]
                    mb-5
                    "
                  />


                  <h3
                    className="
                    text-2xl
                    text-[#E8EEFF]
                    font-semibold
                    "
                  >
                    Thank You
                  </h3>


                  <p
                    className="
                    mt-3
                    text-[#B8C7E6]
                    "
                  >
                    Our team will get back to you soon.
                  </p>


                </div>


              ) : (


                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >


                  <div className="grid md:grid-cols-2 gap-5">

                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />


                    <Input
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>



                  <div className="grid md:grid-cols-2 gap-5">

                    <Input
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />


                    <Input
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />

                  </div>



                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="
                    w-full
                    rounded-xl
                    bg-[#07142F]/70
                    border
                    border-white/10
                    px-4
                    py-3
                    text-sm
                    text-white
                    outline-none
                    focus:border-[#8FAFFF]
                    transition
                    resize-none
                    "
                  />



                  <button
                    disabled={loading}
                    className="
                    w-full
                    py-3.5
                    rounded-xl
                    bg-[#3C507D]
                    text-white
                    font-medium
                    flex
                    items-center
                    justify-center
                    gap-2
                    hover:bg-[#50658F]
                    transition
                    "
                  >

                    {
                      loading
                      ?
                      "Sending..."
                      :
                      <>
                      Send Message
                      <Send size={18}/>
                      </>
                    }

                  </button>


                </form>

              )
            }


          </div>


        </motion.div>





        {/* Contact Information */}


        <div
          className="
          grid
          md:grid-cols-3
          gap-5
          mt-10
          "
        >

        {
          contactInfo.map((item,index)=>(

            <div
              key={index}
              className="
              text-center
              rounded-2xl
              border
              border-white/10
              bg-[#07142F]/70
              backdrop-blur-xl
              p-6
              "
            >

              <div
                className="
                flex
                justify-center
                text-[#8FAFFF]
                mb-4
                "
              >
                {item.icon}
              </div>


              <h4
                className="
                text-[#E8EEFF]
                text-sm
                font-medium
                "
              >
                {item.title}
              </h4>


              <p
                className="
                mt-2
                text-xs
                text-[#B8C7E6]
                "
              >
                {item.text}
              </p>


            </div>

          ))
        }

        </div>



      </div>


    </section>

  );
};



const Input = ({
  label,
  name,
  value,
  onChange
}) => {

return (

<div>

<label
className="
text-xs
text-[#B8C7E6]
"
>
{label}
</label>

<input
name={name}
value={value}
onChange={onChange}
className="
mt-2
w-full
rounded-xl
bg-[#07142F]/70
border
border-white/10
px-4
py-3
text-sm
text-white
outline-none
focus:border-[#8FAFFF]
transition
"
/>

</div>

);

};


export default Contact;
