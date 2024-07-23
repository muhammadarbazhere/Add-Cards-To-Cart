import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import products from "../components/Products";

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  try {
    return products;
  } catch (error) {
    throw new Error("Error fetching data");
  }
});

const cardSlice = createSlice({
  name: "cards",

  initialState: {
    loading: false,
    cards: [],
    Error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.loading = false;
        state.cards = action.payload;
        state.Error = null;
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.loading = false;
        state.cards = [];
        state.Error = action.error.message || "An error occurred";
      });
  },
});

export default cardSlice.reducer;
