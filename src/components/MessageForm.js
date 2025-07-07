import React, {useState, useEffect} from "react";
import { FaCheckCircle } from "react-icons/fa";

function MessageForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlMassage = (e) => {
    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbwKffa25LqX6JqHQ036Zapqaaxwc_sFqUyHqWO3AgmwcnKXh6zoh6KXa9oqe_a7_jbf/exec";
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${e.target.name.value}&Email=${e.target.email.value}&Message=${e.target.message.value}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => console.log(error));
      setSuccess(true)
      
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

   useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 10000); // 3 seconds

      return () => clearTimeout(timer); // cleanup
    }
  }, [success]);
  return (
    <form
      onSubmit={handlMassage}
      className="bg-blue-100 p-6 rounded-xl shadow-xl space-y-5 border border-gray-200"
    >
      <h2 className="text-xl font-bold text-blue-800">Send Us a Message</h2>
      {success && <div className="flex justify-center">
        <FaCheckCircle className="text-green-500 text-7xl"/>
      </div>}
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
      {success && <p className="text-green-500">message sent we will get back you shortly</p>}
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
