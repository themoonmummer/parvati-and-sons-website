import React, { useEffect } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import TechStack from "./components/TechStack";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {


  useEffect(() => {

    document.title =
      "Parvati And Sons | Future Digital Solutions";


    let metaDescription =
      document.querySelector(
        'meta[name="description"]'
      );


    if (!metaDescription) {

      metaDescription =
        document.createElement("meta");

      metaDescription.name = "description";

      document.head.appendChild(
        metaDescription
      );

    }


    metaDescription.content =
      "Parvati And Sons delivers modern IT solutions, software development, automation, and digital transformation services.";

  }, []);



  return (

    <div
      className="
      min-h-screen
      overflow-hidden
      bg-[#020617]
      text-[#E8EEFF]
      selection:bg-[#3C507D]
      selection:text-white
      "
    >


      <Header />


      <main>


        <section id="home">
          <Hero />
        </section>



        <section id="about">
          <About />
        </section>



        <section id="services">
          <Services />
        </section>



        <section>
          <WhyUs />
        </section>



        <section id="portfolio">
          <Portfolio />
        </section>



        <section id="testimonials">
          <Testimonials />
        </section>



        <section id="tech">
          <TechStack />
        </section>



        <section id="faq">
          <FAQ />
        </section>



        <section id="contact">
          <Contact />
        </section>


      </main>



      <Footer />


    </div>

  );

}


export default App;
