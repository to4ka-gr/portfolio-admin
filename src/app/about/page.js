import { profile } from '@/content/profile';

export const metadata = {
  title: 'Обо мне - to4ka-gr',
};

export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Обо мне</h1>

      <div className="rounded-lg border p-6 space-y-2">
        <p className="text-lg font-semibold">{profile.name}</p>
        <p className="text-muted-foreground">{profile.title}</p>
        <p className="text-muted-foreground">{profile.location}</p>
      </div>

      <p className="text-foreground leading-relaxed">{profile.bio}</p>
    </section>
  );
}
