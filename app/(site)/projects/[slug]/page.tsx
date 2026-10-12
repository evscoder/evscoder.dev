import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetails } from '@/app/components/projects/ProjectDetails';
import { getProject, projects } from '@/app/components/projects/projects';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const caseStudy = project.caseStudy.ru;

  return {
    title: caseStudy.seoTitle ?? `${project.title} | EVS.CODER`,
    description: caseStudy.description,
    alternates: { canonical: project.href },
    openGraph: {
      title: project.title,
      description: caseStudy.description,
      url: project.href,
      type: 'article',
      images: [{ url: project.image.src }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
