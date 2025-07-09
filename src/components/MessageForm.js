import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const formUrl = process.env.REACT_APP_FORM_URL;
  const handleMessage = (e) => {
  e.preventDefault();
  const url = formUrl;
  
  setLoading(true);
  
  const formBody = `Name=${encodeURIComponent(formData.name)}&Email=${encodeURIComponent(formData.email)}&Message=${encodeURIComponent(formData.message)}`;

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: formBody,
  })
    .then((res) => res.text())
    .then((data) => {
      alert(data);
      setSuccess(true);
    })
    .catch((error) => {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    })
    .finally(() => {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    });
};


  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      setLoading(false);
      }, 10000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <form
      onSubmit={handleMessage}
      className="bg-blue-100 p-6 rounded-xl shadow-xl space-y-5 border border-gray-200"
    >
      <h2 className="text-xl font-bold text-blue-800">Send Us a Message</h2>

      {success && (
        <div className="flex flex-col items-center space-y-2">
          <FaCheckCircle className="text-green-500 text-5xl" />
          <p className="text-green-600 font-medium">
            Message sent! We will get back to you shortly.
          </p>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          required
          className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          required
          className="w-full p-3 mt-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          name="email"
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
          value={formData.message}
          onChange={handleChange}
          name="message"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-md font-semibold transition ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-700 text-white hover:bg-blue-600"
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default MessageForm;
