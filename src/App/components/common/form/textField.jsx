import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextField = ({ label, type, name, error, placeholder, register, formName, autoComplete }) => {
    const [showPassword, setShowPassword] = useState(false);
    const getInputClasses = () => {
        return 'input-container__input' + (error ? ' is-invalid' : '');
    };

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="input-container">
            <label className="input-container__label" htmlFor={name}>
                {label}
            </label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? 'text' : type}
                    id={name + ' ' + formName}
                    name={name}
                    className={getInputClasses()}
                    placeholder={placeholder}
                    {...register}
                    autoComplete={autoComplete}
                />

                {type === 'password' && (
                    <button className="input-container__password-button" type="button" onClick={toggleShowPassword}>
                        <i className={'bi bi-eye' + (showPassword ? '-slash' : '')}></i>
                    </button>
                )}
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default TextField;

TextField.defaultProps = {
    type: 'text'
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.object,
    formName: PropTypes.string,
    autoComplete: PropTypes.string
};
