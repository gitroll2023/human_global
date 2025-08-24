'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, Calendar, Users, Building, GraduationCap, 
  Globe, Sparkles, TrendingUp, Award, BookOpen,
  Phone, Mail, Clock, CheckCircle
} from 'lucide-react';
import Link from 'next/link';

export default function KoreaPartnershipPage() {
  const t = useTranslations();

  const timeline = [
    {
      date: 'March 2025',
      title: 'Partnership Agreement Signed',
      description: 'Strategic partnership with leading Korean education company',
      completed: true,
    },
    {
      date: 'May 2025',
      title: 'Localization Begins',
      description: 'Korean language support and payment integration development',
      completed: true,
    },
    {
      date: 'July 2025',
      title: 'Beta Testing',
      description: 'Select group of Korean professionals test the platform',
      completed: false,
    },
    {
      date: 'August 2025',
      title: 'Official Launch',
      description: 'Full platform launch with Korean university partnerships',
      completed: false,
    },
    {
      date: 'Q4 2025',
      title: 'Expansion Phase',
      description: 'Corporate partnerships and government collaboration',
      completed: false,
    },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Full Korean Language Support',
      description: 'Complete platform localization including all courses and materials',
    },
    {
      icon: Building,
      title: 'Local Payment Methods',
      description: 'Support for Korean payment systems including Kakao Pay and Naver Pay',
    },
    {
      icon: GraduationCap,
      title: 'University Partnerships',
      description: 'Collaboration with top Korean universities for accredited programs',
    },
    {
      icon: Users,
      title: 'Local Support Team',
      description: '24/7 Korean language customer support and career coaching',
    },
    {
      icon: Award,
      title: 'Government Recognition',
      description: 'Working with Korean government for professional certification',
    },
    {
      icon: BookOpen,
      title: 'Localized Content',
      description: 'Courses tailored to Korean job market and cultural context',
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Expected Korean Learners Year 1' },
    { value: '10+', label: 'University Partners' },
    { value: '30+', label: 'Corporate Partners' },
    { value: '₩29,000', label: 'Starting Price (Monthly)' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          🇰🇷 Korea Launch - August 2025
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          HumanEdge Academy Launches in South Korea
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Partnering with Korea's leading education institutions to help professionals 
          transition careers in the AI era with world-class humanities education
        </p>
      </div>

      {/* Announcement Banner */}
      <Card className="mb-12 border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-red-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Special Launch Offer</CardTitle>
              <CardDescription className="text-base mt-2">
                First 10,000 Korean subscribers get 50% off for the first 3 months
              </CardDescription>
            </div>
            <Sparkles className="h-12 w-12 text-orange-500" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white">
              Join Waitlist
            </Button>
            <Button variant="outline">
              Corporate Inquiries
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-3xl font-bold text-primary">
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Timeline */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Launch Timeline</h2>
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className={`w-4 h-4 rounded-full ${
                  item.completed ? 'bg-green-600' : 'bg-gray-300'
                }`} />
                {index < timeline.length - 1 && (
                  <div className={`w-0.5 h-20 ${
                    item.completed ? 'bg-green-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant={item.completed ? 'default' : 'secondary'}>
                    {item.date}
                  </Badge>
                  {item.completed && <CheckCircle className="h-4 w-4 text-green-600" />}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Korean Learners Can Expect
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Partnership Info */}
      <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl">Our Korean Partnership</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Lead Partner</h3>
            <p className="text-muted-foreground">
              Strategic partnership with one of Korea's most innovative education technology companies, 
              bringing together global expertise and local market knowledge.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">University Collaborations</h3>
            <p className="text-muted-foreground">
              Working with Seoul National University, Yonsei University, and Korea University to 
              develop accredited programs and provide career transition support.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Government Support</h3>
            <p className="text-muted-foreground">
              Collaborating with the Korean Ministry of Education and Ministry of Employment and Labor 
              to address workforce reskilling needs in the AI era.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Get in Touch</CardTitle>
          <CardDescription>
            For partnership inquiries, corporate training, or general questions about our Korea launch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">korea@humanedgeacademy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-muted-foreground">+82 2-1234-5678</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Support Hours</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM KST</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-center">
              <span className="font-semibold">Seoul Office (Opening August 2025):</span><br />
              Gangnam-gu, Seoul, South Korea
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Be Part of Korea's AI-Era Education Revolution
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join 500,000+ global learners preparing for the future of work
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Join Korean Waitlist
          </Button>
          <Link href="/pricing">
            <Button size="lg" variant="outline">
              View Global Pricing
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}