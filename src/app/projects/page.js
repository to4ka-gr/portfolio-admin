import { projects } from '@/content/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export const metadata = {
  title: 'Проекты — to4ka-gr',
  description: 'Список проектов.',
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Проекты</h1>
        <p className="text-black/70">То, что я строю и развиваю.</p>
      </header>

      {featured.length ? (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Главное</h2>
          <div className="grid gap-4">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Остальное</h2>
        <div className="grid gap-4">
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
