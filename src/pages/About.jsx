import homeIcon from "../assets/aboutIcons/profileIcon.png";
import manIcon from "../assets/aboutIcons/educationIcon.png";
import folderIcon from "../assets/aboutIcons/skillsIcon.png";
import callIcon from "../assets/aboutIcons/descriptionIcon.png";
import DragWindow from "../components/DragWindow";
import DesktopIcon from "../components/DesktopIcon";
import {
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiReact,
} from "react-icons/si";

const About = ({ openWindows, setOpenWindows }) => {

  const addFolder = (page, name) => {
    setOpenWindows(prev => ({
      ...prev,
      [page]: [...(prev[page] || []), name],
    }));
  };

  const closeFolder = (page, name) => {
    setOpenWindows(prev => ({
      ...prev,
      [page]: prev[page].filter(n => n !== name),
    }));
  };

  const details = {
    Name: "Harikaran",
    Role: "Web Developer",
    Age: 22,
    Mail: "harikaran103345@gmail.com",
  };

  const education = [
    {
      level: "College",
      institution: "Dhanalakshmi College of Engineering",
      duration: "2021 - 2025",
      scored:"7.5 (cgpa)"
    },
    {
      level: "SSLC",
      institution: "C.S. Central Matric Higher Secondary School",
      duration: "2018 - 2019",
      scored:"70%"
    },
    {
      level: "HSC",
      institution: "C.S. Central Matric Higher Secondary School",
      duration: "2019 - 2021",
      scored:"75% in 11th and 80.6% in 12th"
    },
  ];

  const skills = [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-600" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-700" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "React.js", icon: SiReact, color: "text-sky-500" },
  ];

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 pl-6 overflow-hidden justify-center items-center">

      {/* Desktop Icons */}
      {(!openWindows.about || openWindows.about.length === 0) && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                   animate-gradient-x shadow-lg">
            Double-click a folder to explore About Me!
          </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-base animate-pulse">
            Click and see live demos and drafts
          </p>
        </div>
      )}

      <div className="w-full h-full">
        <DesktopIcon
          icon={homeIcon}
          label="My Info"
          onDoubleClick={() => addFolder("about","MyInfo")}
          defaultPosition={{ x: 20, y: 20 }}
        />
        <DesktopIcon
          icon={manIcon}
          label="Education"
          onDoubleClick={() => addFolder("about","Education")}
          defaultPosition={{ x: 20, y: 120 }}
        />
        <DesktopIcon
          icon={folderIcon}
          label="Skills"
          onDoubleClick={() => addFolder("about","Skills")}
          defaultPosition={{ x: 20, y: 220 }}
        />
        <DesktopIcon
          icon={callIcon}
          label="What I DO"
          onDoubleClick={() => addFolder("about","description")}
          defaultPosition={{ x: 20, y: 320 }}
        />
      </div>

      {/* Windows */}
      {openWindows.about?.includes("MyInfo") && (
  <DragWindow title="My Info" closeFolder={() => closeFolder("about","MyInfo")}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {Object.entries(details).map(([key, value]) => (
        <div
          key={key}
          className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg
                     hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-default"
        >
          {/* Icon based on key */}
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 shadow-inner">
            {key === "Name" && <span className="text-xl font-bold text-blue-400">👤</span>}
            {key === "Role" && <span className="text-xl font-bold text-green-400">💼</span>}
            {key === "Age" && <span className="text-xl font-bold text-yellow-400">🎂</span>}
            {key === "Mail" && <span className="text-xl font-bold text-red-400">✉️</span>}
          </div>

          {/* Info text */}
          <div className="flex flex-col">
            <span className="font-semibold text-black text-sm">{key}</span>
            <span className="text-gray-900 text-sm break-words">{value}</span>
          </div>
        </div>
      ))}
    </div>
  </DragWindow>
)}

{openWindows.about?.includes("Education") && (
  <DragWindow title="Education" closeFolder={() => closeFolder("about","Education")}>
    <div className="flex flex-col gap-4">
      {education.map((edu, index) => (
        <div
          key={index}
          className="p-4 bg-white/20 backdrop-blur-md rounded-xl hover:bg-white/40 transition shadow-sm"
        >
          <p className="text-gray-900 font-semibold">Level: <span className="font-normal">{edu.level}</span></p>
          <p className="text-gray-900 font-semibold">Institution: <span className="font-normal">{edu.institution}</span></p>
          <p className="text-gray-900 font-semibold">Duration: <span className="font-normal">{edu.duration}</span></p>
          <p className="text-gray-900 font-semibold">Score: <span className="font-normal">{edu.scored}</span></p>
        </div>
      ))}
    </div>
  </DragWindow>
)}

{openWindows.about?.includes("Skills") && (
  <DragWindow title="Skills" closeFolder={() => closeFolder("about","Skills")}>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-3">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 p-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg
                     hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-default"
        >
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 shadow-inner">
            <skill.icon className={`w-7 h-7 ${skill.color}`} />
          </div>
          <span className="font-semibold text-black text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  </DragWindow>
)}



    {openWindows.about?.includes("description") && (
  <DragWindow title="What I Do" closeFolder={() => closeFolder("about","description")}>
    <div className="space-y-4 text-gray-900">
      
      {/* Frontend & Backend */}
      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm hover:bg-white/40 transition">
        <p>🌐 <span className="font-semibold">Frontend Development:</span> React, Tailwind CSS, JavaScript</p>
        <p>⚡ <span className="font-semibold">Backend Development:</span> Node.js, Express, MongoDB, MySQL</p>
      </div>

      {/* Tools & Technologies */}
      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm hover:bg-white/40 transition">
        <h1 className="font-semibold mb-1">🛠 Tools & Technologies</h1>
        <p>VS Code, Git, GitHub, Postman, Figma, Chrome DevTools</p>
      </div>

      {/* Projects / Contributions */}
      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm hover:bg-white/40 transition">
        <h1 className="font-semibold mb-1">🚀 Projects</h1>
        <ul className="list-disc list-inside">
          <li>Weather App with React & Tailwind</li>
          <li>Real-time Auction Game with React & JS</li>
        </ul>
      </div>

      {/* Soft Skills */}
      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm hover:bg-white/40 transition">
        <h1 className="font-semibold mb-1">💡 My Approach</h1>
        <p>Problem-solving, attention to detail, continuous learning, and creating user-friendly experiences.</p>
      </div>



      {/* Hobbies / Fun */}
      <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm hover:bg-white/40 transition">
        <h1 className="font-semibold mb-1">🎯 Hobbies</h1>
        <p>Cricket enthusiast 🏏 | UI Design lover 🎨 | Music & Podcasts 🎧</p>
      </div>

    </div>
  </DragWindow>
)}


    </div>
  );
};

export default About;
