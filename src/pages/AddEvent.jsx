import "./AddEvent.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFormik } from "formik";
import { AddEventValidation } from "../formvalidation/AddEventValidation.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import NavBar from "../routes/NavBar.jsx";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {
  const { events, setEvents } = useContext(GlobalContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      event: "",
      eventType: "",
      description: "",
      location: "",
      priority: "",
      date: "",
      time: "",
    },

    validationSchema: AddEventValidation,

    onSubmit: (values, { resetForm }) => {
      const newEvent = {
        id: crypto.randomUUID(),
        ...values,
      };

      setEvents((prev) => {
        const updated = [...prev, newEvent];

        localStorage.setItem("events", JSON.stringify(updated));

        return updated;
      });

      resetForm();
      navigate("/");
    },
  });
  return (
    <>
      <NavBar />
      {/* ====================================================================== */}
      <div className="add-event-card-container">
        <Card className="add-event-card">
          <Card.Title className="add-event-title">Add Event</Card.Title>

          {/* enter event type */}
          <form onSubmit={formik.handleSubmit}>
            {/* enter event type*/}
            <div className="add-event-event-container">
              <label>Please enter the name of your event</label>
              <input
                className="addevent-input"
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

            <div className="addevent-event-type-container">
              <label>Please enter the event type</label>
              <input
                className="addevent-input"
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

            <div className="add-event-description-container">
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

            <div className="add-event-location-container">
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

            <div className="addevent-priority-container">
              <label>Please rate event's importance</label>
              <input
                className="addevent-input"
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
            <div className="addevent-date-container">
              <label>Please enter event date</label>
              <input
                className="addevent-input"
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
            <div className="addevent-time-container">
              <label>Please enter event time</label>
              <input
                className="addevent-input"
                name="time"
                type="time"
                value={formik.values.time}
                placeholder="HH:MM"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>
              {formik.touched.time && formik.errors.time && (
                <p className="formik-errors">*{formik.errors.time}</p>
              )}
            </div>

            <div className="addevent-button-container">
              <button type="submit">Add Event</button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
