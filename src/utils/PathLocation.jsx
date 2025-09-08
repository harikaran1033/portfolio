import { useLocation } from "react-router-dom";

const PathLocation = () => {
  const location = useLocation();

  const pageNames = {
    "/": "Home",
    "/about": "About",
    "/projects": "Projects",
    "/contact": "Contact",
    // add more routes here
  };

  const currentPage = pageNames[location.pathname] || "Page";

  return (
    <div className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded-md text-[10px] font-medium text-white select-none">
      {currentPage}
    </div>
  );
};

export default PathLocation;
