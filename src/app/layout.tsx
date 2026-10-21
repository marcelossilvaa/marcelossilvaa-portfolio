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
    default: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    template: '%s · Marcelo S Silva',
  },
  metadataBase: new URL('https://marcelossilvaa-portfolio.vercel.app'),
  description:
    'Desenvolvedor de CRO e experimentação: testes A/B e personalização com Adobe Target, Adobe Analytics e GA4, com base full stack.',
  openGraph: {
    title: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    description: 'Testes A/B e personalização que viram receita. Portfólio de CRO, growth engineering e full stack.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcelo Santana Silva · CRO, Experimentation & Growth Engineering',
    description: 'Testes A/B e personalização que viram receita.',
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
