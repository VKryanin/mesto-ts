import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthData, UpdateData } from "../../interfaces/Interface";
import axios from "axios";

const HOST = 'http://localhost:3001';

export const getToken = createAsyncThunk(
  'token/getToken',
  async (authData: AuthData, thunkAPI) => {
    const response = await axios.post(`${HOST}/signin`, authData);
    return response.data.token;
  }
)

export const getProfile = createAsyncThunk(
  'user/getUser',
  async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    const postHeaders = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Accept: "*/*",
    };
    const response = await axios.get(`${HOST}/users/me`, { headers: postHeaders });
    return response.data;
  }
)

export const createUser = createAsyncThunk(
  'user/createUser',
  async (authData: AuthData, thunkAPI) => {
    const postHeaders = {
      'Content-Type': 'application/json',
      Accept: "*/*",
    };
    const register = await axios.post(`${HOST}/signup`, authData, { headers: postHeaders })
    return register.data
  }
)

export const patchUserData = createAsyncThunk(
  'user/updateUser',
  async (updateData: UpdateData, thunkAPI) => {
    const postHeaders = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: "*/*",
    }
    const response = await axios.patch(`${HOST}/users/me`, updateData, { headers: postHeaders })
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

type Token = string

const userSlice = createSlice({
  name: 'user/token',
  initialState: {
    user: {} as User,
    token: '' as Token,
    isLoading: false,
    isLoggedIn: false,
    email: '' as string,

  },
  reducers: {
    logout: (state) => {
      state.token = '';
      state.isLoggedIn = false;
      state.user = {} as User;
      localStorage.removeItem('token');
    },

    hasToken: (state) => {
      const token = localStorage.getItem('token');
      if (token !== null) {
        state.token = token;
        state.isLoggedIn = true;
      }
    },
  },
  extraReducers: (builder) => {
    //get user
    builder.addCase(getProfile.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.user = payload.data;
      state.isLoading = false;
    })
    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
    })

    //registration
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.email = payload;
    });
    builder.addCase(createUser.rejected, (state) => {
      state.isLoading = false;
    });

    //token
    builder.addCase(getToken.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getToken.fulfilled, (state, { payload }) => {
      state.token = payload;
      state.isLoading = false;
      state.isLoggedIn = true;
      localStorage.setItem('token', payload);
    })
    builder.addCase(getToken.rejected, (state, { payload }) => {
      state.isLoading = false;
    })

    // edit user
    builder.addCase(patchUserData.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(patchUserData.fulfilled, (state, { payload }) => {
      state.user = payload.data;
      state.isLoading = false;
    })
    builder.addCase(patchUserData.rejected, (state, { payload }) => {
      state.isLoading = false;
    })
  }
})

export const { logout, hasToken } = userSlice.actions;

export default userSlice.reducer;
