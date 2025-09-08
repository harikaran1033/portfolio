/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// ✅ Import your images
import homeIcon from "../assets/icons/home.png";
import manIcon from "../assets/icons/man.png";
import folderIcon from "../assets/icons/folder.png";
import mailIcon from "../assets/icons/call.png";

export default function Navbar() {
  const items = [
    { to: "/", icon: homeIcon, label: "Home" },
    { to: "/about", icon: manIcon, label: "About" },
    { to: "/projects", icon: folderIcon, label: "Projects" },
    { to: "/contact", icon: mailIcon, label: "Contact" },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className="fixed z-30 w-1/2 justify-around font-orbit md:w-1/3 bottom-6 left-1/2 -translate-x-1/2 flex px-6 py-3 bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl">
      {items.map((item, index) => {
        const distance = hoverIndex !== null ? Math.abs(hoverIndex - index) : 0;

        // scaling + upward movement
        let scale = 1;
        let y = 0;

        if (hoverIndex !== null) {
          if (distance === 0) {
            scale = 1.5;
            y = -15; // hovered → move up
          } else if (distance === 1) {
            scale = 1.2;
            y = -6; // neighbors → move slightly up
          } else if (distance === 2) {
            scale = 1.05;
            y = -1; // far neighbors → tiny lift
          }
        }

        return (
          <NavLink
            key={index}
            to={item.to}
            className="relative flex flex-col items-center group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* ✅ Image with scaling + translation */}
            <motion.div
              animate={{ scale, y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-pointer"
            >
              <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
            </motion.div>

            {/* Label above icon */}
            <span className="absolute -top-15 opacity-0 group-hover:opacity-100 transition 
                             text-xs bg-black text-white px-2 py-1 rounded-md">
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </div>
  );
}
