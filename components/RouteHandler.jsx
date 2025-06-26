import { Route, Routes } from "react-router";
import Home from "./Home";
import Popular from "./Popular";
import Recent from "./Recent";
import Topics from "./Topics";
import ArticleExpanded from "./ArticleExpanded";
import TopicExpanded from "./TopicExpanded";

function SearchProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/article/:article_id" element={<ArticleExpanded />} />
      <Route path="/topic/:topic" element={<TopicExpanded />} />
    </Routes>
  );
}

export default SearchProvider;
