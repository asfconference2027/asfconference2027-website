import "../App.css";
import "./Caving.css";
import heroImage from "../assets/hero-karst.jpg";
import macropaedesAbseil from "../assets/macropaedes-abseil.jpg";
import castleCave from "../assets/castle-cave.jpg";
import blindsideCave from "../assets/blindside-cave.jpg";
import keefsCavern from "../assets/keefs-cavern.jpg";
import macropaedesSwim from "../assets/macropaedes-swim.jpg";
import fernCave from "../assets/fern-cave.jpg";
import markhamCave from "../assets/markham-cave.jpg";

const GALLERY_PAIRS: { image: string; caption: string }[][] = [
  [
    { image: castleCave, caption: "Abseiling into Castle Cave. Photo: Philip Morgan" },
    { image: blindsideCave, caption: "Blindside Cave. Photo: Philip Morgan" },
  ],
  [
    { image: keefsCavern, caption: "Keef's Cavern. Photo: Louise Forster" },
    { image: macropaedesSwim, caption: "Swimming in Macropaedes Cave. Photo: Katrina Lo Surdo" },
  ],
  [
    { image: fernCave, caption: "Fern Cave. Photo: Alex Brueckner" },
    { image: markhamCave, caption: "Tree in daylight in Markham Cave. Photo: Jan Pope" },
  ],
];

function Caving() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Caving</h1>
      </section>

      <main>
        <section className="caving-section">
          <p className="caving-intro">
            The full list of caving trips is still to come, but you can expect a packed lineup
            of pre-, post-, and during-conference caving opportunities. Chillagoe has something
            for nearly every type of caver - from relaxed walk-throughs and sporty squeezes and
            climbs to full-on vertical challenges. You'll encounter fascinating fauna, stunning
            formations, and plenty of chances to explore and photograph this unique karst
            landscape. Check out the photos below for a glimpse of what's in store!
          </p>

          <figure className="caving-photo caving-photo--full">
            <img src={macropaedesAbseil} alt="" />
            <figcaption>Abseiling into Macropaedes Cave. Photo: Katrina Lo Surdo</figcaption>
          </figure>

          {GALLERY_PAIRS.map((pair, i) => (
            <div className="caving-gallery-row" key={i}>
              {pair.map((item) => (
                <figure className="caving-photo" key={item.caption}>
                  <img src={item.image} alt="" />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default Caving;
