import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { LocaleProvider } from '@/i18n/LocaleProvider';

const relaway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcelo | Portfolio',
  description:
    'Portfólio de Marcelo Santana Silva, desenvolvedor front-end focado em interfaces modernas, performance e experiência do usuário.',
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
