import Navbar from "./Navbar";
import Header from "./Header";
import Product from "./Product";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
  const {
    homeRef,
    productRef,
    aboutRef,
    contactRef,
    scrollToSection,
  } = useContext(CartContext);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const map = {
      Home: homeRef,
      Product: productRef,
      "About Us": aboutRef,
      "Contact Us": contactRef,
    };

    const target = location.state?.scrollTo;
    const targetRef = map[target];

    if (targetRef?.current) {
      setTimeout(() => {
        scrollToSection(targetRef);
        navigate(".", { replace: true }); // clear scroll state
      }, 200);
    }
  }, [location]);

  return (
    <motion.div
      ref={homeRef} // You can assign homeRef to the container
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Header />
      <div ref={productRef}><Product /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>
    </motion.div>
  );
}

export default Home;
