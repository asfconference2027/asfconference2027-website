import { Link } from "react-router-dom";
import "../App.css";
import "./Competitions.css";
import heroImage from "../assets/hero-karst.jpg";
import speleosportsImage from "../assets/speleosports.jpg";
import cartographyImage from "../assets/cartography.jpg";

interface CompetitionCard {
  title: string;
  image: string;
  href?: string;
}

const COMPETITIONS: CompetitionCard[] = [
  { title: "Speleosports", image: speleosportsImage, href: "/competitions/speleosports" },
  { title: "Photography Competition", image: heroImage },
  { title: "Cartography Competition", image: cartographyImage, href: "/competitions/cartography-competition" },
];

function Competitions() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Competitions</h1>
      </section>

      <main>
        <section className="competitions-section">
          <div className="competitions-copy">
            <p>
              The ASF Conference competitions are all about showcasing the many
              skills that make caving such a rich and varied pursuit. From
              physical problem-solving to creativity and technical expertise,
              there's something for everyone to get involved in.
            </p>
            <p>
              Our Speleosports competition will put your caving skills to the
              test with a fast-paced, practical course designed to challenge
              technique, efficiency, and teamwork. We'll also be running a
              photography competition, celebrating the beauty of caves above and
              below ground, and a cartography competition for those who love
              turning underground exploration into clear, accurate maps.
            </p>
            <p>
              There'll be some excellent prizes up for grabs thanks to our
              sponsors Climbing Anchors, Scurion and Spelean. You've got to be
              in it to win it!
            </p>
          </div>

          <div className="competitions-grid">
            {COMPETITIONS.map((competition) =>
              competition.href ? (
                <Link
                  className="competition-card"
                  to={competition.href}
                  key={competition.title}
                >
                  <img
                    src={competition.image}
                    alt=""
                    className="competition-image"
                  />
                  <p className="competition-caption">{competition.title}</p>
                </Link>
              ) : (
                <figure className="competition-card" key={competition.title}>
                  <img
                    src={competition.image}
                    alt=""
                    className="competition-image"
                  />
                  <figcaption>{competition.title}</figcaption>
                </figure>
              ),
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Competitions;
