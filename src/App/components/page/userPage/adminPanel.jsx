import React, { useState } from 'react';
import OverlayingPopup from '../../common/portal/overlayingPopup';
import EditRoomForm from '../../ui/editRoomForm';
import RoomsTable from '../../ui/room/roomsTable';

const AdminPanel = () => {
    const [selectedRoom, setSelectedRoom] = useState();
    const [active, setActive] = useState(false);
    const showPopup = () => {
        setActive((prevState) => !prevState);
    };
    const handleSelect = (room) => {
        setSelectedRoom(room);
        setActive((prevState) => !prevState);
    };

    return (
        <div className="admin-panel">
            <h1 className="admin-panel__title">Статус номеров</h1>
            <RoomsTable onSelect={handleSelect} />
            <OverlayingPopup isOpened={active} onClose={showPopup}>
                <div className="admin-panel__content">
                    <button className="close-button" onClick={showPopup} />
                    <EditRoomForm room={selectedRoom} />
                </div>
            </OverlayingPopup>
        </div>
    );
};

export default AdminPanel;
