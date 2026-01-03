'use client';

import { projects } from '@/content/projects';

export default function AdminProjectsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">Проекты</h2>

      <div className="rounded-lg border border-border bg-muted p-4">
        <p className="text-sm text-muted-foreground">
          Редактор проектов сделаем следующим шагом (CRUD в localStorage → потом Supabase).
        </p>
      </div>

      <ul className="space-y-3">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border border-border p-4 bg-background">
            <p className="font-semibold text-foreground">{p.title}</p>
            <p className="text-sm text-muted-foreground">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}