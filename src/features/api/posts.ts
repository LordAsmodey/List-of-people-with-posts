import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../../Types/Post';

const BASE_URL = 'https://jsonplaceholder.typicode.com/users/';

export const postsApi = createApi({
  reducerPath: 'postsByUserId',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({

    getPostsByUserId: builder.query<Post[], number | null>({
      query: (userId) => `${userId}/posts`,
    }),

  }),
});

export const { useGetPostsByUserIdQuery } = postsApi;
