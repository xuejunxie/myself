import { createSlice } from '@reduxjs/toolkit';
const defaultSnap = {
  type: '',
  url: '',
  location: '',
  lat: 0,
  lon: 0,
  time: 0,
  caption: '',
  shareable: false
};
const initialState = defaultSnap;
const snapSlice = createSlice({
  name: 'snap',
  initialState,
  reducers: {
    addSnap(state, { payload }) {
      return payload;
    },
    removeSnap(state) {
      return defaultSnap;
    }
  }
});
export const { addSnap, removeSnap } = snapSlice.actions;
export default snapSlice.reducer;
