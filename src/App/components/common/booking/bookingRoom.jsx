import React from 'react';
import { addTextToProperties } from '../../../utils/utils';
import RoomProperties from '../room/roomProperties';
import PropTypes from 'prop-types';
const BookingRoom = ({ _id, image, title, icons, properties, priceList, numberOfPersons, dateRange, onChange }) => {
    const displayProperties = ['area', 'persons', 'countOfRooms'];
    const getPlaceholders = (propName, value) => {
        switch (propName) {
            case 'area':
                return `${value} кв.м`;
            case 'persons':
                return `до ${value} мест`;
            case 'countOfRooms':
                return `${value} комн.`;
            default:
                break;
        }
    };
    const selectedProprerties = addTextToProperties(properties, displayProperties, getPlaceholders);

    const getPrice = (numberOfPersons, dateRange) => {
        if (numberOfPersons >= 2) {
            return priceList[numberOfPersons] * dateRange;
        }
        return priceList[2] * dateRange;
    };
    const price = getPrice(numberOfPersons, dateRange);
    const chooseNumber = () => {
        onChange({ name: 'price', value: price });
        onChange({ name: 'choosenNumber', value: _id });
    };

    if (selectedProprerties) {
        return (
            <div className="booking-card">
                <img className="booking-card__image" src={image} alt="" />
                <div className="booking-card__description">
                    <div className="booking-card__title">{title}</div>
                    {selectedProprerties && icons && (
                        <RoomProperties icons={icons} properties={selectedProprerties} direction="row" />
                    )}
                    <div className="booking-card__panel">
                        <div className="booking-card__price">
                            <div className="booking-card__cost">{price} ₽</div>
                            <div className="booking-card__info">{`${dateRange} ночь / ${numberOfPersons} гостя`}</div>
                        </div>
                        <button className="booking-card__button" onClick={chooseNumber}>
                            Выбрать
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

BookingRoom.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    icons: PropTypes.array,
    properties: PropTypes.array,
    priceList: PropTypes.object,
    numberOfPersons: PropTypes.number,
    dateRange: PropTypes.number,
    onChange: PropTypes.func,
    _id: PropTypes.string
};
export default BookingRoom;
