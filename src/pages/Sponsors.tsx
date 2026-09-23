import "../App.css";
import "./Sponsors.css";
import heroImage from "../assets/hero-karst.jpg";
import climbingAnchorsLogo from "../assets/climbing-anchors-logo.png";
import scurionLogo from "../assets/scurion-logo.jpg";
import speleanLogo from "../assets/spelean-logo.png";
import aspiringLogo from "../assets/aspiring_logo.png";

interface Sponsor {
  name: string;
  logo: string;
  tagline: string;
  url: string;
}

interface Tier {
  name: string;
  sponsors: Sponsor[];
}

const TIERS: Tier[] = [
  {
    name: "Platinum",
    sponsors: [
      {
        name: "Climbing Anchors",
        logo: climbingAnchorsLogo,
        tagline:
          "Sources quality and affordable gear to cavers all over Australia",
        url: "https://www.climbinganchors.com.au/",
      },
      {
        name: "Scurion",
        logo: scurionLogo,
        tagline: "High quality, powerful, mobile LED lamps",
        url: "https://www.scurion.ch/",
      },
    ],
  },
  {
    name: "Gold",
    sponsors: [
      {
        name: "Petzl",
        logo: speleanLogo,
        tagline:
          "Products and solutions that allow sports enthusiasts and professionals access the most inaccessible places",
        url: "https://www.petzl.com/INT/en",
      },
      {
        name: "Aspiring Safety",
        logo: aspiringLogo,
        tagline: "Quality gear for your vertical adventure",
        url: "https://www.aspiring.co.nz/",
      },
    ],
  },
];

function Sponsors() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Sponsors</h1>
      </section>

      <main>
        <section className="sponsors-section">
          <div className="sponsors-copy">
            <p>
              Huge thanks to our sponsors for supporting the 34th ASF Conference
              and helping make it possible.
            </p>
          </div>

          {TIERS.map((tier) => (
            <div className="sponsors-tier" key={tier.name}>
              <div className="sponsors-tier-divider">
                <span className="sponsors-tier-line" />
                <span
                  className={`sponsors-tier-badge sponsors-tier-badge--${tier.name.toLowerCase()}`}
                >
                  {tier.name}
                </span>
                <span className="sponsors-tier-line" />
              </div>
              <div className="sponsors-grid">
                {tier.sponsors.map((sponsor) => (
                  <a
                    className="sponsor-card"
                    href={sponsor.url}
                    target="_blank"
                    rel="noreferrer"
                    key={sponsor.name}
                  >
                    <img src={sponsor.logo} alt={sponsor.name} />
                    <p className="sponsor-tagline">{sponsor.tagline}</p>
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="sponsors-cta">
            <div className="sponsors-cta-text">
              <h2>Become a sponsor</h2>
              <p>
                Support the 34th ASF Conference and get your brand in front of
                Australia's caving community.
              </p>
              <div className="sponsors-cta-badges">
                <span className="sponsors-cta-badge sponsors-cta-badge--platinum">
                  Platinum
                </span>
                <span className="sponsors-cta-badge sponsors-cta-badge--gold">
                  Gold
                </span>
                <span className="sponsors-cta-badge sponsors-cta-badge--silver">
                  Silver
                </span>
                <span className="sponsors-cta-badge sponsors-cta-badge--bronze">
                  Bronze
                </span>
              </div>
            </div>
            <a
              className="sponsors-cta-button"
              href="mailto:asfconference2027@chillagoecavingclub.org.au?subject=Sponsorship%20enquiry"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Sponsors;
