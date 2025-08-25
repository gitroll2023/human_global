import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import '@/app/globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HumanEdge Academy - Global LMS Platform for Humanities Education',
  description: 'Leading global LMS platform for humanities education in the AI era. Master philosophy, critical thinking, AI ethics, and leadership with world-class instructors from Harvard, Stanford, MIT, and leading tech companies.',
  keywords: 'humanities education, philosophy courses, AI ethics training, critical thinking, leadership development, online LMS platform, digital humanities, liberal arts education, professional development, global education',
  authors: [{ name: 'HumanEdge Academy' }],
  creator: 'HumanEdge Academy',
  publisher: 'HumanEdge Academy',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://humanedgeacademy.com'),
  openGraph: {
    title: 'HumanEdge Academy - Global Humanities Education for the AI Era',
    description: 'Join 500,000+ professionals developing uniquely human skills through philosophy, ethics, critical thinking, and leadership courses.',
    url: 'https://humanedgeacademy.com',
    siteName: 'HumanEdge Academy',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HumanEdge Academy - Global LMS Platform',
    description: 'Transform your career with humanities education designed for the AI era.',
    creator: '@humanedgeacademy',
    site: '@humanedgeacademy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Load messages directly based on locale
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}