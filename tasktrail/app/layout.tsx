// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import LayoutWrapper from '@/components/LayoutWrapper';

export const metadata: Metadata = {
  title: 'TaskTrail',
  description: 'Your Ultimate Project Management Companion',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
        <LayoutWrapper>
          <Navbar />
          <main className="pt-20">{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}
