'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Users, Globe, BookOpen } from 'lucide-react';

export default function MissionPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Target className="w-3 h-3 mr-1" />
          Our Mission
        </Badge>
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          To empower professionals worldwide with humanities education that develops uniquely human skills, 
          enabling them to thrive in an AI-transformed economy while preserving the richness of human 
          culture and thought.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardContent className="p-6">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Empower Individuals</h3>
            <p className="text-sm text-muted-foreground">
              Provide accessible, world-class humanities education to professionals seeking meaningful career transitions
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <Globe className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Global Reach</h3>
            <p className="text-sm text-muted-foreground">
              Bridge cultural and geographical divides through universal human knowledge and understanding
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <BookOpen className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Preserve Heritage</h3>
            <p className="text-sm text-muted-foreground">
              Keep humanities education relevant and vital in the digital age
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <Target className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold mb-2">Future-Ready Skills</h3>
            <p className="text-sm text-muted-foreground">
              Develop critical thinking, creativity, and emotional intelligence that AI cannot replicate
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-8">
          <blockquote className="text-lg italic text-center">
            "In a world increasingly shaped by artificial intelligence, our mission is to cultivate 
            the irreplaceable human qualities that define our humanity - wisdom, empathy, creativity, 
            and moral reasoning."
          </blockquote>
          <p className="text-center mt-4 text-muted-foreground">
            - HumanEdge Academy Foundation
          </p>
        </CardContent>
      </Card>
    </div>
  );
}