import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomPage from '../components/page/roomPage/roomPage';
import RoomsList from '../components/ui/roomsList';
import roomsService from '../services/rooms.service';

import BookingPage from '../components/page/bookingPage/bookingPage';
import iconsService from '../services/icons.service';

const Rooms = () => {
    const [rooms, setRooms] = useState();
    const [roomsTypes, setRoomsTypes] = useState();
    const [icons, setIcons] = useState();

    async function getData(service) {
        try {
            const content = await service.fetchAll();
            return content;
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData(roomsService).then((data) => {
            const types = new Set([]);
            data.map((item) => {
                types.add(item.type);
            });
            setRoomsTypes([...types]);
            setRooms(data);
        });
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
