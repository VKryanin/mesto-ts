import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const HOST = 'http://localhost:3001';

type Cards = Card[];

type Card = {
  _id: string,
  name: string,
  link: string,
  owner: string,
  likes: [],
  createdAt: string
}

type NewCard = {
  name: string,
  link: string,
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

export const changeLikeCardStatus = createAsyncThunk(
  'changeLike',
  async ({ cardId, isLiked, token }: { cardId: string; isLiked: boolean; token: string }) => {
    if (isLiked) {
      const changeLikee = await axios(`${HOST}/cards/${cardId}/likes`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            Accept: "*/*",
          },
          method: 'PUT'
        }
      )

      return changeLikee.data.data
    } else {
      const changeLikee = await axios(`${HOST}/cards/${cardId}/likes`,
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
            Accept: "*/*",
          },
          method: 'DELETE'
        }
      )

      return changeLikee.data.data
    }
  }
)

export const deleteCard = createAsyncThunk(
  'deleteCard',
  async ({ cardId, token }: { cardId: string; token: string }) => {
    const deleteCard = await axios(`${HOST}/cards/${cardId}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      method: 'DELETE',
    })

    return deleteCard.data.message
  }
)

export const addCard = createAsyncThunk(
  'cards/addCard',
  async (newCard: NewCard, thunkAPI) => {
    const postHeaders = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: "*/*",
    }
    const response = await axios.post(`${HOST}/cards`, newCard, { headers: postHeaders })
    return response.data.data
  }
)

const cardsSlice = createSlice({
  name: 'cards/allCards',
  initialState: {
    cards: [] as Cards,
    isLoading: false,
    showImage: false,
    selectedCard: {} as Card,
  },
  reducers: {
    togglePopup: (state, { payload }) => {
      state.showImage = payload
    },
    selectCard: (state, { payload }) => {
      state.selectedCard = payload
    },
  },
  extraReducers: (builder) => {
    //get cards
    builder.addCase(getCards.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getCards.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cards = payload.reverse();
    });

    //like
    builder.addCase(changeLikeCardStatus.fulfilled, (state, { payload }) => {
      state.cards = state.cards.map((card: Card) => {
        if (card._id === payload._id) {
          return payload;
        }
        return card;
      });
    });

    //delete
    builder.addCase(deleteCard.fulfilled, (state, { payload }) => {
      state.cards = state.cards.filter((card: Card) => card._id !== payload._id);
    });

    //add card
    builder.addCase(addCard.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(addCard.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cards.unshift(payload)
    });
  }
})

export const { togglePopup, selectCard } = cardsSlice.actions;
export default cardsSlice.reducer;