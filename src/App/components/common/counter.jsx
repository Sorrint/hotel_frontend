import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
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

export default Counter;
