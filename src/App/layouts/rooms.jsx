import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import RoomPage from '../components/page/roomPage/roomPage';
import RoomsListPage from '../components/page/roomsListPage/roomsListPage';
import AppLoader from '../components/ui/hoc/appLoader';
import BookingPage from '../components/page/bookingPage/bookingPage';

const Rooms = () => {
    const { roomId } = useParams();
    const { pathname } = useLocation();

    return (
        <>
            <AppLoader>
                {pathname === '/booking' ? <BookingPage /> : roomId ? <RoomPage id={roomId} /> : <RoomsListPage />}
            </AppLoader>
        </>
    );
};

export default Rooms;
