import React, { useContext, useState } from "react";
import { FaCar, FaWhatsapp } from "react-icons/fa";
import products from "../product";
import autoParts from "../autoparts"; // Import auto parts separately
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";
import MessageForm from "./MessageForm";

function Product() {
  const { addToCart, setShowCart, productRef, setShowNavbar } =
    useContext(CartContext);

  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Label for dropdown
  const [activeCategory, setActiveCategory] = useState(null); // Actual products to display

  // Display products based on activeCategory
  const displayedProducts = activeCategory
    ? activeCategory === "Auto Parts"
      ? autoParts
      : products[activeCategory] || []
    : Object.values(products).flat().concat(autoParts);

  // Handle category selection
  const handleCategorySelect = (category, updateLabel = true) => {
    setActiveCategory(category); // Always update products
    if (updateLabel) setSelectedCategory(category); // Update label only if needed
    setShowCategory(false);
    setShowCart(false);
  };

  const num = process.env.REACT_APP_MOBILE;

  const customMsg = "Thank you for contacting OJIAKAANU NIG LTD" 

  return (
    <section
      ref={productRef}
      className="flex sm:flex-row flex-col-reverse bg-gray-50 py-12 px-2 md:px-10 gap-3"
      onClick={() => {
        setShowCart(false);
        setShowCategory(false);
        setShowNavbar(false);
      }}
    >
      {/* Product List */}
      <div className="sm:w-4/5 w-full">
        <div className="relative flex justify-between bg-blue-100 py-3 px-4 mb-10">
          <h1 className="sm:text-3xl text-sm font-extrabold text-gray-800 flex items-center gap-3">
            <FaCar className="text-blue-600" /> Car Stand
          </h1>

          {/* Category Buttons */}
          <div className="relative flex gap-3">
            {/* Dropdown trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCategory(!showCategory);
              }}
              className="sm:text-lg text-sm  font-semibold text-blue-700 border border-blue-500 sm:px-4 px-2 py-2 rounded hover:bg-white"
            >
              {selectedCategory || "Categories"}
            </button>

            {/* Auto Parts - no label change */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCategorySelect("Auto Parts", false);
              }}
              className="sm:text-lg text-sm font-semibold text-blue-700 border border-blue-500 sm:px-4 px-2  py-2 rounded hover:bg-white"
            >
              Auto Parts
            </button>

            {/* Dropdown menu */}
            {showCategory && (
              <div className="flex flex-col absolute w-44 -right-4 top-12 mt-2 bg-white shadow-lg rounded-md overflow-hidden z-10 p-5">
                {[...Object.keys(products), "Auto Parts"].map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="rounded-md w-full text-left px-2 py-2 hover:bg-blue-100 text-gray-800 font-bold shadow hover:shadow-lg transition duration-300"
                  >
                    {category}
                  </button>
                ))}
                <button
                  onClick={() => handleCategorySelect(null)}
                  className="block w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 font-semibold border-t"
                >
                  Show All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProducts.length === 0 ? (
            <div className="col-span-full text-center text-2xl font-bold text-gray-500 py-20">
              🚧 Coming Soon 🚧
            </div>
          ) : (
            displayedProducts.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col justify-between h-full text-center"
              >
                <Link
                  to={`product/${item.id}`}
                  className="flex flex-col items-center justify-center px-4 flex-grow"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.name}
                    className="w-full object-cover rounded-lg mb-4"
                  />
                  <h2 className="font-bold text-gray-900 w-full overflow-hidden whitespace-nowrap text-ellipsis">
                    {item.name}
                  </h2>
                </Link>

                <div className="flex justify-between items-center w-full mt-4 gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-green-600 hover:bg-green-500 text-white font-semibold px-2 py-2 rounded-lg text-sm transition"
                  >
                    Add a Wishlist
                  </button>

                  <Link
                    to={`product/${item.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-2 py-2 rounded-lg text-sm transition text-center"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Sidebar */}
      <div className="sm:w-1/3 w-full">
        <div className="flex flex-col gap-3 w-full p-3 border-4 border-blue-100">
          <h1 className="text-xl font-extrabold">🚘 Ojiakaanu Auto’s</h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-inter text-base leading-relaxed text-gray-700"
          >
            At Ojiakaanu Auto’s, we specialize in imported cars — both brand new and
            foreign used (Tokunbo) — carefully selected to meet your taste,
            style, and budget. Whether you’re looking for durability, luxury, or
            everyday comfort, we’ve got the perfect ride just for you. We also
            offer genuine motor parts for top car brands, ensuring your ride
            stays smooth and reliable.
          </motion.p>
        </div>

        <div className="hidden sm:block p-3">
          <MessageForm />
        </div>
      </div>

    
    </section>
  );
}

export default Product;
