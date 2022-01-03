import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'models/user';

// export interface LoginPayload {
//   email: string;
//   password: string;
// }

// export interface AuthState {
//   isLoggedIn: boolean;
//   logging?: boolean;
//   currentUser?: User;
// }

// const initialState: AuthState = {
//   isLoggedIn: false,
//   logging: false,
//   currentUser: undefined,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login(state, action: PayloadAction<string>) {
//       state.logging = true;
//     },
//     loginSuccess(state, action: PayloadAction<User>) {
//       state.logging = false;
//       state.isLoggedIn = true;
//       state.currentUser = action.payload;
//     },
//     loginFailed(state, action: PayloadAction<string>) {
//       state.logging = false;
//     },
//     logout(state) {
//       state.isLoggedIn = false;
//       state.currentUser = undefined;
//     },
//   },
// });

// // Actions
// export const authActions = authSlice.actions;

// // Selectors
// export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
// export const selectIsLogging = (state: any) => state.auth.isLogging;

// // Reducer
// const authReducer = authSlice.reducer;

// export default authReducer;

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

const userReducer = userSlice.reducer;

export default userReducer;
