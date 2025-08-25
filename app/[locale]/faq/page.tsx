'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ChevronDown, ChevronUp, Search, HelpCircle, 
  GraduationCap, CreditCard, Users, Settings,
  BookOpen, Award, Globe, MessageCircle
} from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    {
      icon: GraduationCap,
      title: 'Courses & Learning',
      count: 12,
    },
    {
      icon: CreditCard,
      title: 'Pricing & Payment',
      count: 8,
    },
    {
      icon: Users,
      title: 'Account & Profile',
      count: 6,
    },
    {
      icon: Award,
      title: 'Certificates & Credits',
      count: 5,
    },
    {
      icon: Settings,
      title: 'Technical Support',
      count: 7,
    },
    {
      icon: Globe,
      title: 'Global Programs',
      count: 4,
    },
  ];

  const faqData = [
    {
      category: 'Courses & Learning',
      question: 'What makes HumanEdge Academy different from other online learning platforms?',
      answer: 'HumanEdge Academy specializes in AI-era humanities education, focusing on skills that complement artificial intelligence rather than compete with it. We combine traditional humanities education with practical, career-focused training designed to help professionals thrive in an AI-driven economy.',
    },
    {
      category: 'Courses & Learning',
      question: 'How long do courses typically take to complete?',
      answer: 'Course duration varies by program: Foundation courses (4-6 weeks), Professional certificates (8-12 weeks), and Specialization programs (3-6 months). All courses are self-paced with suggested timelines and flexible deadlines.',
    },
    {
      category: 'Courses & Learning',
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! Our platform is fully responsive and optimized for mobile learning. You can access all course materials, participate in discussions, and complete assignments from any device.',
    },
    {
      category: 'Courses & Learning',
      question: 'Do you offer courses in multiple languages?',
      answer: 'Currently, we offer courses in English, Spanish, French, German, Korean, Portuguese, and Thai. We\'re continuously expanding our multilingual offerings based on global demand.',
    },
    {
      category: 'Pricing & Payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, bank transfers, and local payment methods in supported countries. Enterprise customers can also request invoicing.',
    },
    {
      category: 'Pricing & Payment',
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all courses. If you\'re not satisfied within the first 30 days of enrollment, you can request a full refund.',
    },
    {
      category: 'Pricing & Payment',
      question: 'Are there discounts for bulk enrollments or corporate training?',
      answer: 'Yes! We offer significant discounts for corporate training programs, bulk enrollments (10+ students), and university partnerships. Contact our corporate team for custom pricing.',
    },
    {
      category: 'Account & Profile',
      question: 'How do I create an account?',
      answer: 'Click the "Sign Up" button, enter your email and create a password. You can also sign up using your Google, LinkedIn, or Microsoft account for faster registration.',
    },
    {
      category: 'Account & Profile',
      question: 'Can I change my email address after creating an account?',
      answer: 'Yes, you can update your email address in your account settings. You\'ll need to verify the new email address before the change takes effect.',
    },
    {
      category: 'Account & Profile',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you a secure reset link. Follow the instructions in the email to create a new password.',
    },
    {
      category: 'Certificates & Credits',
      question: 'Are your certificates accredited?',
      answer: 'Our certificates are industry-recognized and accepted by many employers. We also partner with accredited universities to offer credit-bearing courses and degree pathways.',
    },
    {
      category: 'Certificates & Credits',
      question: 'Can I transfer credits to a university?',
      answer: 'Many of our partner universities accept our credits for transfer. Check with your institution\'s admissions office, or contact us for a list of partner universities that accept our credits.',
    },
    {
      category: 'Certificates & Credits',
      question: 'How do I download my certificate?',
      answer: 'Once you complete all course requirements, your certificate will be automatically generated and available in your account dashboard. You can download it as a PDF or share it on LinkedIn.',
    },
    {
      category: 'Technical Support',
      question: 'I\'m having trouble accessing my course. What should I do?',
      answer: 'First, try clearing your browser cache and cookies, or try accessing the course from an incognito/private browser window. If issues persist, contact our technical support team.',
    },
    {
      category: 'Technical Support',
      question: 'What are the system requirements for your platform?',
      answer: 'Our platform works on any device with a modern web browser (Chrome, Firefox, Safari, Edge). For the best experience, we recommend a broadband internet connection and updated browser.',
    },
    {
      category: 'Technical Support',
      question: 'Can I download course videos for offline viewing?',
      answer: 'Yes, our mobile app allows you to download video lectures for offline viewing. This feature is available for enrolled students and requires the HumanEdge Academy mobile app.',
    },
    {
      category: 'Global Programs',
      question: 'What is the IEACP global expansion program?',
      answer: 'IEACP (International Education Academy Corporate Platform) is our multinational education initiative that brings quality education, employment opportunities, and economic development to countries worldwide, similar to how historic trading companies operated.',
    },
    {
      category: 'Global Programs',
      question: 'How do you ensure course quality across different countries?',
      answer: 'We maintain consistent global standards through centralized curriculum development, regular quality audits, standardized instructor training, and continuous feedback collection from learners worldwide.',
    },
  ];

  const filteredFAQ = faqData.filter(
    item =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Frequently Asked Questions
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How Can We Help?
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find quick answers to common questions about HumanEdge Academy's 
          AI-era humanities education programs and services.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for answers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-3 text-lg"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>
                  {category.count} {category.count === 1 ? 'question' : 'questions'}
                </CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">
          {searchTerm ? `Search Results (${filteredFAQ.length})` : 'All Questions'}
        </h2>
        
        <div className="space-y-4">
          {filteredFAQ.map((item, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {item.category}
                      </Badge>
                      <CardTitle className="text-left text-lg leading-relaxed">
                        {item.question}
                      </CardTitle>
                    </div>
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </div>
              </CardHeader>
              
              {openItems.includes(index) && (
                <CardContent className="pt-0">
                  <div className="pl-8 border-l-2 border-primary/20">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {filteredFAQ.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or browse our categories above.
              </p>
              <Button 
                onClick={() => setSearchTerm('')}
                variant="outline"
              >
                Clear Search
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Still Need Help */}
      <Card className="mt-12 border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardContent className="p-8 text-center">
          <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Contact Support
              </Button>
            </Link>
            <Link href="/help">
              <Button size="lg" variant="outline">
                Help Center
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}