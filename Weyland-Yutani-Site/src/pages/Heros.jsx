import { useState } from "react";
import "../styles/Heros.css";
import herosbg from "../assets/backgrounds/herosbg.png";
import ripleyCard from "../assets/heros/ripley_card.png";
import dallasCard from "../assets/heros/dallas_card.png";
import lambertCard from "../assets/heros/lambert_card.png";
import kaneCard from "../assets/heros/kane_card.png";
import ashCard from "../assets/heros/ash_card.png";
import parkerCard from "../assets/heros/parker_card.png";
import brettCard from "../assets/heros/brett_card.png";
import jonesycard from "../assets/heros/Jonesy_card.png";

function Heros() {
  const [selectedHero, setSelectedHero] = useState(null);

  const heroes = [
    {
      id: 1,
      name: "Ellen Ripley",
      title: "Warrant Officer",
      image: ripleyCard,
      bio: "A disciplined and highly capable warrant officer who takes procedure seriously and becomes one of the crew’s strongest voices for caution and survival.",
      crewId: "NOST-001",
      status: "Deceased",
      assignment: "Bridge Operations / Flight Oversight",
      record:
        "Demonstrated strong adherence to quarantine protocol, high stress tolerance, and decisive command judgment during the Nostromo incident.",
      duties:
        "Monitored ship procedures, assisted command decisions, maintained operational discipline, and supported overall vessel safety during voyage operations.",
    },
    {
      id: 2,
      name: "Dallas",
      title: "Captain",
      image: dallasCard,
      bio: "Captain Arthur Dallas served as commanding officer of the USCSS Nostromo, responsible for overall mission leadership and final command decisions.",
      crewId: "NOST-002",
      status: "Deceased",
      assignment: "Commanding Officer",
      record:
        "Maintained command authority throughout the mission, directed crew response to distress signal procedures, and led critical search operations aboard the vessel.",
      duties:
        "Oversaw all ship functions, directed crew assignments, handled mission command decisions, and ensured compliance with company route and signal response orders.",
    },
    {
      id: 3,
      name: "Lambert",
      title: "Navigator",
      image: lambertCard,
      bio: "Joan Lambert served as the Nostromo’s navigator, handling route calculations and navigation systems during the commercial towing mission.",
      crewId: "NOST-003",
      status: "Deceased",
      assignment: "Navigation Control",
      record:
        "Provided navigational support during rerouting procedures and remained an essential bridge crew member during mission deviation and recovery stages.",
      duties:
        "Managed navigation data, assisted with course plotting, monitored approach and return vectors, and supported bridge operations during deep-space transit.",
    },
    {
      id: 4,
      name: "Kane",
      title: "Executive Officer",
      image: kaneCard,
      bio: "Thomas Kane acted as executive officer aboard the Nostromo, serving directly beneath the captain in the ship’s command structure.",
      crewId: "NOST-004",
      status: "Deceased",
      assignment: "Executive Command",
      record:
        "Participated in surface expedition procedures and fulfilled senior command responsibilities during early mission diversion events.",
      duties:
        "Supported the captain, coordinated command communication, assisted with mission supervision, and participated in off-vessel reconnaissance when required.",
    },
    {
      id: 5,
      name: "Ash",
      title: "Science Officer",
      image: ashCard,
      bio: "Ash served as the Nostromo’s science officer, tasked with scientific analysis, medical observation, and technical evaluation of unknown findings.",
      crewId: "NOST-005",
      status: "Destroyed",
      assignment: "Science and Research Division",
      record:
        "Conducted specimen analysis and investigative procedures related to discovered lifeforms and mission anomalies under special company priority.",
      duties:
        "Performed scientific examination, advised command on biological findings, supported medical review, and documented nonstandard mission discoveries.",
    },
    {
      id: 6,
      name: "Parker",
      title: "Chief Engineer",
      image: parkerCard,
      bio: "Dennis Parker was the Nostromo’s chief engineer, responsible for power systems, maintenance concerns, and technical functionality across the ship.",
      crewId: "NOST-006",
      status: "Deceased",
      assignment: "Engineering Operations",
      record:
        "Handled major engineering responsibilities throughout the voyage and worked continuously to maintain essential ship performance and survivability.",
      duties:
        "Oversaw engine systems, supervised repair work, monitored technical integrity, and managed key mechanical operations with engineering staff support.",
    },
    {
      id: 7,
      name: "Brett",
      title: "Engineering Technician",
      image: brettCard,
      bio: "Samuel Brett served as engineering technician aboard the Nostromo and worked closely with Parker on ship maintenance and repair operations.",
      crewId: "NOST-007",
      status: "Deceased",
      assignment: "Engineering Support",
      record:
        "Assisted with vessel upkeep, responded to technical maintenance tasks, and supported engineering operations during escalating onboard failures.",
      duties:
        "Carried out repair assignments, supported engineering diagnostics, maintained shipboard systems, and assisted with mechanical response tasks across the vessel.",
    },
    {
      id: 8,
      name: "Jonesy",
      title: "Ship's Cat",
      image: jonesycard,
      bio: "Jonesy served as the Nostromo’s ship cat, kept aboard as part of the vessel’s crew complement and later became one of the only survivors of the mission.",
      crewId: "NOST-008",
      status: "Survivor",
      assignment: "Companion Animal / Shipboard Presence",
      record:
        "Maintained aboard the Nostromo throughout the mission and recovered during the final evacuation after the loss of the crew.",
      duties:
        "Provided shipboard companionship, remained within crew living areas and work zones, and was informally regarded as part of daily life aboard the vessel.",
    },
  ];

  return (
    <div
      className="heros-container"
      style={{ backgroundImage: `url(${herosbg})` }}
    >
      <h1>Heros</h1>
      <h2>Remembering Our Heros</h2>

      <div className="heros-grid">
        {heroes.map((hero) => (
          <div key={hero.id} className="hero-card">
            <img src={hero.image} alt={hero.name} className="hero-image" />
            <h3>{hero.name}</h3>
            <p>{hero.title}</p>
            <button onClick={() => setSelectedHero(hero)}>View Dossier</button>
          </div>
        ))}
      </div>

      {selectedHero && (
        <div
          className="hero-modal-overlay"
          onClick={() => setSelectedHero(null)}
        >
          <div className="hero-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedHero(null)}>
              ✕
            </button>

            <img
              src={selectedHero.image}
              alt={selectedHero.name}
              className="hero-modal-image"
            />

            <h2>{selectedHero.name}</h2>
            <p className="hero-modal-title">{selectedHero.title}</p>

            <div className="hero-details">
              <p>
                <strong>Bio:</strong> {selectedHero.bio}
              </p>
              <p>
                <strong>ID:</strong> {selectedHero.crewId}
              </p>
              <p>
                <strong>Status:</strong> {selectedHero.status}
              </p>
              <p>
                <strong>Assignment:</strong> {selectedHero.assignment}
              </p>
              <p>
                <strong>Record:</strong> {selectedHero.record}
              </p>
              <p>
                <strong>Assigned Duties:</strong> {selectedHero.duties}
              </p>
            </div>
          </div>
        </div>
      )}
      <h3 className="header3">
        In memory of the crew of the USCSS Nostromo — Captain Arthur Dallas,
        Executive Officer Gilbert Kane, Warrant Officer Ellen Ripley, Navigator
        Joan Lambert, Chief Engineer Dennis Parker, Engineering Technician
        Samuel Brett, Science Officer Ash, Sent on a routine commercial towing
        mission and drawn into something far beyond human understanding, they
        faced the unknown in the cold dark between worlds. Far from home, cut
        off from rescue, and confronted with terror no one was prepared for,
        they endured with courage, fear, defiance, and sacrifice. May their
        names be remembered not only for how they were lost, but for the
        strength they showed in the face of the unimaginable. Their final voyage
        became a warning written across the stars, and their story lives on
        wherever the darkness is met with bravery.
        <br />
        Never forgotten.
      </h3>
    </div>
  );
}

export default Heros;
