import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next"

const relaway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marcelo | Portfolio',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
      <link rel="icon" href="https://static.vecteezy.com/ti/vetor-gratis/p3/569520-icone-computador-desktop-gratis-vetor.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={relaway.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
