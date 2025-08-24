import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
 
// Can be imported from a shared config
export const locales = ['en', 'es', 'pt', 'th', 'fr', 'de', 'ko'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  th: 'ไทย',
  fr: 'Français',
  de: 'Deutsch',
  ko: '한국어'
};
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as any)) notFound();
 
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});