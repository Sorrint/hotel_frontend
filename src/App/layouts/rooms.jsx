import React from 'react';
import { useParams } from 'react-router-dom';

import RoomPage from '../components/page/roomPage/roomPage';
import BookingPage from '../components/page/bookingPage/bookingPage';
import RoomsListPage from '../components/page/roomsListPage/roomsListPage';
import AppLoader from '../components/ui/hoc/appLoader';

const Rooms = () => {
    const { booking, roomId } = useParams();

    return (
        <>
            <AppLoader>
                {/* <div className="wrapper"> */}
                {booking ? roomId ? <RoomPage id={roomId} /> : <BookingPage /> : <RoomsListPage />}
                {/* </div> */}
            </AppLoader>
        </>
    );
};

export default Rooms;
