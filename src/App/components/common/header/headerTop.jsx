import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsLoggedIn } from '../../../store/users';
import NavProfile from '../../ui/navProfile';

const HeaderTop = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());

    return (
        <div className="header__top-bar">
            <div className="header__content">
                <div className="header__contacts">
                    <div className="header__phone">8 800 700 000</div>
                    <div className="header__mail">mail@hotel.ru</div>
                </div>
                <div className="header__media"></div>
                {isLoggedIn ? (
                    <NavProfile />
                ) : (
                    <Link to="/login">
                        <button className="header__login">ВОЙТИ/ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HeaderTop;
