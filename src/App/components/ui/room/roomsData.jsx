import React from 'react';
import { useSelector } from 'react-redux';
import { getRooms } from '../../../store/rooms';
import RoomDataTable from './roomDataTable';

const RoomsData = () => {
    const rooms = useSelector(getRooms());
    return (
        <div className="admin-panel">
            <h1 className="admin-panel__title">Статус номеров</h1>
            <table className="roomData-table">
                <thead className="roomData-table__header">
                    <tr>
                        <th className="roomData-table__title">Номер</th>
                        <th className="roomData-table__title">Категория</th>
                        <th className="roomData-table__title">Число гостей</th>
                        <th className="roomData-table__title">Стоимость</th>
                        <th className="roomData-table__title">Статус</th>
                    </tr>
                </thead>
                {rooms && rooms.map((room) => <RoomDataTable key={room._id} {...room} />)}
            </table>
        </div>
    );
};

export default RoomsData;
