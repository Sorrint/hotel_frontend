import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentUserData } from '../../store/users';

const NavProfile = () => {
    const currentUser = useSelector(getCurrentUserData());
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };
    if (!currentUser) return 'Loading...';
    return (
        <div className="dropdown">
            <div className="dropdown__profile" onClick={toggleMenu}>
                <div className="dropdown__name">{currentUser.username}</div>
                <img src={currentUser.avatar} className="dropdown__avatar" alt="" height="40" />
            </div>
            <div className={'dropdown__menu' + (isOpen ? '_show' : '')}>
                <div className="dropdown__item">
                    <Link to={`/`}>Profile</Link>
                </div>
                <div className="dropdown__item">
                    <Link to="/logout">Log out</Link>
                </div>
            </div>
        </div>
    );
};

export default NavProfile;
