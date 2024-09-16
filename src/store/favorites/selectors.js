import { createSelector } from "@reduxjs/toolkit";

export const selectFavorites = (state) => state.favorites.items;
export const selectIsFavorite = createSelector(
  [selectFavorites, (state, id) => id],
  (favorites, id) => favorites.includes(id)
);
