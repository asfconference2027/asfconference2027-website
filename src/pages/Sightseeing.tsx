import "../App.css";
import "./Sightseeing.css";
import heroImage from "../assets/hero-karst.jpg";
import rockArtImage from "../assets/rock-art.jpg";
import balancingRockImage from "../assets/balancing-rock.jpg";
import smeltersImage from "../assets/smelters.jpg";
import swimmingHolesImage from "../assets/swimming-holes.jpg";

interface SightseeingSection {
  title: string;
  image: string;
  credit: string;
  paragraphs: string[];
}

const SECTIONS: SightseeingSection[] = [
  {
    title: "Mungana Aboriginal Rock Art",
    image: rockArtImage,
    credit: "Photo from Cathi Humphrey-Hood",
    paragraphs: [
      "As well as myriad caves, the Mungana area has a small but significant Aboriginal rock art site featuring motifs in red, white, and black. The gallery includes a striking series of lines and snake-like forms, offering a glimpse into the deep cultural heritage of the region's Traditional Owners. This area has been home to Aboriginal people for tens of thousands of years, and the rock art stands as a powerful reminder of their enduring connection to Country. Please visit with care and respect.",
    ],
  },
  {
    title: "Balancing Rock",
    image: balancingRockImage,
    credit: "Photo from Cathi Humphrey-Hood",
    paragraphs: [
      "A short but scenic walk leads to one of Chillagoe's most photographed landmarks: a striking limestone outcrop that appears to defy gravity. The 440m return track from the Balancing Rock car park climbs gently to a lookout, offering great views over open woodlands and the surrounding karst landscape.",
    ],
  },
  {
    title: "Smelters",
    image: smeltersImage,
    credit: "Photo from Cathi Humphrey-Hood",
    paragraphs: [
      "Once the heart of a booming mining industry, the Chillagoe Smelters operated from 1901 to 1943, processing over a million tons of ore and producing copper, lead, silver, and gold. The towering stacks and rusting machinery that remain today offer a fascinating glimpse into the industrial past that helped shape North Queensland. This heritage-listed site is now managed by Queensland Parks and Wildlife and stands as a striking reminder of the region's mining legacy.",
    ],
  },
  {
    title: "Swimming Holes",
    image: swimmingHolesImage,
    credit: "Photo: Allison Irvin",
    paragraphs: [
      "Chillagoe's warm climate makes a refreshing swim all the more appealing. Just a short walk or drive from town, the Bogey Hole is a local favourite. A natural rock pool perfect for a quick dip on a hot day. A little further out, The Weir offers a larger, peaceful swimming spot surrounded by gum trees and birdlife. Both are great places to cool off, relax, and enjoy the laid-back pace of the outback.",
    ],
  },
];

function Sightseeing() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Sightseeing</h1>
      </section>

      <main>
        <section className="sightseeing-section">
          <p className="sightseeing-intro">
            Outside conference hours and when you're not caving, Chillagoe has
            plenty to offer above ground!
          </p>

          <div className="sightseeing-list">
            {SECTIONS.map((section, index) => (
              <div
                className={`sightseeing-row${index % 2 === 1 ? " sightseeing-row-reverse" : ""}`}
                key={section.title}
              >
                <div className="sightseeing-text">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <figure className="sightseeing-photo">
                  <img src={section.image} alt="" />
                  <figcaption>{section.credit}</figcaption>
                </figure>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Sightseeing;
