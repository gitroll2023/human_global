'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import type { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const t = useTranslations('courses.card');
  const locale = useLocale();

  // Use course title and description directly (translations are handled by the UI)
  const title = course.title;
  const description = course.description;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      {/* Course Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        <Image
          src={course.thumbnail}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4">
          <Badge className={getLevelColor(course.level)}>
            {t(course.level)}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {description}
        </p>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        {/* Instructor */}
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={course.instructor.avatar} />
            <AvatarFallback>
              {course.instructor.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {course.instructor.name}
            </p>
            <p className="text-xs text-muted-foreground">{t('instructor')}</p>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{course.duration} {t('weeks')}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons} {t('lessons')}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{course.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold">${course.price}</span>
          {course.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${course.originalPrice}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 space-x-2">
        <Button asChild className="flex-1">
          <Link href={`/courses/${course.id}`}>
            {t('viewDetails')}
          </Link>
        </Button>
        <Button variant="outline" className="flex-1">
          {t('preview')}
        </Button>
      </CardFooter>
    </Card>
  );
}