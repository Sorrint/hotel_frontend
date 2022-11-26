import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../common/banner/banner';
import Footer from '../common/footer';
import Header from '../common/header';
import RoomCard from '../common/room/roomCard';

const RoomsList = ({ rooms, types }) => {
    const [selectedType, setSelectedType] = useState();
    const handleTypeSelect = (type) => {
        setSelectedType(type);
    };
    const filteredRooms = selectedType ? rooms.filter((room) => room.type === selectedType) : rooms;
    const clearType = () => {
        setSelectedType();
    };
    const upperCase = (text) => {
        return text.toUpperCase();
    };

    if (types) {
        return (
            <>
                <Header />
                <div className="wrapper">
                    <Banner />
                    <div className="wrapper__header">
                        <h1>На территории расположены три жилых коттеджа с теплыми и просторными номерами</h1>
                        <div className="wrapper__filter">
                            <div className="wrapper__button" onClick={() => clearType()}>
                                ВСЕ
                            </div>
                            {types &&
                                types.map((type) => (
                                    <div
                                        className="wrapper__button"
                                        key={type._id}
                                        onClick={() => handleTypeSelect(type._id)}
                                    >
                                        {upperCase(type.name)}
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div className="content">
                        {filteredRooms && filteredRooms.map((room) => <RoomCard {...room} key={room._id} />)}
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

RoomsList.propTypes = {
    rooms: PropTypes.array,
    types: PropTypes.array
};
export default RoomsList;
