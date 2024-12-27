// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Kuruvi</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <button className="header__button">Log In</button>
        <button className="header__button header__button--primary">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
