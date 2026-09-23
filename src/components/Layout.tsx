import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'

type DropdownName = 'activities' | 'competitions' | 'info'

function Layout() {
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null)
  const activitiesOpen = openDropdown === 'activities'
  const competitionsOpen = openDropdown === 'competitions'
  const infoOpen = openDropdown === 'info'

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="ASF Conference 2027 home">
          ASF Conference 2027
        </Link>
        <nav aria-label="Primary">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/agenda">Agenda</Link>
            </li>
            <li
              className={`nav-dropdown${activitiesOpen ? ' open' : ''}`}
              onMouseEnter={() => setOpenDropdown('activities')}
              onMouseLeave={() => setOpenDropdown((open) => (open === 'activities' ? null : open))}
            >
              <span className="nav-dropdown-trigger">
                <Link to="/activities">Activities</Link>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={activitiesOpen}
                  aria-label="Show Activities pages"
                  onClick={() => setOpenDropdown((open) => (open === 'activities' ? null : 'activities'))}
                >
                  <span className="nav-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>
              </span>
              <ul className="nav-dropdown-menu">
                <li>
                  <Link to="/activities/caving" onClick={() => setOpenDropdown(null)}>
                    Caving
                  </Link>
                </li>
                <li>
                  <Link to="/activities/rescue" onClick={() => setOpenDropdown(null)}>
                    Rescue Training
                  </Link>
                </li>
                <li>
                  <Link to="/activities/sightseeing" onClick={() => setOpenDropdown(null)}>
                    Sightseeing
                  </Link>
                </li>
                <li>
                  <Link to="/activities/talks" onClick={() => setOpenDropdown(null)}>
                    Talks
                  </Link>
                </li>
                <li>
                  <Link to="/activities/movie-night" onClick={() => setOpenDropdown(null)}>
                    Movie Night
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-dropdown${competitionsOpen ? ' open' : ''}`}
              onMouseEnter={() => setOpenDropdown('competitions')}
              onMouseLeave={() => setOpenDropdown((open) => (open === 'competitions' ? null : open))}
            >
              <span className="nav-dropdown-trigger">
                <Link to="/competitions">Competitions</Link>
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={competitionsOpen}
                  aria-label="Show Competitions pages"
                  onClick={() => setOpenDropdown((open) => (open === 'competitions' ? null : 'competitions'))}
                >
                  <span className="nav-caret" aria-hidden="true">
                    ▾
                  </span>
                </button>
              </span>
              <ul className="nav-dropdown-menu">
                <li>
                  <Link
                    to="/competitions/speleosports"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Speleosports
                  </Link>
                </li>
                <li>
                  <Link
                    to="/competitions/photo-competition"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Photography Competition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/competitions/cartography-competition"
                    onClick={() => setOpenDropdown(null)}
                  >
                    Cartography Competition
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`nav-dropdown${infoOpen ? ' open' : ''}`}
              onMouseEnter={() => setOpenDropdown('info')}
              onMouseLeave={() => setOpenDropdown((open) => (open === 'info' ? null : open))}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={infoOpen}
                onClick={() => setOpenDropdown((open) => (open === 'info' ? null : 'info'))}
              >
                Info
                <span className="nav-caret" aria-hidden="true">
                  ▾
                </span>
              </button>
              <ul className="nav-dropdown-menu">
                <li>
                  <Link to="/info/venue" onClick={() => setOpenDropdown(null)}>
                    Venue
                  </Link>
                </li>
                <li>
                  <Link to="/info/getting-there" onClick={() => setOpenDropdown(null)}>
                    Getting There
                  </Link>
                </li>
                <li>
                  <Link to="/info/accommodation" onClick={() => setOpenDropdown(null)}>
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link to="/info/sponsors" onClick={() => setOpenDropdown(null)}>
                    Sponsors
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/tickets">Tickets</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />

      <footer className="site-footer">
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
        <p>ASF Conference 2027 | Chillagoe, Queensland</p>
      </footer>
    </div>
  )
}

export default Layout
