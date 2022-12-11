import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomById } from '../../store/rooms';
import { renderGuests, renderNights, transformDate } from '../../utils/utils';
import { removeBooking } from '../../store/bookings';
import { Link } from 'react-router-dom';

const BookingInfo = ({ record }) => {
    const dispatch = useDispatch();
    const { choosenNumber } = record;
    const room = useSelector(getRoomById(choosenNumber));
    const handleClick = () => {
        console.log(record._id);
        dispatch(removeBooking(record._id));
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
                            <button className=" delete-button" onClick={handleClick}>
                                Удалить бронь
                            </button>
                        </div>
                    </div>
                </div>

                <h3 className="booking-info__title">Сведения о бронировании</h3>
                <div className="booking-info__record">
                    <div className="booking-info__label">Номер брони:</div>
                    <div className="booking-info__value">{record._id}</div>
                </div>
                <div className="booking-info__record">
                    <div className="booking-info__label">Регистрация заезда:</div>
                    <div className="booking-info__value">{transformDate(record.bookingRange[0])}</div>
                </div>
                <div className="booking-info__record">
                    <div className="booking-info__label">Регистрация отъезда:</div>
                    <div className="booking-info__value">{transformDate(record.bookingRange[1])}</div>
                </div>
                <div className="booking-info__record">
                    <div className="booking-info__label">Количество гостей:</div>
                    <div className="booking-info__value">{renderGuests(record.numberOfPersons)}</div>
                </div>
                <div className="booking-info__record">
                    <div className="booking-info__label">Количество ночей:</div>
                    <div className="booking-info__value">{renderNights(record.countDays)}</div>
                </div>
                <div className="booking-info__record">
                    <div className="booking-info__label">Стоимость бронирования:</div>
                    <div className="booking-info__value">{record.price} ₽</div>
                </div>
                <div className="booking-info__record">
                    <div className="booking-info__label">Номер:</div>
                    <div className="booking-info__value">{room.description}</div>
                </div>
                <div className="booking-info__record"></div>
            </div>
        )
    );
};

BookingInfo.propTypes = {
    record: PropTypes.object
};

export default BookingInfo;
