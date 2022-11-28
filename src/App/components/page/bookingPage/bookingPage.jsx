import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getToday, getTomorrow } from '../../../utils/utils';
import BookingRoom from '../../common/booking/bookingRoom';
import BookingPanel from '../../common/bookingPanel';
import Header from '../../common/header';
import { useSelector } from 'react-redux';
import { getRoomTypes } from '../../../store/roomTypes';
import { getRooms } from '../../../store/rooms';
import { getIcons } from '../../../store/icons';

const initialData = {
    bookingRange: [getToday(), getTomorrow()],
    viewOnLake: false,
    numberOfPersons: 2,
    roomTypes: 'all',
    countDays: 1
};
// const allTypes = {
//     label: 'Все',
//     name: 'Все',
//     value: 'all'
// };

const BookingPage = () => {
    const rooms = useSelector(getRooms());
    const icons = useSelector(getIcons());
    const roomTypes = useSelector(getRoomTypes());
    const [data, setData] = useState();
    // const [roomTypes, setRoomTypes] = useState([allTypes]);
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const getTypeName = (id) => {
        const type = roomTypes.find((type) => type._id === id);
        return type ? type.value : null;
    };

    const setCountDays = (startDate, endDate) => {
        setData((prevState) => ({ ...prevState, countDays: (endDate - startDate) / (1000 * 60 * 60 * 24) }));
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        setData(initialData);
        // getData(roomTypesService).then((data) => {
        //     const types = data.map((item) => {
        //         return { ...item, label: item.name };
        //     });

        // setRoomTypes((prevState) => [...prevState, ...types]);
    }, []);

    const filterByType = (rooms, roomType) => {
        return roomType === 'all' ? rooms : rooms.filter((room) => getTypeName(room.type) === roomType);
    };
    const filterByPersons = (rooms, persons) => {
        return rooms.filter((room) => room.maxNumberOfPersons >= persons);
    };

    if (data && rooms) {
        const roomFilterByType = filterByType(rooms, data.roomTypes);
        const roomFilterByPersons = filterByPersons(roomFilterByType, data.numberOfPersons);
        return (
            <>
                <Header />
                <div className="wrapper">
                    <div className="content">
                        <BookingPanel
                            onChange={handleChange}
                            data={data}
                            roomTypes={roomTypes}
                            setCountDays={setCountDays}
                        />
                        {roomFilterByPersons.length === 0 ? (
                            'Нет подходящих номеров'
                        ) : (
                            <div className="booking-cards">
                                {roomFilterByPersons.map((room) => (
                                    <BookingRoom
                                        {...room}
                                        key={room._id}
                                        icons={icons}
                                        numberOfPersons={data.numberOfPersons}
                                        dateRange={data.countDays}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </>
        );
    }
};

BookingPage.propTypes = {
    rooms: PropTypes.array,
    icons: PropTypes.array
};
export default BookingPage;
