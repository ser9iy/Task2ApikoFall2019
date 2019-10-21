import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import PostList from "../components/PostList";
//import postListItem from "../components/PostListItem";
import MoreButton from "../components/MoreButton";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";

function App() {
  const [data, fetchData] = useState([]);
  const [count, setCount] = useState(10);
  const [isLoading, setLoading] = useState(false);
  const [searchValue, setSearch] = useState("");
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(res => {
        fetchData(res);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  }, []);
  function more() {
    if (data.lenght - count < 10) {
      setCount(count + (data.lenght - count));
    } else {
      setCount(count + 10);
    }
  }

  function search(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <h2>Posts Room</h2>
      <h3>
        Items to see: {count} of {data.length}
      </h3>
      <SearchBox onchange={search} />
      <Loader loading={isLoading}>
        {searchValue === "" ? (
          <PostList data={data.slice(0, count)} />
        ) : (
          <PostList
            data={data.filter(
              el =>
                el.title.includes(searchValue) || el.body.includes(searchValue)
            )}
          />
        )}
      </Loader>
      <MoreButton click={more} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
