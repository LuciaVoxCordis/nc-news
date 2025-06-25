import { Link } from "react-router";

function TopicCard({ topic }) {
  return (
    <li>
      <h3> {topic.slug}</h3>
      <h4>Description: {topic.description}</h4>
      <Link to={`/topic/${topic.slug}`}>Expand</Link>
    </li>
  );
}

export default TopicCard;
