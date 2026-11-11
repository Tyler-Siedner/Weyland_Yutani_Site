import { useNavigate } from "react-router-dom";
import landingbg from "../assets/backgrounds/landingbg.png";

function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${landingbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: "20vh",
        paddingRight: "41vw",
        animation: "subtleFlicker 6s infinite"
      }}
    >
      <button className="landing-button" onClick={() => navigate("/splash")}>
        ENTER HERE
      </button>
    </div>
  );
}

export default Landing;
