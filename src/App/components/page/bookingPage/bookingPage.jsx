import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getToday, getTomorrow } from '../../../utils/utils';
import BookingRoom from '../../common/booking/bookingRoom';
import BookingPanel from '../../common/bookingPanel';
import Header from '../../common/header/header';
import { useSelector } from 'react-redux';
import { getRoomTypes } from '../../../store/roomTypes';
import { getRooms } from '../../../store/rooms';
import { getIcons } from '../../../store/icons';
import { useForm } from 'react-hook-form';
import Modal from '../../common/modal/modal';
import { getCurrentUserData } from '../../../store/users';

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
    const rooms = useSelector(getRooms());
    const icons = useSelector(getIcons());
    const currentUser = useSelector(getCurrentUserData());
    const typesFromDB = useSelector(getRoomTypes());
    const roomTypes = [allTypes, ...typesFromDB];
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
    const onSubmit = (data) => {
        const createRequest = { ...transformData(data), user: currentUser._id };
        console.log(createRequest);
        // setActive(!active);
    };

    if (data && rooms) {
        const roomFilterByType = filterByType(rooms, data.roomTypes);
        const roomFilterByPersons = filterByPersons(roomFilterByType, data.numberOfPersons);
        return (
            <>
                <Header />
                <div className="wrapper">
                    <div className="content">
                        <form className="form-container__form " onSubmit={handleSubmit(onSubmit)}>
                            <BookingPanel
                                onChange={handleChange}
                                data={data}
                                roomTypes={roomTypes}
                                register={register}
                                control={control}
                                setValue={setValue}
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
                                            onChange={handleChange}
                                        />
                                    ))}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                {active && (
                    <Modal active={active} setActive={setActive}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita similique sequi et
                            accusantium placeat reprehenderit vero facere corporis ratione temporibus, voluptas sed odio
                            atque eaque doloribus pariatur impedit quisquam ducimus. Excepturi aspernatur dolore
                            deleniti, delectus, nesciunt in amet totam tempora possimus quia, velit explicabo cumque?
                            Voluptatibus vero modi repudiandae dicta aut minus, perspiciatis officia doloremque repellat
                            temporibus
                        </p>
                    </Modal>
                )}
            </>
        );
    }
};

BookingPage.propTypes = {
    rooms: PropTypes.array,
    icons: PropTypes.array
};
export default BookingPage;
