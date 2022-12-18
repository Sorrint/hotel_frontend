import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getBookingsList } from '../../../store/bookings';
import { getRooms } from '../../../store/rooms';
import { getUsersList } from '../../../store/users';
import BookingsTable from '../../ui/booking/bookingsTable';
import BookingsTableSettings from '../../ui/bookingsTableSettings';
import qs from 'query-string';

const BookingsList = () => {
    const bookings = useSelector(getBookingsList());
    const users = useSelector(getUsersList());
    const rooms = useSelector(getRooms());
    const { roomId } = qs.parse(location.search);

    const defaultValue = { name: ' Все', value: '' };
    const usersList = [
        defaultValue,
        ...users.map((u) => {
            return { name: u.username, value: u._id };
        })
    ];
    const roomsList = [
        defaultValue,
        ...rooms.map((r) => {
            return { name: r.name, value: r._id };
        })
    ];

    const [selectedRoom, setSelectedRoom] = useState();
    const [selectedUser, setSelectedUser] = useState();

    useEffect(() => {
        if (roomId) setSelectedRoom(roomId);
    }, []);

    function filterBookings(data) {
        const filterByDate = data.filter((booking) => new Date(booking.bookingRange[1]) > Date.now());
        const filterByRoom = selectedRoom
            ? filterByDate.filter((booking) => booking.choosenNumber === selectedRoom)
            : filterByDate;
        const filterByUser = selectedUser
            ? filterByRoom.filter((booking) => booking.user === selectedUser)
            : filterByRoom;
        return filterByUser;
    }

    if (bookings && users) {
        const filteredBookings = filterBookings(bookings);

        return (
            <div className="admin-panel">
                <h1 className="admin-panel__title">Список бронирований</h1>
                <BookingsTableSettings
                    usersList={usersList}
                    setUser={(target) => setSelectedUser(target.value)}
                    roomsList={roomsList}
                    setRoom={(target) => setSelectedRoom(target.value)}
                    selectedRoom={selectedRoom}
                />
                <BookingsTable bookings={filteredBookings} />
            </div>
        );
    }

    return 'Loading...';
};

export default BookingsList;
