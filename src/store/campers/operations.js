import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setPagination } from "../pagination/slice";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.get("/campers");

      if (response.data.items && response.data.items.length) {
        dispatch(
          setPagination({
            total: response.data.items.length,
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
