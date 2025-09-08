/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutesStr} ${ampm}`;
  };

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <motion.div
      className="px-3 py-1 h-8 text-[10px] font-medium text-white bg-gray-900/60 backdrop-blur-md rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex items-center gap-1"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <span>{weekdays[date.getDay()]}, {months[date.getMonth()]} {date.getDate()}</span>
      <span>{formatTime(date)}</span>
    </motion.div>
  );
};

export default Time;
