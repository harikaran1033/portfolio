import Routing from "./Routing";
import { useState } from "react";

const App = () => {
  const [openWindows, setOpenWindows] = useState({
    projects: [],
     about: []
  });

  return (
    <Routing openWindows={openWindows} setOpenWindows={setOpenWindows} />
  );
};

export default App;
