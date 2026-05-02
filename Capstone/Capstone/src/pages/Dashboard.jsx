import { useState } from "react";
import Header from "../components/Header";
import AddUserForm from "../components/AddUserForm";
import UserTable from "../components/UserTable";
import Stats from "../components/Stats";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "container dark" : "container"}>
      
      {/* HEADER */}
      <Header />

      {/* TOP CONTROLS */}
      <div className="top-controls">
        <button
          className="toggle-btn"
          onClick={() => setDark(!dark)}
        >
          Toggle Mode
        </button>

        <input
          className="search-input"
          placeholder="Search user..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* FORM */}
      <div className="form-section">
        <AddUserForm />
      </div>

      {/* STATS */}
      <Stats />

      {/* TABLE */}
      <UserTable search={search} />

    </div>
  );
}

export default Dashboard;