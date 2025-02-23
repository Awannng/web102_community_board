import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="Ice cream photo" />
        <h2>{props.name}</h2>
        <button>View</button>
      </div>
    </>
  );
};

export default Card;
