import React from "react";

export default function PostListItem(props) {
  return (
    <div key={props.id} className="items">
      <span>{props.title}</span>
      <p>{props.body}</p>
    </div>
  );
}
