import React from 'react';
import PropTypes from 'prop-types';
import { getIconContent } from '../../../utils/utils';
const RoomProperties = ({ icons, properties, text, direction = 'column' }) => {
    return (
        <div className={`room-description__properties_${direction}`}>
            {text}
            {properties.map((property) => (
                <div className="room-description__property" key={property.icon}>
                    <i className="room-description__icon">{getIconContent(icons, property.icon)}</i>
                    <span className="room-description__text">{property.text}</span>
                </div>
            ))}
        </div>
    );
};

RoomProperties.propTypes = {
    icons: PropTypes.array,
    properties: PropTypes.array,
    text: PropTypes.string,
    direction: PropTypes.string
};
export default RoomProperties;
