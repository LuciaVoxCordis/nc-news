import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import CommentList from "./CommentsList";

function ExpandedArticle() {
  let id = useParams()["article_id"];

  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered from ExpandedArticle");
    fetch(`https://nc-news-gez5.onrender.com/api/articles/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        setArticle(data);
      });
  }, [id]);

  useEffect(() => {
    console.log("useEffect triggered from ExpandedArticle");
    fetch(`https://nc-news-gez5.onrender.com/api/articles/${id}/comments`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setComments(data.comments);
      });
  }, [id]);

  const {
    article_id,
    title,
    topic,
    author,
    body,
    created_at,
    votes,
    article_img_url,
  } = article;

  return (
    <>
      <h2> {title} </h2>
      <h3>
        Topic: {topic} Posted {created_at} by {author}
      </h3>
      <img src={article_img_url} />
      <p>{body}</p>
      <p>Votes: {votes}</p>
      <h3>comments:</h3>
      <CommentList comments={comments} />
    </>
  );
}

export default ExpandedArticle;
