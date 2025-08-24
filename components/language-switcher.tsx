'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { locales, localeNames, type Locale } from '@/i18n';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale() as Locale;

  const handleLocaleChange = (newLocale: string) => {
    // Remove the current locale from the pathname
    const segments = pathname.split('/');
    const currentLocaleIndex = segments.findIndex(seg => locales.includes(seg as Locale));
    
    let newPath: string;
    if (currentLocaleIndex !== -1) {
      segments[currentLocaleIndex] = newLocale;
      newPath = segments.join('/');
    } else {
      // If no locale in path, add it at the beginning
      newPath = `/${newLocale}${pathname}`;
    }
    
    router.push(newPath);
    router.refresh();
  };

  return (
    <Select value={currentLocale} onValueChange={handleLocaleChange}>
      <SelectTrigger className="w-[140px]">
        <Globe className="h-4 w-4 mr-2" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {localeNames[locale]}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}