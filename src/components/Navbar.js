import React, { useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { CartContext } from "./CartContext";

function Navbar() {
  
  const {
    cartItems,
    showCart,
    setShowCart,
    aboutRef,
    productRef,
    contactRef,
    homeRef,
    scrollToSection,
    showNavbar, 
    setShowNavbar,
    handleSectionClick,
  } = useContext(CartContext);

 
  const handleNav = () => setShowNavbar(!showNavbar);
  const handleShowCart = () => setShowCart(!showCart);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { label: "Home", ref: homeRef },
    { label: "Product", ref: productRef },
    { label: "About Us", ref: aboutRef },
    { label: "Contact Us", ref: contactRef },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur opacity-80 z-50 shadow-md">
      <div className="flex justify-between items-center h-20 px-6 sm:px-12">
        {/* Logo */}
        <button
          className="w-20 text-blue-600 tracking-wide"
          onClick={() => scrollToSection(homeRef)}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            className="rounded-full"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleSectionClick(item.ref, item.label)}
              className="font-semibold text-lg hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-all duration-200"
            >
              {item.label}
            </button>
          ))}

          {/* Cart Icon */}
          <button
            onClick={handleShowCart}
            className="relative flex items-center text-xl hover:text-blue-600"
          >
            <FaCartShopping />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                {totalQuantity}
              </span>
            )}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={handleNav} className="sm:hidden text-blue-600 z-50">
          {showNavbar ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {showNavbar && (
        <div className="sm:hidden absolute top-20 right-0 w-2/5 bg-white border-t z-40 opacity-100 shadow-md">
          <div className="flex flex-col p-6 gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  handleSectionClick(item.ref, item.label);
                  handleNav();
                }}
                className="text-lg font-semibold text-gray-800 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-all"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => {
                handleShowCart();
                handleNav();
              }}
              className="flex items-center gap-2 text-lg font-semibold hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition-all"
            >
              <FaCartShopping />
              {totalQuantity > 0 && (
                <span className="bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                  {totalQuantity}
                </span>
              )}
              <span>Cart</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
