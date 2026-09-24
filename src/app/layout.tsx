import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { LocaleProvider } from '@/i18n/LocaleProvider';

const relaway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Marcelo S Silva · Full stack, SaaS e CRO',
    template: '%s · Marcelo S Silva',
  },
  description:
    'Dev full stack com visão analítica, estratégica e técnica: SaaS ponta a ponta, e-commerce de alto tráfego e sistemas de CRO.',
  openGraph: {
    title: 'Marcelo S Silva · Full stack, SaaS e CRO',
    description:
      'Portfólio 2026 com produtos full stack, commerce e experimentação de conversão.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcelo S Silva · Full stack, SaaS e CRO',
    description: 'Next.js, SaaS, Shopify, performance e conversão para produtos digitais.',
  },
  verification: {
    google: 'kQDLyJ9I0syTc1U2mu0BW8bFuSsjzk6QB092QbI0Ogk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="icon"
          href="https://static.vecteezy.com/ti/vetor-gratis/p3/569520-icone-computador-desktop-gratis-vetor.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={relaway.className}>
        <LocaleProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </LocaleProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
