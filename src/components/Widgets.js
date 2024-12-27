// src/components/Widgets.js
import React from "react";
import "./Widgets.css";

const Widgets = () => {
  const trends = [
    "#React",
    "#JavaScript",
    "#WebDevelopment",
    "#Frontend",
    "#Coding",
  ];
  
  const handleTrendClick = (trend) => {
    alert(`You clicked on the trend: ${trend}`);
  };

  return (
    <aside className="widgets">
      <h3 className="widgets__title">Trends for you</h3>
      <ul className="widgets__list">
        {trends.map((trend, index) => (
          <li
            key={index}
            className="widgets__item"
            onClick={() => handleTrendClick(trend)}
          >
            {trend}
          </li>
        ))}
      </ul>
      <button className="widgets__button">Show More</button>
    </aside>
  );
};

export default Widgets;
