import { configureStore } from '@reduxjs/toolkit';

import { siteReducer } from '@/app/store/features/site/site-slice';
import { newsReducer } from '@/app/store/features/news/news-slice';
import { webdevApi } from '@/app/store/services/webdev-api';

export function makeStore() {
  return configureStore({
    reducer: {
      news: newsReducer,
      site: siteReducer,
      [webdevApi.reducerPath]: webdevApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(webdevApi.middleware),
  });
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
