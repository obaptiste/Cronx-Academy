import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AquaCore Academy | Pool Maintenance Training',
  description:
    'A full pool maintenance academy with authentication, interactive modules, compliance-focused training, and completion certification.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
