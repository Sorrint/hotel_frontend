import { createSlice } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import userService from '../services/users.service';
import history from '../utils/history';
import { clearBookingsList } from './bookings';

const initialState = localStorageService.getAccessToken()
    ? {
          error: null,
          isLoading: true,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true,
          dataLoaded: false
      }
    : {
          error: null,
          isLoading: false,
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
        userLoggedOut: (state) => {
            state.entities = null;
            state.isLoggedIn = false;
            state.auth = null;
            state.dataLoaded = null;
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
    userLoggedOut
    // userUpdated
} = actions;

export const signUp = (userData) => async (dispatch) => {
    dispatch(authRequested());
    try {
        const data = await authService.register(userData);
        localStorageService.setTokens(data);
        dispatch(authRequestSuccess({ userId: data.userId }));
        history.push('/');
    } catch (error) {
        dispatch(authRequestFailed(error.response.data.message));
    }
};

export const login =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload;
        dispatch(authRequested());
        try {
            const data = await authService.login({ email, password });
            localStorageService.setTokens(data);
            dispatch(authRequestSuccess({ userId: data.userId }));
            history.push(redirect);
        } catch (error) {
            dispatch(authRequestFailed(error.response.data.message));
        }
    };

export const logOut = () => async (dispatch) => {
    localStorageService.removeAuthData();
    dispatch(userLoggedOut());
    dispatch(clearBookingsList());
    history.push('/');
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
export const getCurrentUserData = () => (state) => {
    return state.users.entities ? state.users.entities.find((u) => u._id === state.users.auth.userId) : null;
};

export const getCurrentUserId = () => (state) => state.users.auth.userId;
export const getUserById = (userId) => (state) => {
    if (state.users.entities) {
        return state.users.entities.find((u) => u._id === userId);
    }
};

export default usersReducer;
