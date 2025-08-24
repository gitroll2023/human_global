'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, GraduationCap, Award, Globe, BookOpen,
  Star, MapPin, Calendar, ExternalLink, Mail,
  Linkedin, Twitter, Building2, Languages,
  TrendingUp, Brain, Heart, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function FacultyPage() {
  const t = useTranslations();

  const featuredFaculty = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Professor of Philosophy & AI Ethics',
      institution: 'Stanford University (Former)',
      location: 'San Francisco, CA',
      image: '/faculty/sarah-chen.jpg',
      rating: 4.9,
      students: 25400,
      courses: 12,
      expertise: ['AI Ethics', 'Philosophy of Mind', 'Critical Thinking', 'Technology Ethics'],
      bio: 'Leading researcher in AI ethics with 15+ years of academic experience. Author of "Human Values in the Age of AI" and advisor to major tech companies on ethical AI development.',
      languages: ['English', 'Mandarin'],
      achievements: [
        'UNESCO AI Ethics Advisory Committee',
        'IEEE Award for AI Ethics Research',
        'Stanford Teaching Excellence Award',
      ],
    },
    {
      name: 'Prof. Michael Roberts',
      title: 'Dean of Digital Humanities',
      institution: 'Oxford University (Former)',
      location: 'London, UK',
      image: '/faculty/michael-roberts.jpg',
      rating: 4.8,
      students: 18900,
      courses: 8,
      expertise: ['Digital Humanities', 'Literature Analysis', 'Cultural Studies', 'Research Methods'],
      bio: 'Former Dean at Oxford with 30 years in humanities education. Pioneer in applying digital technologies to traditional humanities research and pedagogy.',
      languages: ['English', 'French', 'German'],
      achievements: [
        'Digital Humanities Leadership Award',
        'Oxford Distinguished Teaching Medal',
        'Author of 5 academic books',
      ],
    },
    {
      name: 'Dr. Amara Okafor',
      title: 'Professor of Global Literature',
      institution: 'Harvard University (Visiting)',
      location: 'Cambridge, MA',
      image: '/faculty/amara-okafor.jpg',
      rating: 4.9,
      students: 15600,
      courses: 10,
      expertise: ['African Literature', 'Postcolonial Studies', 'Comparative Literature', 'Creative Writing'],
      bio: 'Award-winning author and scholar specializing in African and postcolonial literature. Expert in cross-cultural narrative analysis and global storytelling traditions.',
      languages: ['English', 'Yoruba', 'French', 'Swahili'],
      achievements: [
        'Commonwealth Writers\' Prize',
        'Harvard Excellence in Teaching Award',
        'UNESCO Cultural Diversity Fellowship',
      ],
    },
    {
      name: 'Dr. Kenji Tanaka',
      title: 'Professor of Eastern Philosophy',
      institution: 'University of Tokyo (Former)',
      location: 'Tokyo, Japan',
      image: '/faculty/kenji-tanaka.jpg',
      rating: 4.7,
      students: 12300,
      courses: 6,
      expertise: ['Buddhist Philosophy', 'Zen Studies', 'Mindfulness', 'East-West Philosophy'],
      bio: 'Renowned expert in Eastern philosophy and meditation practices. Bridges traditional Eastern wisdom with contemporary psychological and technological insights.',
      languages: ['Japanese', 'English', 'Mandarin'],
      achievements: [
        'International Buddhism Award',
        'Tokyo University Research Excellence',
        'Mindfulness in Education Pioneer',
      ],
    },
    {
      name: 'Dr. Elena Rodriguez',
      title: 'Professor of Applied Linguistics',
      institution: 'Universidad Complutense Madrid (Former)',
      location: 'Madrid, Spain',
      image: '/faculty/elena-rodriguez.jpg',
      rating: 4.8,
      students: 20100,
      courses: 14,
      expertise: ['Applied Linguistics', 'Language Learning', 'Cognitive Science', 'AI & Language'],
      bio: 'Expert in language acquisition and cognitive linguistics. Research focuses on how AI can enhance language learning while preserving cultural nuances.',
      languages: ['Spanish', 'English', 'Portuguese', 'Catalan'],
      achievements: [
        'European Linguistics Society Award',
        'UNESCO Language Preservation Medal',
        'Author of 8 linguistics textbooks',
      ],
    },
    {
      name: 'Dr. James Mitchell',
      title: 'Professor of History & Technology',
      institution: 'MIT (Former)',
      location: 'Boston, MA',
      image: '/faculty/james-mitchell.jpg',
      rating: 4.6,
      students: 14700,
      courses: 9,
      expertise: ['Technology History', 'Innovation Studies', 'Social Impact', 'Future Studies'],
      bio: 'Historian specializing in the social impact of technology. Expert in understanding how past technological revolutions can inform our AI-era transition.',
      languages: ['English', 'Spanish'],
      achievements: [
        'MIT Teaching Innovation Award',
        'History of Technology Society Medal',
        'TED Talk: "Learning from Past Tech Revolutions"',
      ],
    },
  ];

  const departmentStats = [
    {
      icon: Users,
      title: 'World-Class Faculty',
      value: '150+',
      description: 'Professors from top universities',
    },
    {
      icon: Globe,
      title: 'Global Diversity',
      value: '35',
      description: 'Countries represented',
    },
    {
      icon: Languages,
      title: 'Languages Taught',
      value: '20+',
      description: 'Multilingual instruction',
    },
    {
      icon: Award,
      title: 'Academic Awards',
      value: '500+',
      description: 'Combined achievements',
    },
  ];

  const departments = [
    {
      name: 'Philosophy & Ethics',
      faculty: 25,
      specialties: ['AI Ethics', 'Applied Philosophy', 'Critical Thinking', 'Logic & Reasoning'],
      lead: 'Dr. Sarah Chen',
    },
    {
      name: 'Literature & Creative Writing',
      faculty: 30,
      specialties: ['World Literature', 'Creative Writing', 'Narrative Analysis', 'Digital Storytelling'],
      lead: 'Dr. Amara Okafor',
    },
    {
      name: 'History & Cultural Studies',
      faculty: 28,
      specialties: ['Technology History', 'Cultural Studies', 'Social Impact', 'Global Perspectives'],
      lead: 'Dr. James Mitchell',
    },
    {
      name: 'Linguistics & Communication',
      faculty: 22,
      specialties: ['Applied Linguistics', 'Communication Theory', 'Language Technology', 'Cross-Cultural Communication'],
      lead: 'Dr. Elena Rodriguez',
    },
    {
      name: 'Digital Humanities',
      faculty: 20,
      specialties: ['Digital Research Methods', 'Data Visualization', 'Computational Analysis', 'Digital Archives'],
      lead: 'Prof. Michael Roberts',
    },
    {
      name: 'Eastern Studies & Mindfulness',
      faculty: 15,
      specialties: ['Eastern Philosophy', 'Mindfulness Studies', 'Meditation Practices', 'Wisdom Traditions'],
      lead: 'Dr. Kenji Tanaka',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          World-Class Faculty
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Learn from the Best
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Our distinguished faculty combines academic excellence with real-world expertise, 
          bringing you the highest quality education in AI-era humanities.
        </p>
      </div>

      {/* Faculty Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {departmentStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-primary">{stat.value}</CardTitle>
                <CardDescription className="font-semibold">{stat.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Featured Faculty */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Faculty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredFaculty.map((faculty, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{faculty.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{faculty.name}</CardTitle>
                <CardDescription className="text-sm">
                  <div className="mb-1">{faculty.title}</div>
                  <div className="text-xs text-muted-foreground">{faculty.institution}</div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faculty.bio}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {faculty.expertise.slice(0, 3).map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {faculty.expertise.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{faculty.expertise.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{faculty.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{faculty.courses} courses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{faculty.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Languages className="h-3 w-3" />
                    <span>{faculty.languages.length} languages</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    View Profile
                  </Button>
                  <Button size="sm" variant="ghost" className="px-2">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Departments */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Academic Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  {dept.name}
                </CardTitle>
                <CardDescription>
                  {dept.faculty} faculty members • Led by {dept.lead}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {dept.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Department
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Faculty Excellence */}
      <Card className="mb-12 border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-center mb-4">Faculty Excellence Standards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <GraduationCap className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Academic Excellence</h3>
              <p className="text-sm text-muted-foreground">
                PhD from top-tier universities with proven research records
              </p>
            </div>
            <div>
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Teaching Passion</h3>
              <p className="text-sm text-muted-foreground">
                Commitment to student success and innovative pedagogy
              </p>
            </div>
            <div>
              <Lightbulb className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">AI-Era Vision</h3>
              <p className="text-sm text-muted-foreground">
                Understanding of how to prepare students for the future
              </p>
            </div>
            <div>
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Global Perspective</h3>
              <p className="text-sm text-muted-foreground">
                International experience and cultural competency
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Join Our Faculty */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Distinguished Faculty
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Are you a world-class educator passionate about preparing students for the AI era? 
          We're always looking for exceptional faculty members.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Faculty Opportunities
            </Button>
          </Link>
          <Link href="/courses">
            <Button size="lg" variant="outline">
              View Our Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}