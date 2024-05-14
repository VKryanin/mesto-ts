import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthData, UpdateData, UpdateAvatar } from "../../components/utils/Interface";
import axios from "axios";
import trueImagePath from '../../images/True.svg';
import falseImagePath from '../../images/False.svg';

const HOST = 'https://mesto-api.vk-port.dev';

export const getToken = createAsyncThunk(
  'token/getToken',
  async (authData: AuthData, thunkAPI) => {
    try {
      const response = await axios.post(`${HOST}/signin`, authData);
      return response.data.token;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Unknown error occurred');
    }
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
    try {
      const register = await axios.post(`${HOST}/signup`, authData, { headers: postHeaders })
      return register.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Unknown error occurred');
    }
  }
);

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

export const patchUserPhoto = createAsyncThunk(
  'user/updateAvatar',
  async (updateAvatar: UpdateAvatar, thunkAPI) => {
    const postHeaders = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: "*/*",
    }
    const response = await axios.patch(`${HOST}/users/me/avatar`, updateAvatar, { headers: postHeaders })
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
    message: '' as string,
    imgPath: '',
    isSuccess: true,
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
      state.isSuccess = true;
    })
    builder.addCase(getProfile.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = false;
    })

    //registration
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.email = payload;
      state.message = 'You have successfully registered!'
      state.imgPath = trueImagePath;
      state.isSuccess = true;
    });
    builder.addCase(createUser.rejected, (state, payload) => {
      state.isLoading = false;
      state.message = `Registration error: ${payload.error.message}`;
      state.imgPath = falseImagePath
      state.isSuccess = false;
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
      state.message = 'Welcome!'
      state.imgPath = trueImagePath
    })
    builder.addCase(getToken.rejected, (state, payload) => {
      state.isLoading = false;
      state.message = `Authorization error: ${payload.error.message}`;
      state.imgPath = falseImagePath
    })

    // edit user
    builder.addCase(patchUserData.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(patchUserData.fulfilled, (state, { payload }) => {
      state.user = payload.data;
      state.isLoading = false;
      state.message = `Profile updated`;
      state.imgPath = trueImagePath
      state.isSuccess = true;
    })
    builder.addCase(patchUserData.rejected, (state, payload) => {
      state.isLoading = false;
      state.message = `Something went wrong: ${payload.error.message}`;
      state.imgPath = falseImagePath;
      state.isSuccess = false;
    })

    // edit avatar
    builder.addCase(patchUserPhoto.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(patchUserPhoto.fulfilled, (state, { payload }) => {
      state.user = payload.data;
      state.message = `Avatar updated`;
      state.imgPath = trueImagePath
      state.isLoading = false;
      state.isSuccess = true;
    })
    builder.addCase(patchUserPhoto.rejected, (state, payload) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.message = `Something went wrong: ${payload.error.message}`;
      state.imgPath = falseImagePath;

    })
  }
})

export const { logout, hasToken } = userSlice.actions;

export default userSlice.reducer;
