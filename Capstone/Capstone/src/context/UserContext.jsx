import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);

  // API FETCH
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(u => ({
          name: u.name,
          score: Math.floor(Math.random() * 100)
        }));
        setUsers(formatted);
      });
  }, []);

  // REAL-TIME REFRESH (every 10s)
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev =>
        prev.map(u => ({
          ...u,
          score: Math.floor(Math.random() * 100)
        }))
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}