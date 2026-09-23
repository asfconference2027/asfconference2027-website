import "../App.css";
import "./Venue.css";
import townHallImage from "../assets/chillagoe-town-hall.jpg";
import generalStoreImage from "../assets/general-store.jpg";
import hardwareStoreImage from "../assets/hardware-store.jpg";
import cafeImage from "../assets/cafe.jpg";
import petrolStationImage from "../assets/petrol-station.jpg";
import theHubImage from "../assets/the-hub.jpg";
import primaryHealthCentreImage from "../assets/primary-health-centre.jpg";

const FACILITIES = [
  {
    title: "General Store",
    image: generalStoreImage,
    description:
      "The Chillagoe General Store is your one-stop shop for just about everything! From groceries to kids' toys, this classic country store has you covered. It also boasts a fully stocked ice cream fridge, perfect for cooling off after a day of caving.",
  },
  {
    title: "Hardware Store",
    image: hardwareStoreImage,
    description:
      "The Chillagoe Hardware Store has all the essentials for automotive repairs, and outdoor adventures. Stocked with tools, spare parts, gas bottles, and more, it's the go-to spot for anything you might need while in town. Just like the General Store, it's packed with surprises and friendly service!",
  },
  {
    title: "Cafe",
    image: cafeImage,
    description:
      "Enjoy delicious coffee, homemade baked goods, and a glimpse into Chillagoe's history at this unique café filled with art, historical photos, and memorabilia. Plus, it doubles as a laundromat!",
  },
  {
    title: "Petrol Station",
    image: petrolStationImage,
    description:
      "The Chillagoe Tourist Village has a convenient petrol station, so you can fuel up before heading out on the next caving adventure.",
  },
  {
    title: "The Hub",
    image: theHubImage,
    description:
      "Operated by Queensland Parks and Wildlife Service, The Hub is Chillagoe's visitor information centre, providing insights into the area's history, caves, and national parks. It also houses the post office, library, and a museum, making it a great stop to learn, explore, and connect with the community.",
  },
  {
    title: "Primary Health Centre",
    image: primaryHealthCentreImage,
    description:
      "Chillagoe Primary Health Centre provides essential healthcare services to the community, with a full-time nurse on-site and weekly visits from the Royal Flying Doctor Service.",
  },
];

function Venue() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${townHallImage})` }}
      >
        <h1 id="page-title">Venue</h1>
      </section>

      <main>
        <section className="venue-section">
          <div className="venue-copy">
            <p>
              Chillagoe is the perfect base for a week of caving, adventure, and
              connection. With its rich history, stunning limestone formations,
              and easy access to countless caves, this charming outback town
              offers an unbeatable location for the 34th ASF Conference in 2027.
            </p>
            <p>
              The Chillagoe Town Hall will be our main venue, right in the
              centre of town. With space for up to 300 people, an undercover
              outdoor area, and a large lawn for gathering, it provides a great
              setting for presentations, workshops, and social events.
            </p>
            <p>
              Despite its small population of just 214 people (2021 census),
              Chillagoe has all the essentials within walking distance - two
              pubs, a restaurant, a café, a general store, a fuel station, a
              hardware store, a laundromat, a library, and a post office. After
              a day of talks or underground, you can cool off in one of the
              beautiful local swimming spots or unwind with a drink at the pub.
            </p>
            <p>
              Chillagoe's historic charm, welcoming community, and prime
              location make it an ideal place for cavers to gather, explore, and
              make the most of this unique conference experience.
            </p>
          </div>

          <div className="venue-hall">
            <div className="venue-hall-media">
              <img src={townHallImage} alt="" />
              <a
                className="venue-map-link"
                href="https://www.google.com/maps/search/?api=1&query=Chillagoe+Town+Hall"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>
            <div className="venue-hall-text">
              <h2>Chillagoe Town Hall</h2>
              <p>
                The Chillagoe Town Hall will be the main venue for the
                conference, offering a spacious and well-equipped setting right
                in the centre of town.
              </p>
              <p>
                With a capacity of 250&ndash;300 people, it's the perfect
                gathering place for presentations, workshops, and social events.
              </p>
              <p>
                The hall features a kitchenette, a cold room, tables and chairs,
                along with public toilets and full disability access. Outside,
                there's a large undercover area with a barbecue and a huge lawn,
                providing plenty of space to relax and catch up with fellow
                cavers.
              </p>
              <p>
                Adding to its charm, the hall is adorned with a stunning mural
                by artist Lavinia, making it a true landmark of the town.
              </p>
            </div>
          </div>

          <h2 className="venue-facilities-title">Chillagoe town facilities</h2>
          <div className="venue-facilities-grid">
            {FACILITIES.map((facility) => (
              <figure className="venue-facility-card" key={facility.title}>
                <img src={facility.image} alt="" />
                <figcaption>
                  <p className="venue-facility-name">{facility.title}</p>
                  <p>{facility.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Venue;
