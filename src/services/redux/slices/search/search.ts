import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSearch } from "./searchAPI";
import { ISearchState } from "../../../../types/Search.types";

export const getCoordinatesAPI = createAsyncThunk(
  "@@search/get",
  async (text: string, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchSearch(text);
      const json = await response.json();
      return fulfillWithValue(json);
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

const initialState: ISearchState = {
  status: "idle",
  error: "",
  address: {
    type: "",
    features: [],
    query: {
      text: "",
    },
  },
};

export const searchSlice = createSlice({
  name: "@@search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoordinatesAPI.fulfilled, (state, action) => {
        state.status = "success";
        state.address = action.payload;
      })
      .addCase(getCoordinatesAPI.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getCoordinatesAPI.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "An error occurred";
      });
  },
});

export const searchReducer = searchSlice.reducer;
