import { useLayoutEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'

type DropdownName = 'activities' | 'competitions' | 'info'

const VIEWPORT_MARGIN = 16

function Layout() {
  const [openDropdown, setOpenDropdown] = useState<DropdownName | null>(null)
  const activitiesOpen = openDropdown === 'activities'
  const competitionsOpen = openDropdown === 'competitions'
  const infoOpen = openDropdown === 'info'

  // On devices with real hover (mouse/trackpad), hovering drives the
  // open/closed state and clicking the trigger label just navigates. Touch
  // devices have no real hover, but still fire a synthetic mouseenter on
  // tap — if that were left wired up here too, it would pre-open the
  // dropdown immediately before the click's own toggle ran, cancelling it
  // right back out (tap 1 would net to closed, requiring a second tap to
  // actually see it open). So on touch, hover is ignored entirely and only
  // the click toggles: tap 1 opens + navigates, tap 2 (already on that
  // page) closes without leaving.
  const prefersHover = () => window.matchMedia('(hover: hover)').matches

  const handleTriggerHoverEnter = (name: DropdownName) => () => {
    if (prefersHover()) setOpenDropdown(name)
  }

  const handleTriggerHoverLeave = (name: DropdownName) => () => {
    if (prefersHover()) setOpenDropdown((open) => (open === name ? null : open))
  }

  const handleTriggerLinkClick = (name: DropdownName) => () => {
    if (!prefersHover()) {
      setOpenDropdown((open) => (open === name ? null : name))
    }
  }

  // Keeps nav items in their normal static positions and just nudges the
  // open dropdown menu's horizontal offset if it would otherwise run past
  // the right (or left) edge of the viewport — rather than reflowing the
  // nav itself.
  useLayoutEffect(() => {
    if (!openDropdown) return

    const menu = document.querySelector<HTMLElement>('.nav-dropdown.open .nav-dropdown-menu')
    if (!menu) return

    const reposition = () => {
      menu.style.left = ''
      const menuRect = menu.getBoundingClientRect()
      const li = menu.closest<HTMLElement>('.nav-dropdown')
      if (!li) return
      const liRect = li.getBoundingClientRect()

      // Use clientWidth, not window.innerWidth: the latter can be
      // transiently inflated by the browser zooming out to fit the
      // menu's own unshifted (pre-correction) overflow, which would
      // otherwise corrupt this very calculation.
      const viewportWidth = document.documentElement.clientWidth

      let desiredLeft = liRect.left
      const maxLeft = viewportWidth - VIEWPORT_MARGIN - menuRect.width
      desiredLeft = Math.min(desiredLeft, maxLeft)
      desiredLeft = Math.max(desiredLeft, VIEWPORT_MARGIN)

      const shift = desiredLeft - liRect.left
      if (shift !== 0) {
        menu.style.left = `${shift}px`
      }
    }

    reposition()
    window.addEventListener('resize', reposition)
    return () => {
      window.removeEventListener('resize', reposition)
      menu.style.left = ''
    }
  }, [openDropdown])

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
              onMouseEnter={handleTriggerHoverEnter('activities')}
              onMouseLeave={handleTriggerHoverLeave('activities')}
            >
              <span className="nav-dropdown-trigger">
                <Link to="/activities" onClick={handleTriggerLinkClick('activities')}>
                  Activities
                </Link>
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
              onMouseEnter={handleTriggerHoverEnter('competitions')}
              onMouseLeave={handleTriggerHoverLeave('competitions')}
            >
              <span className="nav-dropdown-trigger">
                <Link to="/competitions" onClick={handleTriggerLinkClick('competitions')}>
                  Competitions
                </Link>
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
              onMouseEnter={handleTriggerHoverEnter('info')}
              onMouseLeave={handleTriggerHoverLeave('info')}
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
