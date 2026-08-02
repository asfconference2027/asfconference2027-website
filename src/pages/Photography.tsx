import "../App.css";
import "./Photography.css";
import heroImage from "../assets/hero-karst.jpg";

function Photography() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Photo Competition</h1>
      </section>

      <main>
        <section className="photography-section">
          <div className="photography-copy">
            <p>
              Got some great shots from your caving adventures? The 34th ASF
              Photo Competition is looking for your best cave photography.
              You don't need to be attending the conference to enter, but
              you do need to be an ASF member.
            </p>
          </div>

          <div className="photography-groups">
            <div className="photography-group">
              <h2>Categories</h2>
              <p>This year we've kept things simple with four categories:</p>
              <ul className="photography-list">
                <li>
                  <strong>Entrance</strong>: a photo featuring a cave entrance
                </li>
                <li>
                  <strong>Life</strong>: the biology of caves; bats,
                  invertebrates, fungi, roots, and anything else living in
                  the dark
                </li>
                <li>
                  <strong>Cave</strong>: the underground environment;
                  passage, formations, void, light and rock
                </li>
                <li>
                  <strong>Cavers</strong>: portraits or candid shots where
                  the caver is the focus
                </li>
              </ul>
            </div>

            <div className="photography-group">
              <h2>Entering</h2>
              <ul className="photography-list">
                <li>Up to 3 photos per category per person</li>
                <li>JPG or PNG, maximum 5MB per file</li>
                <li>
                  Name your files: Category_YourName_ImageTitle.jpeg (e.g.
                  Life_JanSmith_Glowworm_Grotto.jpeg)
                </li>
                <li>
                  Email entries to{" "}
                  <a href="mailto:asfconference2027@chillagoecavingclub.org.au">
                    asfconference2027@chillagoecavingclub.org.au
                  </a>{" "}
                  with subject "Photo Competition"
                </li>
                <li>Photos that have previously placed in an ASF photo competition are not eligible</li>
                <li>Entries must be submitted before 18th June, 2027</li>
              </ul>
              <p>Entry fee: $3 per photo. Payment details to be confirmed.</p>
            </div>

            <div className="photography-group">
              <h2>Judging</h2>
              <p>
                Photos will be judged based on a popular vote. Every
                conference attendee will have the opportunity to vote for
                their top three photos in each category.
              </p>
            </div>

            <div className="photography-group">
              <h2>Prizes</h2>
              <p>
                Prizes will be awarded for 1st, 2nd and 3rd place for each
                category. Not sure what they are yet, but they will be
                awesome!
              </p>
            </div>

            <div className="photography-group">
              <h2>Copyright</h2>
              <p>
                Copyright stays with you. By entering you're giving
                permission for your photos to be displayed at the
                conference and possibly published in <em>Caves Australia</em>,
                with attribution. Nothing else without asking you first.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Photography;
