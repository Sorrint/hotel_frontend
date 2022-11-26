import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ numberOfPersons, onChange, name, min = 0, max }) => {
    const [value, setValue] = useState(1);
    useEffect(() => {
        setValue(numberOfPersons);
    }, [numberOfPersons]);

    const onDecrement = () => {
        if (value >= min + 1) {
            setValue((prevState) => prevState - 1);
            onChange({ name, value: value - 1 });
        }
    };

    const onIncrement = () => {
        if (value < max) {
            setValue((prevState) => +prevState + 1);
            onChange({ name, value: value + 1 });
        }
    };
    return (
        <div className="counter">
            <div className="counter__decrement" onClick={onDecrement}>
                -
            </div>
            <div className="counter__number">{value}</div>
            <div className="counter__increment" onClick={onIncrement}>
                +
            </div>
        </div>
    );
};

Counter.propTypes = {
    numberOfPersons: PropTypes.number,
    onChange: PropTypes.func,
    name: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number
};
export default Counter;
