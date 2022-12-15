import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getToday, getTomorrow } from '../../../utils/utils';
import BookingPanel from '../../common/bookingPanel';
import Header from '../../common/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomTypes } from '../../../store/roomTypes';
import { getRooms } from '../../../store/rooms';
import { useForm } from 'react-hook-form';
import { getCurrentUserData } from '../../../store/users';
import { createBooking } from '../../../store/bookings';
import BookingCards from '../../ui/booking/bookingCards';
import OverlayingPopup from '../../common/portal/overlayingPopup';
import ConfirmBookingDialog from '../../ui/booking/confirmBooking';

const initialData = {
    bookingRange: [getToday(), getTomorrow()],
    viewOnLake: false,
    numberOfPersons: 2,
    roomTypes: 'all',
    countDays: 1
};
const allTypes = {
    label: 'Все',
    name: 'Все',
    value: 'all'
};

const transformData = (data) => {
    const { bookingRange, numberOfPersons, countDays, choosenNumber, price } = data;
    const newData = {
        bookingRange,
        numberOfPersons,
        countDays,
        choosenNumber,
        price
    };
    return newData;
};

const BookingPage = () => {
    const dispatch = useDispatch();
    const rooms = useSelector(getRooms());
    const currentUser = useSelector(getCurrentUserData());
    const typesFromDB = useSelector(getRoomTypes());
    const roomTypes = typesFromDB ? [allTypes, ...typesFromDB] : [allTypes];
    const [data, setData] = useState();
    const [active, setActive] = useState(false);
    const { register, handleSubmit, setValue, control, getValues } = useForm({
        mode: 'onChange',
        defaultValues: {
            ...initialData
        }
    });

    useEffect(() => {
        setData(getValues());
    }, []);

    const handleChange = (target) => {
        setValue(target.name, target.value);
        setData(getValues());
    };

    const getTypeName = (id) => {
        const type = roomTypes.find((type) => type._id === id);
        return type ? type.value : null;
    };

    const filterByType = (rooms, roomType) => {
        return roomType === 'all' ? rooms : rooms.filter((room) => getTypeName(room.type) === roomType);
    };
    const filterByPersons = (rooms, persons) => {
        return rooms.filter((room) => room.maxNumberOfPersons >= persons);
    };
    const showPopup = () => {
        setActive((prevState) => !prevState);
    };
    const onSubmit = () => {
        const createdRequest = { ...transformData(data), user: currentUser._id };
        dispatch(createBooking(createdRequest));
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
                            register={register}
                            control={control}
                            setValue={setValue}
                            onSubmit={handleSubmit(onSubmit)}
                        />
                        <BookingCards
                            rooms={roomFilterByPersons}
                            data={data}
                            onClick={showPopup}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <OverlayingPopup isOpened={active} onClose={showPopup}>
                    <ConfirmBookingDialog data={data} onCancel={showPopup} onConfirm={handleSubmit(onSubmit)} />
                </OverlayingPopup>
            </>
        );
    }
};

BookingPage.propTypes = {
    rooms: PropTypes.array,
    icons: PropTypes.array
};
export default BookingPage;
