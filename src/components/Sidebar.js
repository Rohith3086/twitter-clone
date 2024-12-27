// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
      </div>
      <nav className="sidebar__nav">
        <ul>
          <li>
            <Link to="/" className="sidebar__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/explore" className="sidebar__link">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/notifications" className="sidebar__link">
              Notifications
            </Link>
          </li>
          <li>
            <Link to="/messages" className="sidebar__link">
              Messages
            </Link>
          </li>
          <li>
            <Link to="/profile" className="sidebar__link">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar__footer">
        <button className="sidebar__button">Log Out</button>
      </div>
    </aside>
  );
};

export default Sidebar;
