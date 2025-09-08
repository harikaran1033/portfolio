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
    <div className="relative w-screen h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 pl-6 overflow-hidden justify-center items-center">
      
      {/* Empty state */}
      {openWindows.projects.length === 0 && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                   bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                   animate-gradient-x shadow-lg">
            Double-click a folder to explore my projects!
          </h1>
          <p className="mt-3 text-gray-300 text-sm md:text-base animate-pulse">
            Click and see live demos and drafts
          </p>
        </div>
      )}

      {/* Desktop Icons */}
      <div className="w-full h-full text-white">
        <DesktopIcon
          icon={folderIcon}
          label="Weatherapp"
          onDoubleClick={() => addFolder("projects","weatherapp")}
          defaultPosition={{ x: 20, y: 20 }}
        />

        <DesktopIcon
          icon={folderIcon}
          label="AuctionPlay"
          onDoubleClick={() => addFolder("projects","auctionplay")}
          defaultPosition={{ x: 20, y: 120 }}
        />
      </div>

      {/* Weather App Window */}
      {openWindows.projects.includes("weatherapp") && (
        <DragWindow
          title="Weather App"
          closeFolder={() => closeFolder("projects","weatherapp")}
        >
          <div className="flex flex-col gap-6">
            <img src={wetherapp} alt="Weather App" className="w-full h-56 md:h-72 object-cover rounded-xl shadow-xl border border-gray-200" />
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">React Weather App 🌤️</h2>
              <p className="text-gray-700 text-sm md:text-base">
                A responsive weather application built with React, Tailwind CSS, Framer Motion for smooth animations, and the OpenWeather API. 
                It shows real-time weather, forecasts, and automatically adjusts for day/night 🌞🌙.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-gray-300 transition">React</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-gray-300 transition">Tailwind CSS</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-gray-300 transition">Framer Motion</span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-gray-300 transition">OpenWeather API</span>
            </div>
            <div className="flex gap-3">
              <a href="https://github.com/harikaran1033/weather-app" target="_blank" className="px-4 py-2 bg-gray-900 text-white rounded-lg shadow hover:bg-gray-700 text-sm font-medium transition">GitHub</a>
              <a href="https://weather-app-peach-two-32.vercel.app/" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 text-sm font-medium transition">Live Demo</a>
            </div>
          </div>
        </DragWindow>
      )}

      {/* AuctionPlay Window */}
      {openWindows.projects.includes("auctionplay") && (
        <DragWindow
          title="AuctionPlay"
          closeFolder={() => closeFolder("projects","auctionplay")}
        >
          <div className="space-y-4 text-gray-900">
            {/* Project Info */}
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm">
              <h2 className="text-lg font-semibold">AuctionPlay 🎮</h2>
              <p>A real-time multiplayer auction game where players join rooms, bid on players, and see live updates instantly.</p>
              <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-yellow-400/80 text-black font-medium">Draft – Not deployed yet</span>
            </div>

            {/* Tech Stack */}
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm">
              <h3 className="font-semibold mb-1">⚙️ Tech Stack</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>React + Tailwind CSS</li>
                <li>Firebase (Realtime Database / Firestore)</li>
                <li>Multiplayer rooms & real-time syncing</li>
              </ul>
            </div>

            {/* Features */}
            <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl shadow-sm">
              <h3 className="font-semibold mb-1">✨ Features</h3>
              <ul className="list-disc pl-5 text-sm">
                <li>Create and join auction rooms</li>
                <li>Realtime bidding updates across all players</li>
                <li>Player dataset integration (IPL, BBL, The Hundred)</li>
                <li>Firebase used for syncing and storing bids</li>
              </ul>
            </div>

            {/* Screenshots */}
            <div className="p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-sm">
              <h3 className="font-semibold mb-2">🖼️ Preview</h3>
              <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {Object.values(auctionImages).map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Auction Screen ${index + 1}`}
                    className="flex-shrink-0 w-[90%] md:w-[85%] rounded-lg shadow-md object-cover snap-center"
                  />
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
