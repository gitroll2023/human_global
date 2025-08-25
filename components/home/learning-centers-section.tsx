'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  MapPin, Users, Calendar, Star, Building, Globe, 
  GraduationCap, Clock, ChevronRight, Award, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

export function LearningCentersSection() {
  const t = useTranslations('homepage.learningCenters');

  const centers = [
    {
      country: 'South Korea',
      flag: '🇰🇷',
      centers: [
        {
          city: 'Test Program',
          name: 'Korea Offline Test Program - 5 Cities',
          address: 'Incheon, Seoul, Suwon, Daejeon, Gwangju',
          established: 'August 2025',
          students: 'Tester Recruitment',
          programs: ['Philosophy', 'History', 'Literature', 'Cultural Studies', 'Ethics'],
          rating: 0,
          reviews: 0,
          upcoming: true,
          highlight: 'Beta Testing',
          homepage: 'https://humanedgekorea.asia/',
          testimonial: {
            name: 'HumanEdge Korea',
            role: 'Official Announcement',
            text: 'We are excited to announce the beta testing program for our offline centers in 5 Korean cities starting August 2025. Join us as an early tester to shape the future of humanities education in Korea.',
            date: 'Recruiting Now'
          }
        }
      ]
    },
    {
      country: 'United States',
      flag: '🇺🇸',
      centers: [
        {
          city: 'New York',
          name: 'HumanEdge Manhattan Campus',
          address: 'New York',
          established: '2023',
          students: '1,200+',
          programs: ['Philosophy', 'History', 'Literature', 'Cultural Studies'],
          rating: 4.8,
          reviews: 342,
          upcoming: false,
          testimonial: {
            name: 'Michael Thompson',
            role: 'History Graduate',
            text: 'The in-person seminars at the Manhattan campus brought historical discussions to life. Meeting professors and peers face-to-face enhanced my learning immeasurably.',
            date: 'Class of 2024'
          }
        },
        {
          city: 'San Francisco',
          name: 'HumanEdge Bay Area Center',
          address: 'San Francisco',
          established: '2023',
          students: '800+',
          programs: ['Philosophy', 'Ethics', 'Cultural Studies'],
          rating: 4.9,
          reviews: 256,
          upcoming: false
        },
        {
          city: 'Boston',
          name: 'HumanEdge Boston Academy',
          address: 'Boston',
          established: '2024',
          students: '600+',
          programs: ['Literature', 'History', 'Philosophy'],
          rating: 4.8,
          reviews: 189,
          upcoming: false
        }
      ]
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      centers: [
        {
          city: 'Frankfurt',
          name: 'HumanEdge Germany Headquarters',
          address: 'Taunusanlage 11, 60329 Frankfurt am Main',
          established: '2023',
          students: '700+',
          programs: ['Philosophy', 'History', 'Art History'],
          rating: 4.9,
          reviews: 198,
          upcoming: false,
          testimonial: {
            name: 'Klaus Weber',
            role: 'Philosophy Professor',
            text: 'The Berlin center combines German academic tradition with modern teaching methods. The quality of discourse in our offline sessions is exceptional.',
            date: 'Since 2023'
          }
        },
        {
          city: 'Munich',
          name: 'HumanEdge Munich Center',
          address: 'Maximilianstrasse 35a, 80539 Munich',
          established: '2024',
          students: '400+',
          programs: ['Literature', 'Cultural Studies'],
          rating: 4.7,
          reviews: 112,
          upcoming: false
        }
      ]
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      centers: [
        {
          city: 'Singapore',
          name: 'HumanEdge Asia Pacific Hub',
          address: '1 Raffles Place, Tower One, Singapore 048616',
          established: '2023',
          students: '900+',
          programs: ['All Programs'],
          rating: 4.9,
          reviews: 267,
          upcoming: false,
          testimonial: {
            name: 'Chen Wei Lin',
            role: 'Cultural Studies Graduate',
            text: 'The Singapore hub serves as a melting pot of Asian and Western perspectives. The offline workshops here are truly transformative.',
            date: 'Class of 2024'
          }
        }
      ]
    }
  ];

  const offlineTestimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'New York, USA',
      program: 'Philosophy Intensive',
      rating: 5,
      text: 'The weekend intensives at the NYC campus were game-changing. Direct interaction with professors and the Socratic dialogue sessions made complex concepts crystal clear.',
      date: 'October 2024'
    },
    {
      name: 'Thomas Müller',
      location: 'Berlin, Germany',
      program: 'History Seminar',
      rating: 5,
      text: 'Attending the monthly seminars in Berlin added depth to my online studies. The archival visits and guest lectures were invaluable.',
      date: 'September 2024'
    },
    {
      name: 'Linda Tan',
      location: 'Singapore',
      program: 'Literature Workshop',
      rating: 5,
      text: 'The quarterly workshops in Singapore brought together students from across Asia. The cultural exchange enriched our literary discussions immensely.',
      date: 'August 2024'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            <Globe className="w-3 h-3 mr-1" />
            Global Learning Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Offline Learning Centers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the best of both worlds with our hybrid learning model. 
            Join local communities, attend in-person seminars, and connect with professionals in your area through our platform.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="p-6 text-center">
              <Building className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">6</div>
              <div className="text-sm text-muted-foreground">Learning Centers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Globe className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">3</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4,800+</div>
              <div className="text-sm text-muted-foreground">Offline Students</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">4.8/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Centers by Country */}
        <div className="space-y-12">
          {centers.map((countryData) => (
            <div key={countryData.country}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{countryData.flag}</span>
                <h3 className="text-2xl font-bold">{countryData.country}</h3>
                {countryData.country === 'South Korea' && (
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    Beta Testing - August 2025
                  </Badge>
                )}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {countryData.centers.map((center) => (
                  <Card key={center.city} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <CardTitle className="text-lg">{center.city}</CardTitle>
                          <CardDescription>{center.name}</CardDescription>
                        </div>
                        {center.upcoming && (
                          <Badge variant="secondary">Coming Soon</Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span>{center.address}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>{center.students === 'Tester Recruitment' ? 'Recruiting Beta Testers' : `${center.students} students`}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>{center.students === 'Tester Recruitment' ? 'Beta Test Starts' : 'Est.'} {center.established}</span>
                        </div>
                        {center.reviews > 0 && (
                          <div className="flex items-center gap-2 text-sm">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{center.rating}/5 ({center.reviews} reviews)</span>
                          </div>
                        )}
                        
                        <div className="pt-2">
                          <p className="text-xs text-muted-foreground mb-2">Available Programs:</p>
                          <div className="flex flex-wrap gap-1">
                            {center.programs.map((program) => (
                              <Badge key={program} variant="outline" className="text-xs">
                                {program}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {center.homepage && (
                          <div className="mt-3">
                            <a 
                              href={center.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                            >
                              <Globe className="w-4 h-4" />
                              Visit Korea Website →
                            </a>
                          </div>
                        )}

                        {center.testimonial && (
                          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                            <p className="text-sm italic mb-2">"{center.testimonial.text}"</p>
                            <div className="flex items-center gap-2">
                              <Avatar className="w-6 h-6">
                                <AvatarFallback className="text-xs">
                                  {center.testimonial.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-xs font-medium">{center.testimonial.name}</p>
                                <p className="text-xs text-muted-foreground">
                                  {center.testimonial.role} • {center.testimonial.date}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Offline Student Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            What Our Offline Students Say
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {offlineTestimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {testimonial.location}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-current text-yellow-500" />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {testimonial.program} • {testimonial.date}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/centers">
            <Button size="lg" className="group">
              Find a Center Near You
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}