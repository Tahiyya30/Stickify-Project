import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [addEvent, setAddEvent] = useState(false);
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || [],
  );
  return (
    <GlobalContext.Provider
      value={{ login, setLogin, addEvent, setAddEvent, events, setEvents }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
