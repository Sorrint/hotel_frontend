import React, { useEffect, useState } from 'react';
import Banner from '../../common/banner/banner';
import Footer from '../../common/footer';
import Header from '../../common/header';
import RoomAmenities from '../../common/room/roomAmenities';
import RoomInfo from '../../common/room/roomInfo';
import RoomProperties from '../../common/room/roomProperties';
const RoomPage = ({ id, list, icons }) => {
    const [room, setRoom] = useState();
    useEffect(() => {
        if (list) {
            const currentRoom = list.find((item) => item._id.toString() === id);
            setRoom(currentRoom);
        }
    }, [id, list]);
    if (room && icons) {
        return (
            <>
                <Header />
                <Banner imgClassName={room.className} text={room.title} />
                <div className="wrapper">
                    <div className="content">
                        <div className="room-description">
                            <div className="room-description__content-left">
                                <RoomProperties icons={icons} properties={room.properties} text="Описание" />
                                <RoomAmenities icons={icons} amenities={room.amenities} text="Оснащение номера" />
                                <RoomAmenities icons={icons} amenities={room.otherAmenities} text="Прочее" />
                            </div>
                            <div className="room-description__content-right">
                                <img className="room-description__image" src={room.image} alt="" />
                                <div className="room-description__title">{room.name}</div>
                                <div className="room-description__about">
                                    <RoomInfo classNamePrefix="room-description" {...room} title={room.description} />
                                </div>
                                <button className="booking__button">БРОНИРОВАТЬ</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

export default RoomPage;
