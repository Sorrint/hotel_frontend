import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxField from './form/checkbox';
import SelectField from './form/selectField';
import Calendar from './form/calendar';
import Counter from './form/counter';

const BookingPanel = ({ onChange, data, roomTypes, setCountDays }) => {
    const { bookingRange, viewOnLake, numberOfPersons } = data;

    return (
        <>
            <div className="booking-panel">
                <div className="booking-panel__calendar">
                    <Calendar bookingRange={bookingRange} onChange={onChange} setCountDays={setCountDays} />
                </div>
                <Counter name="numberOfPersons" numberOfPersons={numberOfPersons} onChange={onChange} min={1} max={6} />
                <SelectField
                    name={'roomTypes'}
                    // value={'all'}
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

BookingPanel.propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.object,
    roomTypes: PropTypes.array,
    setCountDays: PropTypes.func
};
export default BookingPanel;
