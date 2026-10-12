'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useSiteContext } from '@/app/components/layout/site-provider';
import { ContentsSidebar } from '@/app/shared/ui/contents-sidebar/contents-sidebar';
import { Breadcrumbs } from '@/app/shared/ui/breadcrumbs/breadcrumbs';
import type { ProjectBlock } from './project-types';
import type { Project } from './projects';
import s from './projects.module.scss';

function CaseBlock({ block }: { block: ProjectBlock }) {
  switch (block.type) {
    case 'paragraph':
      return <p>{block.text}</p>;

    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';

      return (
        <List className={s.steps}>
          {block.items.map((item, index) => (
            <li key={index}>
              {item.title && (
                <>
                  <strong>{item.title}</strong>{' '}
                </>
              )}
              {item.text}
            </li>
          ))}
        </List>
      );
    }

    case 'image':
      return (
        <figure className={s.figure}>
          <Image {...block.image} alt={block.image.alt} sizes="(max-width: 900px) 100vw, 850px" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );

    case 'decisions':
      return (
        <div className={s.decisions}>
          {block.items.map((item, index) => (
            <div key={index}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      );
  }
}

export function ProjectDetails({ project }: { project: Project }) {
  const { language } = useSiteContext();
  const ru = language === 'ru';
  const caseStudy = project.caseStudy[language];

  return (
    <article className={s.page} lang={language} aria-labelledby="project-title">
      <div className="container">
        <Breadcrumbs
          ariaLabel={ru ? 'Хлебные крошки' : 'Breadcrumbs'}
          items={[
            { label: ru ? 'Главная' : 'Home', href: '/' },
            { label: ru ? 'Проекты' : 'Projects', href: '/projects' },
            { label: project.title },
          ]}
        />
        <header className={s.header}>
          <p className={s.eyebrow}>{caseStudy.eyebrow}</p>
          <h1 id="project-title">{project.title}</h1>
          <p className={s.lead}>{caseStudy.description}</p>
          <ul className={s.tags} aria-label={ru ? 'Стек проекта' : 'Project technologies'}>
            {project.stack.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.repository && (
            <a className={s.primary} href={project.repository} target="_blank" rel="noreferrer">
              {ru ? 'Исходный код на GitHub' : 'Source code on GitHub'}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </header>
        <Image
          {...project.image}
          alt={caseStudy.imageAlt}
          sizes="(max-width: 1200px) 100vw, 1200px"
          preload
        />
        <div className={s.caseLayout}>
          <ContentsSidebar
            sections={caseStudy.sections.map(({ id, label }) => ({ id, title: label }))}
            heading={ru ? 'В разборе' : 'In this case study'}
            ariaLabel={ru ? 'Содержание проекта' : 'Project contents'}
            minWidth={901}
            topOffset={115}
          />
          <div className={s.caseBody}>
            {caseStudy.sections.map((section) => (
              <section key={section.id} id={section.id}>
                {section.eyebrow && <p className={s.eyebrow}>{section.eyebrow}</p>}
                <h2>{section.title}</h2>
                {section.blocks.map((block, index) => (
                  <CaseBlock key={index} block={block} />
                ))}
              </section>
            ))}
            <Link className={s.link} href="/projects">
              {ru ? '← Все проекты' : '← All projects'}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
