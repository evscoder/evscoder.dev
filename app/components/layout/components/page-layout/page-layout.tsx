import type { ReactNode } from "react";

import s from "./page-layout.module.scss";

type PageLayoutProps = {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
};

export function PageLayout({
  children,
  footer,
  header,
}: PageLayoutProps) {
  return (
    <div className={s["page-wrapper"]}>
      {header}

      <main className={s["page-content"]}>{children}</main>

      {footer}
    </div>
  );
}
