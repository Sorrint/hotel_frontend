import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingRoom from '../../common/booking/bookingRoom';
import BookingPanel from '../../common/bookingPanel';
import Header from '../../common/header';

const getToday = () => {
    let date = new Date();
    let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return today;
};
const getTomorrow = () => {
    let today = new Date();
    let tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return tomorrow;
};
const initialData = {
    bookingRange: [getToday(), getTomorrow()],
    viewOnLake: false,
    numberOfPersons: 2,
    roomTypes: 'all'
};

const BookingPage = ({ rooms, icons }) => {
    const [data, setData] = useState();
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    useEffect(() => {
        setData(initialData);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (data)
        return (
            <>
                <Header />
                <div className="wrapper">
                    <div className="content">
                        <BookingPanel onChange={handleChange} data={data} />
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
