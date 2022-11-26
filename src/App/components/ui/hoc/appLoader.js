import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsLoadingStatus, loadRoomsList } from '../../../store/rooms';

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const roomsStatusLoading = useSelector(getRoomsLoadingStatus());
    useEffect(() => {
        dispatch(loadRoomsList());
    }, []);
    if (roomsStatusLoading) return 'Loading...';
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default AppLoader;
