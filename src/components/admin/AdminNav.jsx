'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { clearAuth } from '@/lib/adminStorage';

const items = [
  { href: '/admin/profile', label: 'Профиль' },
  { href: '/admin/projects', label: 'Проекты' },
];

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <aside className="rounded-lg border border-border p-4 bg-background">
      <div className="mb-4">
        <p className="text-sm font-semibold text-foreground">Admin</p>
        <p className="text-xs text-muted-foreground">Локальный режим</p>
      </div>

      <nav aria-label="Навигация админки">
        <ul className="space-y-1">
          {items.map((it) => {
            const active = pathname === it.href;
            return (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className={[
                    'block rounded-md px-3 py-2 text-sm',
                    active ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                  ].join(' ')}
                >
                  {it.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <button
        type="button"
        onClick={() => {
          clearAuth();
          router.replace('/admin/login');
        }}
        className="mt-4 w-full rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-muted"
      >
        Выйти
      </button>
    </aside>
  );
}