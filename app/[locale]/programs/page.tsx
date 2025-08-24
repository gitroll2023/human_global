'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, GraduationCap, BookOpen, Award,
  Clock, Users, Globe, TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function ProgramsPage() {
  const router = useRouter();
  const t = useTranslations();

  // Auto-redirect to courses page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/courses');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  const programTypes = [
    {
      icon: BookOpen,
      title: 'Foundation Courses',
      description: 'Essential humanities skills for the AI era',
      duration: '4-6 weeks',
      students: '125K+',
      link: '/courses?category=foundation',
    },
    {
      icon: Award,
      title: 'Professional Certificates',
      description: 'Career-focused certifications that employers value',
      duration: '8-12 weeks',
      students: '89K+',
      link: '/courses?category=certificate',
    },
    {
      icon: GraduationCap,
      title: 'Specialization Programs',
      description: 'Deep expertise in specific humanities domains',
      duration: '3-6 months',
      students: '45K+',
      link: '/courses?category=specialization',
    },
    {
      icon: Globe,
      title: 'Global Partnerships',
      description: 'University credit and degree pathway programs',
      duration: '6-12 months',
      students: '23K+',
      link: '/courses?category=university',
    },
  ];

  const featuredPrograms = [
    {
      title: 'Critical Thinking in the AI Age',
      category: 'Foundation',
      duration: '6 weeks',
      level: 'Beginner',
      students: 15420,
      rating: 4.8,
      description: 'Develop essential critical thinking skills that complement AI capabilities',
    },
    {
      title: 'Digital Humanities Professional',
      category: 'Certificate',
      duration: '12 weeks',
      level: 'Intermediate',
      students: 8930,
      rating: 4.9,
      description: 'Master digital tools and methodologies for humanities research',
    },
    {
      title: 'Philosophy of Technology',
      category: 'Specialization',
      duration: '16 weeks',
      level: 'Advanced',
      students: 3240,
      rating: 4.7,
      description: 'Explore the philosophical implications of emerging technologies',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section with Redirect Notice */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Programs Overview
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Education Programs
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          Discover our comprehensive range of AI-era humanities education programs 
          designed to prepare you for the future of work.
        </p>
        
        {/* Redirect Notice */}
        <Card className="max-w-2xl mx-auto mb-8 border-2 border-blue-200 bg-blue-50">
          <CardContent className="p-6 text-center">
            <ArrowRight className="h-6 w-6 text-blue-600 mx-auto mb-2" />
            <p className="text-blue-800 font-medium mb-2">
              This page is being redirected to our Courses page
            </p>
            <p className="text-blue-600 text-sm mb-4">
              You'll be automatically redirected in a few seconds, or click below to go now.
            </p>
            <Link href="/courses">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                View All Courses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Program Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {programTypes.map((program, index) => {
          const Icon = program.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardHeader className="text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students}
                  </div>
                </div>
                <Link href={program.link}>
                  <Button variant="outline" className="w-full">
                    Explore Programs
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Programs */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPrograms.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{program.category}</Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <TrendingUp className="h-4 w-4 text-yellow-500" />
                    <span>{program.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students.toLocaleString()} students
                  </div>
                </div>
                <Badge variant="secondary" className="mb-3">
                  {program.level} Level
                </Badge>
                <Button className="w-full" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Our Programs */}
      <Card className="mb-12 border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Why Choose Our Programs?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">AI-Era Focused</h3>
              <p className="text-sm text-muted-foreground">
                Curriculum designed for the age of artificial intelligence
              </p>
            </div>
            <div>
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Global Recognition</h3>
              <p className="text-sm text-muted-foreground">
                Certificates recognized by employers worldwide
              </p>
            </div>
            <div>
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Expert Instructors</h3>
              <p className="text-sm text-muted-foreground">
                Learn from leading academics and industry professionals
              </p>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-sm text-muted-foreground">
                Skills that enhance your professional value
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our full catalog of courses and find the perfect program 
          to advance your career in the AI era.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Browse All Courses
            </Button>
          </Link>
          <Link href="/about">
            <Button size="lg" variant="outline">
              Learn About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}