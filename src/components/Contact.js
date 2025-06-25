import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MessageForm from './MessageForm';

const Contact = ({contactRef}) => {
  return (
    <section ref={contactRef} className="bg-white">
      {/* Top Banner */}
      <div
        className="h-48 sm:h-48 bg-cover bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/maxauto-banner.jpg')" }} // Replace with your banner image
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Contact Max Auto’s
          </h1>
          <p className="text-lg text-gray-100 mt-2">
            🚘 Let's Get You Rolling — Reach Out Today
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Info</h2>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-700 text-2xl" />
              <span className="text-lg text-gray-700">
                Ikota, Lagos, Island, Nigeria
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-700 text-2xl" />
              <span className="text-lg text-gray-700">+234 801 234 5678</span>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-700 text-2xl" />
              <span className="text-lg text-gray-700">
                support@maxautos.com
              </span>
            </div>
            <p className="mt-6 text-gray-600">
              📅 Monday to Saturday | 🕘 9:00 AM – 6:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <MessageForm/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
