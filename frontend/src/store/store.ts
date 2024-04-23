import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './userSlice';
import tokenReducer from "./tokenSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    token: tokenReducer,
  },
  devTools: true
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
