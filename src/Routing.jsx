import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TopPanel from "./components/TopPanel";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const Routing = ({ openWindows, setOpenWindows }) => {
  return (
    <BrowserRouter>
      <TopPanel />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home openWindows={openWindows} setOpenWindows={setOpenWindows} />} />
        <Route path="/about" element={<About openWindows={openWindows} setOpenWindows={setOpenWindows} />} />
        <Route path="/projects" element={<Projects openWindows={openWindows} setOpenWindows={setOpenWindows} />} />
        <Route path="/contact" element={<Contact openWindows={openWindows} setOpenWindows={setOpenWindows} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
