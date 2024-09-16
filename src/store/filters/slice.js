import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {},
  reducers: {
    setFilter(state, { payload }) {
      const parsedFilters = {};
      for (const key in payload) {
        if (payload[key] === "true") {
          parsedFilters[key] = true;
        } else if (payload[key] === "false") {
          parsedFilters[key] = false;
        } else {
          parsedFilters[key] = payload[key];
        }
      }

      return { ...parsedFilters };
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
