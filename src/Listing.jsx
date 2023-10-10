import React from 'react';

import etsyData from './etsy.json';

function Listing() {
    return (
        <div className="item-list">
            {etsyData.map((item) => (
                <div className="item" key={item.listing_id}>
                    <div className="item-image">
                        {item.MainImage && item.MainImage.url_570xN && (
                            <a href={item.url}>
                                <img src={item.MainImage.url_570xN} alt={item.title} />
                            </a>
                        )}
                    </div>
                    <div className="item-details">
                        <p className="item-title">
                            {item.title && item.title.length > 50
                                ? `${item.title.substring(0, 50)}...`
                                : item.title}
                        </p>
                        <p className="item-price">
                            {item.currency_code && item.price
                                ? formatPrice(item.currency_code, item.price)
                                : 'Price not available'}
                        </p>
                        <p className={`item-quantity ${getQuantityLevel(item.quantity)}`}>
                            {item.quantity ? `${item.quantity} left` : 'Quantity not available'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

function formatPrice(currencyCode, price) {
    if (!currencyCode || !price) {
        return 'Price not available';
    }

    switch (currencyCode) {
        case 'USD':
            return `$${parseFloat(price).toFixed(2)}`;
        case 'EUR':
            return `€${parseFloat(price).toFixed(2)}`;
        default:
            return `${parseFloat(price).toFixed(2)} ${currencyCode}`;
    }
}

function getQuantityLevel(quantity) {
    if (quantity === undefined) {
        return 'Quantity not available';
    }

    if (quantity <= 10) {
        return 'level-low';
    } else if (quantity <= 20) {
        return 'level-medium';
    } else {
        return 'level-high';
    }
}

export default Listing;
