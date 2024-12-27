import React, { useState } from "react";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";
import "./Feed.css";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (text) => {
    const newTweet = { id: Date.now(), username: "User", content: text };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <main className="feed">
      <div className="feed__header">Home</div>
      <div className="feed__tweetInput">
        <TweetInput onTweet={addTweet} />
      </div>
      {tweets.map((tweet) => (
        <div key={tweet.id} className="feed__tweet">
          <Tweet {...tweet} />
        </div>
      ))}
    </main>
  );
};

export default Feed;
