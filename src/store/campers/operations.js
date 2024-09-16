import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPagination } from "../pagination/slice";
import { selectFilters } from "../filters/selectors";
import { selectPagination } from "../pagination/selectors";
import data from "../../data.json";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, { dispatch, getState, rejectWithValue }) => {
    try {
      const state = getState();
      const filters = selectFilters(state);
      const { page, limit } = selectPagination(state);

      const response = await axios.get("/campers", {
        params: {
          page,
          limit,
          ...filters,
        },
      });

      if (response.data && response.data.total) {
        dispatch(
          setPagination({
            total: Math.ceil(response.data.total / limit),
          })
        );
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
