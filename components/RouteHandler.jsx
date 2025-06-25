import { Route, Routes } from "react-router";
import Home from "./Home";
import Popular from "./Popular";
import Recent from "./Recent";
import Topics from "./Topics";
import ExpandedArticle from "./ExpandedArticle";
import ExpandedTopic from "./ExpandedTopic";

function SearchProvider() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/article/:article_id" element={<ExpandedArticle />} />
      <Route path="/topic/:topic" element={<ExpandedTopic />} />
    </Routes>
  );
}

export default SearchProvider;
