'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, BookOpen, Globe, Trophy, Users, Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('homepage.hero');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideo, setShowVideo] = useState(true);

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
      
      {/* Korea Expansion Video Section */}
      {showVideo && (
        <div className="container relative mx-auto px-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
              <div className="p-6 pb-0">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <Badge className="mb-3 bg-orange-500 text-white">
                      <Globe className="w-3 h-3 mr-1" />
                      New Expansion
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      HumanEdge Academy Launches in South Korea
                    </h2>
                    <p className="text-muted-foreground">
                      Discover why we're bringing AI-era humanities education to Korea's dynamic market
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowVideo(false)}
                    className="ml-4"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="relative group">
                <video
                  id="korea-video"
                  className="w-full aspect-video object-cover"
                  poster="/korea_movie/poster.jpg"
                  muted={isMuted}
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/korea_movie/Academy_vs.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const video = document.getElementById('korea-video') as HTMLVideoElement;
                          if (isPlaying) {
                            video.pause();
                          } else {
                            video.play();
                          }
                        }}
                        className="text-white hover:bg-white/20"
                      >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          const video = document.getElementById('korea-video') as HTMLVideoElement;
                          video.muted = !isMuted;
                          setIsMuted(!isMuted);
                        }}
                        className="text-white hover:bg-white/20"
                      >
                        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const video = document.getElementById('korea-video') as HTMLVideoElement;
                        if (video.requestFullscreen) {
                          video.requestFullscreen();
                        }
                      }}
                      className="text-white hover:bg-white/20"
                    >
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Play Button Overlay (when paused) */}
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                    onClick={() => {
                      const video = document.getElementById('korea-video') as HTMLVideoElement;
                      video.play();
                    }}
                  >
                    <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 pt-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold">Korea Launch:</span> August 2025 • 
                    <span className="ml-2">Seoul & Incheon Centers</span>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/partners/korea">
                      <Button variant="outline" size="sm">
                        Learn More About Korea
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </Link>
                    <Link href="/partners/apply">
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Become a Partner
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      )}
      
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