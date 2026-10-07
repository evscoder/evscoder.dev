import { realWorldPerformance } from './content/real-world-performance';
import { scalingFrontendBeyondComponents } from '@/app/components/news/content/scaling-frontend-beyond-components';
import { renderingStrategy } from '@/app/components/news/content/rendering-strategy';
import { complexFilters } from '@/app/components/news/content/complex-filters';
import { designSystem } from '@/app/components/news/content/design-system';
import { NewsArticle } from '@/app/components/news/types';

export const newsArticles = [
  realWorldPerformance,
  renderingStrategy,
  complexFilters,
  scalingFrontendBeyondComponents,
  designSystem,
] as const satisfies readonly NewsArticle[];

export function getNewsArticle(id: string) {
  return newsArticles.find((article) => article.id === id);
}
