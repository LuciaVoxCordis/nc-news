import { useState } from "react";

function CommentCard({ comment }) {
  const [localComment, setLocalComment] = useState(comment);

  const increaseVotes = (comment_id) => {
    setLocalComment({ ...localComment, votes: votes + 1 });
    fetch(`https://nc-news-gez5.onrender.com/api/comments/${comment_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: 1 }),
      headers: { "Content-Type": "application/json" },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setLocalComment(data);
      })
      .catch((err) => {
        console.log(err);
        setLocalComment({ ...localComment });
      });
  };

  const decreaseVotes = (comment_id) => {
    setLocalComment({ ...localComment, votes: votes - 1 });
    fetch(`https://nc-news-gez5.onrender.com/api/comments/${comment_id}`, {
      method: "PATCH",
      body: JSON.stringify({ inc_votes: -1 }),
      headers: { "Content-Type": "application/json" },
    })
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setLocalComment(data);
      })
      .catch((err) => {
        console.log(err);
        setLocalComment({ ...localComment });
      });
  };

  const { comment_id, article_id, author, body, created_at, votes } =
    localComment;

  return (
    <li>
      <h4>{author}</h4>
      <p>{body}</p>
      <p> At: {created_at}</p>
      <p> votes: {votes}</p>
      <button onClick={() => increaseVotes(comment_id)}>+1</button>
      <button onClick={() => decreaseVotes(comment_id)}>-1</button>
    </li>
  );
}

export default CommentCard;
