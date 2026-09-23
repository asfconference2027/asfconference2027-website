import "../App.css";
import "./Accommodation.css";
import heroImage from "../assets/hero-karst.jpg";
import observatoryImage from "../assets/chillagoe-observatory-eco-lodge.jpg";
import touristVillageImage from "../assets/chillagoe-tourist-village.jpg";
import postOfficeHotelImage from "../assets/post-office-hotel.jpg";
import cabinsImage from "../assets/chillagoe-cabins.jpg";
import cockatooHotelImage from "../assets/chillagoe-cockatoo-hotel-motel.jpg";
import clubhouseImage from "../assets/chillagoe-caving-club-clubhouse.jpg";

interface Accommodation {
  name: string;
  image: string;
  paragraphs: string[];
  website: string;
  phone?: string;
  email?: string;
}

const ACCOMMODATIONS: Accommodation[] = [
  {
    name: "Chillagoe Observatory & Eco Lodge",
    image: observatoryImage,
    paragraphs: [
      "Experience a peaceful outback retreat at Chillagoe Ecolodge and Observatory, surrounded by shady trees and native wildlife. The facility offers air-conditioned cabins, bush-style camping, and a licensed restaurant. An on-site observatory provides guided stargazing sessions, with a complimentary double pass offered as a door prize for early bird ticket purchasers.",
    ],
    website: "https://www.coel.com.au/",
    phone: "07 4094 7155",
    email: "info@coel.com.au",
  },
  {
    name: "Chillagoe Tourist Village",
    image: touristVillageImage,
    paragraphs: [
      "Located in central Chillagoe, this venue provides a range of stays from shady caravan and motorhome sites to air-conditioned cabins, family units, and motel-style rooms. Amenities include a licensed restaurant, convenience store, and swimming pool.",
    ],
    website: "https://www.chillagoeaccommodationvillage.com.au",
    phone: "07 4094 7177",
  },
  {
    name: "Post Office Hotel",
    image: postOfficeHotelImage,
    paragraphs: [
      "The Post Office Hotel — known to locals as the \"Top Pub\" — is a lively spot right across the road from the conference venue. Budget accommodation with air-conditioned shared-facility rooms is available upstairs, alongside dining and a beer garden.",
    ],
    website: "https://www.chillagoepub.com.au",
    phone: "07 4094 7119",
    email: "mail@pohotel.au",
  },
  {
    name: "Chillagoe Cabins",
    image: cabinsImage,
    paragraphs: [
      "Described by the Lonely Planet as \"the best accommodation in Chillagoe,\" Chillagoe Cabins offers charming, self-contained cottages styled after 19th-century miner's huts, featuring modern conveniences and garden settings.",
    ],
    website: "https://www.chillagoe.com/",
    phone: "07 40947 206",
    email: "stay@chillagoe.com",
  },
  {
    name: "Chillagoe Cockatoo Hotel Motel",
    image: cockatooHotelImage,
    paragraphs: [
      "Chillagoe Hotel Motel — better known as the \"Bottom Pub\" — is a welcoming spot just a short stroll from the Top Pub, offering air-conditioned rooms with private bathrooms and dining options.",
    ],
    website: "https://www.chillagoecockatoohotel.com.au",
    phone: "07 4094 7168",
    email: "chillagoehotel@gmail.com",
  },
  {
    name: "Chillagoe Caving Club Clubhouse",
    image: clubhouseImage,
    paragraphs: [
      "Reserved primarily for CCC members and conference volunteers, this six-acre property includes a clubhouse, a caretaker's residence, and the historic Chillagoe school building, which has been refurbished for accommodation.",
    ],
    website: "https://chillagoecavingclub.org.au/",
    email: "info@chillagoecavingclub.org.au",
  },
];

function Accommodation() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Accommodation</h1>
      </section>

      <main>
        <section className="accommodation-section">
          <p className="accommodation-intro">
            Chillagoe offers a range of accommodation to suit every budget, from
            air-conditioned cabins and motel rooms to bush camping. Book early,
            as options are limited during conference week.
          </p>

          <div className="accommodation-list">
            {ACCOMMODATIONS.map((stay) => (
              <div className="accommodation-card" key={stay.name}>
                <figure className="accommodation-photo">
                  <img src={stay.image} alt={stay.name} />
                </figure>
                <div className="accommodation-details">
                  <h2>{stay.name}</h2>
                  {stay.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="accommodation-contact">
                    <a href={stay.website} target="_blank" rel="noreferrer">
                      {stay.website.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                    </a>
                    {stay.phone && (
                      <>
                        {" · "}
                        <a href={`tel:${stay.phone.replace(/\s+/g, "")}`}>{stay.phone}</a>
                      </>
                    )}
                    {stay.email && (
                      <>
                        {" · "}
                        <a href={`mailto:${stay.email}`}>{stay.email}</a>
                      </>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Accommodation;
