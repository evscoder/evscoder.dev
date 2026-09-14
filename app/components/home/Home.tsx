"use client";

import cn from "clsx";
import { motion } from "motion/react";

import { useSiteContext } from "@/app/components/layout/site-provider";
import { copy } from "@/app/components/home/model/site-content";
import {
  HeroSection,
  ArchitecturePanel,
  Background,
  HighlightsPanel,
  MissionsPanel,
  NotesPanel,
  OverviewPanel,
  PerformancePanel,
  ProcessPanel,
  ProofPanel,
  QuoteBanner,
  StackPanel,
} from "@/app/components/home/components";

function HomeComponent() {
  const { isThemeAlt, language } = useSiteContext();
  const content = copy[language];

  return (
    <section
      id="top"
      className={cn(
        "portfolio-shell min-h-screen grow pb-10",
        isThemeAlt
          ? "bg-[#05070b] text-slate-100"
          : "bg-[var(--page-surface)] text-[var(--hero-text)]",
      )}
    >
      <Background />
      <HeroSection />
      <div className="container max-md:px-0!">
        <motion.section
          id="expertise"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="portfolio-sections relative mx-auto grid scroll-mt-28 gap-6 lg:grid-cols-2"
        >
          <OverviewPanel content={content} />
          <MissionsPanel content={content} />
          <StackPanel content={content} />
          <PerformancePanel content={content} />
          <ProofPanel content={content} />
          <HighlightsPanel content={content} />
          <ArchitecturePanel content={content} />
          <ProcessPanel content={content} />
          <NotesPanel content={content} />
          <QuoteBanner content={content} />
        </motion.section>
      </div>
    </section>
  );
}

export default HomeComponent;
