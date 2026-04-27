import NavBar from "../routes/NavBar.jsx";
import "./Help.css";
import { useNavigate } from "react-router-dom";

export default function Help() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <div className="help-container">
        <div className="help-heading-container">
          <h1 className="h1-help">Welcome to Stickify Help</h1>
          <p className="paragraph-on-stickify">
            With Stickify you can track where you need to be! Stick your virtual
            sticky notes to your digital dashboard and track all personal and
            business events coming up in your life!
          </p>
        </div>

        {/* ====================================================================================== */}

        <div className="how-to-use-container">
          <h2 className="h2-help">How to use Stickify</h2>
          <h3 className="h3-help">Adding an Event</h3>
          <ul>
            <li>
              Navigate to 'Add Events' on the top of the website using the
              navigation bar
            </li>
            <li>
              Enter event information and click 'Add Event' to add event to the
              dashboard
            </li>
            <li>
              Navigate to 'Dashboard' using the navigation bar to see event
            </li>
          </ul>

          <h3 className="h3-help">Editing an Event</h3>
          <ul>
            <li>
              Navigate to 'Dashboard' and click on the 'Edit' button in the
              bottom right corner of the event you would like to edit the
              information of
            </li>
            <li>Edit the event and click 'Update Event'</li>
            <li>
              Navigate to 'Dashboard' using the navigation bar to see event
            </li>
          </ul>

          <h3 className="h3-help">Deleting an Event</h3>
          <ul>
            <li>
              To delete an event, click on the 'x' in the top right corner of
              the event you want deleted
            </li>
          </ul>

          <h3 className="h3-help">Event Organization</h3>
          <ul>
            <li>Please note events are organized by date</li>
            <li>
              Each event displayed on dashboard is colored based on level of
              priority (ie. red for high priority, pink for medium priority and
              blue for low priority)
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h2-help">Tips for organizing events</h2>
          <ul>
            <li>
              Prioritise important events using high, medium, and low priority
            </li>
            <li> Always enter a clear date and time for each event</li>
            <li> Use short and clear event titles for easy reading</li>
            <li> Separate personal and business events to stay organised</li>
            <li> Regularly update events when plans change</li>
            <li> Delete or remove completed or cancelled events</li>
            <li> Avoid overloading a single day with too many events</li>
            <li> Keep your dashboard clean by reviewing events often</li>
          </ul>
        </div>

        <div>
          <h2 className="h2-help">How to register a Stickify account</h2>
          <ul>
            <li>Open Stickify in your browser and go to the Register page</li>
            <li>Enter your details (name/username/email/password)</li>
            <li>Submit the form</li>
            <li>After registering, you can access your dashboard</li>
            <li>Only registered users can create and manage events</li>
          </ul>
        </div>
      </div>
    </>
  );
}
