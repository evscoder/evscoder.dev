import Parser from 'rss-parser';
import type { WebdevNewsItem } from '@/app/components/news/types';
import { getWebdevCover } from '@/app/components/news/api/shared/webdev-cover';
export const webdevFeedUrl = 'https://web.dev/feed.xml';

const parser = new Parser();

export async function getWebdevNews(): Promise<WebdevNewsItem[]> {
  try {
    const response = await fetch(webdevFeedUrl, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`RSS request failed: ${response.status}`);
    }

    const feed = await parser.parseString(await response.text());
    const items: WebdevNewsItem[] = [];
    const seenLinks = new Set<string>();

    for (const item of feed.items) {
      const title = item.title?.trim();

      if (!title || !item.link) {
        continue;
      }

      let url: URL;

      try {
        url = new URL(item.link);
      } catch {
        continue;
      }

      if (url.protocol !== 'https:' || url.hostname !== 'web.dev' || seenLinks.has(url.href)) {
        continue;
      }

      seenLinks.add(url.href);
      const timestamp = Date.parse(item.isoDate ?? item.pubDate ?? '');

      items.push({
        title,
        href: url.href,
        description: item.contentSnippet?.trim() ?? '',
        imageUrl: null,
        publishedAt: Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : null,
      });
    }

    items.sort((a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? ''));

    // Limit simultaneous requests to the publisher when refreshing the feed.
    for (let index = 0; index < items.length; index += 4) {
      await Promise.all(
        items.slice(index, index + 4).map(async (item) => {
          item.imageUrl = await getWebdevCover(item.href);
        }),
      );
    }

    return items;
  } catch (error) {
    console.error('Unable to load the web.dev feed:', error);
    return [];
  }
}
