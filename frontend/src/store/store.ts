import { configureStore } from "@reduxjs/toolkit";
import userReducer  from './user/userSlice';
import cardsSlice from "./cards/cardsSlice";
import popupsSlice from "./popups/popupsSlice";


const store = configureStore({
  reducer: {
    user: userReducer,
    cards: cardsSlice,
    popups: popupsSlice
  },
  devTools: true
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
