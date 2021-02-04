import React from "react";

function Cat({ name, age, url }) {
  return (
    <div>
      <div className="di">
        <h5>{name}</h5>
        <h5>{age}</h5>
      </div>

      <img src={url} alt="" />
    </div>
  );
}

export default Cat;
