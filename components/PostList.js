import React from "react";
import PostListItem from "./PostListItem";
import "../src/styles.css";
export default function PostList({ data }) {
  if (data.length === 0) {
    return <h2>No results for your query.</h2>;
  }
  return (
    <div className="posts">
      {data.map(el => {
        return <PostListItem id={el.id} title={el.title} body={el.body} />;
      })}
    </div>
  );
}
