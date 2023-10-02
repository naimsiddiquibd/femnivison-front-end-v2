import React from "react";

const Card = ({title, description}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-left">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
