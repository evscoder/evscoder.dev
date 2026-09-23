import type { ReactNode } from 'react';

import s from './page-layout.module.scss';

type PageLayoutProps = {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
};

export function PageLayout({ children, footer, header }: PageLayoutProps) {
  return (
    <>
      <div className={'pointer-events-none fixed inset-0 z-1'}>
        <div className="pointer-events-none absolute -left-40 -top-52 h-[540px] w-[540px] rounded-full bg-cyan-400/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-48 top-16 h-[520px] w-[520px] rounded-full bg-violet-500/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-[-280px] left-[30%] h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-[110px]" />
      </div>
      {header}
      <div className={s['page-wrapper']}>
        <main id="main" tabIndex={-1} className={s['page-content']}>
          {children}
        </main>
        {footer}
      </div>
    </>
  );
}
