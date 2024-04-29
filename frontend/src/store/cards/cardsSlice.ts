import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const HOST = 'http://localhost:3001';

type Cards = []

type Card = {
  _id: string,
  name: string,
  link: string,
  owner: string,
  likes: [],
  createdAt: string
}

export const getCards = createAsyncThunk(
  'cards/getCards',
  async (token: string, thunkAPI) => {
    const cards = await axios(`${HOST}/cards`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
        Accept: "*/*",
      }
    })
    return cards.data.data
  }
)

const cardsSlice = createSlice({
  name: 'cards/allCards',
  initialState: {
    cards: [] as Cards,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCards.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getCards.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cards = payload;
    });
  }
})

export default cardsSlice.reducer;