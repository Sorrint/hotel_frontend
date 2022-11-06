import React from 'react';
import BookingRoom from '../../common/booking/bookingRoom';
import Header from '../../common/header';

const BookingPage = ({ rooms, icons }) => {
    return (
        <>
            <Header />
            <div className="wrapper">
                <div className="content">
                    <div className="booking-cards">
                        {rooms.map((room) => (
                            <BookingRoom {...room} key={room._id} icons={icons} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingPage;
