export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-muted-foreground">
        <p>© {year} to4ka-gr. Все права защищены.</p>
      </div>
    </footer>
  );
}
