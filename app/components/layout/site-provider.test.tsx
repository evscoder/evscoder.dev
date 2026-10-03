import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { StoreProvider } from '@/app/store/store-provider';

import { SiteProvider, useSiteContext } from './site-provider';

vi.mock('@/app/shared/hooks/use-clock', () => ({
  useClock: () => ({ dateLabel: '23 сентября', timeLabel: '12:00' }),
}));

vi.mock('@/app/shared/lib/i18n', () => ({
  ensureI18n: vi.fn().mockResolvedValue(undefined),
}));

function SiteStateProbe() {
  const { isLanguageReady, isThemeAlt, language, setLanguage, toggleTheme } = useSiteContext();

  return (
    <div>
      <span>{isLanguageReady ? 'ready' : 'loading'}</span>
      <span>{language}</span>
      <span>{isThemeAlt ? 'dark' : 'light'}</span>
      <button type="button" onClick={() => setLanguage('en')}>
        English
      </button>
      <button type="button" onClick={toggleTheme}>
        Toggle theme
      </button>
    </div>
  );
}

function renderProvider() {
  render(
    <StoreProvider>
      <SiteProvider>
        <SiteStateProbe />
      </SiteProvider>
    </StoreProvider>,
  );
}

describe('SiteProvider', () => {
  afterEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove('theme-alt');
    document.documentElement.lang = '';
  });

  it('hydrates persisted language and theme preferences', async () => {
    window.localStorage.setItem('evscoder-language', 'en');
    window.localStorage.setItem('evscoder-theme', 'light');

    renderProvider();

    expect(await screen.findByText('ready')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
    expect(screen.getByText('light')).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(document.documentElement).not.toHaveClass('theme-alt');
  });

  it('dispatches and persists preference changes', async () => {
    const user = userEvent.setup();

    renderProvider();
    await screen.findByText('ready');
    await user.click(screen.getByRole('button', { name: 'English' }));
    await user.click(screen.getByRole('button', { name: 'Toggle theme' }));

    await waitFor(() => {
      expect(window.localStorage.getItem('evscoder-language')).toBe('en');
      expect(window.localStorage.getItem('evscoder-theme')).toBe('light');
    });
  });
});
