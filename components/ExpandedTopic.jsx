import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import ArticleList from "./ArticleList";

function ExpandedTopic() {
  let topic = useParams()["topic"];

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered from Recent");
    fetch(`https://nc-news-gez5.onrender.com/api/articles/topics/${topic}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setArticles(data.articles);
      });
  }, [topic]);

  return (
    <>
      <h2> Topic: {topic} </h2>
      <ArticleList articles={articles} />
    </>
  );
}

export default ExpandedTopic;
