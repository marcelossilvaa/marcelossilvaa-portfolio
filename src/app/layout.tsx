import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { TAB_TITLE } from '@/content/seo';

const relaway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: TAB_TITLE,
  metadataBase: new URL('https://marcelossilvaa-portfolio.vercel.app'),
  description:
    'Palpite fica no slide. O teste sobe. Variantes, segmentação e a leitura no Adobe Analytics e no GA4, em SaaS e Shopify.',
  openGraph: {
    title: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    description: 'Palpite fica no slide. O teste sobe.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    description: 'Palpite fica no slide. O teste sobe.',
    images: ['/og.png'],
  },
  verification: {
    google: 'kQDLyJ9I0syTc1U2mu0BW8bFuSsjzk6QB092QbI0Ogk',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
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
