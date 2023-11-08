import React from 'react';

const CardLink = ({ href, children }) => {
    return (
        <a href={href} className="card-link">
            {children}
        </a>
    );
};

export default CardLink;