import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'features/auth/userSlice';
import homeReducer from 'features/home/homeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
