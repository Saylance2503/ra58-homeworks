import React, { useEffect, useState } from 'react';

function List({ onUserClick }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/src/data/users.json')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);

    return (
        <div className="user-list">
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => onUserClick(user)} className="user-item">
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
