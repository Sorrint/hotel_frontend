import React from 'react';
import { Link } from 'react-router-dom';
import RoomInfo from './roomInfo';

const RoomCard = ({ _id: id, image, title, ...rest }) => {
    return (
        <div className="room-card">
            <img className="room-card__image" src={image} alt="" />
            <div className="room-card__description">
                {/* <div className="room-card__title">{title}</div> */}
                <RoomInfo classNamePrefix="room-card" title={title} {...rest} />
            </div>

            <Link to={`rooms/booking/${id}`} className="room-card__button">
                ПОДРОБНЕЕ
            </Link>
        </div>
    );
};

export default RoomCard;
