'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, Phone, MapPin, Globe, Clock, MessageSquare,
  Building2, Users, GraduationCap, HeadphonesIcon
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const t = useTranslations();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      details: 'support@humanedge-academy.com',
      description: 'Get help within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      details: '+1 (617) 495-2000',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'Marina Bay Financial Centre',
      description: '8 Marina Boulevard, Singapore 018981',
    },
    {
      icon: Globe,
      title: 'Global Offices',
      details: '20+ Countries',
      description: 'Local support worldwide',
    },
  ];

  const departments = [
    {
      icon: GraduationCap,
      name: 'Academic Support',
      email: 'academic@humanedge-academy.com',
      description: 'Course questions, curriculum support, academic guidance',
    },
    {
      icon: Users,
      name: 'Corporate Training',
      email: 'corporate@humanedge-academy.com',
      description: 'Enterprise solutions, bulk enrollments, custom programs',
    },
    {
      icon: Building2,
      name: 'Partnerships',
      email: 'partnerships@humanedge-academy.com',
      description: 'University partnerships, institutional collaborations',
    },
    {
      icon: HeadphonesIcon,
      name: 'Technical Support',
      email: 'tech@humanedge-academy.com',
      description: 'Platform issues, login problems, technical assistance',
    },
  ];

  const offices = [
    {
      country: 'Singapore',
      address: 'Marina Bay Financial Centre Tower 3, 8 Marina Boulevard, Singapore 018981',
      phone: '+65 6485 3100',
      timezone: 'GMT+8',
    },
    {
      country: 'United States',
      address: '50 Federal Street, Suite 600, Boston, MA 02110',
      phone: '+1 (617) 495-2000',
      timezone: 'GMT-5',
    },
    {
      country: 'United Kingdom',
      address: '30 Finsbury Square, London EC2A 1AG',
      phone: '+44 20 7882 5555',
      timezone: 'GMT+0',
    },
    {
      country: 'South Korea',
      address: '321 Seoul Education Tower, Gangnam-gu',
      phone: '+82 2 1234 5678',
      timezone: 'GMT+9',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Contact HumanEdge Academy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have questions about our AI-era humanities education programs? 
          Our global team is here to help you succeed in your learning journey.
        </p>
      </div>

      {/* Quick Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{info.title}</CardTitle>
                <CardDescription className="font-semibold">{info.details}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Contact Form */}
        <Card className="border-2">
          <CardHeader>
            <MessageSquare className="h-8 w-8 text-primary mb-2" />
            <CardTitle className="text-2xl">Send us a Message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you within 24 hours
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>

            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Course inquiry" />
            </div>

            <div>
              <Label htmlFor="department">Department</Label>
              <select 
                id="department" 
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select Department</option>
                <option value="academic">Academic Support</option>
                <option value="corporate">Corporate Training</option>
                <option value="partnerships">Partnerships</option>
                <option value="technical">Technical Support</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message" 
                placeholder="Please describe your inquiry in detail..."
                rows={5}
              />
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Send Message
            </Button>
          </CardContent>
        </Card>

        {/* Departments */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Contact by Department</h2>
          <div className="space-y-4">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{dept.name}</h3>
                        <a 
                          href={`mailto:${dept.email}`} 
                          className="text-primary hover:underline mb-2 block"
                        >
                          {dept.email}
                        </a>
                        <p className="text-sm text-muted-foreground">{dept.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* FAQ and Help Links */}
      <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Quick Answers?</h2>
          <p className="text-muted-foreground mb-6">
            Check out our comprehensive resources for immediate assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq">
              <Button size="lg" variant="outline">
                Browse FAQ
              </Button>
            </Link>
            <Link href="/help">
              <Button size="lg" variant="outline">
                Help Center
              </Button>
            </Link>
            <Link href="/courses">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                View Courses
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}