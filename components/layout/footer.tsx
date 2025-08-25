'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const t = useTranslations();

  const footerSections = [
    {
      title: t('footer.about.title'),
      links: [
        { href: '/about/mission', label: t('footer.about.mission') },
        { href: '/about/vision', label: t('footer.about.vision') },
        { href: '/about/values', label: t('footer.about.values') },
        { href: '/about/leadership', label: t('footer.about.leadership') },
      ],
    },
    {
      title: t('footer.academics.title'),
      links: [
        { href: '/programs', label: t('footer.academics.programs') },
        { href: '/courses', label: t('footer.academics.courses') },
        { href: '/faculty', label: t('footer.academics.faculty') },
        { href: '/research', label: t('footer.academics.research') },
      ],
    },
    {
      title: t('footer.support.title'),
      links: [
        { href: '/help', label: t('footer.support.help') },
        { href: '/contact', label: t('footer.support.contact') },
        { href: '/faq', label: t('footer.support.faq') },
        { href: '/technical-support', label: t('footer.support.technical') },
      ],
    },
    {
      title: t('footer.legal.title'),
      links: [
        { href: '/privacy', label: t('footer.legal.privacy') },
        { href: '/terms', label: t('footer.legal.terms') },
        { href: '/cookies', label: t('footer.legal.cookies') },
        { href: '/accessibility', label: t('footer.legal.accessibility') },
      ],
    },
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 mb-4 sm:mb-0">
            <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-4">
              <Image 
                src="/logo_symbol.png" 
                alt="HumanEdge Academy" 
                width={40} 
                height={40} 
                className="h-8 w-8 sm:h-10 sm:w-10"
              />
              <span className="font-bold text-lg sm:text-xl">{t('common.siteName')}</span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {t('common.tagline')}
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-6 sm:my-8" />

        {/* Bottom Section - Corporate Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Company Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">HumanEdge Academy</h4>
            <p className="text-xs text-muted-foreground">
              International Education Academy Corporate Platform Pte. Ltd.<br/>
              Singapore HQ: 1 Raffles Place, Tower One, Singapore 048616
            </p>
          </div>
          
          {/* Registration Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Legal Information</h4>
            <p className="text-xs text-muted-foreground">
              Singapore UEN: 201823456K<br/>
              US EIN: 98-1234567<br/>
              EU VAT: DE123456789
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Contact Us</h4>
            <p className="text-xs text-muted-foreground">
              Support: support@humanedgeacademy.com<br/>
              Partnership: partners@humanedgeacademy.com<br/>
              Phone: +65 6234 5678
            </p>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Copyright and Compliance */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2018-2025 IEACP Pte. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-primary">Cookies</Link>
            <span>•</span>
            <span>ISO 9001:2015 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}