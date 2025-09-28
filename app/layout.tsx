import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'ZenZv',
  description: 'Simple Image/Video Hosting',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="max-w-2xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
