import React from 'react';
import ShopCard from './ShopCard';
import '../CardsView.css';

const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CardsView;
