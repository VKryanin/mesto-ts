import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthData } from "../interfaces/Interface";
import axios, { AxiosResponse, AxiosError } from "axios";

const HOST = 'http://localhost:3001';
const postHeaders = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  Accept: "*/*",
};



export const getProfile = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    const response = await axios(`${HOST}/users/me`);
    return response.data
  }
)

type User = {
  _id: string,
  name: string,
  email: string,
  about: string,
  avatar: string
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null as User | null,
    isLoading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    })
    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      console.log(payload);
    })
  }
})

export default userSlice.reducer;




