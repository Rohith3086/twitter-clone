// src/components/TweetInput.js
import React, { useState } from "react";
import './TweetInput.css';

const TweetInput = ({ onTweet }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onTweet(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "10px 0" }}>
      <textarea
        rows="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's happening?"
        style={{ width: "100%", padding: "10px" }}
      ></textarea>
      <button type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput;
