import Link from 'next/link';
import { FolderGit2 } from 'lucide-react';
import { Panel } from '@/app/components/panel/Panel';
import { useSiteContext } from '@/app/components/layout/site-provider';
import { ProjectCard } from '@/app/components/projects/ProjectCard';
import { projects } from '@/app/components/projects/projects';
import s from '@/app/components/projects/projects.module.scss';

export function ProjectsPanel() {
  const { language } = useSiteContext();
  const ru = language === 'ru';

  return (
    <Panel className="lg:col-span-2">
      <section
        id="projects"
        className="detail-section scroll-mt-28"
        aria-labelledby="projects-title"
      >
        <div className={s.sectionHeading}>
          <div>
            <p className="personal-kicker">
              <FolderGit2 size={18} aria-hidden="true" /> PROJECTS / CODE
            </p>
            <h2 id="projects-title" className="detail-title">
              {ru ? 'Избранные проекты.' : 'Selected projects.'}
            </h2>
          </div>
          <Link href="/projects" className={s.link}>
            {ru ? 'Все проекты' : 'All projects'} →
          </Link>
        </div>
        <p className={s.intro}>
          {ru
            ? 'Интерфейсы, задачи и технические решения из моей практики.'
            : 'Interfaces, challenges and technical decisions from my work.'}
        </p>
        <div className={s.projectList}>
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </div>
      </section>
    </Panel>
  );
}
