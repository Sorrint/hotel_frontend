import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import RenderPrice from '../../common/booking/bookingFields/price';
import Table from '../../common/table/table';
import { getRooms } from '../../../store/rooms';
import { getUsersList } from '../../../store/users';
import BookingDate from './bookingDate';
import RenderGuests from '../../common/booking/bookingFields/guests';
import RenderNights from '../../common/booking/bookingFields/nights';
import _ from 'lodash';

const BookingsTable = ({ bookings }) => {
    const users = useSelector(getUsersList());
    const rooms = useSelector(getRooms());

    const [sortBy, setSortBy] = useState({ path: 'bookingNumber', order: 'asc' });

    const handleSort = (item) => {
        setSortBy(item);
    };

    const getUserName = (userId) => {
        const currentUser = users.find((user) => (user._id === userId ? user : null));
        if (currentUser) {
            return currentUser.username;
        }
        return null;
    };
    const getRoomName = (roomId) => {
        const currentRoom = rooms.find((room) => (room._id === roomId ? room : null));
        if (currentRoom) {
            return currentRoom.name;
        }
        return null;
    };

    const transformData = (data) =>
        data.map((booking) => {
            const user = getUserName(booking.user);
            const choosenNumber = getRoomName(booking.choosenNumber);
            const arrivalDate = booking.bookingRange[0];
            const departureDate = booking.bookingRange[1];
            return { ...booking, user, choosenNumber, arrivalDate, departureDate };
        });

    const bookingData = transformData(bookings);
    const sortedBookings = _.orderBy(bookingData, [sortBy.path], [sortBy.order]);

    const columns = {
        bookingNumber: { name: 'Номер брони', path: 'bookingNumber' },
        client: { name: 'Клиент', path: 'user' },
        room: { name: 'Комната', path: 'choosenNumber' },

        arrivalDate: {
            name: 'Дата заезда',
            component: ({ bookingRange }) => <BookingDate date={bookingRange[0]} />,
            path: 'arrivalDate'
        },
        departureDate: {
            name: 'Дата отъезда',
            component: ({ bookingRange }) => <BookingDate date={bookingRange[1]} />,
            path: 'departureDate'
        },
        numberOfGuests: {
            name: 'Число гостей/ночей',
            component: ({ numberOfPersons, countDays }) => (
                <>
                    <RenderGuests numberOfGuests={numberOfPersons} /> / <RenderNights {...{ countDays }} />
                </>
            )
        },
        price: { name: 'Стоимость', component: ({ price }) => <RenderPrice cost={price} /> }
    };
    return (
        bookings && (
            <Table
                data={sortedBookings}
                columns={columns}
                onSort={handleSort}
                tableName="bookings-table"
                selectedSort={sortBy}
            />
        )
    );
};

BookingsTable.propTypes = {
    bookings: PropTypes.array,
    onSort: PropTypes.func,
    selectedSort: PropTypes.object
};

export default BookingsTable;
