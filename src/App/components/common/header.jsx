import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import navBarLinks from '../../api/menuItems';
import { getIsLoggedIn } from '../../store/users';
import NavBar from '../ui/navBar';
import NavProfile from '../ui/navProfile';

const Header = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    return (
        <div className="header">
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
            <div className="header__navigation">
                <div className="header__logo"></div>
                <NavBar name="header" itemsList={[...navBarLinks]} />
            </div>
        </div>
    );
};

export default Header;
