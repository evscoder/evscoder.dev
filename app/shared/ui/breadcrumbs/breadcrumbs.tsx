import Link from 'next/link';
import s from './breadcrumbs.module.scss';
import cn from 'clsx';

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: readonly BreadcrumbItem[];
  ariaLabel?: string;
};

export function Breadcrumbs({ items, ariaLabel = 'Хлебные крошки' }: BreadcrumbsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav
      className={cn(
        s.breadcrumbs,
        'max-md:-mx-(--container-gutter) max-md:px-(--container-gutter) invisible-scroll max-md:overflow-x-auto max-md:whitespace-nowrap',
      )}
      aria-label={ariaLabel}
    >
      <ol className={cn(s.list, 'max-md:flex-nowrap!')}>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={`${item.href ?? item.label}-${index}`} className={s.item}>
              {index > 0 && (
                <span className={s.separator} aria-hidden="true">
                  /
                </span>
              )}
              {item.href && !isCurrent ? (
                <Link href={item.href} className={s.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={s.label} aria-current={isCurrent ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
