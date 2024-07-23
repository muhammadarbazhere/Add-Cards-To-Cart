import { createSlice } from "@reduxjs/toolkit";

const myCardsSlice = createSlice({
  name: "myCards",

  initialState: {
    cards: [],
  },

  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addCard, removeCard } = myCardsSlice.actions;
export default myCardsSlice.reducer;
