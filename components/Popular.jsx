import { useState, useEffect } from "react";
import ArticleList from "./ArticleList";

function Popular() {
  const [endpoint, setEndpoint] = useState("articles?query=sort-by=votes");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered from Recent");
    fetch(`https://nc-news-gez5.onrender.com/api/${endpoint}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setArticles(data.articles);
      });
  }, [endpoint]);

  return (
    <>
      <h2>Popular</h2>
      <ArticleList articles={articles} />
    </>
  );
}

export default Popular;
