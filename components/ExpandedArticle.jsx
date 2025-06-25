import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

function ExpandedArticle() {
  let id = useParams()["article_id"];

  const [article, setArticle] = useState({});

  useEffect(() => {
    console.log("useEffect triggered from ExpandedArticle");
    fetch(`https://nc-news-gez5.onrender.com/api/articles/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setArticle(data);
      });
  }, [id]);

  const { title, topic, author, body, created_at, votes, article_img_url } =
    article;

  return (
    <>
      <h2> {title} </h2>
      <h3>
        Topic: {topic} Posted {created_at} by {author}
      </h3>
      <p>{body}</p>
    </>
  );
}

export default ExpandedArticle;
