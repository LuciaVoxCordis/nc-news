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

  const increaseVotes = (article_id) => {
    setArticle({ ...article, votes: votes + 1 });
    fetch(`https://nc-news-gez5.onrender.com/api/articles/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: 1 }),
      headers: { "Content-Type": "application/json" },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.log(err);
        setArticle({ ...article });
      });
  };

  const decreaseVotes = (article_id) => {
    setArticle({ ...article, votes: votes - 1 });
    fetch(`https://nc-news-gez5.onrender.com/api/articles/${article_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: -1 }),
      headers: { "Content-Type": "application/json" },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        console.log(err);
        setArticle({ ...article });
      });
  };

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
      <button onClick={() => increaseVotes(article_id)}>+1</button>
      <button onClick={() => decreaseVotes(article_id)}>-1</button>
      <h3>comments:</h3>
      <CommentList comments={comments} />
    </>
  );
}

export default ExpandedArticle;
