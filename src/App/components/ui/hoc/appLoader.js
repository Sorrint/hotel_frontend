import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsLoadingStatus, loadRoomsList } from '../../../store/rooms';
import { getRoomTypesLoadingStatus, loadRoomTypesList } from '../../../store/roomTypes';
import { getIconsLoadingStatus, loadIconsList } from '../../../store/icons';

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const roomsStatusLoading = useSelector(getRoomsLoadingStatus());
    const roomTypesLoading = useSelector(getRoomTypesLoadingStatus());
    const iconsStatusLoading = useSelector(getIconsLoadingStatus());
    useEffect(() => {
        dispatch(loadRoomsList());
        dispatch(loadRoomTypesList());
        dispatch(loadIconsList());
    }, []);
    if (roomsStatusLoading || roomTypesLoading || iconsStatusLoading) return 'Loading...';
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AppLoader;
