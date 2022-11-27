import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import RoomPage from '../components/page/roomPage/roomPage';
import BookingPage from '../components/page/bookingPage/bookingPage';
// import iconsService from '../services/icons.service';
// import { getData } from '../utils/utils';
import RoomsListPage from '../components/page/roomsListPage/roomsListPage';
import { useSelector } from 'react-redux';
import { getRooms } from '../store/rooms';
import { getRoomTypes } from '../store/roomTypes';
import { getIcons } from '../store/icons';

const Rooms = () => {
    const rooms = useSelector(getRooms());
    const roomsTypes = useSelector(getRoomTypes());
    const icons = useSelector(getIcons());

    // const [icons, setIcons] = useState();

    useEffect(() => {
        // getData(iconsService).then((data) => setIcons(data));
    }, []);
    const { booking, roomId } = useParams();

    if (rooms && roomsTypes) {
        return (
            <>
                <div className="wrapper">
                    {booking ? (
                        roomId ? (
                            <RoomPage id={roomId} icons={icons} />
                        ) : (
                            <BookingPage icons={icons} rooms={rooms} />
                        )
                    ) : (
                        <RoomsListPage rooms={rooms} types={roomsTypes} />
                    )}
                </div>
            </>
        );
    }
};

export default Rooms;
