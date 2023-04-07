import { configureStore } from '@reduxjs/toolkit';
// import { rootReducer } from './rootRedusers';
import { usersReducer } from './Feedback/usersSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const config = {
  key: 'app',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(config, usersReducer);

export const store = configureStore({
  reducer: { users: persistedReducer },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
