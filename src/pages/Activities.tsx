import { Link } from "react-router-dom";
import "../App.css";
import "./Activities.css";
import heroImage from "../assets/hero-karst.jpg";
import cavingImage from "../assets/caving.jpg";
import rescueTrainingImage from "../assets/rescue-training.jpg";
import sightseeingImage from "../assets/sightseeing.jpg";

interface ActivityCard {
  title: string;
  image: string;
  href?: string;
}

const ACTIVITIES: ActivityCard[] = [
  { title: "Caving", image: cavingImage, href: "/activities/caving" },
  { title: "Rescue Training", image: rescueTrainingImage, href: "/activities/rescue" },
  { title: "Sightseeing", image: sightseeingImage, href: "/activities/sightseeing" },
];

function Activities() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Activities</h1>
      </section>

      <main>
        <section className="activities-section">
          <p className="activities-intro">
            The 34th ASF Conference in Chillagoe promises an action-packed
            program filled with adventure and learning. Hone your skills with
            cave rescue training and self-rescue techniques. Beyond the caves,
            explore Chillagoe's stunning landscapes, from hidden waterholes to
            ancient Aboriginal rock art and the iconic Balancing Rock. And of
            course, there will be plenty of caving before, during, and after the
            conference!
          </p>

          <div className="activities-grid">
            {ACTIVITIES.map((activity) =>
              activity.href ? (
                <Link className="activity-card" to={activity.href} key={activity.title}>
                  <img src={activity.image} alt="" className="activity-image" />
                  <p className="activity-caption">{activity.title}</p>
                </Link>
              ) : (
                <figure className="activity-card" key={activity.title}>
                  <img src={activity.image} alt="" className="activity-image" />
                  <figcaption>{activity.title}</figcaption>
                </figure>
              ),
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Activities;
