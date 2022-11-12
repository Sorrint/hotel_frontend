import React from 'react';
import SelectField from '../../../styles/selectField';
import Calendar from './calendar';
import CheckBoxField from './checkbox';
import Counter from './counter';
const BookingPanel = ({ onChange, data }) => {
    const roomTypes = [
        { value: 'all', label: 'Все' },
        { value: 'luxe', label: 'Люкс' },
        { value: 'comfort', label: 'Комфорт' },
        { value: 'econom', label: 'Эконом' }
    ];

    const { bookingRange, viewOnLake, numberOfPersons } = data;

    return (
        <>
            <div className="booking-panel">
                <div className="booking-panel__calendar">
                    <Calendar bookingRange={bookingRange} onChange={onChange} />
                </div>
                <Counter name="numberOfPersons" numberOfPersons={numberOfPersons} onChange={onChange} min={1} max={7} />
                <SelectField
                    name={'roomTypes'}
                    // value={'Выберите класс номера'}
                    options={roomTypes}
                    defaultOption={'Выберите класс номера'}
                    onChange={onChange}
                />
                <CheckBoxField name="viewOnLake" onChange={onChange} value={viewOnLake}>
                    Вид на озеро
                </CheckBoxField>
            </div>
        </>
    );
};

export default BookingPanel;
