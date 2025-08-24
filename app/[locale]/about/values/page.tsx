'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, BookOpen, Shield, Sparkles, Globe } from 'lucide-react';

export default function ValuesPage() {
  const values = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'We believe in the irreplaceable value of human wisdom, creativity, and empathy.'
    },
    {
      icon: BookOpen,
      title: 'Lifelong Learning',
      description: 'Education is a continuous journey of growth, discovery, and transformation.'
    },
    {
      icon: Globe,
      title: 'Global Inclusivity',
      description: 'Quality education should be accessible to all, regardless of geography or background.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest standards of academic excellence and ethical conduct.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We embrace new methods while honoring timeless educational principles.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Learning thrives in supportive communities where diverse perspectives enrich understanding.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Heart className="w-3 h-3 mr-1" />
          Our Values
        </Badge>
        <h1 className="text-4xl font-bold mb-6">Core Values</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          The principles that guide everything we do at HumanEdge Academy
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-8">
          <h2 className="text-xl font-bold mb-4 text-center">Our Promise</h2>
          <p className="text-center text-muted-foreground">
            These values aren't just words on a page - they're commitments we make to every learner, 
            educator, and partner. They shape our curriculum, guide our decisions, and inspire us to 
            continually improve and serve our global community better.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}