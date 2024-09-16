import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    perPage: 4,
    total: 0,
    page: 1,
  },
  reducers: {
    setPagination(state, { payload }) {
      return { ...state, ...payload };
    },
  },
});

export const { setPagination } = paginationSlice.actions;
export const paginationReducer = paginationSlice.reducer;
