import { useState, useRef } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

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
    <div>
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
      />
      <Product productRef={productRef} />
      <About aboutRef={aboutRef} />
      <Contact contactRef={contactRef} />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default Home;
