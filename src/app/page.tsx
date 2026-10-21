import type { Metadata } from 'next';
import { Anton, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { getPageMetadata, getPersonJsonLd } from '@/content/seo';
import V2Experience from './v2/V2Experience';
import './v2/v2.css';

const displayFont = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-v2-display',
});

const sansFont = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-v2-sans',
});

const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-v2-mono',
});

export const metadata: Metadata = getPageMetadata('pt');

export default function Home() {
  return (
    <div className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPersonJsonLd('pt')) }}
      />
      <V2Experience locale="pt" />
    </div>
  );
}
