import React from "react";

function Card({ img, rating, country, reviewCount, price }) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "ONLINE") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
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
