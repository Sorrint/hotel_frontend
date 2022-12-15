import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserBookings, removeBooking } from '../../../store/bookings';
import { updateRoomInfo } from '../../../store/rooms';
import BookingRecord from './bookingRecord/record';

const UserBookings = () => {
    const dispatch = useDispatch();
    const userBookings = useSelector(getUserBookings());
    const handleBookingRemove = (room, record) => {
        const updatedBookings = room.booking.filter((b) => b._id !== record._id);
        const updatedRoom = { ...room, booking: updatedBookings };
        dispatch(removeBooking(record._id));
        dispatch(updateRoomInfo(updatedRoom));
    };
    return (
        <div className="userBookings">
            <h1 className="userpage-title">Мои бронирования</h1>
            {userBookings &&
                userBookings.map((record) => (
                    <BookingRecord record={record} onRemove={handleBookingRemove} key={record._id} />
                ))}
        </div>
    );
};

export default UserBookings;
