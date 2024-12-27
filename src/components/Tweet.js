// src/components/Tweet.js
import React, { useState } from "react";
import "./Tweet.css";

const Tweet = ({ username, content }) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked(!isLiked);
  };

  const handleRetweet = () => {
    setRetweets((prev) => (isRetweeted ? prev - 1 : prev + 1));
    setIsRetweeted(!isRetweeted);
  };

  return (
    <div className="tweet">
      <div className="tweet__header">
        <strong>{username}</strong>
      </div>
      <div className="tweet__content">{content}</div>
      <div className="tweet__actions">
        <button
          className={`tweet__button ${isLiked ? "tweet__button--active" : ""}`}
          onClick={handleLike}
        >
          ❤ {likes}
        </button>
        <button
          className={`tweet__button ${isRetweeted ? "tweet__button--active" : ""}`}
          onClick={handleRetweet}
        >
          🔁 {retweets}
        </button>
      </div>
    </div>
  );
};

export default Tweet;
