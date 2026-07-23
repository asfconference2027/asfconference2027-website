import './App.css'
import heroImage from './assets/hero-karst.jpg'

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ASF Conference 2027 home">
          ASF Conference 2027
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <a href="#top">Home</a>
            </li>
            <li>
              <a href="#agenda">Agenda</a>
            </li>
            <li>
              <a href="#activities">Activities</a>
            </li>
            <li>
              <a href="#competitions">Competitions</a>
            </li>
          </ul>
        </nav>
      </header>

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
          <div className="social-row">
            <a
              className="social-icon facebook"
              href="https://www.facebook.com/profile.php?id=61573157076256"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-8.05h2.7l.4-3.15h-3.1V7.8c0-.9.25-1.53 1.55-1.53h1.66V3.45C15.94 3.36 15 3.28 13.9 3.28c-2.3 0-3.9 1.4-3.9 4V9.8H7.3v3.15h2.7V21h3.5Z" />
              </svg>
            </a>
            <a
              className="social-icon instagram"
              href="https://www.instagram.com/asfconference2027/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
                <circle cx="12" cy="12" r="4.2" />
                <line x1="17.3" y1="6.7" x2="17.31" y2="6.7" strokeLinecap="round" />
              </svg>
            </a>
          </div>
          <p className="email">
            Email:
            <a href="mailto:asfconference2027@chillagoecavingclub.org.au">
              asfconference2027@chillagoecavingclub.org.au
            </a>
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <p>ASF Conference 2027 | Chillagoe, Queensland</p>
      </footer>
    </div>
  )
}

export default App
