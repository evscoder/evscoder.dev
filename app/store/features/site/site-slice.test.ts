import { describe, expect, it } from 'vitest';

import { hydrateSite, setLanguage, siteReducer, toggleTheme } from './site-slice';

describe('siteSlice', () => {
  it('hydrates persisted preferences', () => {
    const state = siteReducer(undefined, hydrateSite({ language: 'en', theme: 'light' }));

    expect(state).toMatchObject({
      isLanguageReady: true,
      language: 'en',
      theme: 'light',
    });
  });

  it('updates language and animation cycle only when the language changes', () => {
    const initialState = siteReducer(undefined, { type: 'init' });
    const englishState = siteReducer(initialState, setLanguage('en'));
    const unchangedState = siteReducer(englishState, setLanguage('en'));

    expect(englishState.animationCycle).toBe(1);
    expect(unchangedState).toEqual(englishState);
  });

  it('toggles the theme', () => {
    const lightState = siteReducer(undefined, toggleTheme());

    expect(lightState.theme).toBe('light');
    expect(siteReducer(lightState, toggleTheme()).theme).toBe('dark');
  });
});
