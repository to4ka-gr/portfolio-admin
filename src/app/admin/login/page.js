'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthed, setAuthed } from '@/lib/adminStorage';

export default function AdminLoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAuthed()) router.replace('/admin/profile');
  }, [router]);

  function onSubmit(e) {
    e.preventDefault();
    setError('');

    // ВРЕМЕННО: простой PIN. Потом заменим на Supabase Auth.
    if (pin === '1234') {
      setAuthed(true);
      router.replace('/admin/profile');
      return;
    }
    setError('Неверный PIN.');
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">Вход в админку</h1>
      <p className="text-muted-foreground text-sm">
        Временная защита. PIN сейчас захардкожен: <span className="font-medium">1234</span>.
      </p>

      <form onSubmit={onSubmit} className="space-y-3 max-w-sm">
        <label className="block text-sm text-foreground">
          PIN
          <input
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-foreground"
            inputMode="numeric"
            autoFocus
          />
        </label>

        {error ? <p className="text-sm text-red-600">{error}</p> : null}

        <button
          type="submit"
          className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
        >
          Войти
        </button>
      </form>
    </section>
  );
}