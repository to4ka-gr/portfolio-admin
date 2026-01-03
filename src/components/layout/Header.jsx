import Link from 'next/link';

const nav = [
  { href: '/', label: 'Главная' },
  { href: '/projects', label: 'Проекты' },
  { href: '/about', label: 'Обо мне' },
  { href: '/contact', label: 'Контакты' },
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          to4ka-gr
        </Link>

        <nav aria-label="Основная навигация">
          <ul className="flex items-center gap-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-black/80 hover:text-black focus:outline-none focus:ring-2 focus:ring-black/30 rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/admin"
          className="text-sm font-medium underline underline-offset-4 hover:no-underline focus:outline-none focus:ring-2 focus:ring-black/30 rounded"
        >
          Войти
        </Link>
      </div>
    </header>
  );
}