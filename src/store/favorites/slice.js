import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    addFavorite: (state, { payload: id }) => {
      state.items.push(id);
    },
    deleteFavorite: (state, { payload: id }) => {
      state.items = state.items.filter((itemID) => itemID !== id);
    },
    toggleFavorite: (state, { payload: id }) => {
      const index = state.items.indexOf(id);
      if (index !== -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(id);
      }
    },
  },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, deleteFavorite, toggleFavorite } =
  favoritesSlice.actions;
