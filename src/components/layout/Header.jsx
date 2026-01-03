'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle'), {
  ssr: false,
});

const nav = [
  { href: '/', label: 'Главная' },
  { href: '/projects', label: 'Проекты' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contact', label: 'Контакты' },
];

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="font-semibold tracking-tight text-foreground focus:outline-none focus:ring-2 focus:ring-border rounded"
        >
          to4ka-gr
        </Link>

        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-border rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/admin"
            className="text-sm font-medium underline underline-offset-4 text-foreground hover:no-underline focus:outline-none focus:ring-2 focus:ring-border rounded"
          >
            Войти
          </Link>
        </div>
      </div>
    </header>
  );
}
