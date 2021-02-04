import React from "react";

function Cat({ name, age, url }) {
  return (
    <div>
        <div className="di">
            
        </div>
      <h5>{name}</h5>
      <h5>{age}</h5>
      <img src={url} alt="" />
    </div>
  );
}

export default Cat;
