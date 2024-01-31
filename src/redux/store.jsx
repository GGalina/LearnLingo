import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice'

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        user: persistAuthReducer,
    },
    
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);