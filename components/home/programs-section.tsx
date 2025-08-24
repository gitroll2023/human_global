'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { BookOpen, Brain, Palette, History, Globe, Languages, ArrowRight } from 'lucide-react';

export function ProgramsSection() {
  const t = useTranslations('homepage.programs');
  const tCommon = useTranslations('common');

  const programs = [
    {
      icon: Brain,
      title: t('philosophy'),
      description: 'Explore fundamental questions about existence, ethics, and human nature through classical and contemporary philosophical traditions.',
      duration: '4 Years',
      level: 'Bachelor',
      courses: '32 Courses',
      color: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10',
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'
    },
    {
      icon: History,
      title: t('history'),
      description: 'Examine the forces that shaped civilizations and understand how past events influence our present world.',
      duration: '4 Years',
      level: 'Bachelor',
      courses: '36 Courses',
      color: 'bg-gradient-to-br from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-600 dark:text-amber-400',
      badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
    },
    {
      icon: BookOpen,
      title: t('literature'),
      description: 'Analyze literary works from diverse cultures and time periods to understand human expression and creativity.',
      duration: '4 Years',
      level: 'Bachelor',
      courses: '28 Courses',
      color: 'bg-gradient-to-br from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      icon: Palette,
      title: t('artHistory'),
      description: 'Study the evolution of visual arts and their cultural significance across different civilizations and periods.',
      duration: '4 Years',
      level: 'Bachelor',
      courses: '30 Courses',
      color: 'bg-gradient-to-br from-rose-500/10 to-pink-500/10',
      iconColor: 'text-rose-600 dark:text-rose-400',
      badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300'
    },
    {
      icon: Globe,
      title: t('culturalStudies'),
      description: 'Investigate how cultures interact, evolve, and influence each other in our interconnected world.',
      duration: '4 Years',
      level: 'Bachelor',
      courses: '34 Courses',
      color: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      iconColor: 'text-blue-600 dark:text-blue-400',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
    },
    {
      icon: Languages,
      title: t('linguistics'),
      description: 'Explore the science of language, from its structure and evolution to its role in human cognition and society.',
      duration: '4 Years',
      level: 'Bachelor',
      courses: '26 Courses',
      color: 'bg-gradient-to-br from-violet-500/10 to-purple-500/10',
      iconColor: 'text-violet-600 dark:text-violet-400',
      badgeColor: 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${program.color}`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <Icon className={`w-6 h-6 ${program.iconColor}`} />
                    </div>
                    <Badge className={program.badgeColor}>
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4 text-sm text-muted-foreground">
                    <span>{program.duration}</span>
                    <span>{program.courses}</span>
                  </div>
                  <Link href="/programs" className="block">
                    <Button 
                      variant="outline" 
                      className="w-full group hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tCommon('learnMore')}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/programs">
            <Button size="lg" className="group">
              {tCommon('viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}