import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { SupportedLanguage } from '@/app/components/home/model/site-content';

export type SiteTheme = 'light' | 'dark';

type SiteState = {
  animationCycle: number;
  isLanguageReady: boolean;
  language: SupportedLanguage;
  theme: SiteTheme;
};

const initialState: SiteState = {
  animationCycle: 0,
  isLanguageReady: false,
  language: 'ru',
  theme: 'dark',
};

const siteSlice = createSlice({
  name: 'site',
  initialState,
  reducers: {
    hydrateSite(state, action: PayloadAction<{ language?: SupportedLanguage; theme?: SiteTheme }>) {
      if (action.payload.language) {
        state.language = action.payload.language;
      }

      if (action.payload.theme) {
        state.theme = action.payload.theme;
      }

      state.isLanguageReady = true;
    },
    setLanguage(state, action: PayloadAction<SupportedLanguage>) {
      if (state.language === action.payload) {
        return;
      }

      state.language = action.payload;
      state.animationCycle += 1;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { hydrateSite, setLanguage, toggleTheme } = siteSlice.actions;
export const siteReducer = siteSlice.reducer;
