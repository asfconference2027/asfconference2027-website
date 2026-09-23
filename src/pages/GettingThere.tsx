import "../App.css";
import "./GettingThere.css";
import heroImage from "../assets/hero-karst.jpg";

function GettingThere() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Getting There</h1>
      </section>

      <main>
        <section className="getting-there-section">
          <div className="getting-there-copy">
            <p>
              Getting to Chillagoe is easier than you might think. Cairns has a
              well-connected domestic and international airport, and from there
              it's just a three-hour drive to Chillagoe. Hire a car and enjoy
              the scenic road trip through the savannah, or take advantage of
              shuttle services provided by local accommodations like the
              Chillagoe Hotel Motel and Chillagoe Eco Lodge & Observatory.
            </p>
            <p>
              And if you're driving up from the south or across from the west,
              make the journey part of the experience, taking in the stunning
              sights of Australia's east coast or the vast beauty of the outback
              along the way. However you choose to get here, an unforgettable
              week of caving, camaraderie, and exploration awaits!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default GettingThere;
