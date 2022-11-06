import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menuItemsService from '../../services/menuItem.service';

const Header = () => {
    const [menuItems, setMenuItems] = useState();
    useEffect(() => {
        menuItemsService.fetchAll().then((data) => {
            setMenuItems(data);
        });
    }, []);
    return (
        <div className="header">
            <div className="header__top-bar">
                <div className="header__content">
                    <div className="header__contacts">
                        <div className="header__phone">8 800 700 000</div>
                        <div className="header__mail">mail@hotel.ru</div>
                    </div>
                    <div className="header__media"></div>
                    <Link to="/login/signIn">
                        <button className="header__login">ВОЙТИ/ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    </Link>
                </div>
            </div>
            <div className="header__navigation">
                <div className="header__logo"></div>
                <div className="header__links">
                    {menuItems &&
                        menuItems.map((item) => (
                            <Link to={item.path} className="header__link" key={item._id}>
                                {item.text.toUpperCase()}
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
