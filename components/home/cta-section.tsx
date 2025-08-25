'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight, BookOpen, Users, Award, Globe, Sparkles } from 'lucide-react';

export function CtaSection() {
  const tCommon = useTranslations('common');

  const highlights = [
    {
      icon: BookOpen,
      text: 'Access to 500+ courses',
      color: 'text-blue-400'
    },
    {
      icon: Users,
      text: 'Join 50,000+ students',
      color: 'text-green-400'
    },
    {
      icon: Award,
      text: 'Earn recognized certificates',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      text: 'Learn from anywhere',
      color: 'text-orange-400'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA content */}
          <div className="mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Transform Your Future Today
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of students worldwide who have chosen to explore the depths of human culture, 
              history, and thought through our world-class online programs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/programs">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="group px-8 py-6 text-lg font-semibold h-auto bg-white text-black hover:bg-white/90 shadow-xl"
                >
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${highlight.color}`} />
                    <p className="text-white/90 font-medium text-sm">
                      {highlight.text}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/60 text-sm mb-6">
              Trusted by students from leading universities worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/40">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Accredited Programs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">Expert Faculty</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                <span className="text-sm">Global Community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}