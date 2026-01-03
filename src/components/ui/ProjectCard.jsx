import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <article className="rounded-lg border border-border p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold tracking-tight">
            <Link href={`/projects/${project.slug}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>
          <p className="text-sm text-muted-foreground">{project.description}</p>
        </div>

        {project.featured ? (
          <span className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium">
            Featured
          </span>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
