// src/pages/ProductDetail.jsx
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import products from "../product";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

function ProductDetail() {
  const { id } = useParams();
  const { cartItems, addToCart, showCart, setShowCart } = useContext(CartContext);

  const allProducts = Object.values(products).flat();
  const product = allProducts.find((item) => item.id.toString() === id);

  if (!product) return <p className="text-center mt-10">Product not found</p>;

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="flex flex-col pt-20 pb-4">
      <div className="flex justify-between items-center px-8 w-full">
        <div className="flex gap-3 p-5 items-center w-5/6">
          <Link to="/" className="hover:text-blue-700 hover:underline font-semibold">
            Home
          </Link>
          <span>></span>
          <span className=" w-full font-extrabold overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</span>
        </div>
        <button
          onClick={() => setShowCart(!showCart)}
          className="relative flex items-center gap-1 text-lg font-bold bg-blue-600 px-4 py-2 rounded-md text-white transition"
        >
          <FaShoppingCart />
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              {totalQuantity}
            </span>
          )}
        </button>
      </div>

      {/* Show Cart if true */}
      {showCart && (
        <div className="absolute top-20 sm:right-10 z-50 bg-white shadow-lg rounded p-4 sm:w-1/2 w-full">
          <Cart />
        </div>
      )}
      <div className=" flex items-center p-8 max-w-4xl mx-auto h-screen">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.image}`}
            alt={product.name}
            className="w-1/2 object-cover rounded-md"
          />
          <div>
            <h1 className="text-3xl font-bold mb-3">{product.name}</h1>
            <div>
              <span className="text-2xl font-extrabold">Features</span>
              <p className="text-xl text-gray-600 mb-4">{product.feature}</p>
            </div>
            <div>
              <span className="text-2xl font-extrabold">Description</span>
              <p className="text-xl text-gray-600 mb-4">{product.description}</p>
            </div>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Add a Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
