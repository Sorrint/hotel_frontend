import React from 'react';
import { getIconContent } from '../../../utils/utils';
const RoomProperties = ({ icons, properties, text }) => {
    function getValue(name, value) {
        switch (name) {
            case 'area':
                return (
                    <>
                        {`Площадь номера ${value} м`}
                        <sup>2</sup>
                    </>
                );
            case 'persons':
                return `${value} спальных места`;
            default:
                return value;
        }
    }
    return (
        <div className="room-description__properties">
            {text}
            {properties.map((property) => (
                <div className="room-description__property" key={property.icon}>
                    <i className="room-description__icon">{getIconContent(icons, property.icon)}</i>
                    <span className="room-description__text">{getValue(property.name, property.value)}</span>
                </div>
            ))}
        </div>
    );
};

export default RoomProperties;
