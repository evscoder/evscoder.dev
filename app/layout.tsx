import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './tailwind.css';
import './globals.scss';

const monocraft = localFont({
  src: [
    {
      path: '../public/fonts/Monocraft-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Monocraft-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Monocraft-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-text',
});

const iceland = localFont({
  src: '../public/fonts/Iceland-Regular.woff2',
  variable: '--font-accent',
});

export const metadata: Metadata = {
  title: 'Evgeny Staroverov | Frontend Engineer',
  description:
    'Евгений Староверов — Senior Frontend Developer. Angular, React, TypeScript: сложные интерфейсы, архитектура приложений, API и производительность.',
  metadataBase: new URL('https://evstdev.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Евгений Староверов | Senior Frontend Developer',
    description:
      'Личная страница frontend-разработчика: стек, технические задачи, подход к коду и контакты.',
    url: '/',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'EVS.CODER',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      data-lang="ru"
      className={`${monocraft.variable} ${iceland.variable} theme-alt h-full antialiased`}
    >
      <body className="load min-h-full flex flex-col">{children}</body>
    </html>
  );
}
