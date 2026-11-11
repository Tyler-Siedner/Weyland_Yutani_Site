import "../styles/Presence.css";
import presencebg from "../assets/backgrounds/presencebg.png";

function Presence() {
  return (
    <div
      className="presence-container"
      style={{ backgroundImage: `url(${presencebg})` }}
    >
      <div className="presence-content">
        <h1>Galactic Presence</h1>

        <p>
          Weyland-Yutani’s reach extends far beyond Earth, shaping life across a
          vast network of colonized planets, industrial outposts, and research
          installations. From major population centers to isolated frontier
          stations, the corporation’s presence is woven into the infrastructure
          of human expansion.
          <br />
          <br />
          Its name appears on transport routes, terraforming programs, energy
          systems, and supply chains, making it one of the most influential
          forces in settled space. Across colonized worlds, Weyland-Yutani
          positions itself as both builder and benefactor.
          <br />
          <br />
          It funds development, supports resource extraction, and establishes
          the systems that allow distant settlements to survive in hostile
          environments. Yet this expansion is never purely humanitarian. Each
          new foothold strengthens the company’s control over trade, technology,
          and the future of interstellar civilization, turning remote colonies
          into strategic assets within a larger corporate network.
          <br />
          <br />
          Its influence is especially visible in research facilities, where
          scientific discovery and corporate ambition often overlap. These
          installations serve as centers for innovation, experimentation, and
          classified study, pushing the boundaries of what humanity can achieve
          while raising difficult questions about risk, ethics, and oversight.
          <br />
          <br />
          Whether operating in the public eye or behind layers of secrecy,
          Weyland-Yutani’s facilities represent the company’s relentless drive
          to dominate not only space, but the knowledge that defines it.
          <br />
          <br />
          Taken together, this galactic footprint tells the story of a
          corporation that does not simply participate in expansion, but directs
          it. Weyland-Yutani’s presence across worlds is a map of power:
          economic, political, and scientific.
          <br />
          <br />
          Every colony, station, and research hub reflects a larger vision of
          control, where the future of humanity is shaped as much by corporate
          strategy as by exploration itself.
        </p>
      </div>
    </div>
  );
}

export default Presence;
