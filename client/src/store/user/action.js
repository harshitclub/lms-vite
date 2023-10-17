import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async ({ rejectWithValue }) => {
    try {
      const { data } = await axios.post(`http://localhost:2001/api/user/login`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
