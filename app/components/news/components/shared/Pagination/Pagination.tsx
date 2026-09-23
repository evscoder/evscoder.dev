'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import s from './Pagination.module.scss';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  pageSize: number;
  totalItems: number;
  itemLabel: string;
  ariaLabel: string;
  onPageChange: (page: number) => void;
};

function getPageNumbers(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const pages: (number | string)[] = [1];
  const start = Math.max(2, Math.min(currentPage - 1, totalPages - 4));
  const end = Math.min(totalPages - 1, Math.max(currentPage + 1, 4));

  if (start > 2) {
    pages.push('start-gap');
  }

  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }

  if (end < totalPages - 1) {
    pages.push('end-gap');
  }

  pages.push(totalPages);

  return pages;
}

export function Pagination({ currentPage, totalPages, ariaLabel, onPageChange }: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={s.paginationFooter}>
      <nav className={s.pagination} aria-label={ariaLabel}>
        <button
          type="button"
          className={s.pageButton}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          aria-label="Предыдущая страница"
        >
          <ArrowLeft size={18} aria-hidden="true" />
        </button>
        {getPageNumbers(currentPage, totalPages).map((page) =>
          typeof page === 'number' ? (
            <button
              key={page}
              type="button"
              className={s.pageButton}
              aria-label={`Страница ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={page} className={s.pageGap} aria-hidden="true">
              …
            </span>
          ),
        )}
        <button
          type="button"
          className={s.pageButton}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          aria-label="Следующая страница"
        >
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </nav>
      <p className={s.paginationSummary} role="status" aria-live="polite" aria-atomic="true">
        <span>
          Страница {currentPage} из {totalPages}
        </span>
      </p>
    </div>
  );
}
