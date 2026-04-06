/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { ApiService } from './ApiService';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ApiService.middleware),
});
