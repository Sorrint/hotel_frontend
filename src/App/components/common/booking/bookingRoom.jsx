import React from 'react';
import RoomProperties from '../room/roomProperties';
const BookingRoom = ({ name, image, title, icons, properties }) => {
    console.log(icons);
    return (
        <div className="booking-card">
            <img className="booking-card__image" src={image} alt="" />
            <div className="booking-card__title">{title}</div>
            {properties && <RoomProperties icons={icons} properties={properties} />}
        </div>
    );
};

export default BookingRoom;
