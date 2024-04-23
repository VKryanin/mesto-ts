import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthData } from "../interfaces/Interface";
import axios from "axios";

const HOST = 'http://localhost:3001';

export const getToken = createAsyncThunk(
  'token/getToken',
  async (authData: AuthData, thunkAPI) => {
    const response = await axios.post(`${HOST}/signin`, authData);
    return response.data.token; // Сохраняем только токен
  }
)

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null as string | null, // Изменяем тип токена
    isLoading: false,
    isLoggedIn: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getToken.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getToken.fulfilled, (state, { payload }) => {
      state.token = payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    })
    builder.addCase(getToken.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    })
  }

})

export default tokenSlice.reducer;
