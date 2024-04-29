import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './userSlice';
import cardsSlice from "./cardsSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsSlice
  },
  devTools: true
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
