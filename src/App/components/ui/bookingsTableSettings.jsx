import React from 'react';
import PropTypes from 'prop-types';
import SelectField from '../common/form/selectField';
const BookingsTableSettings = ({ usersList, setUser, roomsList, setRoom, selectedRoom }) => {
    return (
        <div className="bookings-settings">
            <SelectField
                label="Клиент"
                options={usersList}
                name="users"
                defaultOption={'Выберите пользователя'}
                onChange={setUser}
            />
            <SelectField
                label="Номер"
                options={roomsList}
                name="rooms"
                defaultOption={'Выберите номер'}
                onChange={setRoom}
                value={selectedRoom}
            />
        </div>
    );
};

BookingsTableSettings.propTypes = {
    usersList: PropTypes.array,
    setUser: PropTypes.func,
    setRoom: PropTypes.func,
    roomsList: PropTypes.array,
    selectedRoom: PropTypes.string
};
export default BookingsTableSettings;
