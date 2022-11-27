import { createSlice } from '@reduxjs/toolkit';
import roomsService from '../services/rooms.service';

const roomsSlice = createSlice({
    name: 'rooms',
    initialState: {
        entities: null,
        error: null,
        isLoading: true
    },
    reducers: {
        roomsRequested: (state) => {
            state.isLoading = true;
        },
        roomsRecieved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        roomsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.entities = null;
            state.isLoading = false;
        }
    }
});

const { reducer: roomsReducer, actions } = roomsSlice;
const { roomsRequested, roomsRecieved, roomsRequestFailed } = actions;

export const loadRoomsList = () => async (dispatch) => {
    dispatch(roomsRequested());
    try {
        const data = await roomsService.get();
        dispatch(roomsRecieved(data));
    } catch (error) {
        dispatch(roomsRequestFailed(error.message));
    }
};

export const getRoomById = (roomId) => (state) => {
    if (state.rooms.entities) {
        return state.rooms.entities.find((room) => room._id.toString() === roomId);
    }
};

export const getRoomsLoadingStatus = () => (state) => state.rooms.isLoading;
export const getRooms = () => (state) => state.rooms.entities;
export default roomsReducer;
