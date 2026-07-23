import '../App.css'
import heroImage from '../assets/hero-karst.jpg'

function Home() {
  return (
    <>
      <section
        className="hero"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <p className="kicker">20 - 26th June 2027</p>
        <p className="sub-kicker">34th ASF Conference</p>
        <h1 id="page-title">
          Rays through
          <span>the razor karst</span>
        </h1>
        <p className="location">Chillagoe, QLD</p>
      </section>

      <main id="top">
        <section className="intro-block">
          <p className="intro">
            Escape the cold and head to Chillagoe for the 34th ASF Conference in June 2027.
            Blue skies, warm days, and some of Australia's most extraordinary karst caves.
          </p>
        </section>

        <section className="info-cards" aria-label="Conference details">
          <div className="info-card">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
              <line x1="3" y1="9.5" x2="21" y2="9.5" />
              <line x1="7.5" y1="2.5" x2="7.5" y2="6.5" strokeLinecap="round" />
              <line x1="16.5" y1="2.5" x2="16.5" y2="6.5" strokeLinecap="round" />
            </svg>
            <p className="info-label">Dates</p>
            <p className="info-value">20–26 June 2027</p>
          </div>
          <div className="info-card">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.4" />
            </svg>
            <p className="info-label">Location</p>
            <p className="info-value">Chillagoe, QLD</p>
          </div>
          <div className="info-card">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M3 19h18L14.5 8 10 15.5 7.5 12 3 19Z" strokeLinejoin="round" />
            </svg>
            <p className="info-label">Hosted by</p>
            <p className="info-value">Chillagoe Caving Club</p>
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
  )
}

export default Home
