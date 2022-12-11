import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bannerReducer from './banner';
import bookingsReducer from './bookings';
import iconsReducer from './icons';
import roomsReducer from './rooms';
import roomTypesReducer from './roomTypes';
import usersReducer from './users';

const rootReducer = combineReducers({
    rooms: roomsReducer,
    roomTypes: roomTypesReducer,
    icons: iconsReducer,
    banner: bannerReducer,
    users: usersReducer,
    bookings: bookingsReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
