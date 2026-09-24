import './v2.css';
import { Anton, JetBrains_Mono, Space_Grotesk } from 'next/font/google';

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

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable}`}>
      {children}
    </div>
  );
}
