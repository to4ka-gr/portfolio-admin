import AdminGuard from '@/components/admin/AdminGuard';
import AdminNav from '@/components/admin/AdminNav';

export const metadata = {
  title: 'Admin — to4ka-gr',
};

export default function AdminLayout({ children }) {
  return (
    <AdminGuard>
      <section className="space-y-6">
        <header className="rounded-lg border border-border bg-background p-6">
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Админка</h1>
          <p className="text-muted-foreground text-sm">
            Пока всё хранится локально (localStorage). Потом подключим Supabase.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          <AdminNav />
          <div className="rounded-lg border border-border bg-background p-6">{children}</div>
        </div>
      </section>
    </AdminGuard>
  );
}