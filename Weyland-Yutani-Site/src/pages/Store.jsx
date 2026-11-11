import facehugger from "../assets/store/facehugger-storeimg.png";
import alienEgg from "../assets/store/egg-storeimg.png";
import eyeballCreature from "../assets/store/eye-storeimg.png";
import bloodTick from "../assets/store/bloodtick-storeimg.png";
import jonesyHybrid from "../assets/store/kitten-storeimg.png";
import flyingBug from "../assets/store/cricket-storeimg.png";
import "../styles/Store.css";
import storebg from "../assets/backgrounds/storebg.png";

function Store() {
  const products = [
    {
      id: 1,
      name: "Facehugger",
      price: "$5,000,000.00",
      image: facehugger,
      description: "Free Huggs.",
    },
    {
      id: 2,
      name: "Egg",
      price: "$5,000,000.00",
      image: alienEgg,
      description: "Do not tap the glass.",
    },
    {
      id: 3,
      name: "T.Ocellus",
      price: "$10,000,000.00",
      image: eyeballCreature,
      description: "It sees you. Constantly.",
    },
    {
      id: 4,
      name: "Blood Tick",
      price: "$5,000,000.00",
      image: bloodTick,
      description: "Tiny, gross, and weirdly adorable.",
    },
    {
      id: 5,
      name: "Xeno Kitten",
      price: "$10,000,000.00",
      image: jonesyHybrid,
      description: "Orange tabby energy with alien upgrades.",
    },
    {
      id: 6,
      name: "Cricket Bug",
      price: "$5,000,000.00",
      image: flyingBug,
      description: "Buzzes, clicks, and causes concern.",
    },
  ];

  return (
    <div className="Store" style={{ backgroundImage: `url(${storebg})` }}>
      <h1>Store</h1>
      <h2 className="header2">Weyland-Yutani Special Containment Inventory</h2>
      <div className="store-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-button">Buy Now</button>
          </div>
        ))}
      </div>
      <h3 className="notice">
        Weyland-Yutani Corporate Notice: All biological specimens listed in this
        catalog are restricted to purchase, transfer, and handling by approved
        Weyland-Yutani partner facilities, licensed research stations, and
        authorized containment personnel only. These lifeforms are classified as
        hazardous extra-terrestrial assets and may present severe risks
        including parasitic infection, tissue damage, contamination,
        uncontrolled propagation, or fatality. By accessing this catalog, the
        purchaser acknowledges full responsibility for containment integrity,
        staff safety, and incident response. Weyland-Yutani Corporation is not
        liable for losses resulting from negligence, protocol failure, or
        unauthorized exposure.
      </h3>
    </div>
  );
}

export default Store;
