import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useContext } from "react";
import { GlobalContext } from "./context/createContext.jsx";
import { GlobalProvider } from "./context/createContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AddEvent from "./pages/AddEvent.jsx";
import Help from "./pages/Help.jsx";
import UpdateEvent from "./pages/UpdateEvent.jsx";
import { Navigate } from "react-router-dom";

function App() {
  const { login, setLogin } = useContext(GlobalContext);

  const router = createBrowserRouter([
    { path: "/", element: login ? <Dashboard /> : <Navigate to="/login" /> },
    { path: "/addevent", element: <AddEvent /> },
    { path: "/help", element: <Help /> },
    { path: "/register", element: login ? <Navigate to="/" /> : <Register /> },
    {
      path: "/login",
      element: login ? <Navigate to="/" /> : <Login />,
    },
    { path: "/updateevent/:id", element: <UpdateEvent /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
