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
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo_symbol.png" 
                alt="HumanEdge Academy" 
                width={40} 
                height={40} 
                className="h-10 w-10"
              />
              <span className="font-bold text-xl">{t('common.siteName')}</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('common.tagline')}
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* IEACN Corporate Info */}
        <div className="text-center space-y-4 mb-6">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <p className="font-bold text-lg text-primary mb-2">HumanEdge Academy</p>
            <p className="text-sm text-muted-foreground">AI-Era Humanities Education Platform</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold mb-2">Trusted by 500,000+ Professionals Worldwide</p>
            <p>Learn from former AI developers, philosophers, and thought leaders</p>
            <p>Email: support@humanedgeacademy.com | Partnership: partners@humanedgeacademy.com</p>
          </div>
          <div className="text-xs text-muted-foreground space-y-1 mt-4">
            <p>© 2025 HumanEdge Academy. All rights reserved.</p>
            <p>IEACN Member | Accredited Online Learning Platform</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}