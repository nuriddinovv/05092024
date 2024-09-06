import { createSlice } from "@reduxjs/toolkit";

export const favoriteSlice = createSlice({
  name: "Favorite",
  initialState: {
    value: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
