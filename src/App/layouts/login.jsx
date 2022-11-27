import React, { useState } from 'react';

const Login = () => {
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
            <div className={formName(formType)}>
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>РЕГИСТРАЦИЯ</h1>
                        <input type="text" placeholder="имя" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="пароль" />
                        <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>ВХОД</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button>ВОЙТИ</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Вход</h1>
                            <p>Для тех, у кого есть аккаунт</p>
                            <button className="ghost" id="signIn" onClick={showSignInForm}>
                                Login
                            </button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Регистрация</h1>
                            <p>Если у вас еще нет аккаунта, то можете зарегистрироваться</p>
                            <button className="ghost" id="signUp" onClick={showSignUpForm}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
