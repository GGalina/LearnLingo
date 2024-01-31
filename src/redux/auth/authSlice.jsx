import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const handleFulfiled = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

const hadleRejected = (state, { payload }) => {
    state.error = payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.rejected]: hadleRejected,
        [logIn.rejected]: hadleRejected,
        [logOut.rejected]: hadleRejected,
        [refreshUser.rejected](state, { payload }) {
            state.error = payload;
            state.isRefreshing = false;
        },

        [register.fulfilled]: handleFulfiled,
        [logIn.fulfilled]: handleFulfiled,
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [refreshUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
    },
});

export const authReducer = authSlice.reducer;