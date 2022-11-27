import React from 'react';
import Login from '../../../layouts/login';
import Footer from '../../common/footer';
import Header from '../../common/header';

const LoginPage = () => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <Login />
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
