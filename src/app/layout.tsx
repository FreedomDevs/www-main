import type { Metadata } from 'next';
import { Inter, M_PLUS_1, Manrope, Unbounded } from 'next/font/google';
import '../styles/globals.scss';
import { Header } from '@/src/components/header/Header';
import { NetworkBackground } from '@/src/components/background/NetworkBackground';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-unbounded',
});

export const metadata: Metadata = {
  title: 'ElysiaCloud',
  icons: {
    icon: [
      {
        url: '/logo.svg',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable}`}>
      <body>
        {/*<NetworkBackground />*/}
        <Header />
        {children}
      </body>
    </html>
  );
}
