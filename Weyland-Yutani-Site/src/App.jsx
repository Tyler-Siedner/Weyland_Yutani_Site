import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Splash from "./pages/Splash";
import Home from "./pages/Home";
import Mission from "./pages/Mission";
import Xenobiology from "./pages/Xenobiology";
import Presence from "./pages/Presence";
import Heros from "./pages/Heros";
import Store from "./pages/Store";
import Jonesy from "./pages/Jonesy";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/splash" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/xenobiology" element={<Xenobiology />} />
        <Route path="/presence" element={<Presence />} />
        <Route path="/heros" element={<Heros />} />
        <Route path="/store" element={<Store />} />
        <Route path="/jonesy" element={<Jonesy />} />
      </Routes>
    </>
  );
}

export default App;
