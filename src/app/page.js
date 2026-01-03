export default function Home() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Привет, я Дмитрий</h1>
        <p className="text-lg text-black/70">
          Стоматолог-программист. Делаю продукты в web и медтехе.
        </p>
      </div>

      <div className="rounded-lg border p-6">
        <h2 className="text-xl font-semibold">Скоро тут будут проекты</h2>
        <p className="mt-2 text-black/70">
          Первый в списке — <span className="font-medium">Healthy (demo)</span>.
        </p>
      </div>
    </section>
  );
}