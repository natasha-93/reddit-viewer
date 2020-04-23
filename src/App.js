import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./App.module.css";

function App() {
  const [redditData, setRedditData] = useState([]);
  const [subreddit, setSubreddit] = useState("funny");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true); // if loading = true, display "Loading.."

  useEffect(() => {
    setLoading(true);
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then((response) => {
        return response.json();
      })
      .then(({ data }) => {
        console.log(data);
        setRedditData(data.children);
        setLoading(false);
      });
  }, [subreddit]);

  if (loading) return "Loading..";

  return (
    <div className={styles.app}>
      <h1>Reddit Viewer</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubreddit(search);
        }}
      >
        <input
          value={search}
          placeholder="Search subreddit.. "
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className={styles.refresh}>Refresh</button>
      </form>
      {redditData.map(({ data }, index) => {
        return <Post {...data} key={index}></Post>;
      })}
    </div>
  );
}

export default App;
