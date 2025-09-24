import DesktopIcon from "../components/DesktopIcon";
import folderIcon from "../assets/icons/folder.png";
import DragWindow from "../components/DragWindow";
import wetherapp from "../assets/images/WeatherApp.png";
import auctionImages from "../assets/auction";

const Projects = ({ openWindows, setOpenWindows }) => {
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

  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 pl-6 overflow-hidden">
      
      {/* Empty state */}
      {(!openWindows.projects || openWindows.projects.length === 0) && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                   animate-gradient-x shadow-lg">
            Click a folder to explore my projects!
          </h1>
        </div>
      )}

      {/* Desktop Icons */}
      <div className="w-full h-full text-white">
        <DesktopIcon
          icon={folderIcon}
          label="Weatherapp"
          onActivate={() => addFolder("projects", "weatherapp")}
          defaultPosition={{ x: 20, y: 20 }}
        />
        <DesktopIcon
          icon={folderIcon}
          label="AuctionPlay"
          onActivate={() => addFolder("projects", "auctionplay")}
          defaultPosition={{ x: 20, y: 120 }}
        />
      </div>

      {/* Weather App Window */}
      {openWindows.projects?.includes("weatherapp") && (
        <DragWindow title="Weather App" closeFolder={() => closeFolder("projects","weatherapp")}>
          <div className="flex flex-col gap-6">
            <img src={wetherapp} alt="Weather App" className="w-full h-56 md:h-72 object-cover rounded-xl shadow-xl border border-gray-200" />
            <h2 className="text-2xl font-bold text-gray-900">React Weather App 🌤️</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Responsive weather app with React, Tailwind CSS, Framer Motion, OpenWeather API.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="badge">React</span>
              <span className="badge">Tailwind CSS</span>
              <span className="badge">Framer Motion</span>
              <span className="badge">OpenWeather API</span>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/harikaran1033/weather-app" target="_blank" className="btn">GitHub</a>
              <a href="https://weather-app-peach-two-32.vercel.app/" target="_blank" className="btn blue">Live Demo</a>
            </div>
          </div>
        </DragWindow>
      )}

      {/* AuctionPlay Window */}
      {openWindows.projects?.includes("auctionplay") && (
        <DragWindow title="AuctionPlay" closeFolder={() => closeFolder("projects","auctionplay")}>
          <div className="space-y-4 text-gray-900">
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold">AuctionPlay 🎮</h2>
              <p>Real-time multiplayer auction game with live bidding updates.</p>
            </div>
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm">
              <h3 className="font-semibold mb-1">⚙️ Tech Stack</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>React + Tailwind CSS</li>
                <li>Firebase (Realtime Database / Firestore)</li>
              </ul>
            </div>
            <div className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">🖼️ Preview</h3>
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {Object.values(auctionImages).map((img, index) => (
                  <img key={index} src={img} alt={`Auction ${index}`} className="flex-shrink-0 w-[90%] md:w-[85%] rounded-lg shadow-md object-cover snap-center" />
                ))}
              </div>
              <p className="text-xs text-gray-600 mt-1">Swipe to see all screens →</p>
            </div>
          </div>
        </DragWindow>
      )}
    </div>
  );
};

export default Projects;
