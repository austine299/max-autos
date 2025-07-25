import React, {useContext} from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Footer = () => {
  const {
      aboutRef,
      productRef,
      contactRef,
      homeRef,
      scrollToSection,
    } = useContext(CartContext);
    
    const contactNum = process.env.REACT_APP_CONTACT;
  return (
    <footer
      className="bg-blue-900 text-white py-10 px-6 sm:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About */}
        <div>
          <button
          className="w-20 text-blue-600 tracking-wide "
          onClick={() => scrollToSection(homeRef)}
        >
          <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} className="rounded-full"/>
        </button>
          <p className="text-gray-300">
            Your trusted plug for quality imported vehicles and genuine motor
            parts. Ride in comfort, class, and confidence with Ojiakaanu Auto's.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <button  onClick={() => scrollToSection(homeRef)} className="hover:text-blue-300 transition">
                Home
              </button>
            </li>
            <li>
              <button  onClick={() => scrollToSection(aboutRef)} className="hover:text-blue-300 transition">
                About Us
              </button>
            </li>
            <li>
              <button  onClick={() => scrollToSection(productRef)} className="hover:text-blue-300 transition">
                Products
              </button>
            </li>
            <li>
              <button  onClick={() => scrollToSection(contactRef)} className="hover:text-blue-300 transition">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <FaPhone />
            <span>+{contactNum}</span>
          </div>
          <div className="flex items-center gap-3 mb-6 text-gray-300">
            <FaMapMarkerAlt />
            <span>Ikota, Lagos Island, Nigeria</span>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://web.facebook.com/profile.php?id=61578390186899"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ojiakaanuautosnigltd/"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Contact Ojiakaanu Nig. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
