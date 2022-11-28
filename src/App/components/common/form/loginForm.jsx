import React from 'react';
const LoginForm = () => {
    return (
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>РЕГИСТРАЦИЯ</h1>
                <input type="text" placeholder="имя" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="пароль" />
                <button>ЗАРЕГИСТРИРОВАТЬСЯ</button>
            </form>
        </div>
    );
};

export default LoginForm;
