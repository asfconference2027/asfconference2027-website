import "../App.css";
import "./Rescue.css";
import heroImage from "../assets/hero-karst.jpg";
import castleCaveOverview from "../assets/castle-cave-overview.jpg";
import ziplineCastle1 from "../assets/zipline-castle-1.jpg";
import learningRescueTechniques from "../assets/learning-rescue-techniques.jpg";
import traverseCasualty from "../assets/traverse-casualty.jpg";
import ziplineCastle2 from "../assets/zipline-castle-2.jpg";
import rescueExercise from "../assets/rescue-exercise.jpg";
import crollPickoffLearning from "../assets/croll-pickoff-learning.jpg";
import crollPickoffPractice from "../assets/croll-pickoff-practice.jpg";

const GALLERY: { image: string; caption: string }[] = [
  { image: castleCaveOverview, caption: "Castle Cave. Photo: Stefan Grey" },
  { image: ziplineCastle1, caption: "Moving a casualty on a zip line in Castle Cave. Photo: Brian Evans" },
  { image: learningRescueTechniques, caption: "Learning cave rescue techniques Castle Cave. Photo: Brian Evans" },
  { image: traverseCasualty, caption: "Moving a casualty on a traverse in Castle Cave. Photo: Rod Burton" },
  { image: ziplineCastle2, caption: "Moving a casualty on a zip line in Castle Cave. Photo: Rod Burton" },
  { image: rescueExercise, caption: "Rescue exercise in Castle Cave. Photo: Tim Kolln" },
  { image: crollPickoffLearning, caption: "Learning croll-to-croll pickoffs. Photo: James Hohl" },
  { image: crollPickoffPractice, caption: "Practicing croll-to-croll pickoffs. Photo: Wendy Lander" },
];

function Rescue() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Rescue Training</h1>
      </section>

      <main>
        <section className="rescue-section">
          <div className="rescue-copy">
            <p>
              As part of the conference program, we'll be running a cave rescue training session
              open to all interested cavers.
            </p>
            <p>
              This will begin with a focused session on key techniques, including hauling,
              lowering, counterbalances, and zip lines, followed by a practical exercise where
              participants will move a simulated casualty between stations using the skills
              they've learned.
            </p>
            <p>
              Training will take place in Castle Cave - a stunning daylight-filled chamber
              surrounded by dramatic 30-metre cliffs. Bo Muresan, President of Cave Rescue
              Victoria, described it as "the best training location I've seen so far." Castle
              Cave will be the location for both our rescue exercise and the speleosports
              competition.
            </p>
          </div>

          <div className="rescue-gallery">
            {GALLERY.map((item) => (
              <figure className="rescue-photo" key={item.caption}>
                <img src={item.image} alt="" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Rescue;
