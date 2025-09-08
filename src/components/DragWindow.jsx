import { useRef } from "react";
import Draggable from "react-draggable";

const DragWindow = ({ title, children, closeFolder }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".window-header"
      bounds="parent"
      defaultPosition={{
        x: window.innerWidth / 10 + 100,
        y: window.innerHeight / 50 - 600,
      }}
    >
      <div
        ref={nodeRef}
        className="absolute w-1/2 h-1/2 rounded-2xl overflow-hidden
                   bg-white/80 backdrop-blur-xl border border-gray-200
                   shadow-[0_8px_30px_rgba(0,0,0,0.3)] active:z-20"
      >
        {/* ---------- macOS Header ---------- */}
        <div className="window-header flex items-center justify-center px-3 py-1.5 
                        bg-gray-100/90 border-b border-gray-200 cursor-move relative">
          
          {/* Close button on left */}
          <button
            onClick={closeFolder}
            className="absolute left-3 w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-600 
                       hover:scale-110 transition-transform shadow-inner"
          />

          {/* Title centered */}
          <p className="text-sm font-semibold text-gray-800 tracking-wide select-none">
            {title}
          </p>
        </div>

        {/* ---------- Window Body ---------- */}
        <div className="window-body p-4 text-gray-800 overflow-auto h-[calc(100%-36px)]">
          {children}
        </div>
      </div>
    </Draggable>
  );
};

export default DragWindow;
