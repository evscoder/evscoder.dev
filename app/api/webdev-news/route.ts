import { getWebdevNews } from '@/app/components/news/api/webdev-feed';

export const revalidate = 3600;

export async function GET() {
  const items = await getWebdevNews();

  if (items.length === 0) {
    return Response.json({ message: 'Не удалось загрузить новости web.dev.' }, { status: 503 });
  }

  return Response.json(
    { items },
    {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    },
  );
}
