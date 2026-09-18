import { upcomingEvents } from "@/lib/home";

export default function UpcomingEvents() {
  return (
    <section className="upcoming-events">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className="events-list">
          {upcomingEvents.map((event, i) => (
            <div key={i} className="event-card">
              <div className="event-date">
                <span className="event-day">{event.day}</span>
                <span className="event-month">{event.month}</span>
                <span className="event-year">{event.year}</span>
              </div>
              <div className="event-info">
                <h3>{event.name}</h3>
                <p>{event.detail}</p>
                <p className="event-location">
                  <strong>{event.country}</strong> — {event.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
