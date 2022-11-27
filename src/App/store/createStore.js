import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bannerReducer from './banner';
import iconsReducer from './icons';
import roomsReducer from './rooms';
import roomTypesReducer from './roomTypes';

const rootReducer = combineReducers({
    rooms: roomsReducer,
    roomTypes: roomTypesReducer,
    icons: iconsReducer,
    banner: bannerReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}
