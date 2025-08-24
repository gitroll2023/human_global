import {getRequestConfig} from 'next-intl/server';
import {headers} from 'next/headers';

export default getRequestConfig(async () => {
  // Get the locale from the request headers or default to 'en'
  const requestHeaders = await headers();
  const locale = requestHeaders.get('x-locale') || 'en';

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});