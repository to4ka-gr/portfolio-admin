'use client';

import { useState } from 'react';
import { profile as baseProfile } from '@/content/profile';
import { getOverride, setOverride } from '@/lib/adminStorage';

function loadInitialForm() {
  return {
    name: getOverride('profile.name', baseProfile.name),
    title: getOverride('profile.title', baseProfile.title),
    location: getOverride('profile.location', baseProfile.location),
    bio: getOverride('profile.bio', baseProfile.bio),
  };
}

export default function AdminProfilePage() {
  const [form, setForm] = useState(loadInitialForm);

  function setField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function save() {
    setOverride('profile.name', form.name);
    setOverride('profile.title', form.title);
    setOverride('profile.location', form.location);
    setOverride('profile.bio', form.bio);
    alert('Сохранено локально (localStorage).');
  }

  function resetToBase() {
    setForm({
      name: baseProfile.name,
      title: baseProfile.title,
      location: baseProfile.location,
      bio: baseProfile.bio,
    });
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">Профиль</h2>

      <div className="grid gap-4">
        <label className="text-sm text-foreground">
          Имя
          <input
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
          />
        </label>

        <label className="text-sm text-foreground">
          Тайтл
          <input
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
            value={form.title}
            onChange={(e) => setField('title', e.target.value)}
          />
        </label>

        <label className="text-sm text-foreground">
          Локация
          <input
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
            value={form.location}
            onChange={(e) => setField('location', e.target.value)}
          />
        </label>

        <label className="text-sm text-foreground">
          Bio
          <textarea
            className="mt-1 min-h-28 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
            value={form.bio}
            onChange={(e) => setField('bio', e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={save}
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Сохранить
        </button>

        <button
          type="button"
          onClick={resetToBase}
          className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
        >
          Сбросить к базовому
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        Важно: это временно хранится в localStorage. На следующем шаге заменим на Supabase.
      </p>
    </div>
  );
}