'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { useSiteContext } from '@/app/components/layout/site-provider';
import type { Project } from './projects';
import s from './projects.module.scss';

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language } = useSiteContext();
  const ru = language === 'ru';
  const copy = project.copy[language];

  return (
    <article className={s.card}>
      <Link
        href={project.href}
        className={s.cover}
        aria-label={`${project.title} — ${ru ? 'разбор проекта' : 'case study'}`}
      >
        <div className={s.coverMeta}>
          <span className={s.coverLabel}>{project.platform}</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </div>
        <Image {...project.image} alt={copy.imageAlt} sizes="(max-width: 767px) 100vw, 55vw" />
        <span className={s.coverCaption}>{copy.summary}</span>
      </Link>
      <div className={s.cardBody}>
        <div className={s.cardMeta}>
          <p className={s.eyebrow}>{copy.category}</p>
          {index !== undefined && (
            <span className={s.projectNumber}>{String(index + 1).padStart(2, '0')}</span>
          )}
        </div>
        <h3>
          <Link href={project.href}>{project.title}</Link>
        </h3>
        <p>{copy.description}</p>
        <ul className={s.tags} aria-label={ru ? 'Технологии' : 'Technologies'}>
          {project.stack.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className={s.cardDetail}>
          <span>{ru ? 'Инженерная сторона' : 'Engineering perspective'}</span>
          <p>{copy.detail}</p>
        </div>
        <div className={s.actions}>
          <Link className={s.primary} href={project.href}>
            {ru ? 'Разбор проекта' : 'Case study'}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
          {project.repository && (
            <a className={s.link} href={project.repository} target="_blank" rel="noreferrer">
              <Code2 size={18} aria-hidden="true" /> GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
