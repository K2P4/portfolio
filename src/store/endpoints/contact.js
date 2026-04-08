import { ApiService } from '../ApiService';

export const ContactApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (arg) => ({
        url: `/.netlify/functions/send_telegram`,
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const { useCreateMutation } = ContactApi;
