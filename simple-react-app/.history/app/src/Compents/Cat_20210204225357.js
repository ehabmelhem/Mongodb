import React from "react";

function Cat({ name, age, url }) {
  return (
    <div>
      <h5>{name}</h5>
      <h5>{age}</h5>
    </div>
  );
}

export default Cat;
