/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Wifi, WifiOff } from "lucide-react";
import { motion } from "framer-motion";

export default function ConnectionDetails() {
  const [network, setNetwork] = useState({
    online: navigator.onLine,
    type: "unknown",
    downlink: 0,
  });

  useEffect(() => {
    const updateNetwork = () => {
      const conn =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      setNetwork({
        online: navigator.onLine,
        type: conn?.effectiveType || "unknown",
        downlink: conn?.downlink || 0,
      });
    };

    updateNetwork();

    window.addEventListener("online", updateNetwork);
    window.addEventListener("offline", updateNetwork);
    if (navigator.connection) {
      navigator.connection.addEventListener("change", updateNetwork);
    }

    return () => {
      window.removeEventListener("online", updateNetwork);
      window.removeEventListener("offline", updateNetwork);
      if (navigator.connection) {
        navigator.connection.removeEventListener("change", updateNetwork);
      }
    };
  }, []);

  return (
    <motion.div
      className="flex items-center gap-1 px-2 py-1 bg-gray-900/60 backdrop-blur-md rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-white text-[10px] h-8"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {network.online ? (
        <Wifi className="w-4 h-4 text-green-400" />
      ) : (
        <WifiOff className="w-4 h-4 text-red-400" />
      )}

      <div className="flex flex-col items-center leading-none">
        {network.online ? (
          <>
            <span>{network.downlink} Mbps</span>
            <span className="opacity-70">{network.type.toUpperCase()}</span>
          </>
        ) : (
          <span>Offline</span>
        )}
      </div>
    </motion.div>
  );
}
