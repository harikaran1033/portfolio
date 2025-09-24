import BatteryStatus from "../utils/BatteryStatus";
import BluetoothStatus from "../utils/BluetoothStatus";
import ConnectionDetails from "../utils/ConnectionDetails";
import PathLocation from "../utils/PathLocation";
import Time from "../utils/Time";

const TopPanel = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-12 flex items-center justify-between 
                 px-2 md:px-4 bg-gray-800/50 backdrop-blur-md text-white z-50 shadow-lg"
    >
      {/* Left: Path */}
      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
        <PathLocation />
      </div>

      {/* Right: Connection + Bluetooth + Battery + Time */}
      <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm">
        <ConnectionDetails />
        <BluetoothStatus />
        <BatteryStatus />
        <Time />
      </div>
    </div>
  );
};

export default TopPanel;
