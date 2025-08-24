'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { Clock, Users, Star, PlayCircle, ArrowRight } from 'lucide-react';

export function CoursesPreview() {
  const t = useTranslations('courses');
  const tCommon = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();
  const [showEnrollmentAlert, setShowEnrollmentAlert] = useState(false);
  
  const locale = pathname?.split('/')[1] || 'en';

  const popularCourses = [
    {
      id: 1,
      title: 'Introduction to Ancient Philosophy',
      category: 'Philosophy',
      instructor: {
        name: 'Dr. Sarah Mitchell',
        avatar: '/api/placeholder/40/40',
        initials: 'SM'
      },
      description: 'Explore the foundational ideas of Western philosophy from ancient Greece to the Hellenistic period.',
      duration: '12 weeks',
      lessons: 24,
      students: 2847,
      rating: 4.9,
      reviews: 312,
      level: 'Beginner',
      price: '$299',
      image: '/study/Introduction to Ancient Philosophy.jpg',
      categoryColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300'
    },
    {
      id: 2,
      title: 'World War II: Global Perspectives',
      category: 'History',
      instructor: {
        name: 'Prof. James Wilson',
        avatar: '/api/placeholder/40/40',
        initials: 'JW'
      },
      description: 'Examine WWII from multiple perspectives and understand its lasting impact on the modern world.',
      duration: '16 weeks',
      lessons: 32,
      students: 1924,
      rating: 4.8,
      reviews: 198,
      level: 'Intermediate',
      price: '$399',
      image: '/study/World War II Global Perspectives.jpg',
      categoryColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'
    },
    {
      id: 3,
      title: 'Shakespeare and the Renaissance',
      category: 'Literature',
      instructor: {
        name: 'Dr. Emily Chen',
        avatar: '/api/placeholder/40/40',
        initials: 'EC'
      },
      description: 'Dive deep into Shakespeare\'s works and their cultural context during the Renaissance period.',
      duration: '14 weeks',
      lessons: 28,
      students: 1567,
      rating: 4.9,
      reviews: 284,
      level: 'Intermediate',
      price: '$349',
      image: '/study/Shakespeare and the Renaissance.jpg',
      categoryColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300'
    },
    {
      id: 4,
      title: 'Art of the Italian Renaissance',
      category: 'Art History',
      instructor: {
        name: 'Dr. Marco Rossi',
        avatar: '/api/placeholder/40/40',
        initials: 'MR'
      },
      description: 'Discover the masterpieces and techniques that defined Renaissance art in Italy.',
      duration: '10 weeks',
      lessons: 20,
      students: 1234,
      rating: 4.7,
      reviews: 156,
      level: 'Beginner',
      price: '$279',
      image: '/study/Art of the Italian Renaissance.jpg',
      categoryColor: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Popular Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most engaging courses taught by world-renowned faculty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {popularCourses.map((course) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className={course.categoryColor}>
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">
                    {course.level}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl leading-tight mb-2">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center space-x-3 mb-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {course.instructor.initials}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-muted-foreground">
                        {course.instructor.name}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      {course.price}
                    </div>
                  </div>
                </div>
                <CardDescription className="leading-relaxed">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                    {course.rating} ({course.reviews})
                  </div>
                  <div className="flex items-center">
                    <PlayCircle className="w-4 h-4 mr-1" />
                    {course.lessons} lessons
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button 
                    className="w-full" 
                    onClick={() => setShowEnrollmentAlert(true)}
                  >
                    {t('card.enroll')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses">
            <Button size="lg" variant="outline" className="group">
              Browse All Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Enrollment Alert Dialog */}
      <AlertDialog open={showEnrollmentAlert} onOpenChange={setShowEnrollmentAlert}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{t('card.enrollmentAlert.title')}</AlertDialogTitle>
            <AlertDialogDescription>
              {t('card.enrollmentAlert.description')}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{t('card.enrollmentAlert.cancel')}</AlertDialogCancel>
            <AlertDialogAction onClick={() => router.push(`/${locale}/signup`)}>
              {t('card.enrollmentAlert.signUp')}
            </AlertDialogAction>
            <AlertDialogAction onClick={() => router.push(`/${locale}/login`)}>
              {t('card.enrollmentAlert.signIn')}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}