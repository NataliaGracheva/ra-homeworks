import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className="menu">
            <NavLink exact to="/" className="menu__item" activeClassName="menu__item-active">
                Гоночн​ое такси
            </NavLink>
            <NavLink to="/drift" className="menu__item" activeClassName="menu__item-active">
                Дрифт-такси
            </NavLink>
            <NavLink to="/timeattack" className="menu__item" activeClassName="menu__item-active">
                Гонка ​​​​​​Time Attack
            </NavLink>
            <NavLink to="/forza" className="menu__item" activeClassName="menu__item-active">
                Forza Karting Sochi
            </NavLink>
        </nav>

    );
}
