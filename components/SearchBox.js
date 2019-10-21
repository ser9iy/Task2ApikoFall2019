import React from "react";

export default function SearchBox({ onchange }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Type to search... "
        onChange={e => {
          onchange(e);
        }}
      />
    </div>
  );
}
