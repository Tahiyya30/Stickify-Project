import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(GlobalContext);

  // function to log out user
  function handleLogout() {
    // when user clicks log out button, set login to false and navigate back to login screen

    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
    return;
  }

  return (
    <nav className="navbar-container">
      <NavLink to="/">DASHBOARD</NavLink>
      <NavLink to="/addevent">ADD EVENT</NavLink>
      <NavLink to="/help">HELP</NavLink>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}
