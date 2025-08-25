'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Sparkles, Building2, Rocket, Globe } from 'lucide-react';
import { aiPartners } from '@/data/ai-partners';

export function AIPartnersShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Partners', icon: Globe },
    { id: 'research', label: 'Research', icon: Sparkles },
    { id: 'platform', label: 'Platform', icon: Building2 },
    { id: 'enterprise', label: 'Enterprise', icon: Building2 },
    { id: 'startup', label: 'Startups', icon: Rocket },
  ];

  const filteredPartners = selectedCategory === 'all' 
    ? aiPartners 
    : aiPartners.filter(partner => partner.category === selectedCategory);

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Partnership Network
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Collaborating with Leading AI Companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with leading AI companies to bring cutting-edge technology 
            and expertise to our humanities education platform. Together, we're shaping the future 
            of human-AI collaboration.
          </p>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setSelectedCategory}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-3xl mx-auto">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
              >
                <category.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.label}</span>
                <span className="sm:hidden">{category.label.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
              >
                {filteredPartners.map((partner, index) => (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredPartner(partner.id)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <Card className="group relative p-6 h-32 flex items-center justify-center cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-background to-muted/20">
                      {/* Logo Container */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="relative w-24 h-12 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                          {/* Using div with background image for better control */}
                          <div 
                            className="w-full h-full bg-contain bg-center bg-no-repeat filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            style={{ 
                              backgroundImage: `url(${partner.logoUrl})`,
                              filter: hoveredPartner === partner.id ? 'none' : 'grayscale(100%)'
                            }}
                            title={partner.name}
                          />
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredPartner === partner.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute inset-0 bg-gradient-to-t from-primary/95 to-primary/85 p-4 flex flex-col justify-between rounded-lg"
                          >
                            <div>
                              <h3 className="text-white font-semibold text-sm mb-1">
                                {partner.name}
                              </h3>
                              <p className="text-white/90 text-xs line-clamp-2">
                                {partner.partnership}
                              </p>
                            </div>
                            <a
                              href={partner.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/90 hover:text-white text-xs flex items-center gap-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Visit <ExternalLink className="w-3 h-3" />
                            </a>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Category Badge */}
                      <Badge 
                        className="absolute -top-2 -right-2 text-xs capitalize opacity-0 group-hover:opacity-100 transition-opacity"
                        variant="secondary"
                      >
                        {partner.category}
                      </Badge>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">7+</div>
            <div className="text-sm text-muted-foreground">Core AI Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">$2B+</div>
            <div className="text-sm text-muted-foreground">Combined Funding</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500K+</div>
            <div className="text-sm text-muted-foreground">Students Impacted</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Join Our AI Partnership Network
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for innovative AI companies to collaborate with. 
            Together, we can create transformative educational experiences that prepare 
            humanity for the AI era.
          </p>
          <Link href="/partners/apply">
            <Button size="lg" className="gap-2">
              Become a Partner
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}