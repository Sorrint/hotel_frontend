import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { addTextToProperties } from '../../../utils/utils';
import RoomProperties from '../room/roomProperties';
const BookingRoom = ({ name, image, title, icons, properties, priceList }) => {
    const [selectedProprerties, setSelectedProperties] = useState();

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

    useEffect(() => {
        setSelectedProperties(addTextToProperties(properties, displayProperties, getPlaceholders));
    }, []);

    return (
        <div className="booking-card">
            <img className="booking-card__image" src={image} alt="" />
            <div className="booking-card__description">
                <div className="booking-card__title">{title}</div>
                {selectedProprerties && (
                    <RoomProperties icons={icons} properties={selectedProprerties} direction="row" />
                )}
                <div className="booking-card__panel">
                    <div className="booking-card__price">
                        <div className="booking-card__cost">{priceList['2']} ₽</div>
                        <div className="booking-card__info">1 ночь / 2 гостя</div>
                    </div>
                    <button className="booking-card__button">Выбрать</button>
                </div>
            </div>
        </div>
    );
};

export default BookingRoom;
