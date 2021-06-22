import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.scss";

const Card = ({ id, title, address, type, price }) => {
  const priceStr = '£' + price.toString().slice(0, 3) + ',' + price.toString().slice(3);
  return (
    <Link to={`/details/${id}`} className="card">
      <img
        src={`https://via.placeholder.com/377x227/AEAEAE/FFFFFF?text=${id}`}
        alt="house"
      ></img>
      <div className={`card__tag ${type}`}>
        {type === "IndependentLiving"
          ? "Independent living"
          : type === "SupportAvailable"
          ? "Restaurant & Support available"
          : ""}
      </div>
      <div className="card__details">
        <h2 className="card__title">{title}</h2>
        <p className="card__address">{address}</p>
        <p className="card__price">New Properties for Sale from <span className="card__price-value">{priceStr}</span></p>
        <p className="card__extra">Shared Ownership Available</p>
      </div>
    </Link>
  );
};

export default Card;
