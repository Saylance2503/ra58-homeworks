import React from 'react';

const ShopCard = ({ name, price, color, img }) => {
  return (
    <div className="shop-card">
      <div className="shop-card-details">
        <h3>{name}</h3>
        <p>{color}</p>
      </div>
      <div className="shop-card-image">
        <img src={img} alt={name} />
      </div>
      <div className="shop-card-price">
        <div>${price}</div>
        <button>ADD TO CARD</button>
      </div>
    </div>
  );
};

export default ShopCard;
