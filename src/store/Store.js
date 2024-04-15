/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./ApiService";

export const store = configureStore({
	reducer: {
		[ApiService.reducerPath]: ApiService.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(ApiService.middleware),
});
