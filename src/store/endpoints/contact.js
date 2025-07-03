import { ApiService } from "../ApiService"


export const ContactApi = ApiService.injectEndpoints({
	endpoints: (builder) => ({
		create: builder.mutation({
			query: (arg) => ({
				url: "/contact/send-message",
				method: "POST",
				body: arg,
			}),
			invalidatesTags: ["contact"],
		}),
	}),
});


export const {useCreateMutation} = ContactApi;