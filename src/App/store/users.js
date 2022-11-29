import { createAction, createSlice } from '@reduxjs/toolkit';
import userService from '../services/users.service';

const initialState = {
    error: null,
    auth: null,
    isLoggedIn: false,
    dataLoaded: false
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.dataLoaded = true;
            state.isLoading = false;
        },
        usersRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        authRequested: (state) => {
            state.error = null;
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload;
            state.isLoggedIn = true;
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload;
        },
        userLoggout: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = null;
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        userUpdated: (state, action) => {
            const userIndex = state.entities.findIndex((user) => user._id === action.payload._id);
            state.entities[userIndex] = { ...action.payload };
        }
    }
});

const { reducer: usersReducer, actions } = userSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    authRequested,
    authRequestSuccess,
    authRequestFailed,
    userLoggout,
    userCreated,
    userUpdated
} = actions;

export const signUp = () => async (dispatch) => {
    dispatch(authRequested);
};

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const data = await userService.get();
        dispatch(usersReceived(data));
    } catch (error) {
        dispatch(usersRequestFailed());
    }
};
export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export default usersReducer;
