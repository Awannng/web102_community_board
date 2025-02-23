import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="Ice cream photo" />
        <h2>{props.name}</h2>
        <button><a href={props.url} target="_blank">View</a></button>
      </div>
    </>
  );
};

export default Card;
