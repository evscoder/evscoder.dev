import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { WebdevNewsItem } from '@/app/components/news/types';

type WebdevNewsResponse = {
  items: WebdevNewsItem[];
};

export const webdevApi = createApi({
  reducerPath: 'webdevApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (build) => ({
    getWebdevNews: build.query<WebdevNewsItem[], void>({
      query: () => 'webdev-news',
      keepUnusedDataFor: 60 * 60,
      transformResponse: (response: WebdevNewsResponse) => response.items,
    }),
  }),
});

export const { useGetWebdevNewsQuery } = webdevApi;
