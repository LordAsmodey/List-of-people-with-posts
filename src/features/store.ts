import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { usersApi } from './api/users';
import { postsApi } from './api/posts';
import { postByIdApi } from './api/postById';

export const store = configureStore({
  reducer: {
    users: usersApi.reducer,
    postsByUserId: postsApi.reducer,
    postById: postByIdApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(postsApi.middleware)
      .concat(postByIdApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
/* eslint-enable @typescript-eslint/indent */
