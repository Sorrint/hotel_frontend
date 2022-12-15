import React from 'react';
import { useSelector } from 'react-redux';
import { getBookingsList } from '../../../store/bookings';
import TableBody from '../../common/table/tableBody';
import TableHeader from '../../common/table/tableHeader';

const AllBookings = () => {
    const bookings = useSelector(getBookingsList());
    const columns = {
        bookingNumber: { name: 'Номер брони', path: 'bookingNumber' },
        client: { name: 'Клиент', path: 'user' },
        room: { name: 'Комната', path: 'choosenNumber' },
        openingDate: { name: 'Дата заезда', path: 'bookingNumber' },
        closedDate: { name: 'Дата отъезда', path: 'bookingNumber' },
        numberOfGuests: { name: 'Число гостей/ночей', path: 'numberOfPersons' },
        price: { name: 'Стоимость', path: 'price' }
    };
    return (
        <div className="admin-panel">
            <h1 className="admin-panel__title">Список бронирований</h1>
            {bookings && (
                <table className="bookings-table">
                    <TableHeader columns={columns} tableName="bookings-table" />
                    <TableBody columns={columns} tableName="bookings-table" data={bookings} />
                </table>
            )}
        </div>
    );
};

export default AllBookings;
