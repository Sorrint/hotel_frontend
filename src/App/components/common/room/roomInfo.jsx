import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { renderGuests } from '../../../utils/utils';

const RoomInfo = ({ classNamePrefix, title, area, countOfRooms, priceList, maxNumberOfPersons }) => {
    const [currentPersons, setCurrentPersons] = useState(Object.keys(priceList)[0]);

    const renderPrice = (list) => {
        const current = Object.keys(list).find((item) => item === currentPersons);
        return list[current];
    };
    return (
        <>
            <div className={classNamePrefix + '__title'}>{title}</div>
            <div className={classNamePrefix + '__info'}>
                {`Вместимость до ${maxNumberOfPersons} мест ${area} кв.м (${countOfRooms} комн)`}
            </div>
            {priceList && (
                <>
                    <div className={classNamePrefix + '__price'}>{renderPrice(priceList)} руб.</div>
                    <span>Цена за ночь</span>
                    <div className="room-card__guestsWrapper">
                        {Object.keys(priceList).map((number) => (
                            <div
                                className={`${classNamePrefix}__numberOfGuests${
                                    number === currentPersons ? '_active' : ''
                                }`}
                                key={number}
                                onClick={() => setCurrentPersons(number)}
                            >
                                {renderGuests(number)}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

RoomInfo.propTypes = {
    classNamePrefix: PropTypes.string,
    title: PropTypes.string,
    area: PropTypes.number,
    countOfRooms: PropTypes.number,
    priceList: PropTypes.object,
    maxNumberOfPersons: PropTypes.number
};
export default RoomInfo;
