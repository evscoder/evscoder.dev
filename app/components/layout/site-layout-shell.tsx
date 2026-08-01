"use client";

import type { ReactNode } from "react";

import { PageLayout } from "@/app/components/layout/components/page-layout/page-layout";
import { SiteFooter } from "@/app/components/site-footer/site-footer";
import { SiteHeader } from "@/app/components/site-header/site-header";

import { SiteProvider } from "./site-provider";

function SiteLayoutFrame({ children }: { children: ReactNode }) {
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      {children}
    </PageLayout>
  );
}

export function SiteLayoutShell({ children }: { children: ReactNode }) {
  return (
    <SiteProvider>
      <SiteLayoutFrame>{children}</SiteLayoutFrame>
    </SiteProvider>
  );
}
