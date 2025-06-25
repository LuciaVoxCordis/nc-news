import { useState, useEffect } from "react";
import TopicList from "./TopicList";

function Topics() {
  const [endpoint, setEndpoint] = useState("topics");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered from Topics");
    fetch(`https://nc-news-gez5.onrender.com/api/${endpoint}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setTopics(data.topics);
      });
  }, [endpoint]);

  return (
    <>
      <h2>Topics</h2>
      <TopicList topics={topics} />
    </>
  );
}

export default Topics;
