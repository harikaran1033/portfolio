import Draggable from "react-draggable";
import { useRef } from "react";

const DesktopIcon = ({ icon, label, onDoubleClick, defaultPosition }) => {
  const nodeRef = useRef(null);
  let lastTap = 0;

  const handleTap = (e) => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoubleClick && onDoubleClick(e); // double-tap detected
    }
    lastTap = now;
  };

  return (
    <Draggable nodeRef={nodeRef} bounds="parent" defaultPosition={defaultPosition}>
      <div
        ref={nodeRef}
        className="absolute w-20 flex flex-col items-center cursor-pointer select-none group"
        onClick={handleTap}       // handle mobile double-tap
        onDoubleClick={onDoubleClick} // still works on desktop
      >
        {/* Icon Wrapper */}
        <div
          className="w-16 h-16 flex justify-center items-center 
                     bg-white/10 backdrop-blur-md 
                     rounded-2xl shadow-md 
                     group-hover:scale-105 group-hover:shadow-xl 
                     transition-all duration-200"
        >
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
