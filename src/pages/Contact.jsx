/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Try again later.");
    }
  };

  // Clear status after 3 seconds
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 p-6">
      <motion.div
        className="w-full max-w-lg bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] p-8 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.02, y: -3 }}
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Contact Me
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 bg-gray-900/70 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 bg-gray-900/70 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="p-3 bg-gray-900/70 text-white border border-gray-600 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            required
          />

          <motion.button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-shadow shadow-lg"
            whileHover={{ scale: 1.03, boxShadow: "0px 15px 25px rgba(0,0,0,0.4)" }}
          >
            Send
          </motion.button>

          {status && (
            <p
              className={`text-sm mt-2 text-center ${
                status.startsWith("✅")
                  ? "text-green-400"
                  : status.startsWith("❌")
                  ? "text-red-400"
                  : "text-yellow-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
