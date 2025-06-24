import React, { useState, useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { CartContext } from "./CartContext";

function Navbar({
  showNavbar,
  setShowNavbar,
  scrollToSection,
  homeRef,
  contactRef,
  aboutRef,
  productRef,
  footerRef,
}) {
  const { cartItems, showCart, setShowCart } = useContext(CartContext);

  const handleNav = () => {
    setShowNavbar(!showNavbar);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex h-20 w-full justify-between p-9 items-center bg-white shadow">
      <div>
        <button className="text-2xl font-bold text-blue-600">logo</button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex sm:flex-row gap-5 items-center">
        {[
          { label: "Home", ref: homeRef },
          { label: "Product", ref: productRef },
          { label: "About Us", ref: aboutRef },
          { label: "Contact Us", ref: contactRef },
        ].map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.ref)}
            className="font-bold text-xl hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white transition"
          >
            {item.label}
          </button>
        ))}

        {/* Cart Button */}
        <button
          onClick={handleShowCart}
          className="relative flex items-center gap-1 text-xl font-bold hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white transition"
        >
          <FaCartShopping />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="sm:hidden relative z-50" onClick={handleNav}>
        {showNavbar ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
      </button>

      {/* Mobile Menu */}
      {showNavbar && (
        <div className="sm:hidden flex flex-col items-start gap-5 absolute top-20 right-0 p-6 w-64 bg-white shadow-lg z-40">
          {[
            { label: "Home", ref: homeRef },
            { label: "Product", ref: productRef },
            { label: "About Us", ref: aboutRef },
            { label: "Contact Us", ref: contactRef },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollToSection(item.ref);
                handleNav();
              }}
              className="font-bold text-lg hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white transition w-full text-left"
            >
              {item.label}
            </button>
          ))}

          {/* Cart Button in Mobile */}
          <button
            onClick={() => {
              handleShowCart();
              handleNav();
            }}
            className="relative flex items-center gap-1 text-lg font-bold hover:bg-blue-600 px-4 py-2 rounded-md hover:text-white transition"
          >
            <FaCartShopping />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                {cartItems.length}
              </span>
            )}
            <span className="ml-1">Cart</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
