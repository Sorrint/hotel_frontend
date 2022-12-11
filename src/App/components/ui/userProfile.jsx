import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCurrentUserId, getUserById } from '../../store/users';

const UserProfile = () => {
    const userId = useSelector(getCurrentUserId());
    const currentUser = useSelector(getUserById(userId));

    return (
        <div className="content user-content">
            <div className="user__card">
                <div className="user__info">
                    <div className="user__avatar">
                        <img src={currentUser.avatar} alt="Аватарка" />
                    </div>
                    <div className="user__username">Имя пользователя: {currentUser.username}</div>
                    <div className="user__email">email: {currentUser.email}</div>
                    <div className="user__sex">Пол: {currentUser.sex === 'male' ? 'мужской' : 'женский'}</div>
                </div>
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    userId: PropTypes.string
};
export default UserProfile;
