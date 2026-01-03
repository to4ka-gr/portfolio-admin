import './globals.css';

export const metadata = {
  title: 'Portfolio Admin',
  description: 'Portfolio website with private admin panel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}