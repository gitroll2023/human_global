'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Sparkles, TrendingUp, Lightbulb } from 'lucide-react';

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Eye className="w-3 h-3 mr-1" />
          Our Vision
        </Badge>
        <h1 className="text-4xl font-bold mb-6">Our Vision</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          A world where every professional has access to transformative humanities education, 
          creating a future workforce that combines technological capability with profound human wisdom.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <Card>
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Sparkles className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">By 2030</h3>
                <p className="text-muted-foreground">
                  Become the global leader in humanities-based professional education, serving 
                  5 million learners across 50 countries with culturally adapted programs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Impact Goal</h3>
                <p className="text-muted-foreground">
                  Enable 1 million successful career transitions, with graduates earning 40% higher 
                  incomes while finding greater purpose and fulfillment in their work.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-8 h-8 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Innovation Vision</h3>
                <p className="text-muted-foreground">
                  Pioneer new educational methodologies that seamlessly blend ancient wisdom with 
                  modern technology, creating the gold standard for adult learning.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">The Future We're Building</h2>
          <p className="text-muted-foreground">
            We envision a future where artificial intelligence handles routine tasks, 
            while humans excel in creativity, ethics, critical thinking, and emotional intelligence - 
            creating a more balanced, meaningful, and prosperous society for all.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}