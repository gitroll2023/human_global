'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, Globe, Award } from 'lucide-react';

export function FeaturesSection() {
  const t = useTranslations('homepage.features');

  const features = [
    {
      icon: Users,
      title: t('feature1.title'),
      description: t('feature1.description'),
      gradient: 'from-blue-500/10 to-purple-500/10',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Clock,
      title: t('feature2.title'),
      description: t('feature2.description'),
      gradient: 'from-green-500/10 to-emerald-500/10',
      iconColor: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Globe,
      title: t('feature3.title'),
      description: t('feature3.description'),
      gradient: 'from-orange-500/10 to-red-500/10',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Award,
      title: t('feature4.title'),
      description: t('feature4.description'),
      gradient: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4 px-2">
            {t('title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 bg-gradient-to-br ${feature.gradient} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <CardHeader className="text-center pb-2 sm:pb-4">
                  <div className="mx-auto mb-3 sm:mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center text-sm sm:text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}