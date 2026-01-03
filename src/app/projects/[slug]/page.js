import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/content/projects';

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Проект не найден' };
  return {
    title: `${project.title} — to4ka-gr`,
    description: project.description,
  };
}

export default function ProjectDetailsPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <Link href="/projects" className="text-sm text-black/70 hover:underline">
          ← Назад к проектам
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-black/70">{project.description}</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Теги</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-xs">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Ссылки</h2>
        <ul className="list-disc pl-5 text-sm">
          {project.links.repo ? (
            <li>
              <a className="underline underline-offset-4" href={project.links.repo}>
                Репозиторий
              </a>
            </li>
          ) : (
            <li className="text-black/60">Репозиторий: скоро</li>
          )}
          {project.links.demo ? (
            <li>
              <a className="underline underline-offset-4" href={project.links.demo}>
                Демо
              </a>
            </li>
          ) : (
            <li className="text-black/60">Демо: скоро</li>
          )}
        </ul>
      </section>
    </article>
  );
}
