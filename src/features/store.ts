import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './api/users';
import { postsApi } from './api/posts';

export const store = configureStore({
  reducer: {
    users: usersApi.reducer,
    postsByUserId: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(postsApi.middleware);
  },
});
