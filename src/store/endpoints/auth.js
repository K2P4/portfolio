import { ApiService } from '../ApiService';
import { supabase } from '../../lib/supabase';

export const AuthApi = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) return { error: { message: error.message } };
        return { data };
      },
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
