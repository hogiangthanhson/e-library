import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Course } from 'models/course';

export interface homeState {
  listCourse: Course[];
  loading: boolean;
}

const initialState: homeState = {
  listCourse: [],
  loading: false,
};

const homeSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    getData: (state) => {
      state.loading = true;
    },
    getDataError: (state) => {
      state.loading = false;
    },
    getDataSuccess: (state, action: PayloadAction<Course[]>) => {
      state.loading = false;
      state.listCourse = action.payload;
    },
    setListCourse(state, action) {
      state.listCourse = action.payload;
    },
  },
});

// Actions
export const { getData, getDataError, getDataSuccess } = homeSlice.actions;

// Selectors
export const homeLoading = (state: RootState) => state.home.loading;
export const homeListCourse = (state: RootState) => state.home.listCourse;

// Reducer
const homeReducer = homeSlice.reducer;

export default homeReducer;
