import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getRoomById } from '../../../store/rooms';
import { Link } from 'react-router-dom';
import RecordRow from './bookingRecord/recordRow';
import BookingDate from './bookingDate';
import RenderGuests from '../../common/bookingFields/guests';
import RenderNights from '../../common/bookingFields/nights';
import RenderPrice from '../../common/bookingFields/price';

const BookingInfo = ({ record, onRemove }) => {
    const { choosenNumber } = record;
    const room = useSelector(getRoomById(choosenNumber));
    const handleDelete = async () => {
        onRemove(room, record);
    };
    const recordFields = {
        bookingNumber: { name: 'Номер брони', path: 'bookingNumber' },
        arrivalDate: {
            name: 'Регистрация заезда',
            component: (record) => <BookingDate date={record.bookingRange[0]}></BookingDate>
        },
        departureDate: {
            name: 'Регистрация отъезда',
            component: (record) => <BookingDate date={record.bookingRange[1]}></BookingDate>
        },
        numberOfGuests: {
            name: 'Количество гостей',
            component: (record) => <RenderGuests numberOfGuests={record.numberOfPersons} />
        },
        numberOfDays: {
            name: 'Количество ночей',
            component: (record) => <RenderNights countDays={record.countDays} />
        },
        cost: { name: 'Стоимость бронирования', component: (record) => <RenderPrice cost={record.price} /> }
    };

    return (
        record && (
            <div className="booking-info">
                <div className="booking-info__room">
                    <img className="booking-info__image" src={room.image} alt="" />
                    <div className="booking-info__title">{room.title}</div>
                    <div className="booking-info__description">{room.description}</div>
                    <div className="booking-info__link">
                        <div className="booking-info__button">
                            <Link to={`/rooms/${room._id}`}>Описание номера</Link>
                        </div>
                        <div className="booking-info__delete">
                            <button className=" delete-button" onClick={handleDelete}>
                                Удалить бронь
                            </button>
                        </div>
                    </div>
                </div>

                <h3 className="booking-info__title">Сведения о бронировании</h3>
                <div className="booking-info__records">
                    {recordFields &&
                        Object.keys(recordFields).map((field) => (
                            <RecordRow
                                data={record}
                                recordField={recordFields[field]}
                                wrapperName={'booking-info'}
                                key={field}
                            />
                        ))}
                </div>
            </div>
        )
    );
};

BookingInfo.propTypes = {
    record: PropTypes.object,
    onRemove: PropTypes.func
};

export default BookingInfo;
