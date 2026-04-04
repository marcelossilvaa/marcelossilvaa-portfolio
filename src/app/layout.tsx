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
    default: 'Marcelo S Silva · Front-end e-commerce, performance e conversão',
    template: '%s · Marcelo S Silva',
  },
  description:
    'Desenvolvedor front-end focado em e-commerce: Next.js, Shopify, performance web e experimentos de conversão. Projetos, cases e contato.',
  openGraph: {
    title: 'Marcelo S Silva · Front-end e-commerce e performance',
    description:
      'Portfólio com cases de e-commerce, arquitetura front-end e foco em resultado de negócio. Fale no WhatsApp ou veja os projetos.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcelo S Silva · Front-end e-commerce',
    description: 'Next.js, Shopify, performance e conversão para lojas e produtos digitais.',
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
