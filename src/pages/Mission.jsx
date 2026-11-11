import "../styles/Mission.css";
import missionbg from "../assets/backgrounds/missionbg.png";

function Mission() {
  return (
    <div
      className="mission-container"
      style={{ backgroundImage: `url(${missionbg})` }}
    >
      <div className="mission-content">
        <div className="section">
          <h1>Our Mission</h1>
          <p>
            Weyland-Yutani Corp is committed to advancing humanity through
            technological innovation, deep space exploration, and strategic
            interstellar expansion.
          </p>
        </div>

        <div className="section">
          <h2>Vision</h2>
          <p>
            Weyland-Yutani Corporation’s vision is to expand humanity’s reach
            beyond Earth and establish a thriving presence across the stars.
            Through advanced technology, bold exploration, and strategic resource
            development, the company seeks to transform distant worlds into
            centers of commerce, industry, and human settlement. By pioneering new
            frontiers and unlocking the potential of the galaxy, Weyland-Yutani
            strives to lead humanity into an era of interstellar prosperity—true
            to its guiding principle: building better worlds.
          </p>
        </div>

        <div className="section">
          <h2>Core Values</h2>
          <p>
            Weyland-Yutani Corporation’s core values center on innovation,
            exploration, and corporate excellence. The company is committed to
            advancing technology, expanding humanity’s presence across the galaxy,
            and responsibly harnessing extraterrestrial resources to fuel
            progress. Through disciplined operations, scientific discovery, and
            unwavering dedication to growth, Weyland-Yutani seeks to maintain its
            leadership in interstellar industry while supporting the continued
            advancement of human civilization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mission;