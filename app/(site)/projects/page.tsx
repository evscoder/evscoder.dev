import type { Metadata } from 'next';
import { Breadcrumbs } from '@/app/shared/ui/breadcrumbs/breadcrumbs';
import { ProjectCard } from '@/app/components/projects/ProjectCard';
import { projects } from '@/app/components/projects/projects';
import s from '@/app/components/projects/projects.module.scss';

export const metadata: Metadata = {
  title: 'Проекты | EVS.CODER',
  description: 'Проекты Евгения Староверова: интерфейсы, архитектура и технические решения.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <section className={s.page} lang="ru" aria-labelledby="projects-page-title">
      <div className="container">
        <Breadcrumbs items={[{ label: 'Главная', href: '/' }, { label: 'Проекты' }]} />
        <header className={s.header}>
          <p className={s.eyebrow}>PROJECTS / CODE</p>
          <h1 id="projects-page-title">Проекты</h1>
          <p className={s.lead}>
            От задачи до работающего интерфейса. Разборы приложений с реальными экранами и
            техническими решениями.
          </p>
        </header>
        <div className={s.projectList}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
