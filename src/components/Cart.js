import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { cartItems, removeFromCart, setShowCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white opacity-95 p-4 rounded-md shadow-md mt-20 z-10 ">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl text-red-500 font-bold">
          Your Cart ({totalQuantity})
        </h3>
        <button onClick={() => setShowCart(false)} className="relative -top-5 ">
          <X className="w-6 h-6 text-gray-700 hover:text-red-700" />
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-gray-500 flex flex-col justify-center items-center gap-2 mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
          <img
            src={`${process.env.PUBLIC_URL}/images/illustration-empty-cart.svg`}
            alt="empty cart"
            className="w-32"
          />
          <Link to="/" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 max-h-48 overflow-auto">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-4 border-b pb-2"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.image}`}
                    alt={item.name}
                    className="w-16 object-cover rounded"
                  />
                  <div>
                    <p className="sm:w-4/6 w-24 font-semibold text-sm overflow-hidden whitespace-nowrap text-ellipsis">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 items-center">
                  <button onClick={() => decreaseQty(item.id)} className="bg-red-500 text-2xl px-3 py-1 font-bold text-white rounded-l-md">
                    -
                  </button>{" "}
                  <span className="font-bold">{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="bg-blue-500 text-2xl px-3 py-1 font-bold text-white rounded-r-md">
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-300 font-extrabold text-3xl hover:underline"
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-between">
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
              onClick={() =>
                cartItems.forEach((item) => removeFromCart(item.id))
              }
            >
              Clear Cart
            </button>
            <Link to='/confirmOrder' className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
              Confirm Order
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
