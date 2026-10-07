import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getWebdevCover } from './shared/webdev-cover';
import { getWebdevNews } from './webdev-feed';

vi.mock('./shared/webdev-cover', () => ({
  getWebdevCover: vi.fn(),
}));

const feed = `
  <rss version="2.0">
    <channel>
      <title>web.dev</title>
      <item>
        <title>Older article</title>
        <link>https://web.dev/older/</link>
        <pubDate>Mon, 01 Jun 2026 08:00:00 GMT</pubDate>
        <description> First description </description>
      </item>
      <item>
        <title>Newer article</title>
        <link>https://web.dev/newer/</link>
        <pubDate>Tue, 02 Jun 2026 08:00:00 GMT</pubDate>
      </item>
      <item>
        <title>Duplicate article</title>
        <link>https://web.dev/newer/</link>
      </item>
      <item>
        <title>Untrusted article</title>
        <link>https://example.com/article/</link>
      </item>
      <item>
        <title>Insecure article</title>
        <link>http://web.dev/insecure/</link>
      </item>
    </channel>
  </rss>
`;

describe('getWebdevNews', () => {
  beforeEach(() => {
    vi.mocked(getWebdevCover).mockReset().mockResolvedValue(null);
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  it('keeps unique trusted links and sorts them from newest to oldest', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(feed, { status: 200 })));

    const articles = await getWebdevNews();

    expect(articles.map(({ title }) => title)).toEqual(['Newer article', 'Older article']);
    expect(articles[1]).toMatchObject({
      description: 'First description',
      href: 'https://web.dev/older/',
      publishedAt: '2026-06-01T08:00:00.000Z',
    });
    expect(getWebdevCover).toHaveBeenCalledTimes(2);
  });

  it('returns an empty list when the feed request fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', { status: 503 })));

    await expect(getWebdevNews()).resolves.toEqual([]);
  });
});
