/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Bluetooth, BluetoothOff } from "lucide-react";
import { motion } from "framer-motion";

export default function BluetoothStatus() {
  const [bluetoothOn, setBluetoothOn] = useState(null); // null = unknown

  const checkBluetooth = async () => {
    if (!navigator.bluetooth) {
      setBluetoothOn(false); // Not supported
      return;
    }

    try {
      await navigator.bluetooth.requestDevice({ acceptAllDevices: true });
      setBluetoothOn(true); // Bluetooth is ON
    } catch (error) {
      setBluetoothOn(false); // User cancelled or no device → treat as OFF
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-0 px-2 py-1 bg-gray-900/60 backdrop-blur-md rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.3)] cursor-pointer text-white text-[10px] h-8"
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={checkBluetooth}
    >
      {bluetoothOn ? (
        <Bluetooth className="w-4 h-4 text-cyan-400" />
      ) : bluetoothOn === false ? (
        <BluetoothOff className="w-4 h-4 text-red-400" />
      ) : (
        <Bluetooth className="w-4 h-4 text-white opacity-70" />
      )}
      <span className="text-[8px] mt-0.5">
        {bluetoothOn === null ? "?" : bluetoothOn ? "ON" : "OFF"}
      </span>
    </motion.div>
  );
}
