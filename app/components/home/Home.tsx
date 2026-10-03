'use client';

import cn from 'clsx';
import { motion } from 'motion/react';

import { useSiteContext } from '@/app/components/layout/site-provider';
import { copy } from '@/app/components/home/model/site-content';
import {
  HeroSection,
  ArchitecturePanel,
  Background,
  MissionsPanel,
  NotesPanel,
  OverviewPanel,
  PerformancePanel,
  ProcessPanel,
  StackPanel,
} from '@/app/components/home/components';

import { ProjectsPanel } from './components/ProjectsPanel';
import { ContactPanel } from './components/ContactPanel';

function HomeComponent() {
  const { language } = useSiteContext();
  const content = copy[language];

  return (
    <section id="top" className={cn('portfolio-shell min-h-screen grow pb-10')}>
      <Background />
      <HeroSection />
      <div className="container max-md:px-0!">
        <motion.section
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="portfolio-sections relative mx-auto grid scroll-mt-28 gap-6 lg:grid-cols-2"
        >
          <OverviewPanel content={content} />
          <MissionsPanel />
          <StackPanel content={content} />
          <PerformancePanel />
          <ArchitecturePanel content={content} />
          <ProcessPanel content={content} />
          <ProjectsPanel />
          <NotesPanel content={content} />
          <ContactPanel />
        </motion.section>
      </div>
    </section>
  );
}

export default HomeComponent;
