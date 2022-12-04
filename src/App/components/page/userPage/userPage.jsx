import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUserById } from '../../../store/users';
import Footer from '../../common/footer';
import HeaderTop from '../../common/header/headerTop';

const UserPage = () => {
    const { userId } = useParams();
    const currentUser = useSelector(getUserById(userId));
    console.log(currentUser);
    return (
        <>
            <HeaderTop />
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
            <Footer />
        </>
    );
};

export default UserPage;
