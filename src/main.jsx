import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { useContext } from "react";
import { GlobalContext } from "./context/createContext.jsx";
import { GlobalProvider } from "./context/createContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import Help from "./pages/Help.jsx";
import UpdateEvent from "./pages/UpdateEvent.jsx";
import { Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </StrictMode>,
);
