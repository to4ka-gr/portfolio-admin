'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isAuthed } from '@/lib/adminStorage';

export default function AdminGuard({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const authed = isAuthed();
  const isLogin = pathname === '/admin/login';
  const allowed = authed || isLogin;

  useEffect(() => {
    if (!allowed) router.replace('/admin/login');
  }, [allowed, router]);

  if (!allowed) {
    return (
      <div className="rounded-lg border border-border bg-muted p-6">
        <p className="text-muted-foreground text-sm">Перенаправляю на вход…</p>
      </div>
    );
  }

  return children;
}