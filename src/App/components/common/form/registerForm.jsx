import React from 'react';
const RegisterForm = () => {
    return (
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>ВХОД</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>ВОЙТИ</button>
            </form>
        </div>
    );
};

export default RegisterForm;
