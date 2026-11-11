import "../styles/Home.css";
import homelogo from "../assets/homelogo.png";

function Home() {
  return (
    <div className="home-container">
      <h1>Weyland-Yutani Corp</h1>
      <img src={homelogo} alt="Weyland-Yutani Logo" className="home-image" />
      <h2>Building Better Worlds</h2>
      <p>
        Welcome to Weyland-Yutani Corporation, a leader in interstellar
        innovation and exploration. For decades, our organization has been at
        the forefront of technological advancement, expanding humanity’s reach
        beyond Earth and into the vast frontier of space. Through bold research,
        strategic development, and a commitment to progress, Weyland-Yutani
        continues to shape the future of human civilization. As we explore new
        worlds and unlock the potential of the galaxy, we remain dedicated to
        our guiding philosophy: building better worlds for tomorrow.
      </p>
    </div>
  );
}

export default Home;
