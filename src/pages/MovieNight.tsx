import "../App.css";
import "./MovieNight.css";
import heroImage from "../assets/hero-karst.jpg";
import subterraneanTitle from "../assets/subterranean-title.png";

function MovieNight() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Movie Night</h1>
      </section>

      <main>
        <section className="movie-section">
          <div className="movie-copy">
            <p>
              As part of our Wednesday evening program, we'll be screening{" "}
              <em>Subterranean</em>, an award-winning documentary following two
              amateur Canadian caving teams racing to break the country's
              records for the longest and deepest caves. Grab a drink, settle
              in, and enjoy a film made for cavers, by cavers.
            </p>
          </div>

          <div className="movie-title-banner">
            <img
              src={subterraneanTitle}
              alt="Subterranean"
              className="movie-title-image"
            />
            <p className="movie-tagline">On the Edge of a Caving Record</p>
          </div>

          <div className="movie-trailer">
            <iframe
              src="https://player.vimeo.com/video/817032671"
              title="Subterranean - Official Trailer"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="movie-copy">
            <p>
              Against a gripping backdrop, two gritty teams of hobbyist cavers
              are poised to break records for the longest and deepest caves in
              Canada.
            </p>
          </div>

          <div className="movie-quotes">
            <blockquote>
              "There's something deep inside us wanting to know what's around
              the next corner."
              <cite>— Bruce Kirkby</cite>
            </blockquote>
            <blockquote>
              "Infectious to behold....a stunning, thrilling trip into worlds
              few will ever get to see"
              <cite>— The Gate</cite>
            </blockquote>
          </div>

          <div className="movie-details">
            <div className="movie-detail">
              <p className="movie-detail-label">Director</p>
              <p className="movie-detail-value">François-Xavier De Ruydts</p>
            </div>
            <div className="movie-detail">
              <p className="movie-detail-label">Producer</p>
              <p className="movie-detail-value">Jenny Rustemeyer</p>
            </div>
            <div className="movie-detail">
              <p className="movie-detail-label">Runtime</p>
              <p className="movie-detail-value">86 minutes</p>
            </div>
            <div className="movie-detail">
              <p className="movie-detail-label">Release Year</p>
              <p className="movie-detail-value">2023</p>
            </div>
          </div>

          <div className="movie-copy">
            <p>
              <em>Subterranean</em> has screened at mountain and adventure film
              festivals around the world, picking up wins at the Ladek Mountain
              Film Fest and Antler Film Festival, along with an official
              selection at the Banff Mountain Film Festival, among others. If
              you caught the short film version at Banff in 2023, this screening
              is the feature-length version.
            </p>
          </div>

          <a
            className="movie-link"
            href="https://www.subterraneanfilm.com/"
            target="_blank"
            rel="noreferrer"
          >
            Visit the official Subterranean website
          </a>
        </section>
      </main>
    </>
  );
}

export default MovieNight;
