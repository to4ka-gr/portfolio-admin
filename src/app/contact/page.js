import { profile } from '@/content/profile';

export const metadata = {
  title: 'Контакты — to4ka-gr',
};

export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Контакты</h1>

      <div className="rounded-lg border p-6 space-y-3">
        <a className="underline underline-offset-4" href={profile.links.github}>
          GitHub
        </a>
        <a className="underline underline-offset-4" href={profile.links.telegram}>
          Telegram
        </a>
        <a className="underline underline-offset-4" href={profile.links.email}>
          Email
        </a>
      </div>

      <p className="text-muted-foreground text-sm">Позже добавим отслеживание кликов и UTM.</p>
    </section>
  );
}
