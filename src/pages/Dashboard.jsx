import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import NavBar from "../routes/NavBar.jsx";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { events, setEvents, currentUser, setCurrentUser } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  function RemoveEvent(id) {
    // filter events and keep the events not equal to this id
    const updatedEvents = events.filter((event) => event.id !== id);

    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  }

  const userEvents = events.filter(
    (event) => event.userId === currentUser.username,
  );

  // sort events by date and time
  const sortedEvents = [...userEvents].sort(
    (a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`),
  );

  return (
    <>
      <NavBar />

      <div className="dashboard-container">
        <div className="dashboard-heading">
          <h1>Stickify Dashboard</h1>
          <h2>Upcoming Events</h2>
        </div>
        <div className="dashboard-card-container">
          {events && events.length > 0 ? (
            <>
              {sortedEvents.map((event) => (
                <Card
                  className="dashboard-card"
                  key={event.id}
                  style={{
                    backgroundColor:
                      event.priority === "high"
                        ? "#fc6f86"
                        : event.priority === "medium"
                          ? "#e68dad"
                          : "#c1adcd",
                  }}
                >
                  <Card.Body>
                    <Card.Title className="event-title">
                      Event: {event.event}
                    </Card.Title>

                    <Card.Text className="upper-case-priority">
                      {event.priority} PRIORITY
                    </Card.Text>

                    <Card.Text className="description">
                      {event.description && (
                        <p>Description: {event.description}</p>
                      )}
                    </Card.Text>

                    <Card.Text className="upper-case-event-type">
                      {event.eventType}
                    </Card.Text>

                    <Card.Text>Date: {event.date}</Card.Text>

                    <Card.Text className="location">
                      {event.location && <p>Location: {event.location}</p>}
                    </Card.Text>

                    <Card.Text>Time: {event.time}</Card.Text>
                  </Card.Body>
                  <button
                    className="dashboard-edit-button"
                    onClick={() => navigate(`/updateevent/${event.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="dashboard-remove-button"
                    onClick={() => RemoveEvent(event.id)}
                  >
                    x
                  </button>
                </Card>
              ))}
            </>
          ) : (
            <div className="none-container">
              <p>None</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
