import React, { useContext } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaCarSide, FaCogs } from "react-icons/fa";
import { CartContext } from "./CartContext";

const About = () => {
  const {aboutRef} = useContext(CartContext)
  return (
    <section ref={aboutRef} className="bg-white py-12 px-6 md:px-20">
      {/* Banner */}
      <div className="bg-blue-900 text-white text-center py-12 rounded-2xl shadow-lg mb-10">
        <h1 className="sm:text-4xl text-2xl font-bold mb-2">🚘 Max Auto’s</h1>
        <p className="text-lg">Your Trusted Auto Plug</p>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 text-lg">
          At Contact Max Auto’s, we specialize in imported cars — both brand new and foreign used (Tokunbo) — carefully selected to meet your taste, style, and budget. Whether you're looking for durability, luxury, or everyday comfort, we’ve got the perfect ride just for you.
        </p>
        <p className="text-gray-600 text-lg">
          We also offer <span className="font-semibold">genuine motor parts</span> for top car brands, ensuring your ride stays smooth and reliable.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-center">
        <div className="flex flex-col items-center bg-blue-50 rounded-lg p-6 shadow">
          <FaCarSide className="text-4xl text-blue-700 mb-3" />
          <h3 className="text-xl font-semibold">Quality Imported Cars</h3>
          <p className="text-gray-600 mt-2">Brand New & Tokunbo options handpicked for performance and style.</p>
        </div>
        <div className="flex flex-col items-center bg-blue-50 rounded-lg p-6 shadow">
          <FaCogs className="text-4xl text-blue-700 mb-3" />
          <h3 className="text-xl font-semibold">Genuine Motor Parts</h3>
          <p className="text-gray-600 mt-2">Reliable parts for top brands to keep your vehicle running smoothly.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <p className="text-lg font-medium text-gray-800">Drive with confidence.</p>
        <h2 className="text-2xl font-bold text-blue-700">Ride with Contact Max Auto’s.</h2>
      </div>
    </section>
  );
};

export default About;
