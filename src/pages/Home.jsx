/* eslint-disable no-unused-vars */
import Typewriter from "../utils/Typewritter";
import profImg from "../assets/images/hari.jpg";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Main content */}
      <div className="flex-1 flex flex-col gap-10 justify-center items-center">
        
        {/* Typewriter Text */}
        <div className="text-white w-11/12 md:w-1/2 text-center order-2 text-lg md:text-2xl">
          <Typewriter
            phrases={[
              "Hi, I'm Hari Karan",
              "Crafting Modern Web Experiences",
              "Fullstack Developer | React Enthusiast",
              "Building Interactive Interfaces",
            ]}
            typingSpeed={100}
            pause={1500}
          />
        </div>

        {/* Social + Resume Buttons */}
        <div className="flex gap-6 mt-6 justify-center order-2">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/hari-haran-87a885288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition text-3xl"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/harikaran1033"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition text-3xl"
          >
            <FaGithub />
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"  // <-- Make sure your resume is in the public folder
            download
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-lg font-medium"
          >
            <FaDownload /> Resume
          </a>
        </div>

        {/* Profile Image */}
        <motion.div
          className="w-60 h-60 md:w-60 md:h-60 overflow-hidden order-1 rounded-full shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 },
          }}
          whileHover={{ scale: 1.2, y: 0 }}
        >
          <img
            src={profImg}
            alt="Profile"
            className="rounded-full w-full h-full object-cover border-2 border-gray-200"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
