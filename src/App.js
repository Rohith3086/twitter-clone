// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Kuruvi from "./components/Kuruvi"; // Import the Kuruvi chatbot component
import Header from "./components/Header"; // Assuming you have a Header component
import Sidebar from "./components/Sidebar"; // Assuming you have a Sidebar component
import Feed from "./components/Feed"; // Assuming you have a Feed component
import Widgets from "./components/Widgets"; // Assuming you have a Widgets component

import "./App.css"; // Your global CSS for the app

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header Component */}
        <Header />

        {/* Main Content Section */}
        <div className="app__body">
          {/* Sidebar on the left */}
          <Sidebar />

          {/* Feed and Widgets in the center */}
          <div className="app__feed">
            <Routes>
              <Route path="/" element={<Feed />} />
              {/* Add other routes here as needed */}
            </Routes>
          </div>

          {/* Widgets on the right */}
          <Widgets />
        </div>

        {/* Chatbot component at the bottom right */}
        <Kuruvi />
      </div>
    </Router>
  );
};

export default App;
