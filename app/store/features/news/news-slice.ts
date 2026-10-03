import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  visibleArticlesCount: 6,
  webdevPage: 1,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setVisibleArticlesCount(state, action: PayloadAction<number>) {
      state.visibleArticlesCount = action.payload;
    },
    setWebdevPage(state, action: PayloadAction<number>) {
      state.webdevPage = action.payload;
    },
  },
});

export const { setVisibleArticlesCount, setWebdevPage } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
