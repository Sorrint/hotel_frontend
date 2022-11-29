import React, { useState } from 'react';
import Footer from '../../common/footer';
import LoginForm from '../../common/form/loginForm';
import RegisterForm from '../../common/form/registerForm';
import Header from '../../common/header';

const LoginPage = () => {
    const [formType, setFormType] = useState('login-form');
    const formName = (formType) => {
        return formType;
    };
    const showSignInForm = () => {
        setFormType('login-form');
    };
    const showSignUpForm = () => {
        setFormType('signup-form');
    };
    return (
        <>
            <Header />
            <div className="wrapper">
                <div className={formName(formType)}>
                    <LoginForm />
                    <RegisterForm />
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Вход</h1>
                                <p>Для тех, у кого есть аккаунт</p>
                                <button className="overlay__button" id="signIn" onClick={showSignInForm}>
                                    Login
                                </button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Регистрация</h1>
                                <p>Если у вас еще нет аккаунта, то можете зарегистрироваться</p>
                                <button className="overlay__button" id="signUp" onClick={showSignUpForm}>
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default LoginPage;
