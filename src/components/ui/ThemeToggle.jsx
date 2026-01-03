'use client';

import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`rounded-md border border-border px-3 py-1 text-xs hover:bg-muted ${
          theme === 'light' ? 'bg-muted' : ''
        }`}
      >
        Light
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`rounded-md border border-border px-3 py-1 text-xs hover:bg-muted ${
          theme === 'dark' ? 'bg-muted' : ''
        }`}
      >
        Dark
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        className={`rounded-md border border-border px-3 py-1 text-xs hover:bg-muted ${
          theme === 'system' ? 'bg-muted' : ''
        }`}
      >
        System
      </button>
    </div>
  );
}
