import { useState, useRef } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const productRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar
        productRef={productRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        homeRef={homeRef}
        footerRef={footerRef}
        scrollToSection={scrollToSection}
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />
      <Header
        homeRef={homeRef}
        scrollToSection={scrollToSection}
        contactRef={contactRef}
        productRef={productRef}
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />
      <Product
        productRef={productRef}
        showNavbar={showNavbar}
        setShowNavbar={setShowNavbar}
      />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer
        productRef={productRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
        homeRef={homeRef}
        footerRef={footerRef}
        scrollToSection={scrollToSection}
      />
    </motion.div>
  );
}

export default Home;
