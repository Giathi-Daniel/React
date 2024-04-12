import React from "react";

function Card({ img, rating, country, reviewCount, price }) {
  return (
    <div className="card">
      <img src={`../images/${img}`} className="card--image" />
      <div className="card--stats">
        <img src="../images/star.png" className="card--star" />
        <span>{rating}</span>
        <span className="gray">{reviewCount} • </span>
        <span className="gray">{country}</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
