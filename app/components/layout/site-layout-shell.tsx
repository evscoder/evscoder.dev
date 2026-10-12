'use client';

import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

import { PageLayout } from '@/app/components/layout/components/page-layout/page-layout';
import { SiteFooter } from '@/app/components/site-footer/site-footer';
import { SiteHeader } from '@/app/components/site-header/site-header';
import { ScrollToTop } from '@/app/shared/ui/scroll-to-top/scroll-to-top';
import { StoreProvider } from '@/app/store/store-provider';

import { SiteProvider } from './site-provider';

function SiteLayoutFrame({ children }: { children: ReactNode }) {
  return (
    <PageLayout footer={<SiteFooter />} header={<SiteHeader />}>
      {children}
      <ScrollToTop />
    </PageLayout>
  );
}

export function SiteLayoutShell({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <StoreProvider>
        <SiteProvider>
          <SiteLayoutFrame>{children}</SiteLayoutFrame>
        </SiteProvider>
      </StoreProvider>
    </MotionConfig>
  );
}
