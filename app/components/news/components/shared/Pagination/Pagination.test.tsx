import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Pagination } from './Pagination';

const defaultProps = {
  currentPage: 1,
  totalPages: 10,
  pageSize: 6,
  totalItems: 60,
  itemLabel: 'новостей',
  ariaLabel: 'Пагинация новостей',
  onPageChange: vi.fn(),
};

describe('Pagination', () => {
  it('marks the current page and disables navigation at the start', () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByRole('navigation', { name: defaultProps.ariaLabel })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Страница 1' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    expect(screen.getByRole('button', { name: 'Предыдущая страница' })).toBeDisabled();
  });

  it('requests the selected page', async () => {
    const onPageChange = vi.fn();
    const user = userEvent.setup();

    render(<Pagination {...defaultProps} currentPage={5} onPageChange={onPageChange} />);
    await user.click(screen.getByRole('button', { name: 'Страница 6' }));

    expect(onPageChange).toHaveBeenCalledWith(6);
  });

  it('is not rendered when there is only one page', () => {
    const { container } = render(<Pagination {...defaultProps} totalPages={1} />);

    expect(container).toBeEmptyDOMElement();
  });
});
