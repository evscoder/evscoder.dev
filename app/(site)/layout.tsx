import type { ReactNode } from "react";

import { SiteLayoutShell } from "@/app/components/layout/site-layout-shell";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <SiteLayoutShell>{children}</SiteLayoutShell>;
}
