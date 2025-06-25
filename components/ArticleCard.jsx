import { Link } from "react-router";

function ArticleCard({ article }) {
  return (
    <li>
      <h3> {article.title}</h3>
      <h4>Topic: {article.topic}</h4>
      <h4>
        Posted: {article.created_at} by {article.author}
      </h4>
      <h5>
        Comments: {article.comment_count} Votes: {article.votes}
      </h5>
      <Link to={`/article/${article.article_id}`}>Expand</Link>
    </li>
  );
}

export default ArticleCard;
