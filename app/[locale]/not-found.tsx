'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations();
  
  const getErrorMessage = (locale: string) => {
    switch(locale) {
      case 'ko':
        return {
          title: '404 - 페이지를 찾을 수 없습니다',
          subtitle: '요청하신 페이지가 존재하지 않거나 이동되었습니다.',
          homeButton: '홈으로 돌아가기',
          backButton: '이전 페이지로',
          searchButton: '강좌 검색'
        };
      case 'th':
        return {
          title: '404 - ไม่พบหน้าที่ค้นหา',
          subtitle: 'หน้าที่คุณกำลังมองหาไม่มีอยู่หรือถูกย้าย',
          homeButton: 'กลับหน้าหลัก',
          backButton: 'กลับหน้าที่แล้ว',
          searchButton: 'ค้นหาหลักสูตร'
        };
      default:
        return {
          title: '404 - Page Not Found',
          subtitle: 'The page you are looking for does not exist or has been moved.',
          homeButton: 'Back to Home',
          backButton: 'Go Back',
          searchButton: 'Search Courses'
        };
    }
  };

  // Get current locale from URL
  const locale = typeof window !== 'undefined' 
    ? window.location.pathname.split('/')[1] || 'en'
    : 'en';
    
  const messages = getErrorMessage(locale);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 py-8 max-w-2xl">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary/20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">😔</div>
          </div>
        </div>

        {/* Error Messages */}
        <h1 className="text-3xl font-bold mb-4">{messages.title}</h1>
        <p className="text-lg text-muted-foreground mb-8">
          {messages.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={`/${locale}`}>
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              {messages.homeButton}
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {messages.backButton}
          </Button>

          <Link href={`/${locale}/courses`}>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" />
              {messages.searchButton}
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            {locale === 'ko' ? '유용한 링크:' : 
             locale === 'th' ? 'ลิงก์ที่เป็นประโยชน์:' : 
             'Helpful Links:'}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href={`/${locale}/courses`} className="text-primary hover:underline">
              {locale === 'ko' ? '강좌 목록' : 
               locale === 'th' ? 'หลักสูตรทั้งหมด' : 
               'All Courses'}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={`/${locale}/programs`} className="text-primary hover:underline">
              {locale === 'ko' ? '프로그램' : 
               locale === 'th' ? 'โปรแกรม' : 
               'Programs'}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={`/${locale}/about`} className="text-primary hover:underline">
              {locale === 'ko' ? '소개' : 
               locale === 'th' ? 'เกี่ยวกับเรา' : 
               'About Us'}
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href={`/${locale}/contact`} className="text-primary hover:underline">
              {locale === 'ko' ? '문의' : 
               locale === 'th' ? 'ติดต่อ' : 
               'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}