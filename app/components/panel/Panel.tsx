import { useSiteContext } from '@/app/components/layout/site-provider';
import cn from 'clsx';
import { ReactNode } from 'react';

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export function Panel({ children, className = '' }: PanelProps) {
  const { isThemeAlt } = useSiteContext();

  return (
    <div
      className={cn(
        'portfolio-panel relative rounded-[32px]',
        isThemeAlt ? 'text-slate-100' : 'text-[var(--hero-text)]',
        className,
      )}
    >
      <div className="portfolio-panel__index" aria-hidden="true" />
      <div className="relative">{children}</div>
    </div>
  );
}
