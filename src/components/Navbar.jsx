import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/home">Home</Link>
      <Link className="nav-link" to="/mission">Mission</Link>
      <Link className="nav-link" to="/xenobiology">Xenobiology</Link>
      <Link className="nav-link" to="/presence">Presence</Link>
      <Link className="nav-link" to="/heros">Heros</Link>
      <Link className="nav-link" to="/store">Store</Link>
      
      <Link className="nav-link" to="/jonesy">Jonesy</Link>
    </nav>
  );
}

export default Navbar;