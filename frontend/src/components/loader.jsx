import React from "react";
import "../Loader.css";

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="hourglass"></div>
      </div>
    </div>
  );
};

export default Loader;
