import "../styles/Jonesy.css";
import jonesy from "../assets/jonesy.png";
{
  
}

function Jonesy() {
  return (
    <div className="jonesy-container">
      <h1>Jonesy</h1>
      <h2>Purrsonnel File: Jonesy</h2>
      <img src={jonesy} alt="jonesy" className="jonesy-image" />
    </div>
  );
}

export default Jonesy;
