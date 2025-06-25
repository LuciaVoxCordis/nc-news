import TopicCard from "./TopicCard";

function TopicList({ topics }) {
  return (
    <ul className="article-list">
      {topics.map((topic) => {
        return <TopicCard key={topic.slug} topic={topic} />;
      })}
    </ul>
  );
}

export default TopicList;
