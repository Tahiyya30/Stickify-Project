import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/createContext";

export default function NavBar() {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(GlobalContext);

  function handleLogout() {
    setLogin(false);
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
