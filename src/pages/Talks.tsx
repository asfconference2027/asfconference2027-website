import "../App.css";
import "./Talks.css";
import heroImage from "../assets/hero-karst.jpg";

function Talks() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Talks</h1>
      </section>

      <main>
        <section className="talks-section">
          <div className="talks-copy">
            <p>
              The 34th ASF Conference will feature 18 hours of presentations
              across one full day and four half days of talks. Sessions will
              cover a wide range of topics including cave exploration,
              innovations in caving technology, science, and history. Talks
              will run between 15 and 30 minutes.
            </p>
          </div>

          <div className="talks-group">
            <h2>How to submit</h2>
            <p>
              Send your abstract to{" "}
              <a href="mailto:asfconference2027@chillagoecavingclub.org.au">
                asfconference2027@chillagoecavingclub.org.au
              </a>{" "}
              with the subject line "Abstract submission". Your abstract
              should include:
            </p>
            <ul className="talks-list">
              <li>A title</li>
              <li>Authors (and institutional affiliations if applicable)</li>
              <li>A main body of no more than 300 words, without references</li>
            </ul>
            <p>
              Applicants will be notified by email whether their talk has
              been accepted. Note that inclusion in the programme is subject
              to conference registration, and spots are limited.
            </p>
            <p>
              If your abstract isn't accepted, you're welcome to bring a
              poster to display at the conference instead.
            </p>
            <p className="talks-deadline">Deadline: 20th April 2027</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Talks;
