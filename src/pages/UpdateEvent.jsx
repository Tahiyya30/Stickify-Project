import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext";
import "./UpdateEvent.css";
import { useFormik } from "formik";
import { UpdateEventValidation } from "../formvalidation/UpdateEventValidation.jsx";
import NavBar from "../routes/NavBar.jsx";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

export default function UpdateEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { events, setEvents } = useContext(GlobalContext);

  // find and store item from events array if the event's id equals to the id clicked on by user
  const eventToEdit = events?.find((event) => event.id === id);

  const formik = useFormik({
    initialValues: {
      event: eventToEdit?.event || "",
      eventType: eventToEdit?.eventType || "",
      description: eventToEdit?.description || "",
      location: eventToEdit?.priority || "",
      priority: eventToEdit?.priority || "",
      date: eventToEdit?.date || "",
      time: eventToEdit?.time || "",
    },

    validationSchema: UpdateEventValidation,

    // refills input fields to current values when eventToEdit data eventually loads
    enableReinitialize: true,

    onSubmit: (values) => {
      handleUpdate({
        ...values,
        id: id,
      });

      navigate("/");
    },
  });

  const handleUpdate = (updatedEvent) => {
    setEvents((prev) => {
      const updated = prev.map((e) =>
        e.id === updatedEvent.id ? updatedEvent : e,
      );

      localStorage.setItem("events", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <>
      <NavBar />
      {/* ====================================================================== */}
      <div className="update-event-card-container">
        <Card className="update-event-card">
          <Card.Title className="update-event-title">Update Event</Card.Title>

          {/* enter event type */}
          <form onSubmit={formik.handleSubmit}>
            {/* enter event type*/}
            <div className="update-event-container">
              <label>Please enter the name of your event</label>
              <input
                className="update-event-input"
                name="event"
                value={formik.values.event}
                placeholder="Event"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.event && formik.errors.event && (
                <p className="formik-errors">*{formik.errors.event}</p>
              )}
            </div>

            <div className="update-event-type-container">
              <label>Please enter the event type</label>
              <input
                className="update-event-input"
                name="eventType"
                value={formik.values.eventType}
                placeholder="Business/Personal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>

              {formik.touched.eventType && formik.errors.eventType && (
                <p className="formik-errors">*{formik.errors.eventType}</p>
              )}
            </div>

            <div className="update-event-description-container">
              <label>Please enter event description</label>
              <input
                className="addevent-input"
                name="description"
                value={formik.values.description}
                placeholder="Event description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>

              {formik.touched.description && formik.errors.description && (
                <p className="formik-errors">*{formik.errors.description}</p>
              )}
            </div>

            <div className="update-event-location-container">
              <label>Please enter the location</label>
              <input
                className="addevent-input"
                name="location"
                value={formik.values.location}
                placeholder="Location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>

              {formik.touched.location && formik.errors.location && (
                <p className="formik-errors">*{formik.errors.location}</p>
              )}
            </div>

            <div className="update-event-priority-container">
              <label>Please rate event's importance</label>
              <input
                className="update-event-input"
                name="priority"
                value={formik.values.priority}
                placeholder="High/Medium/Low"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.priority && formik.errors.priority && (
                <p className="formik-errors">*{formik.errors.priority}</p>
              )}
            </div>

            {/* enter event date */}
            <div className="update-event-date-container">
              <label>Please enter event date</label>
              <input
                className="update-event-input"
                name="date"
                value={formik.values.date}
                placeholder="YYYY-MM-DD"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.date && formik.errors.date && (
                <p className="formik-errors">*{formik.errors.date}</p>
              )}
            </div>

            {/* enter event time */}
            <div className="update-event-time-container">
              <label>Please enter event time</label>
              <input
                className="update-event-input"
                name="time"
                type="time"
                value={formik.values.time}
                placeholder="Event time"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.time && formik.errors.time && (
                <p className="formik-errors">*{formik.errors.time}</p>
              )}
            </div>

            <div className="update-event-button-container">
              <button type="submit">Update Event</button>
            </div>
          </form>
          <div className="add-event-exit-button-container">
            <button
              className="add-event-exit-button"
              onClick={() => navigate("/")}
            >
              x
            </button>
          </div>
        </Card>
      </div>
    </>
  );
}
