import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="profile" element={<h3>Profile</h3>} />
        <Route path="settings" element={<h3>Settings</h3>} />
      </Routes>
    </div>
  );
}

export default Dashboard;
