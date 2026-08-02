import "../App.css";
import "./Speleosports.css";
import heroImage from "../assets/hero-karst.jpg";
import castleCaveImage from "../assets/speleosports-castle-cave.jpg";
import townHallImage from "../assets/chillagoe-town-hall.jpg";

const LOCATIONS = [
  {
    title: "Castle Cave",
    image: castleCaveImage,
    caption:
      "The first two events are held at Castle Cave, which involves a 10-minute scramble over sharp limestone to reach the site.",
  },
  {
    title: "Chillagoe Town Hall",
    image: townHallImage,
    caption:
      "The third event is held at the Town Hall and is open to all participants, whether or not you plan to compete at Castle Cave.",
  },
];

function Speleosports() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Speleosports</h1>
      </section>

      <main>
        <section className="speleosports-section">
          <div className="speleosports-copy">
            <p>
              Speleosports are back for ASF Conference 2027! This is a series
              of fun, challenging events designed to test real caving skills:
              efficiency on rope, squeezing, knot tying and dexterity with
              equipment.
            </p>
            <p>
              The speleosports will run across three afternoons during the
              week, so we have plenty of time for everyone to get through all
              the events. Intermediate results will be published at the end
              of each day so competitors can track individual and club
              standings as the competition unfolds.
            </p>
            <p>
              There will be individual awards as well as a club award for the
              fastest average time, with clubs needing a minimum of three
              participants to qualify. There are some epic prizes on offer,
              but more importantly, some highly coveted trophies.
            </p>
            <p>
              Not all events require remote or vertical access. While some
              challenges take place in the spectacular Castle Cave, a
              dedicated town-based event ensures everyone has a chance to
              compete, regardless of mobility, fitness, or appetite for sharp
              limestone scrambles.
            </p>
          </div>

          <div className="speleosports-events">
            <div className="speleosports-event">
              <h2>10 Metre Speed Ascent</h2>
              <p className="speleosports-event-location">Location: Castle Cave</p>
              <p>A classic test of vertical efficiency.</p>
              <p>
                Competitors ascend a 10-metre rope as fast as possible using
                their preferred SRT setup. No rebelays or redirects.
              </p>
            </div>

            <div className="speleosports-event">
              <h2>SRT Skills Course</h2>
              <p className="speleosports-event-location">Location: Castle Cave</p>
              <p>This event focuses on applied rope skills.</p>
              <p>The course is still being finalised, but the current plan includes:</p>
              <ul className="speleosports-list">
                <li>Ascend 5 metres</li>
                <li>Zip line down</li>
                <li>Zip line up</li>
                <li>Traverse past three intermediate anchor points</li>
                <li>Abseil 5 metres to finish</li>
              </ul>
              <p className="speleosports-rules-title">Rules and Technique Notes</p>
              <ul className="speleosports-list">
                <li>
                  While on the traverse, you must always have at least one
                  cowstail attached. When crossing an intermediate anchor,
                  clip your second cowstail in the next section before
                  unclipping the first one.
                </li>
                <li>
                  Staying low with your weight on the cowstails often makes
                  sideways movement safer and easier on traverses.
                </li>
                <li>
                  If the traverse or zip line steepens, a hand ascender
                  clipped with a cowstail can help maintain a safe rope angle
                  while moving to the anchor.
                </li>
              </ul>
            </div>

            <div className="speleosports-event">
              <h2>Technical Skills Challenge</h2>
              <p className="speleosports-event-location">Location: Chillagoe Town Hall</p>
              <p>A multi-part challenge testing dexterity and technique.</p>
              <p>Competitors will:</p>
              <ul className="speleosports-list">
                <li>
                  Transfer three types of carabiner between two ropes one-handed:
                  <ul className="speleosports-sublist">
                    <li>A screw-lock carabiner</li>
                    <li>A twist-lock carabiner</li>
                    <li>A triple-lock carabiner</li>
                  </ul>
                </li>
                <li>Navigate a squeeze box, simulating tight cave passages</li>
                <li>
                  Tie three fully dressed knots:
                  <ul className="speleosports-sublist">
                    <li>Figure-8</li>
                    <li>Alpine Butterfly</li>
                    <li>Bowline</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="speleosports-locations-title">Locations</h2>
          <div className="speleosports-locations">
            {LOCATIONS.map((location) => (
              <figure className="speleosports-location-card" key={location.title}>
                <img src={location.image} alt="" />
                <figcaption>
                  <p className="speleosports-location-name">{location.title}</p>
                  <p>{location.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Speleosports;
