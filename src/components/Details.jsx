import React, { useEffect, useState } from 'react';

function Details({ info }) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (info) {
            setLoading(true);
            fetch(`/src/data/${info.id}.json`)
                .then(response => response.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });
        }
    }, [info]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return null;
    }

    return (
        <div className="user-details">
            <ul>
                <li><img src={data.avatar} alt="User Avatar" /></li>
                <li>{data.name}</li>
                <li>City: {data.details.city}</li>
                <li>Company: {data.details.company}</li>
                <li>Position: {data.details.position}</li>
            </ul>
        </div>
    );
}

export default Details;
