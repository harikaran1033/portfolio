import Draggable from "react-draggable";
import { useRef } from "react";

const DesktopIcon = ({ icon, label, onActivate, defaultPosition }) => {
  const nodeRef = useRef(null);

  const handleActivate = (e) => {
    onActivate && onActivate(e); // single click/tap works on all devices
  };

  return (
    <Draggable nodeRef={nodeRef} bounds="parent" defaultPosition={defaultPosition}>
      <div
        ref={nodeRef}
        className="absolute w-20 flex flex-col items-center cursor-pointer select-none group"
        onClick={handleActivate}
        onTouchEnd={handleActivate} // mobile tap
        style={{ touchAction: "manipulation" }}
      >
        {/* Icon */}
        <div className="w-16 h-16 flex justify-center items-center 
                        bg-white/10 backdrop-blur-md 
                        rounded-2xl shadow-md 
                        group-hover:scale-105 group-hover:shadow-xl 
                        transition-all duration-200">
          <img src={icon} alt={label} className="w-10 h-10" />
        </div>

        {/* Label */}
        <p className="text-white text-xs mt-2 text-center 
                      group-hover:text-sky-400 transition-colors">
          {label}
        </p>
      </div>
    </Draggable>
  );
};

export default DesktopIcon;
