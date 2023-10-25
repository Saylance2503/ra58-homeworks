import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Menu() {
    const location = useLocation();

    return (
        <nav className="menu">
            <Link to="/" className={`menu__item ${location.pathname === '/' ? 'menu__item-active' : ''}`}>Главная</Link>
            <Link to="/drift" className={`menu__item ${location.pathname === '/drift' ? 'menu__item-active' : ''}`}>Дрифт-такси</Link>
            <Link to="/timeattack" className={`menu__item ${location.pathname === '/timeattack' ? 'menu__item-active' : ''}`}>Time Attack</Link>
            <Link to="/forza" className={`menu__item ${location.pathname === '/forza' ? 'menu__item-active' : ''}`}>Forza Karting</Link>
        </nav>
    );
}

export default Menu;
