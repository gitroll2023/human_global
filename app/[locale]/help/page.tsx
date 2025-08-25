'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, BookOpen, PlayCircle, FileText, MessageSquare,
  GraduationCap, Settings, CreditCard, Users, Globe,
  ArrowRight, HelpCircle, Lightbulb, Phone, Mail,
  Clock, CheckCircle, AlertCircle
} from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
  const t = useTranslations();

  const quickActions = [
    {
      icon: GraduationCap,
      title: 'Getting Started',
      description: 'New to HumanEdge Academy? Start here',
      link: '/help/getting-started',
    },
    {
      icon: PlayCircle,
      title: 'Video Tutorials',
      description: 'Watch step-by-step guides',
      link: '/help/tutorials',
    },
    {
      icon: Settings,
      title: 'Account Settings',
      description: 'Manage your profile and preferences',
      link: '/help/account',
    },
    {
      icon: CreditCard,
      title: 'Billing & Payments',
      description: 'Payment methods and invoices',
      link: '/help/billing',
    },
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: 'Course Navigation',
      description: 'Learn how to navigate courses, track progress, and access materials',
      articles: [
        'How to enroll in a course',
        'Understanding course structure',
        'Tracking your learning progress',
        'Accessing downloadable resources',
        'Using the discussion forums',
      ],
    },
    {
      icon: Users,
      title: 'Account Management',
      description: 'Manage your profile, security settings, and preferences',
      articles: [
        'Creating and verifying your account',
        'Updating profile information',
        'Managing privacy settings',
        'Password and security',
        'Notification preferences',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payments & Subscriptions',
      description: 'Billing, refunds, and subscription management',
      articles: [
        'Understanding pricing plans',
        'Payment methods and billing',
        'Refund and cancellation policy',
        'Corporate and bulk discounts',
        'Tax and invoice information',
      ],
    },
    {
      icon: Globe,
      title: 'Global Programs',
      description: 'Information about IEACP international initiatives',
      articles: [
        'IEACP partnership program',
        'Country-specific offerings',
        'Local language support',
        'University credit transfer',
        'International certifications',
      ],
    },
    {
      icon: Settings,
      title: 'Technical Support',
      description: 'Troubleshoot technical issues and platform problems',
      articles: [
        'System requirements',
        'Browser compatibility',
        'Mobile app download and setup',
        'Video playback issues',
        'Common error messages',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Certificates & Completion',
      description: 'Information about certificates, credits, and course completion',
      articles: [
        'Earning your certificate',
        'Academic credit options',
        'Sharing certificates on LinkedIn',
        'Transcript requests',
        'Continuing education units (CEUs)',
      ],
    },
  ];

  const supportOptions = [
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Available 24/7',
      action: 'Start Chat',
      primary: true,
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      primary: false,
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
      primary: false,
    },
  ];

  const popularArticles = [
    {
      title: 'How to get started with your first course',
      category: 'Getting Started',
      readTime: '5 min read',
      views: '12.5K views',
    },
    {
      title: 'Understanding AI-era humanities education',
      category: 'Course Content',
      readTime: '8 min read',
      views: '9.2K views',
    },
    {
      title: 'Mobile app features and offline learning',
      category: 'Technical',
      readTime: '4 min read',
      views: '7.8K views',
    },
    {
      title: 'Certificate requirements and completion criteria',
      category: 'Certificates',
      readTime: '6 min read',
      views: '6.3K views',
    },
    {
      title: 'Corporate training and bulk enrollment options',
      category: 'Enterprise',
      readTime: '10 min read',
      views: '5.1K views',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Help Center
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How can we help you?
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          Find answers, guides, and resources to make the most of your 
          HumanEdge Academy learning experience.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search help articles..."
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <CardTitle className="text-lg">{action.title}</CardTitle>
                <CardDescription>{action.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Popular Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Popular Articles
            </h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                        <span>{article.views}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-1 text-primary">
                      <span className="text-sm">Read article</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {helpCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Icon className="h-6 w-6 text-primary mb-2" />
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.articles.slice(0, 3).map((article, articleIndex) => (
                          <li key={articleIndex} className="text-sm">
                            <Link 
                              href="#" 
                              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                            >
                              <ArrowRight className="h-3 w-3" />
                              {article}
                            </Link>
                          </li>
                        ))}
                        {category.articles.length > 3 && (
                          <li className="text-sm">
                            <Link 
                              href="#" 
                              className="text-primary font-medium hover:underline flex items-center gap-2"
                            >
                              <span>View all {category.articles.length} articles</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Support Options */}
          <Card className="border-2">
            <CardHeader>
              <HelpCircle className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-lg">Need Personal Help?</CardTitle>
              <CardDescription>
                Our support team is ready to assist you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {supportOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="font-semibold">{option.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {option.description}
                        </p>
                        <p className="text-xs text-muted-foreground mb-2">
                          {option.availability}
                        </p>
                        <Button 
                          size="sm" 
                          variant={option.primary ? "default" : "outline"}
                          className={option.primary ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" : ""}
                        >
                          {option.action}
                        </Button>
                      </div>
                    </div>
                    {index < supportOptions.length - 1 && (
                      <div className="border-b border-gray-200" />
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link 
                href="/faq"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Frequently Asked Questions
              </Link>
              <Link 
                href="/contact"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Contact Support
              </Link>
              <Link 
                href="/courses"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Browse Courses
              </Link>
              <Link 
                href="/about"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                About HumanEdge Academy
              </Link>
            </CardContent>
          </Card>

          {/* System Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                System Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Platform Status</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Video Streaming</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Mobile App</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <Link 
                  href="#"
                  className="text-sm text-primary hover:underline"
                >
                  View detailed status →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}