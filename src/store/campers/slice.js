import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: {},
    isLoading: false,
    error: null,
    appendMode: false,
  },
  reducers: {
    clearCampers(state) {
      state.items = {};
    },
    setAppendMode(state, action) {
      state.appendMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, { payload }) => {
        const itemsObj = payload.items?.reduce(
          (acc, camper) => ({ ...acc, [camper.id]: camper }),
          {}
        );

        if (state.appendMode) {
          state.items = { ...state.items, ...itemsObj };
        } else {
          state.items = itemsObj;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items[payload.id] = payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { clearCampers, setAppendMode } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
