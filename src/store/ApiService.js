/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://perfume-ecommerce-api.onrender.com/api/",
	}),

	tagTypes: ["contact"],
	endpoints: (builder) => ({}),
});
