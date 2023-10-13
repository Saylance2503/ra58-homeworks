import React from 'react';

function New(props) {
    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">Новое!</span>
            {props.children}
        </div>
    );
}

export default New;
