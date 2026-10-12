import { beforeEach, describe, expect, it, vi } from 'vitest';

import { getWebdevNews } from '@/app/components/news/api/webdev-feed';

import { GET } from './route';

vi.mock('@/app/components/news/api/webdev-feed', () => ({
  getWebdevNews: vi.fn(),
}));

describe('GET /api/webdev-news', () => {
  beforeEach(() => {
    vi.mocked(getWebdevNews).mockReset();
  });

  it('returns news with shared-cache headers', async () => {
    vi.mocked(getWebdevNews).mockResolvedValue([
      {
        title: 'A web.dev article',
        href: 'https://web.dev/example/',
        description: 'Description',
        publishedAt: '2026-09-23T00:00:00.000Z',
        imageUrl: null,
      },
    ]);

    const response = await GET();

    expect(response.status).toBe(200);
    expect(response.headers.get('Cache-Control')).toContain('s-maxage=3600');
    await expect(response.json()).resolves.toMatchObject({
      items: [{ href: 'https://web.dev/example/' }],
    });
  });

  it('returns 503 when the upstream feed is unavailable', async () => {
    vi.mocked(getWebdevNews).mockResolvedValue([]);

    const response = await GET();

    expect(response.status).toBe(503);
  });
});
