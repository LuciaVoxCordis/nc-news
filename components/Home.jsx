import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function Home() {
  const [mostPopular, setMostPopular] = useState([]);
  const [mostRecent, setMostRecent] = useState([]);
  const [randomArticle, setRandomArticle] = useState([]);

  useEffect(() => {
    fetch(
      `https://nc-news-gez5.onrender.com/api/articles?query=sort_by=votes+order=DESC`
    )
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("UseEffect triggered from Home(popular)");
        setMostPopular(data.articles[0]);
        const dataLength = data.articles.length;
        const randomNumber = Math.random();
        setRandomArticle(data.articles[Math.floor(randomNumber * dataLength)]);
      });
  }, []);

  useEffect(() => {
    fetch(`https://nc-news-gez5.onrender.com/api/articles`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log("UseEffect triggered from Home(recent)");
        setMostRecent(data.articles[0]);
      });
  }, []);

  return (
    <>
      <h2> Home </h2>
      <h3> Most popular article:</h3>
      <ArticleCard key={mostPopular.article_id} article={mostPopular} />
      <h3> Most recent article:</h3>
      <ArticleCard key={mostRecent.article_id} article={mostRecent} />
      <h3> Random article:</h3>
      <ArticleCard key={randomArticle.article_id} article={randomArticle} />
    </>
  );
}

export default Home;
