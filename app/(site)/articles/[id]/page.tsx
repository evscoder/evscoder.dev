import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsArticle } from '@/app/components/news/NewsArticle';
import { getNewsArticle, newsArticles } from '@/app/components/news/model';

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return newsArticles.map(({ id }) => ({ id }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getNewsArticle(id);
  if (!article) notFound();
  return {
    title: `${article.title} | EVS.CODER`,
    description: article.description,
    alternates: { canonical: `/articles/${article.id}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      url: `/articles/${article.id}`,
      locale: 'ru_RU',
      siteName: 'EVS.CODER',
    },
    twitter: { card: 'summary', title: article.title, description: article.description },
  };
}
export default async function NewsPage({ params }: Props) {
  const { id } = await params;
  const article = getNewsArticle(id);
  if (!article) notFound();
  const currentIndex = newsArticles.findIndex((item) => item.id === id);
  const next =
    newsArticles.length > 1 ? newsArticles[(currentIndex + 1) % newsArticles.length] : undefined;

  return <NewsArticle article={article} nextArticle={next && { id: next.id, title: next.title }} />;
}
