import { ApiService } from '../ApiService';

export const ContactApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation({
      query: (arg) => ({
        url: `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`,
        method: 'POST',
        body: {
          chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
          text: `New Contact\n\n` + `Name: ${arg.name}\n` + `Email: ${arg.email}\n` + `Message: ${arg.message}`,
          parse_mode: 'Markdown',
        },
      }),
      invalidatesTags: ['contact'],
    }),
  }),
});

export const { useCreateMutation } = ContactApi;
