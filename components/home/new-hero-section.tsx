'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Users, Globe, BookOpen, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function NewHeroSection() {
  const t = useTranslations('homepage.hero');

  const stats = [
    { icon: Users, value: '500,000+', label: t('stats.students') },
    { icon: Globe, value: '20', label: t('stats.countries') },
    { icon: BookOpen, value: '200+', label: t('stats.courses') },
    { icon: TrendingUp, value: '87%', label: t('stats.completion') },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-background to-background">
      {/* AI Era Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <Link href="/courses" className="hover:opacity-90 transition-opacity">
            <Badge className="bg-white/20 text-white border-white/30 cursor-pointer hover:bg-white/30">
              <Sparkles className="w-3 h-3 mr-1" />
              New Courses
            </Badge>
          </Link>
          <span className="text-sm md:text-base font-medium">
            Learn from former OpenAI & Google AI developers about ethics and philosophy
          </span>
          <Link href="/courses" className="text-sm underline hover:no-underline flex items-center gap-1">
            Explore Courses
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25" />
      
      <div className="container relative mx-auto px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* IEACN Badge */}
          <div className="flex flex-col items-center gap-2 mb-6">
            <Badge variant="outline" className="px-4 py-2 text-sm border-blue-200 bg-blue-50">
              <Globe className="h-4 w-4 mr-2 text-blue-600" />
              International Education Academy Corporate Network (IEACN)
            </Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm border-purple-200 bg-purple-50">
              <Sparkles className="h-4 w-4 mr-2 text-purple-600" />
              Preparing 500,000+ professionals for the AI economy
            </Badge>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {t('title')}
          </h1>
          
          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/pricing">
              <Button size="lg" className="group min-w-[200px] bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                {t('cta')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                {t('secondaryCta')}
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-day money back guarantee
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6 text-center border-2 hover:border-blue-200 transition-colors">
                  <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Trusted payment partners</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}