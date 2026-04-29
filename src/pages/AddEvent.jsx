import "./AddEvent.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useFormik } from "formik";
import { AddEventValidation } from "../formvalidation/AddEventValidation.jsx";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext.jsx";
import NavBar from "../routes/NavBar.jsx";
import { useNavigate } from "react-router-dom";

// function to add event to the dashboard
export default function AddEvent() {
  // declaring variables
  // accessing shared state variables and functions
  const { events, setEvents, currentUser, setCurrentUser } =
    useContext(GlobalContext);
  const navigate = useNavigate();

  // ==========================================================================================

  // declare initial values on form
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

    // when form is submitted, run the below code
    onSubmit: (values, { resetForm }) => {
      // create a new variable storing the new event and an id created for it

      console.log("current user", currentUser);

      const newEvent = {
        id: crypto.randomUUID(),
        ...values,
        userId: currentUser?.username,
      };

      // set events state variable to the new event variable created plus whatever was previosuly in it
      setEvents((prev) => {
        const updated = [...prev, newEvent];

        // update local storage to current events
        localStorage.setItem("events", JSON.stringify(updated));

        return updated;
      });

      // reset form after every submit
      resetForm();

      // navigate back to the dashboard after every submission of form
      navigate("/");
    },
  });
  return (
    <>
      {/* display nav bar */}
      <NavBar />
      {/* ====================================================================== */}
      <div className="add-event-card-container">
        <Card className="add-event-card">
          <Card.Title className="add-event-title">Add Event</Card.Title>

          {/* create form for formik */}
          <form onSubmit={formik.handleSubmit}>
            {/* enter event*/}
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

            {/* enter event type */}
            <div className="addevent-event-type-container">
              <label>Please enter the event type</label>
              <input
                className="addevent-input"
                name="eventType"
                value={formik.values.eventType}
                placeholder="business/personal"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></input>

              {formik.touched.eventType && formik.errors.eventType && (
                <p className="formik-errors">*{formik.errors.eventType}</p>
              )}
            </div>

            {/* enter event description */}
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

            {/* enter event location */}
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
            {/* enter event priority */}
            <div className="addevent-priority-container">
              <label>Please rate event's importance</label>
              <input
                className="addevent-input"
                name="priority"
                value={formik.values.priority}
                placeholder="high/medium/low"
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

            {/* button to submit form */}
            <div className="addevent-button-container">
              <button type="submit">Add Event</button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
}
