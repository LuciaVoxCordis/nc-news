import CommentCard from "./CommentCard";

function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
    </ul>
  );
}

export default CommentList;
