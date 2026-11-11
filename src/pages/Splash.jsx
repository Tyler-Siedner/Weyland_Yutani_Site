import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import facehugger from "../assets/facehugger.png";

function Splash() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Flicker interval
    const flicker = setInterval(() => {
      setVisible(prev => !prev);
    }, 40); // speed of flicker (lower = faster)

    // Total duration before redirect
    const redirect = setTimeout(() => {
      clearInterval(flicker);
      navigate("/home");
    }, 400); // total splash duration

    return () => {
      clearInterval(flicker);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {visible && (
        <img
          src={facehugger}
          alt="facehugger"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "contain"
          }}
        />
      )}
    </div>
  );
}

export default Splash;