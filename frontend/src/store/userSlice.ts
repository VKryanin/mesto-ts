
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../api/api';
interface TokenState {
  token: string;
}

interface Credentials {
  email: string;
  password: string;
}

const initialState: TokenState = {
  token: ''
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    addToken(state, action: PayloadAction<Credentials>) {
      const { email, password } = action.payload;
      api.getToken({ email, password })
    },
    removeToken(state) {
      state.token = 'null';
    },
  },
});

export const { addToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
