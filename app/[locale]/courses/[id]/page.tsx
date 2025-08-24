'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Clock, Users, Star, Brain, BookOpen, Award, Play, 
  Check, Globe, Calendar, Video, FileText, Download,
  ArrowLeft, Share2, Heart, ShoppingCart, Zap
} from 'lucide-react';
import { getCourseById } from '@/data/courses';

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const t = useTranslations();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  // Get course data
  const course = getCourseById(params.id as string);

  // Fallback for unknown course
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/courses">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleEnroll = () => {
    // In a real app, this would handle payment
    router.push(`/pricing?course=${course.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-background to-background">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-12">
          <Link href="/courses" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-white/20 text-white border-white/30">
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                </Badge>
                <Badge className="bg-white/20 text-white border-white/30">
                  {course.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </Badge>
                {course.featured && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              
              <p className="text-lg opacity-90 mb-6">
                {course.description}
              </p>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <span className="text-white font-bold">
                      {course.instructor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{course.instructor.name}</p>
                    <p className="text-sm opacity-80">{course.instructor.title}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration} weeks</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.studentsEnrolled.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{course.rating} ({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </div>
              </div>
            </div>
            
            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="aspect-video bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                    <Dialog open={showVideo} onOpenChange={setShowVideo}>
                      <DialogTrigger asChild>
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
                          <Play className="w-5 h-5 mr-2" />
                          Preview Course
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl">
                        <DialogHeader>
                          <DialogTitle>Course Preview</DialogTitle>
                        </DialogHeader>
                        <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                          <p className="text-white">Video preview would play here</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold mb-2">
                      {course.originalPrice && (
                        <span className="text-lg line-through opacity-60 mr-2">
                          ${course.originalPrice}
                        </span>
                      )}
                      ${course.price}
                    </div>
                    {course.originalPrice && (
                      <Badge className="bg-green-500 text-white">
                        Save ${course.originalPrice - course.price}
                      </Badge>
                    )}
                  </div>
                  
                  {isEnrolled ? (
                    <Button size="lg" className="w-full bg-green-500 hover:bg-green-600">
                      <Check className="w-4 h-4 mr-2" />
                      Enrolled - Start Learning
                    </Button>
                  ) : (
                    <>
                      <Button 
                        size="lg" 
                        className="w-full bg-white text-blue-600 hover:bg-white/90 mb-3"
                        onClick={handleEnroll}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Enroll Now
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white hover:text-blue-600"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Add to Wishlist
                      </Button>
                    </>
                  )}
                  
                  <div className="mt-6 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>30-day money-back guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Lifetime access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>What You'll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {course.outcomes.map((outcome, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 mt-0.5" />
                          <span className="text-sm">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Course Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.syllabus.flatMap(week => week.topics).map((topic, idx) => (
                        <Badge key={idx} variant="secondary">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {course.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>This Course Includes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-primary" />
                      <span className="text-sm">{course.hours} hours of video content</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="text-sm">{course.lessons} lessons</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-primary" />
                      <span className="text-sm">Downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="text-sm">Certificate of completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="text-sm">Access on mobile and desktop</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary" />
                      <span className="text-sm">Lifetime access</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Share This Course</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="curriculum">
            <Card>
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
                <CardDescription>
                  {course.duration} weeks • {course.hours} hours • {course.lessons} lessons
                </CardDescription>
              </CardHeader>
              <CardContent>
                {course.syllabus && course.syllabus.length > 0 ? (
                  <div className="space-y-4">
                    {course.syllabus.map((week, idx) => (
                      <div key={idx} className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">
                          Week {week.week}: {week.title}
                        </h4>
                        <ul className="space-y-1">
                          {week.topics.map((topic, topicIdx) => (
                            <li key={topicIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <Play className="w-3 h-3" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">
                    Detailed curriculum will be available soon.
                  </p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>About the Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center text-white text-2xl font-bold">
                    {course.instructor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{course.instructor.name}</h3>
                    <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                    <p className="text-sm">{course.instructor.bio}</p>
                    
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div>
                        <div className="text-2xl font-bold">4.8</div>
                        <div className="text-sm text-muted-foreground">Instructor Rating</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">12</div>
                        <div className="text-sm text-muted-foreground">Courses</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">50K+</div>
                        <div className="text-sm text-muted-foreground">Students</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <CardDescription>
                  {course.rating} average rating • {course.reviews} reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold">{course.rating}</div>
                    <div className="flex items-center gap-1 my-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(course.rating) 
                              ? 'fill-current text-yellow-500' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground">Course Rating</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {/* Sample reviews */}
                  {[1, 2, 3].map((_, idx) => (
                    <div key={idx} className="border-t pt-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-sm font-medium">JD</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium">John Doe</span>
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-current text-yellow-500" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">2 weeks ago</p>
                          <p className="text-sm">
                            This course exceeded my expectations. The instructor's experience at OpenAI really shows
                            in the practical examples and real-world applications.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Related Courses */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Advanced AI Ethics</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Deep dive into ethical frameworks for AI development
                </p>
                <Link href="/courses/2">
                  <Button size="sm" variant="outline" className="w-full">
                    View Course
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Philosophy of Mind</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore consciousness and AI sentience questions
                </p>
                <Link href="/courses/3">
                  <Button size="sm" variant="outline" className="w-full">
                    View Course
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Human-AI Collaboration</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Master the art of working alongside AI systems
                </p>
                <Link href="/courses/4">
                  <Button size="sm" variant="outline" className="w-full">
                    View Course
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}