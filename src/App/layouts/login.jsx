import React, { useState } from 'react';
import LoginForm from '../components/common/form/loginForm';
import RegisterForm from '../components/common/form/registerForm';

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
                <LoginForm />
                <RegisterForm />
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
