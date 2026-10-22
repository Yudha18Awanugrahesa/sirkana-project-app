import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { ServiceWorkerRegistration } from '@/components/service-worker-registration';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SIRKANA | Business Management Platform',
    template: '%s | SIRKANA',
  },
  description: 'Kelola stok, penjualan, dan laporan bisnis dalam satu platform.',
  applicationName: 'SIRKANA',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.svg',
    apple: '/pwa-192.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Sirkana',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F172A',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body>
        {children}
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
