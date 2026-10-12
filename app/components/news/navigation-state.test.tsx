import { act, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { makeStore } from '@/app/store/store';
import { ArticlesList } from './ArticlesList';
import { WebdevNewsList } from './components/NewsWebDevNewsList/WebdevNewsList';

const originalScrollIntoView = Object.getOwnPropertyDescriptor(
  HTMLElement.prototype,
  'scrollIntoView',
);

afterEach(() => {
  vi.useRealTimers();
  if (originalScrollIntoView) {
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', originalScrollIntoView);
  } else {
    Reflect.deleteProperty(HTMLElement.prototype, 'scrollIntoView');
  }
});

describe('news navigation state', () => {
  it('keeps loaded articles when the list is mounted again', () => {
    vi.useFakeTimers();
    const store = makeStore();
    const articles = Array.from({ length: 9 }, (_, index) => ({
      id: String(index),
      title: `Article ${index}`,
      description: 'Description',
      tag: 'Rendering',
    }));
    const list = (
      <Provider store={store}>
        <ArticlesList articles={articles} />
      </Provider>
    );
    const firstVisit = render(list);

    fireEvent.click(screen.getByRole('button', { name: 'Загрузить ещё' }));
    act(() => vi.advanceTimersByTime(2000));
    expect(screen.getAllByRole('article')).toHaveLength(8);

    firstVisit.unmount();
    render(list);

    expect(screen.getAllByRole('article')).toHaveLength(8);
    expect(screen.getByRole('status')).toHaveTextContent('Показано 8 из 9 статей');
  });

  it('keeps the web.dev page and clamps it when the feed gets shorter', () => {
    const store = makeStore();
    const items = Array.from({ length: 13 }, (_, index) => ({
      title: `News ${index}`,
      href: `https://web.dev/news-${index}`,
      description: 'Description',
      publishedAt: null,
      imageUrl: null,
    }));
    Object.defineProperty(HTMLElement.prototype, 'scrollIntoView', {
      configurable: true,
      value: vi.fn(),
    });
    const list = (feed = items) => (
      <Provider store={store}>
        <WebdevNewsList items={feed} />
      </Provider>
    );
    const firstVisit = render(list());

    fireEvent.click(screen.getByRole('button', { name: 'Страница 3' }));
    firstVisit.unmount();
    const returnVisit = render(list());

    expect(screen.getByRole('button', { name: 'Страница 3' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('heading', { name: 'News 12' })).toBeInTheDocument();

    returnVisit.rerender(list(items.slice(0, 7)));

    expect(screen.getByRole('button', { name: 'Страница 2' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('heading', { name: 'News 6' })).toBeInTheDocument();
  });
});
