function CommentCard({ comment }) {
  return (
    <li>
      <h4>{comment.author}</h4>
      <p>{comment.body}</p>
      <p> At: {comment.created_at}</p>
      <p> votes: {comment.votes}</p>
    </li>
  );
}

export default CommentCard;
