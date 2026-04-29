import "./Dashboard.css";
import Card from "react-bootstrap/Card";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import NavBar from "../routes/NavBar.jsx";
import { useNavigate } from "react-router-dom";

// function to display events created by user on dashboard
export default function Dashboard() {
  // declaring variables
  // accessing shared state variables and functions
  const { events, setEvents, currentUser, setCurrentUser } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  // ===================================================================================================

  // function to remove event from dashboard that runs when delete button is clicked
  function RemoveEvent(id) {
    // filter events and keep the events not equal to this id
    const updatedEvents = events.filter((event) => event.id !== id);

    // update events to new array of events after filtering
    setEvents(updatedEvents);

    // update local storage to new events array after filtering
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  }

  // ====================================================================================================

  // get events from the user with the username that is currently logged in
  const userEvents = events.filter(
    (event) => event.userId === currentUser.username,
  );

  // ====================================================================================================

  // sort events by date and time
  const sortedEvents = [...userEvents].sort(
    (a, b) => new Date(`${a.date} ${a.time}`) - new Date(`${b.date} ${b.time}`),
  );

  return (
    <>
      {/* display navbar */}
      <NavBar />

      <div className="dashboard-container">
        <div className="dashboard-heading">
          <h1>Stickify Dashboard</h1>
          <h2>Upcoming Events</h2>
        </div>

        {/* display events */}
        <div className="dashboard-card-container">
          {/* if events array is defined, exists, not null etc and its length is greater than 0 display the below */}
          {sortedEvents && sortedEvents.length > 0 ? (
            <>
              {/* for every event in sortedEvents display the event with the given styles */}
              {sortedEvents.map((event) => (
                <Card
                  className="dashboard-card"
                  key={event.id}
                  style={{
                    // based on priority, change the color of the card displayed
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
                        <>
                          <strong>Description:</strong> {event.description}
                        </>
                      )}
                    </Card.Text>

                    <Card.Text className="upper-case-event-type">
                      {event.eventType}
                    </Card.Text>

                    <Card.Text>Date: {event.date}</Card.Text>

                    <Card.Text className="location">
                      {event.location && (
                        <>
                          <strong>Location:</strong> {event.location}
                        </>
                      )}
                    </Card.Text>

                    <Card.Text>Time: {event.time}</Card.Text>
                  </Card.Body>
                  {/* button to edit the event */}
                  {/* when butto is clicked, navigate ti the update events page carrying the id of the current event */}
                  <button
                    className="dashboard-edit-button"
                    onClick={() => navigate(`/updateevent/${event.id}`)}
                  >
                    Edit
                  </button>
                  {/* each event should get a delete button which remves the event */}
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
            // else if there are no events in the variable, then display the word none on screen to user
            <div className="none-container">
              <p>None</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
