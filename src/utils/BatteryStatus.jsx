/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BatteryStatus() {
  const [battery, setBattery] = useState({
    level: 100,
    charging: false,
  });

  useEffect(() => {
    let batteryManager;

    async function loadBattery() {
      if (navigator.getBattery) {
        batteryManager = await navigator.getBattery();

        const updateBattery = () =>
          setBattery({
            level: Math.round(batteryManager.level * 100),
            charging: batteryManager.charging,
          });

        updateBattery();

        batteryManager.addEventListener("levelchange", updateBattery);
        batteryManager.addEventListener("chargingchange", updateBattery);
      } else {
        console.warn("Battery API not supported ⚠️");
      }
    }

    loadBattery();

    return () => {
      if (batteryManager) {
        batteryManager.removeEventListener("levelchange", () => {});
        batteryManager.removeEventListener("chargingchange", () => {});
      }
    };
  }, []);

  const batteryColor =
    battery.level > 20 ? "bg-green-400" :
    battery.level > 10 ? "bg-yellow-400" :
    "bg-red-500";

  return (
    <motion.div
      className="flex items-center gap-1 px-2 py-1 bg-gray-900/60 backdrop-blur-md rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-white text-[10px] h-8"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Vertical battery */}
      <div className="relative w-3 h-5 border border-gray-400 rounded-xs overflow-hidden">
        <div
          className={`${batteryColor} w-full absolute bottom-0 transition-all duration-300`}
          style={{ height: `${battery.level}%` }}
        />
        {/* Battery tip */}
        <div className="absolute -top-[3px] left-1/4 w-1/2 h-1 bg-gray-400 rounded-sm" />
      </div>

      {/* Percentage */}
      <span className="text-[10px] font-medium">{battery.level}%</span>

      {/* Charging icon */}
      {battery.charging && <span className="text-yellow-400 text-[10px]">⚡</span>}
    </motion.div>
  );
}
