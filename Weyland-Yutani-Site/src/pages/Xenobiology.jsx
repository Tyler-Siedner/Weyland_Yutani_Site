import { useState } from "react";
import "../styles/Xenobiology.css";
import biobg from "../assets/backgrounds/biobg.png";
import facehugger from "../assets/biology/facehuggerbio.png";
import xenomorph from "../assets/biology/xenomorphbio.png";
import queen from "../assets/biology/queenbio.png";
import chestburster from "../assets/biology/chestbursterbio.png";
import neomorph from "../assets/biology/neomorphbio.png";
import deacon from "../assets/biology/deaconbio.png";
import eye from "../assets/biology/eyebio.png";
import tick from "../assets/biology/tickbio.png";

function Xenobiology() {
  const [selectedAlien, setSelectedAlien] = useState(null);

  const aliens = [
    {
      id: 1,
      name: "Xenomorph",
      title: "Hostile Endoparasitoid Species",
      image: xenomorph,
      classification: "XX121",
      status: "Extreme Threat",
      origin: "Unknown",
      bio: "A highly aggressive extraterrestrial organism known for its biomechanical anatomy, adaptability, and lethal efficiency.",
      record:
        "Observed across multiple Weyland-Yutani incident reports as an apex hostile lifeform with exceptional resilience and rapid maturation.",
      traits:
        "Acidic blood, extreme hostility, stealth predation, rapid growth, and advanced survival instincts.",
    },
    {
      id: 2,
      name: "Facehugger",
      title: "Parasitic Lifecycle Stage",
      image: facehugger,
      classification: "XX121 Larval Vector",
      status: "Extreme Biohazard",
      origin: "Egg-derived organism",
      bio: "A parasitic organism that attaches to a living host and implants an embryo, beginning the reproductive cycle of the species.",
      record:
        "Recovered in multiple encounters involving derelict craft and contaminated hive environments.",
      traits:
        "Rapid host attachment, forced implantation, high mobility, and strong survival drive.",
    },
    {
      id: 3,
      name: "Chestburster",
      title: "Juvenile Lifecycle Stage",
      image: chestburster,
      classification: "XX121 Juvenile Form",
      status: "Severe Threat",
      origin: "Host gestation",
      bio: "The juvenile stage of the organism that emerges from an infected host before rapidly developing into an adult form.",
      record:
        "Documented as the transitional stage between implantation and full organism maturity.",
      traits:
        "Small but fast, highly aggressive, rapid development, and immediate survival behavior.",
    },
    {
      id: 4,
      name: "Queen",
      title: "Hive Reproductive Caste",
      image: queen,
      classification: "XX121 Royal Caste",
      status: "Catastrophic Threat",
      origin: "Hive-based reproductive apex",
      bio: "The reproductive apex of the species, responsible for egg production, hive expansion, and command of drone populations.",
      record:
        "Considered the central biological driver of colony-scale infestation events.",
      traits:
        "Massive size, elevated intelligence, reproductive capacity, territorial aggression, and hive coordination.",
    },
    {
      id: 5,
      name: "Neomorph",
      title: "Mutated Hostile Organism",
      image: neomorph,
      classification: "Unknown Mutagenic Variant",
      status: "Extreme Threat",
      origin: "Black pathogen mutation",
      bio: "A pale, fast-moving mutation associated with accelerated growth, violent behavior, and unstable development.",
      record:
        "Encountered in environments contaminated by pathogen-based mutagenic exposure.",
      traits:
        "Extreme speed, pale dermal structure, unpredictable aggression, and rapid emergence.",
    },
    {
      id: 6,
      name: "Deacon",
      title: "Rare Hybrid Organism",
      image: deacon,
      classification: "Proto-Xenomorphic Hybrid",
      status: "Unknown Threat Level",
      origin: "Hybridized emergence",
      bio: "A rare hybrid organism believed to represent an early divergent strain with distinct anatomical characteristics.",
      record:
        "Recorded as an unusual lifeform exhibiting features linked to later xenomorphic development.",
      traits:
        "Hybrid morphology, unstable taxonomy, aggressive survival instincts, and uncertain lifecycle potential.",
    },
    {
      id: 7,
      name: "The Eye",
      title: "Parasitic Observational Organism",
      image: eye,
      classification: "Species 64",
      status: "Unknown Threat",
      origin: "Alien: Earth",
      bio: "A strange parasitic organism distinguished by its oversized ocular structure, quiet movement, and unsettling observational behavior.",
      record:
        "Logged as a rare off-world lifeform with intelligence traits that suggest behavior beyond simple animal instinct.",
      traits:
        "Parasitic behavior, advanced sensory awareness, quiet movement, unsettling intelligence, and possible host interaction capabilities.",
    },
    {
      id: 8,
      name: "Ticks",
      title: "Parasitic Swarm Organisms",
      image: tick,
      classification: "Unconfirmed Arthropod-like Species",
      status: "Biohazard",
      origin: "Alien: Earth",
      bio: "Small hostile parasitic organisms associated with infestation behavior, rapid movement, and coordinated attack patterns.",
      record:
        "Observed as part of the newly introduced non-xenomorph alien lifeforms recovered in Alien: Earth incident material.",
      traits:
        "Swarm movement, parasitic attachment, rapid spread, persistent aggression, and high contamination risk.",
    },
  ];

  return (
    <div className="bio-container" style={{ backgroundImage: `url(${biobg})` }}>
      <h1>Xenobiology Division</h1>
      <h2>Classified Organism Records</h2>
      <div className="alien-grid">
        {aliens.map((alien) => (
          <div key={alien.id} className="alien-card">
            <img src={alien.image} alt={alien.name} className="alien-image" />
            <h3>{alien.name}</h3>
            <p>{alien.title}</p>
            <button onClick={() => setSelectedAlien(alien)}>View File</button>
          </div>
        ))}
      </div>
      {selectedAlien && (
        <div
          className="alien-modal-overlay"
          onClick={() => setSelectedAlien(null)}
        >
          <div className="alien-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedAlien(null)}
            >
              ✕
            </button>

            <img
              src={selectedAlien.image}
              alt={selectedAlien.name}
              className="alien-modal-image"
            />

            <h2>{selectedAlien.name}</h2>
            <p className="alien-modal-title">{selectedAlien.title}</p>

            <div className="alien-details">
              <p>
                <strong>Classification:</strong> {selectedAlien.classification}
              </p>
              <p>
                <strong>Status:</strong> {selectedAlien.status}
              </p>
              <p>
                <strong>Origin:</strong> {selectedAlien.origin}
              </p>
              <p>
                <strong>Bio:</strong> {selectedAlien.bio}
              </p>
              <p>
                <strong>Record:</strong> {selectedAlien.record}
              </p>
              <p>
                <strong>Traits:</strong> {selectedAlien.traits}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Xenobiology;
