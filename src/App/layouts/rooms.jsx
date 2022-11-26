import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomPage from '../components/page/roomPage/roomPage';
import RoomsList from '../components/ui/roomsList';
import roomsService from '../services/rooms.service';

import BookingPage from '../components/page/bookingPage/bookingPage';
import iconsService from '../services/icons.service';
import roomTypesService from '../services/roomTypes.service';
import { getData } from '../utils/utils';

const Rooms = () => {
    const [rooms, setRooms] = useState();
    const [roomsTypes, setRoomsTypes] = useState();
    const [icons, setIcons] = useState();

    useEffect(() => {
        getData(roomsService).then((data) => setRooms(data));
        getData(roomTypesService).then((data) => setRoomsTypes(data));
        getData(iconsService).then((data) => setIcons(data));
    }, []);
    const { booking, roomId } = useParams();
    if (roomsTypes) {
        return (
            <>
                <div className="wrapper">
                    {booking ? (
                        roomId ? (
                            <RoomPage id={roomId} list={rooms} icons={icons} />
                        ) : (
                            <BookingPage icons={icons} rooms={rooms} />
                        )
                    ) : (
                        <RoomsList rooms={rooms} types={roomsTypes} />
                    )}
                </div>
            </>
        );
    }
};

export default Rooms;
