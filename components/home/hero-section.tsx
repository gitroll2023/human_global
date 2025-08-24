'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, BookOpen, Globe, Trophy, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('homepage.hero');

  const stats = [
    { icon: Users, value: '50,000+', label: t('stats.students') },
    { icon: BookOpen, value: '500+', label: t('stats.courses') },
    { icon: Trophy, value: '200+', label: t('stats.instructors') },
    { icon: Globe, value: '120+', label: t('stats.countries') },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="container relative mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Title */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {t('title')}
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t('subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/programs">
              <Button size="lg" className="group">
                {t('cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-2 text-center"
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}