import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'to4ka-gr — Portfolio',
  description: 'Portfolio website with a private admin panel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-black">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-10">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}