import { describe, expect, it } from 'vitest';

import { getNewsArticle, newsArticles } from './model';

describe('news article model', () => {
  it('finds every article by its id', () => {
    for (const article of newsArticles) {
      expect(getNewsArticle(article.id)).toBe(article);
    }
  });

  it('returns undefined for an unknown id', () => {
    expect(getNewsArticle('missing-article')).toBeUndefined();
  });

  it('contains unique article ids', () => {
    const ids = newsArticles.map(({ id }) => id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
