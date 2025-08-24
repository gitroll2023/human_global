'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const t = useTranslations('homepage.testimonials');

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Philosophy Graduate',
      program: 'Master of Philosophy',
      location: 'New York, USA',
      avatar: '/api/placeholder/60/60',
      initials: 'SJ',
      rating: 5,
      testimonial: 'The hybrid learning model is perfect. Online lectures combined with monthly in-person seminars at the Manhattan campus created an ideal learning environment. The networking opportunities were invaluable.',
      year: '2023',
      learningMode: 'Hybrid'
    },
    {
      id: 2,
      name: 'Dr. Ahmad Hassan',
      role: 'History Professor',
      program: 'PhD in Medieval History',
      location: 'Cairo, Egypt',
      avatar: '/api/placeholder/60/60',
      initials: 'AH',
      rating: 5,
      testimonial: 'The quarterly intensive workshops brought together scholars from across the MENA region. The blend of online research and in-person collaboration at regional centers elevated my doctoral work significantly.',
      year: '2022',
      learningMode: 'Online + Workshops'
    },
    {
      id: 3,
      name: 'Maria Rodriguez',
      role: 'Literature Student',
      program: 'Bachelor of Literature',
      location: 'Madrid, Spain',
      avatar: '/api/placeholder/60/60',
      initials: 'MR',
      rating: 5,
      testimonial: 'Attending weekend sessions at the Madrid center while studying online was transformative. The book clubs, author meetups, and cultural events enriched my literary education beyond measure.',
      year: '2023',
      learningMode: 'Hybrid'
    },
    {
      id: 4,
      name: 'James Thompson',
      role: 'Cultural Studies Graduate',
      program: 'Master of Cultural Studies',
      location: 'London, UK',
      avatar: '/api/placeholder/60/60',
      initials: 'JT',
      rating: 5,
      testimonial: "The London center's monthly cultural immersion programs complemented online coursework perfectly. Field trips to museums, theatres, and cultural sites made theoretical concepts come alive.",
      year: '2024',
      learningMode: 'Hybrid'
    },
    {
      id: 5,
      name: 'Dr. Yuki Tanaka',
      role: 'Art History Researcher',
      program: 'PhD in Art History',
      location: 'Tokyo, Japan',
      avatar: '/api/placeholder/60/60',
      initials: 'YT',
      rating: 5,
      testimonial: "The Tokyo center's partnership with local museums provided unparalleled access to Asian art collections. Combining this with global online resources created the perfect research environment.",
      year: '2023',
      learningMode: 'Hybrid'
    },
    {
      id: 6,
      name: 'Emma Wilson',
      role: 'Linguistics Graduate',
      program: 'Master of Linguistics',
      location: 'Toronto, Canada',
      avatar: '/api/placeholder/60/60',
      initials: 'EW',
      rating: 5,
      testimonial: "The Toronto center's language labs and conversation clubs perfectly complemented online theoretical studies. The multicultural environment provided real-world linguistic diversity.",
      year: '2024',
      learningMode: 'Hybrid'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
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
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location} • {testimonial.learningMode} • Class of {testimonial.year}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {testimonial.program}
                  </Badge>
                </div>

                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current text-yellow-500"
                    />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                  <blockquote className="text-sm leading-relaxed text-muted-foreground italic pl-4">
                    {testimonial.testimonial}
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join thousands of successful graduates from over 120 countries
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15,000+</div>
              <div className="text-sm text-muted-foreground">Alumni Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}