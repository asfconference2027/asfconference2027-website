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
              Getting to Chillagoe for the conference is an adventure in itself!
              Make the journey to Far North Queensland part of the experience -
              drive up from the south and take in the stunning sights of
              Australia's east coast, or travel from the west and immerse
              yourself in the vast beauty of the outback. If you're flying in,
              Cairns offers a well-connected domestic and international airport,
              or you can opt for the scenic Spirit of Queensland train. From
              Cairns, just 210 km east of Chillagoe, you can hire a car for a
              road trip through the savannah, or take advantage of shuttle
              services provided by local accommodations like the Chillagoe Hotel
              Motel and Chillagoe Eco Lodge & Observatory. However you choose to
              get here, an unforgettable week of caving, camaraderie, and
              exploration awaits!
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default GettingThere;
