import React from "react";
import "../src/styles.css";
function Loader({ loading, children }) {
  if (loading) {
    return <div className="lds-dual-ring " />;
  } else {
    return children;
  }
}

export default Loader;
