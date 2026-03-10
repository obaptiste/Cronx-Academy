import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import UserHeader from '@/components/UserHeader';

export const metadata: Metadata = {
  title: 'Cronx Academy - Homeschooling with Sheena & Thalia',
  description:
    'Interactive learning modules for homeschool education featuring history, maths, wellbeing, and cultural studies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <UserHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
