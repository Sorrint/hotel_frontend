import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ name, value, onChange, min = 0, max, step = 1 }) => {
    const onDecrement = () => {
        if (value >= min + 1) {
            onChange({ name, value: value - step });
        }
    };

    const onIncrement = () => {
        if (value < max) {
            onChange({ name, value: value + step });
        }
    };
    return (
        <div className="counter">
            <div className="counter__decrement" onClick={onDecrement}>
                -
            </div>
            <input type="text" className="counter__number" value={value} readOnly />
            <div className="counter__increment" onClick={onIncrement}>
                +
            </div>
        </div>
    );
};

Counter.propTypes = {
    name: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    register: PropTypes.object
};
export default Counter;
