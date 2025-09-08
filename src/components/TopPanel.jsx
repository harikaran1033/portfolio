import BatteryStatus from "../utils/BatteryStatus";
import BluetoothStatus from "../utils/BluetoothStatus";
import ConnectionDetails from "../utils/ConnectionDetails";
import PathLocation from "../utils/PathLocation";
import Time from "../utils/Time";

const TopPanel = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full  h-12 flex items-center justify-between px-4 
                    bg-gray-800/50 backdrop-blur-md text-white z-50 shadow-lg"
    >
       <PathLocation />

      {/* Right / Bluetooth + Battery */}
      <div className="flex items-center gap-4">
           <ConnectionDetails />
        <BluetoothStatus />
        <BatteryStatus />
        <Time />
      </div>
    </div>
  );
};

export default TopPanel;
