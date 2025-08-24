'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, Users, Building, TrendingUp, Globe, 
  Sparkles, ArrowRight, Activity, Target, Plane,
  Clock, Award, Network
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function GlobalMapSection() {
  const t = useTranslations('homepage.globalPresence');
  const [selectedRegion, setSelectedRegion] = useState<'asia' | 'americas' | 'europe'>('asia');

  const regions = {
    asia: {
      name: 'Asia Pacific',
      headquarters: 'Singapore',
      countries: 3,
      centers: 5,
      students: '42,000+',
      growth: '+18%',
      flag: '🇸🇬',
      description: 'Expanding education opportunities across Asia',
      highlights: [
        { country: 'Singapore', cities: ['Singapore'], status: 'Active', flag: '🇸🇬' },
        { country: 'Hong Kong', cities: ['Hong Kong'], status: 'Active', flag: '🇭🇰' },
        { country: 'Australia', cities: ['Sydney', 'Melbourne'], status: 'Active', flag: '🇦🇺' },
        { country: 'South Korea', cities: ['Incheon', 'Seoul'], status: 'Launching Aug 2025', flag: '🇰🇷' },
      ]
    },
    americas: {
      name: 'Americas',
      headquarters: 'New York, USA',
      countries: 6,
      centers: 12,
      students: '195,000+',
      growth: '+32%',
      flag: '🇺🇸',
      description: 'Pioneering humanities education in the Americas',
      highlights: [
        { country: 'United States', cities: ['New York (Global HQ)', 'San Francisco', 'Boston'], status: 'Active', flag: '🇺🇸' },
        { country: 'Canada', cities: ['Toronto', 'Vancouver'], status: 'Active', flag: '🇨🇦' },
        { country: 'Brazil', cities: ['Guarulhos (HQ)', 'São Paulo'], status: 'Launching Oct 2025', flag: '🇧🇷' },
        { country: 'Mexico', cities: ['Mexico City'], status: 'Active', flag: '🇲🇽' },
      ]
    },
    europe: {
      name: 'Europe',
      headquarters: 'Frankfurt, Germany',
      countries: 10,
      centers: 18,
      students: '156,000+',
      growth: '+28%',
      flag: '🇩🇪',
      description: 'Bridging classical humanities with modern careers',
      highlights: [
        { country: 'Germany', cities: ['Frankfurt (HQ)', 'Munich'], status: 'Active', flag: '🇩🇪' },
        { country: 'United Kingdom', cities: ['London', 'Manchester'], status: 'Active', flag: '🇬🇧' },
        { country: 'France', cities: ['Paris'], status: 'Active', flag: '🇫🇷' },
        { country: 'Netherlands', cities: ['Amsterdam'], status: 'Active', flag: '🇳🇱' },
      ]
    }
  };

  const currentRegion = regions[selectedRegion];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            <Globe className="w-3 h-3 mr-1" />
            Global Network
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            A Truly Global Education Company
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            With regional offices across three continents and operations in 16 countries, 
            we're bringing world-class humanities education to professionals worldwide.
          </p>
        </div>

        {/* Global Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold">16</div>
              <div className="text-sm text-muted-foreground">Countries</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">+4 in 2025</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-200 dark:border-green-800">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-green-600 dark:text-green-400" />
              <div className="text-3xl font-bold">382K+</div>
              <div className="text-sm text-muted-foreground">Active Students</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">+28% YoY</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-200 dark:border-purple-800">
            <CardContent className="p-6 text-center">
              <Building className="w-8 h-8 mx-auto mb-2 text-purple-600 dark:text-purple-400" />
              <div className="text-3xl font-bold">32</div>
              <div className="text-sm text-muted-foreground">Learning Centers</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">+8 in 2025</div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-200 dark:border-orange-800">
            <CardContent className="p-6 text-center">
              <Network className="w-8 h-8 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
              <div className="text-3xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Regional HQs</div>
              <div className="text-xs text-muted-foreground mt-1">24/7 Support</div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Headquarters */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Regional Headquarters & Operations</h3>
          
          {/* Region Selector */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {Object.entries(regions).map(([key, region]) => (
              <Button
                key={key}
                variant={selectedRegion === key ? "default" : "outline"}
                onClick={() => setSelectedRegion(key as 'asia' | 'americas' | 'europe')}
                className="gap-2"
              >
                <span className="text-lg">{region.flag}</span>
                {region.name}
              </Button>
            ))}
          </div>

          {/* Selected Region Details */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Region Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{currentRegion.flag}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{currentRegion.name}</h3>
                      <p className="text-muted-foreground">{currentRegion.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">Regional HQ:</span>
                      <span>{currentRegion.headquarters}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">Countries:</span>
                      <span>{currentRegion.countries}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">Centers:</span>
                      <span>{currentRegion.centers}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">Students:</span>
                      <span>{currentRegion.students}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium">Growth:</span>
                      <Badge variant="secondary" className="text-green-600">
                        {currentRegion.growth}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Right: Country List */}
                <div>
                  <h4 className="font-semibold mb-4">Country Operations</h4>
                  <div className="space-y-3">
                    {currentRegion.highlights.map((country, index) => (
                      <div key={index} className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{country.flag}</span>
                            <span className="font-medium">{country.country}</span>
                          </div>
                          <Badge 
                            variant={country.status.includes('Launching') ? 'default' : 'secondary'}
                            className={country.status.includes('Launching') ? 'bg-orange-500' : ''}
                          >
                            {country.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground ml-7">
                          {country.cities.join(' • ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 2025 Expansion */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">2025 Global Expansion</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Card className="relative overflow-hidden border-orange-300 dark:border-orange-700">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-bl-full" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇰🇷</span>
                  <div>
                    <h4 className="font-bold">South Korea</h4>
                    <p className="text-xs text-muted-foreground">August 2025</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Plane className="w-3 h-3" />
                    <span>Regional Office: Incheon</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>2 Cities (5 by 2026)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>Target: 10,000 Year 1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-pink-300 dark:border-pink-700">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-bl-full" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇯🇵</span>
                  <div>
                    <h4 className="font-bold">Japan</h4>
                    <p className="text-xs text-muted-foreground">September 2025</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Plane className="w-3 h-3" />
                    <span>HQ: Narita</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>2 Cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>Target: 8,000 Year 1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-green-300 dark:border-green-700">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-bl-full" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇧🇷</span>
                  <div>
                    <h4 className="font-bold">Brazil</h4>
                    <p className="text-xs text-muted-foreground">October 2025</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Plane className="w-3 h-3" />
                    <span>HQ: Guarulhos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>2 Cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>Target: 15,000 Year 1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-yellow-300 dark:border-yellow-700">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-bl-full" />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🇮🇳</span>
                  <div>
                    <h4 className="font-bold">India</h4>
                    <p className="text-xs text-muted-foreground">November 2025</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <Plane className="w-3 h-3" />
                    <span>HQ: Mumbai</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" />
                    <span>2 Cities</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-3 h-3" />
                    <span>Target: 20,000 Year 1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Reach Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Our Global Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
            <div className="space-y-8">
              {[
                { 
                  year: '2023', 
                  title: 'Foundation', 
                  description: 'Launched in USA, UK, Germany & Singapore',
                  icon: Award,
                  side: 'left' 
                },
                { 
                  year: '2024', 
                  title: 'Rapid Growth', 
                  description: 'Expanded to 12 countries, 350K+ students',
                  icon: TrendingUp,
                  side: 'right' 
                },
                { 
                  year: '2025', 
                  title: 'Asia Pacific Focus', 
                  description: 'Major expansion: Korea, Japan, Brazil, India',
                  icon: Globe,
                  side: 'left',
                  highlight: true 
                },
                { 
                  year: '2026', 
                  title: 'Global Leader', 
                  description: 'Target: 50 cities, 1M+ students worldwide',
                  icon: Target,
                  side: 'right' 
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={cn(
                      "flex items-center",
                      item.side === 'left' ? "flex-row-reverse" : ""
                    )}
                  >
                    <div className="w-1/2" />
                    <div className="relative z-10 flex items-center justify-center">
                      <div className={cn(
                        "w-12 h-12 rounded-full border-4 bg-background flex items-center justify-center",
                        item.highlight
                          ? "border-orange-500"
                          : "border-primary"
                      )}>
                        <Icon className={cn(
                          "w-5 h-5",
                          item.highlight ? "text-orange-500" : "text-primary"
                        )} />
                      </div>
                    </div>
                    <div className={cn(
                      "w-1/2 px-8",
                      item.side === 'left' ? "text-right" : ""
                    )}>
                      <Card className={cn(
                        "inline-block",
                        item.highlight && "border-orange-500 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
                      )}>
                        <CardContent className="p-4">
                          <div className="font-bold text-lg mb-1">{item.year}</div>
                          <div className="font-semibold mb-1">{item.title}</div>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Why Global Matters */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Clock className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">
                With offices across time zones, we provide round-the-clock support to all students
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Globe className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Local Expertise</h3>
              <p className="text-sm text-muted-foreground">
                Native educators and culturally adapted content for every region
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Network className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Global Network</h3>
              <p className="text-sm text-muted-foreground">
                Connect with professionals and opportunities worldwide through our network
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/partners/apply">
            <Button size="lg" className="group">
              Become a Regional Partner
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}