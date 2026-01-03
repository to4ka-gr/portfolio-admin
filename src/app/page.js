import Link from 'next/link';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Home() {
  const featured = projects.find((p) => p.featured);

  return (
    <section className="space-y-10">
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Привет, я {profile.name}</h1>
        <p className="text-lg text-muted-foreground">{profile.title}</p>
        <p className="text-foreground max-w-2xl">{profile.bio}</p>

        <div className="flex gap-3">
          <Link
            href="/projects"
            className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Смотреть проекты
          </Link>
          <Link
            href="/contact"
            className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-black/5"
          >
            Связаться
          </Link>
        </div>
      </header>

      {featured ? (
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Главный проект</h2>
          <ProjectCard project={featured} />
        </div>
      ) : null}
    </section>
  );
}
