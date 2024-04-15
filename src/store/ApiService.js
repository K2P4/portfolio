/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiService = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://project-data-2-j6db.onrender.com/",
	}),

	tagTypes: ["contact"],
	endpoints: (builder) => ({}),
});
