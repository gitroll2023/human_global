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
      date: 'August 2025',
      title: 'First License Issuance',
      description: 'Exclusive rights for 5 cities: Seoul, Incheon, Suwon, Daejeon, Gwangju',
      completed: false,
    },
    {
      date: 'September 2025',
      title: 'Testing Centers Launch',
      description: 'Establish 10 testing centers for offline LMS development',
      completed: false,
    },
    {
      date: 'October 2025',
      title: 'Offline LMS Development',
      description: 'Develop Korean-localized offline learning management system',
      completed: false,
    },
    {
      date: 'First Half 2026',
      title: 'Second License Expansion',
      description: 'Exclusive territorial rights for Gangwon and Gyeongsang provinces',
      completed: false,
    },
    {
      date: 'Second Half 2026',
      title: 'Official Platform Launch',
      description: 'Launch educational platform for 50,000 students',
      completed: false,
    },
  ];

  const features = [
    {
      icon: TrendingUp,
      title: '100M+ KRW Annual Salary',
      description: 'AI Prompt Engineers earning top-tier salaries in Korea',
    },
    {
      icon: Globe,
      title: 'Korean Sovereign AI',
      description: 'Build Korea\'s independent AI ecosystem and protect national interests',
    },
    {
      icon: GraduationCap,
      title: 'Practical AI Skills',
      description: 'Master prompt engineering, AI tools, and digital leadership',
    },
    {
      icon: Users,
      title: 'Career Transformation',
      description: 'From office worker to AI specialist in 3-6 months',
    },
    {
      icon: Award,
      title: 'Global Certification',
      description: 'Internationally recognized Human Intelligence Specialist certificate',
    },
    {
      icon: Building,
      title: 'Corporate Partnerships',
      description: 'Direct placement with Samsung, LG, Naver, Kakao, and more',
    },
  ];

  const stats = [
    { value: '100M', label: 'KRW Avg Salary' },
    { value: '87%', label: 'Job Placement' },
    { value: '3-6', label: 'Months to Transform' },
    { value: '1M', label: '2030 Specialists' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-red-600 text-white">
          🇰🇷 Korean Sovereign AI Initiative
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Korea's Human Intelligence Platform for the AI Era
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join Korea's Sovereign AI movement. Train as an AI Prompt Engineer earning 100M+ KRW annually.
          Our platform transforms professionals into Human Intelligence Specialists who command AI, not compete with it.
        </p>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm font-semibold text-blue-900">
            💼 Average Graduate Salary: 80-150M KRW | 🎯 AI Prompt Engineers: 100M+ KRW | 🚀 Digital Leaders: 150M+ KRW
          </p>
        </div>
      </div>

      {/* Korean Sovereign AI Vision */}
      <Card className="mb-12 border-2 border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Korean Sovereign AI: Your Nation's AI Independence</CardTitle>
              <CardDescription className="text-base mt-2">
                Why Korea needs its own AI education model: Protect jobs, preserve culture, and lead the global AI economy.
                Learn to command AI in Korean thinking patterns, not Silicon Valley's.
              </CardDescription>
            </div>
            <Sparkles className="h-12 w-12 text-blue-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-white rounded-lg">
              <p className="text-2xl font-bold text-blue-600">100M KRW+</p>
              <p className="text-xs text-gray-600">AI Prompt Engineer Salary</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <p className="text-2xl font-bold text-purple-600">3 Months</p>
              <p className="text-xs text-gray-600">Career Transformation</p>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <p className="text-2xl font-bold text-green-600">87%</p>
              <p className="text-xs text-gray-600">Job Placement Rate</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Start Earning 100M KRW
            </Button>
            <Button variant="outline">
              View Success Stories
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
        <h2 className="text-3xl font-bold text-center mb-8">Development & Licensing Timeline</h2>
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

      {/* Humanities + AI Curriculum */}
      <div className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Become Superior to AI: Humanities + Technology Fusion
        </h2>
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-lg text-center mb-6">
            <span className="font-bold text-purple-700">AI can code, but can it lead?</span> 
            <span className="ml-2">Learn what makes humans irreplaceable in the AI era.</span>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-purple-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                  Philosophy for AI Command
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Critical thinking to evaluate AI outputs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Ethical judgment AI can never replicate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Strategic thinking beyond algorithms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  Literature for Prompt Mastery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Storytelling for compelling AI prompts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Creative writing for innovative solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Persuasion techniques AI lacks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="text-center">
          <Badge className="mb-4" variant="secondary">
            <TrendingUp className="h-4 w-4 mr-1" />
            Humanities + AI = 200% Salary Increase
          </Badge>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Our graduates don't just use AI - they command it with humanities wisdom. 
            This unique combination makes them irreplaceable leaders earning 100-200M KRW annually.
          </p>
        </div>
      </div>

      {/* Podcast & Media Section */}
      <Card className="mb-12 border-2 border-purple-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Korea Sovereign AI Podcast Series</CardTitle>
              <CardDescription className="text-base mt-2">
                Weekly discussions on how humanities makes you superior to AI
              </CardDescription>
            </div>
            <Badge className="bg-red-500 text-white">LIVE</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Episode 127: Why AI Can't Replace Philosophers</h4>
              <p className="text-xs text-muted-foreground">CEO Park Jung-ho discusses critical thinking superiority</p>
              <Badge className="mt-2" variant="outline">1.2M views</Badge>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Episode 126: From 40M to 150M KRW</h4>
              <p className="text-xs text-muted-foreground">Success story of humanities graduate commanding AI</p>
              <Badge className="mt-2" variant="outline">980K views</Badge>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Episode 125: Korean Sovereign AI Vision</h4>
              <p className="text-xs text-muted-foreground">Why Korea needs its own AI education model</p>
              <Badge className="mt-2" variant="outline">2.1M views</Badge>
            </div>
          </div>
          <div className="mt-6 flex gap-4">
            <Button variant="outline" className="flex-1">
              <Globe className="h-4 w-4 mr-2" />
              Listen on Podcast Platforms
            </Button>
            <Button variant="outline" className="flex-1">
              Subscribe to Newsletter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Humanities + AI = Career Success
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

      {/* Business Licensing Details */}
      <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl">Business Licensing Opportunity Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Why Korean Sovereign AI Matters</h3>
            <p className="text-muted-foreground">
              Korea must develop its own AI education model to protect 12 million jobs at risk from automation. 
              Our platform teaches you to command AI using Korean logic and thinking patterns, ensuring you lead the AI revolution, not become its victim.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Real Economic Impact</h3>
            <p className="text-muted-foreground">
              Our graduates are earning 100-150M KRW as AI Prompt Engineers at major corporations. 
              Transform from a 40M KRW office worker to a 100M KRW AI specialist. This isn't theory - it's happening now with our current students.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">CEO Park Jung-ho's Leadership</h3>
            <p className="text-muted-foreground">
              Led by CEO Park Jung-ho (Former SK Telecom Executive, Naver EdTech CEO), 
              our Korean operation integrates IEACP's global vision with Korea's unique educational philosophy.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Business Licensing Inquiries</CardTitle>
          <CardDescription>
            For territorial licensing inquiries, offline LMS development details, or technical specifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Licensing Email</p>
                <p className="text-sm text-muted-foreground">licensing-korea@humanedgeacademy.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-semibold">Korea Homepage</p>
                <p className="text-sm text-muted-foreground">Visit our Korean website for local contact details</p>
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
              <span className="font-semibold">Korea Headquarters:</span><br />
              Incheon, South Korea<br />
              <span className="text-xs text-muted-foreground mt-1">
                (Detailed address available on our Korean homepage)
              </span>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Korea's AI Revolution - Earn 100M KRW+
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Don't let AI replace you. Learn to command it. Join 50,000+ Koreans already transforming their careers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Start Your 100M KRW Journey
          </Button>
          <Link href="/contact">
            <Button size="lg" variant="outline">
              View Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}