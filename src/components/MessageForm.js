import React from "react";

function MessageForm() {
  return (
    <form className="bg-blue-100 p-6 rounded-xl shadow-xl space-y-5 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-800">Send Us a Message</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          rows="4"
          required
          className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell us what you need..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-3 rounded-md font-semibold hover:bg-blue-600 transition"
      >
        Send Message
      </button>
    </form>
  );
}

export default MessageForm;
