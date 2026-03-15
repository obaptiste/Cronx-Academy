import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
});

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
});

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
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        <div className="site-shell">
          <div className="site-orb site-orb-left" aria-hidden />
          <div className="site-orb site-orb-right" aria-hidden />
          <div className="site-grid" aria-hidden />
          <main className="site-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
