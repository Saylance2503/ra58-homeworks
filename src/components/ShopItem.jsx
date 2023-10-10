import React from 'react';

const ShopItem = ({ name, price, color, img }) => {
  return (
    <div className="shop-item">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{color}</p>
        <div className="shop-item-price">${price}</div>
        <button className="shop-item-priceBtn">ADD TO CARD</button>
    </div>
  );
};

export default ShopItem;
