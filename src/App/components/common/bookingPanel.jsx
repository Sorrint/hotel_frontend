import React from 'react';
import PropTypes from 'prop-types';
import CheckBoxField from './form/checkbox';
import SelectField from './form/selectField';
import Calendar from './form/calendar';
import Counter from './form/counter';

const BookingPanel = ({ onChange, data, roomTypes, control, onSubmit }) => {
    const { bookingRange, viewOnLake, numberOfPersons } = data;

    return (
        <form className="form-container__form " onSubmit={onSubmit}>
            <div className="booking-panel">
                <div className="booking-panel__calendar">
                    <Calendar bookingRange={bookingRange} onChange={onChange} control={control} />
                </div>
                <Counter name="numberOfPersons" value={numberOfPersons} onChange={onChange} min={1} max={6} />
                <SelectField
                    name={'roomTypes'}
                    options={roomTypes}
                    defaultOption={'Выберите класс номера'}
                    onChange={onChange}
                />
                <CheckBoxField name="viewOnLake" onChange={onChange} value={viewOnLake}>
                    Вид на озеро
                </CheckBoxField>
            </div>
        </form>
    );
};

BookingPanel.propTypes = {
    onChange: PropTypes.func,
    data: PropTypes.object,
    roomTypes: PropTypes.array,
    setCountDays: PropTypes.func,
    control: PropTypes.object,
    onSubmit: PropTypes.func
};
export default BookingPanel;
