import { configureStore, combineReducers } from '@reduxjs/toolkit';
import tokenReducer from './userSlice';

const rootReducer = combineReducers({
  token: tokenReducer,
  // Добавьте другие редьюсеры здесь, если есть
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;