import React from 'react';
import ShopItem from './ShopItem';
import '../ListView.css';

const ListView = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((item, index) => (
        <ShopItem key={index} {...item} />
      ))}
    </div>
  );
};

export default ListView;
