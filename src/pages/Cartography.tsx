import "../App.css";
import "./Cartography.css";
import heroImage from "../assets/hero-karst.jpg";

function Cartography() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Cartography Competition</h1>
      </section>

      <main>
        <section className="cartography-section">
          <div className="cartography-copy">
            <p>
              Cave surveying can be a long and arduous activity. Make your
              hard work count by entering it into our cave map competition.
            </p>
            <p>
              The cartography competition is an exhibition celebrating cave
              mapping as both a technical skill and an art form. Maps are
              judged at the conference, so you'll need to bring a printed
              copy. You don't need to be attending the conference, but you do
              need to be an ASF member to enter.
            </p>
          </div>

          <div className="cartography-groups">
            <div className="cartography-group">
              <h2>Categories</h2>
              <p>Maps will be grouped by cave length:</p>
              <ul className="cartography-list">
                <li>
                  <strong>Category 1</strong>: Under 100m
                </li>
                <li>
                  <strong>Category 2</strong>: 100&ndash;1000m
                </li>
                <li>
                  <strong>Category 3</strong>: Over 1000m
                </li>
              </ul>
            </div>

            <div className="cartography-group">
              <h2>Entering</h2>
              <ul className="cartography-list">
                <li>Up to 3 maps per category per person</li>
                <li>
                  Let us know you're submitting entries by emailing details
                  to{" "}
                  <a href="mailto:asfconference2027@chillagoecavingclub.org.au">
                    asfconference2027@chillagoecavingclub.org.au
                  </a>{" "}
                  with subject "Cartography Competition"
                </li>
                <li>Bring a printed copy, no smaller than A4 and no larger than A1</li>
                <li>Maps that have previously placed in an ASF cartography competition are not eligible</li>
                <li>Entries must be lodged before 18th June, 2027</li>
              </ul>
            </div>

            <div className="cartography-group">
              <h2>Mandatory requirements</h2>
              <ul className="cartography-list">
                <li>Cave name</li>
                <li>Obvious entrance or connection with rest of cave (eg, if the map is of a cave extension)</li>
                <li>North arrow</li>
                <li>Bar scale</li>
                <li>
                  Vertical control - vertical profile or vertical symbols
                  (e.g. cave elevations, pit depths, ceiling heights, and
                  water depths)
                </li>
                <li>Survey date</li>
                <li>Cartographer and survey group</li>
              </ul>
            </div>

            <div className="cartography-group">
              <h2>Quality factors</h2>
              <ul className="cartography-list">
                <li>Balance and layout - well balanced, no crowding, visually appealing, etc.</li>
                <li>
                  Drafting technical quality - lines end and blend well,
                  outside cave walls obvious, symbols correct and
                  well-sized, lettering consistent, etc.
                </li>
                <li>Detail thoroughness - map easy to understand and not confusing, obvious cave features shown, etc.</li>
              </ul>
            </div>

            <div className="cartography-group">
              <h2>Judging</h2>
              <p>
                Three or more judges will assess each map and provide
                written feedback. You'll receive a judging sheet at the end
                of the competition.
              </p>
            </div>

            <div className="cartography-group">
              <h2>Prizes</h2>
              <p>
                Prizes will be awarded for first, second and third place for
                each category. Not sure what they are yet, but they will be
                awesome!
              </p>
            </div>

            <div className="cartography-group">
              <h2>Copyright</h2>
              <p>
                Your maps remain yours. They may be displayed at the
                conference, and with your written permission may appear in{" "}
                <em>Caves Australia</em> or on ASF social media. Nothing
                beyond that without asking you first.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Cartography;
