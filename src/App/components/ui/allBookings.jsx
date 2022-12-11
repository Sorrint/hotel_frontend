import React from 'react';
import { useSelector } from 'react-redux';
import { getUserBookings } from '../../store/bookings';
import BookingInfo from './bookingInfo';
const AllBookings = () => {
    const userBookings = useSelector(getUserBookings());
    return (
        <div className="userBookings">
            <h1 className="userpage-title">Мои бронирования</h1>
            {userBookings && userBookings.map((record) => <BookingInfo record={record} key={record._id} />)}
        </div>
    );
};

export default AllBookings;
