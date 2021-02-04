import React from "react";
import "./Cat.css";
function Cat({ name, age, url }) {
  return (
    <div className="cat">
      <div className="di">
        <h5>{name}</h5>
        <h5>{age}</h5>
      </div>

      <img src={url} alt="" />
    </div>
  );
}

export default Cat;
