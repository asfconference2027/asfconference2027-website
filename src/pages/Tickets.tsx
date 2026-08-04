import "../App.css";
import "./Tickets.css";
import heroImage from "../assets/hero-karst.jpg";
import tshirtImage from "../assets/conference-tshirt.jpg";
import toteBagImage from "../assets/tote-bag.jpg";

function Tickets() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Tickets</h1>
      </section>

      <main>
        <section className="tickets-section">
          <div className="tickets-layout">
            <div className="tickets-copy">
              <p>Tickets for the 34th ASF Conference are on sale now!</p>

              <p>Your ticket includes:</p>
              <ul className="tickets-list">
                <li>Welcome barbecue Sunday 20 June 2027</li>
                <li>
                  Morning tea, lunch, and afternoon tea Monday 21 to Friday 25
                  June 2027
                </li>
                <li>Finale dinner Saturday 26 June 2027</li>
                <li>Screening of the feature film Subterranean</li>
                <li>Conference t-shirt</li>
                <li>Tote bag</li>
                <li>Conference booklet</li>
                <li>Week of epic talks and workshops</li>
              </ul>

              <p>
                Early bird tickets are $365, available until 20 December
                2026. After that, tickets will be $415.
              </p>
            </div>

            <div className="tickets-merch">
              <figure className="tickets-merch-item">
                <img src={tshirtImage} alt="Conference t-shirt" />
                <figcaption>Conference t-shirt</figcaption>
              </figure>
              <figure className="tickets-merch-item">
                <img src={toteBagImage} alt="Tote bag" />
                <figcaption>Tote bag</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="ticket-banner">
          <p>Tickets on sale now</p>
          <a
            className="buy-button"
            href="https://www.trybooking.com/DMDER"
            target="_blank"
            rel="noreferrer"
          >
            Buy tickets
          </a>
        </section>
      </main>
    </>
  );
}

export default Tickets;
