'use client';

import cn from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import s from './loading-button.module.scss';

type LoadingButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingLabel?: string;
  icon?: ReactNode;
};

export function LoadingButton({
  isLoading = false,
  loadingLabel = 'Загружаем',
  icon,
  children,
  className,
  disabled,
  type = 'button',
  ...props
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(s.button, className)}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
    >
      <span className={cn(s.content, isLoading && s.hidden)} aria-hidden={isLoading}>
        {icon}
        {children}
      </span>
      <span className={cn(s.content, !isLoading && s.hidden)} aria-hidden={!isLoading}>
        <span className={s.spinner} aria-hidden="true" />
        <span>
          {loadingLabel}
          <span className={s.dots} aria-hidden="true">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </span>
      </span>
    </button>
  );
}
