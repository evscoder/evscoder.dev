import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Panel } from '@/app/components/panel/Panel';
import { useSiteContext } from '@/app/components/layout/site-provider';

export function ProjectsPanel() {
  const { language } = useSiteContext();
  const ru = language === 'ru';
  return (
    <Panel className="lg:col-span-2">
      <section
        id="projects"
        className="detail-section projects-personal"
        aria-labelledby="projects-title"
      >
        <div>
          <p className="personal-kicker">
            <FolderGit2 size={18} aria-hidden="true" />
            PROJECTS / CODE
          </p>
          <h2 id="projects-title" className="detail-title">
            {ru ? 'Ближе к коду.' : 'Closer to the code.'}
          </h2>
          <p>
            {ru
              ? 'Мой профиль и публичные репозитории — на GitHub. Подробные разборы проектов пока не добавлены: для них нужны реальные задачи, моя зона ответственности и разрешённые к публикации скриншоты.'
              : 'My profile and public repositories are on GitHub. Detailed case studies have not been added yet: they need actual tasks, my responsibilities and screenshots cleared for publication.'}
          </p>
          <a
            className="personal-button"
            href="https://github.com/evscoder"
            target="_blank"
            rel="noreferrer"
          >
            github.com/evscoder
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="project-outline">
          <span className="personal-kicker">
            {ru ? 'Что будет в разборе проекта' : 'Inside a project case study'}
          </span>
          <ol>
            <li>{ru ? 'Контекст, задача и моя роль' : 'Context, task and my role'}</li>
            <li>{ru ? 'Стек и устройство приложения' : 'Stack and application structure'}</li>
            <li>
              {ru ? 'Сложность, решение и компромиссы' : 'Challenge, solution and trade-offs'}
            </li>
            <li>{ru ? 'Результат и скриншоты интерфейса' : 'Outcome and interface screenshots'}</li>
          </ol>
        </div>
      </section>
    </Panel>
  );
}
