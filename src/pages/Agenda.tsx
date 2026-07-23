import "../App.css";
import "./Agenda.css";
import heroImage from "../assets/hero-karst.jpg";

const TIME_SLOTS = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
];

type BlockType = "caving" | "talks" | "meal" | "registration" | "social";

interface Block {
  day: number;
  startSlot: number;
  span: number;
  label: string;
  type: BlockType;
}

const DAYS = [
  { name: "Sunday", date: "20 June" },
  { name: "Monday", date: "21 June" },
  { name: "Tuesday", date: "22 June" },
  { name: "Wednesday", date: "23 June" },
  { name: "Thursday", date: "24 June" },
  { name: "Friday", date: "25 June" },
  { name: "Saturday", date: "26 June" },
];

const BLOCKS: Block[] = [
  // Sunday
  {
    day: 0,
    startSlot: 0,
    span: 14,
    label: "Pre-conference caving",
    type: "caving",
  },
  {
    day: 0,
    startSlot: 14,
    span: 4,
    label: "Registration",
    type: "registration",
  },
  { day: 0, startSlot: 18, span: 6, label: "Welcome barbecue", type: "social" },
  // Monday
  {
    day: 1,
    startSlot: 0,
    span: 3,
    label: "Conference opening, Welcome to Country, Talks",
    type: "talks",
  },
  { day: 1, startSlot: 3, span: 1, label: "Morning tea", type: "meal" },
  { day: 1, startSlot: 4, span: 3, label: "Talks", type: "talks" },
  { day: 1, startSlot: 7, span: 2, label: "Lunch", type: "meal" },
  { day: 1, startSlot: 9, span: 3, label: "Talks", type: "talks" },
  { day: 1, startSlot: 12, span: 1, label: "Afternoon tea", type: "meal" },
  { day: 1, startSlot: 13, span: 2, label: "Talks", type: "talks" },
  // Tuesday
  { day: 2, startSlot: 0, span: 3, label: "Talks", type: "talks" },
  { day: 2, startSlot: 3, span: 1, label: "Morning tea", type: "meal" },
  { day: 2, startSlot: 4, span: 3, label: "Talks", type: "talks" },
  { day: 2, startSlot: 7, span: 2, label: "Lunch", type: "meal" },
  {
    day: 2,
    startSlot: 9,
    span: 9,
    label: "Speleosports - speed ascent, SRT course",
    type: "caving",
  },
  // Wednesday
  { day: 3, startSlot: 0, span: 3, label: "Talks", type: "talks" },
  { day: 3, startSlot: 3, span: 1, label: "Morning tea", type: "meal" },
  { day: 3, startSlot: 4, span: 3, label: "Talks", type: "talks" },
  { day: 3, startSlot: 7, span: 2, label: "Lunch", type: "meal" },
  {
    day: 3,
    startSlot: 9,
    span: 9,
    label: "Caving + Speleosports - team relay",
    type: "caving",
  },
  { day: 3, startSlot: 18, span: 6, label: "Movie night", type: "social" },
  // Thursday
  { day: 4, startSlot: 0, span: 3, label: "Talks", type: "talks" },
  { day: 4, startSlot: 3, span: 1, label: "Morning tea", type: "meal" },
  { day: 4, startSlot: 4, span: 3, label: "Talks", type: "talks" },
  { day: 4, startSlot: 7, span: 2, label: "Lunch", type: "meal" },
  { day: 4, startSlot: 9, span: 9, label: "Caving/Workshops", type: "caving" },
  // Friday
  { day: 5, startSlot: 0, span: 3, label: "Talks", type: "talks" },
  { day: 5, startSlot: 3, span: 1, label: "Morning tea", type: "meal" },
  { day: 5, startSlot: 4, span: 3, label: "Talks", type: "talks" },
  { day: 5, startSlot: 7, span: 2, label: "Lunch", type: "meal" },
  { day: 5, startSlot: 9, span: 3, label: "Talks", type: "talks" },
  { day: 5, startSlot: 12, span: 1, label: "Afternoon tea", type: "meal" },
  {
    day: 5,
    startSlot: 13,
    span: 5,
    label: "Self-rescue techniques exercise",
    type: "caving",
  },
  // Saturday
  {
    day: 6,
    startSlot: 0,
    span: 18,
    label: "Cave rescue exercise",
    type: "caving",
  },
  {
    day: 6,
    startSlot: 18,
    span: 6,
    label: "Finale dinner and awards",
    type: "social",
  },
];

const PREPOST_TIME_SLOTS = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
];

const PREPOST_DAYS = [
  { name: "Friday", date: "18 June" },
  { name: "Saturday", date: "19 June" },
  { name: "Sunday", date: "20 June" },
  { name: "Sunday", date: "27 June" },
  { name: "Monday", date: "28 June" },
];

function Agenda() {
  return (
    <>
      <section
        className="hero hero-small"
        aria-labelledby="page-title"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <h1 id="page-title">Agenda</h1>
      </section>

      <main>
        <section className="agenda-section">
          <p className="conference-week-label">
            Conference week | 20 – 26 June 2027
          </p>

          <div className="schedule-wrap">
            <div
              className="schedule-grid"
              style={{
                gridTemplateColumns: `6.5rem repeat(${DAYS.length}, minmax(7.5rem, 1fr))`,
                gridTemplateRows: `auto repeat(${TIME_SLOTS.length}, minmax(1.75rem, auto))`,
              }}
            >
              <div
                className="schedule-corner"
                style={{ gridColumn: 1, gridRow: 1 }}
              />
              {DAYS.map((day, i) => (
                <div
                  key={day.name}
                  className="day-header"
                  style={{ gridColumn: i + 2, gridRow: 1 }}
                >
                  <span className="day-name">{day.name}</span>
                  <span className="day-date">{day.date}</span>
                </div>
              ))}
              {TIME_SLOTS.map((time, i) => (
                <div
                  key={time}
                  className="time-label"
                  style={{ gridColumn: 1, gridRow: i + 2 }}
                >
                  {time}
                </div>
              ))}
              {BLOCKS.map((block, i) => (
                <div
                  key={i}
                  className={`schedule-block schedule-block--${block.type}`}
                  style={{
                    gridColumn: block.day + 2,
                    gridRow: `${block.startSlot + 2} / span ${block.span}`,
                  }}
                >
                  {block.label}
                </div>
              ))}
            </div>
          </div>

          <p className="conference-week-label prepost-label">
            Pre- &amp; post-conference caving
          </p>

          <div className="schedule-wrap">
            <div
              className="schedule-grid"
              style={{
                gridTemplateColumns: `6.5rem repeat(${PREPOST_DAYS.length}, minmax(7.5rem, 1fr))`,
                gridTemplateRows: `auto repeat(${PREPOST_TIME_SLOTS.length}, minmax(1.75rem, auto))`,
              }}
            >
              <div
                className="schedule-corner"
                style={{ gridColumn: 1, gridRow: 1 }}
              />
              {PREPOST_DAYS.map((day, i) => (
                <div
                  key={i}
                  className="day-header"
                  style={{ gridColumn: i + 2, gridRow: 1 }}
                >
                  <span className="day-name">{day.name}</span>
                  <span className="day-date">{day.date}</span>
                </div>
              ))}
              {PREPOST_TIME_SLOTS.map((time, i) => (
                <div
                  key={time}
                  className="time-label"
                  style={{ gridColumn: 1, gridRow: i + 2 }}
                >
                  {time}
                </div>
              ))}
              {PREPOST_DAYS.map((_, i) => (
                <div
                  key={i}
                  className="schedule-block schedule-block--caving"
                  style={{
                    gridColumn: i + 2,
                    gridRow: `2 / span ${PREPOST_TIME_SLOTS.length}`,
                  }}
                >
                  Pre-conference caving
                </div>
              ))}
            </div>
          </div>

          <div className="agenda-copy">
            <p>
              The draft conference program offers a balance of talks, hands-on
              activities, and plenty of time for caving. Pre-conference caving
              kicks things off from 18 June, followed by a full week of engaging
              talks, speleosports, and caving adventures.
            </p>
            <p>
              The conference officially begins with registration and a welcome
              barbecue on Sunday 20 June. From Monday to Friday, each day
              features a strong program of presentations with morning tea and
              lunch provided, and most afternoons set aside for caving trips,
              speleosports challenges, and self-rescue technique exercises.
            </p>
            <p>
              Saturday 26 June features a dedicated cave rescue exercise,
              followed by the finale dinner and awards night. Post-conference
              caving continues on Sunday and Monday 27–28 June for those who
              want to stay on.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Agenda;
