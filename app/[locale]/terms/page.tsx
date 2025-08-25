'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, Shield, Users, Globe, Calendar,
  AlertTriangle, CheckCircle, ExternalLink, Mail
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  const t = useTranslations();

  const lastUpdated = "January 15, 2025";
  const effectiveDate = "January 15, 2025";

  const quickNav = [
    { title: 'Acceptance of Terms', id: 'acceptance' },
    { title: 'Account Registration', id: 'registration' },
    { title: 'Course Access & Usage', id: 'usage' },
    { title: 'Payment & Refunds', id: 'payment' },
    { title: 'Intellectual Property', id: 'ip' },
    { title: 'User Conduct', id: 'conduct' },
    { title: 'Privacy & Data', id: 'privacy' },
    { title: 'Termination', id: 'termination' },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Terms of Service
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Terms of Service
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Please read these terms carefully before using HumanEdge Academy's services.
        </p>
        
        <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Effective: {effectiveDate}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Quick Navigation */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Quick Navigation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickNav.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.id}`}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors p-2 rounded hover:bg-gray-50"
                >
                  {item.title}
                </a>
              ))}
              <div className="pt-4 border-t">
                <Link href="/privacy">
                  <Button variant="outline" size="sm" className="w-full">
                    Privacy Policy
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <Card className="mb-8 border-2 border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Important Notice</h3>
                    <p className="text-blue-700 text-sm">
                      By accessing or using HumanEdge Academy services, you agree to be bound by these Terms of Service 
                      and all applicable laws and regulations. If you do not agree with any of these terms, 
                      you are prohibited from using our services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                1. Acceptance of Terms
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p>
                    These Terms of Service ("Terms") govern your use of HumanEdge Academy's website, 
                    mobile application, and educational services operated by International Education 
                    Academy Corporate Platform (IEACP).
                  </p>
                  <p>
                    By creating an account, accessing our platform, or using our services, you acknowledge 
                    that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <p>
                    We reserve the right to update these Terms at any time. Continued use of our services 
                    after changes constitutes acceptance of the updated Terms.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* 2. Account Registration */}
            <section id="registration" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-6 w-6 text-primary" />
                2. Account Registration
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">2.1 Account Requirements</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>You must be at least 16 years old to create an account</li>
                      <li>You must provide accurate and complete registration information</li>
                      <li>You are responsible for maintaining the security of your account</li>
                      <li>One person may not maintain multiple active accounts</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2.2 Account Security</h3>
                    <p>
                      You are solely responsible for all activities under your account. You must 
                      immediately notify us of any unauthorized use of your account or any security breach.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">2.3 Account Verification</h3>
                    <p>
                      We may require email verification, phone verification, or other identity 
                      verification measures to maintain account security and service integrity.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 3. Course Access & Usage */}
            <section id="usage" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-6 w-6 text-primary" />
                3. Course Access & Usage
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">3.1 License to Use</h3>
                    <p>
                      Upon enrollment and payment, we grant you a limited, non-exclusive, 
                      non-transferable license to access and use course materials for personal, 
                      non-commercial educational purposes only.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3.2 Usage Restrictions</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Course materials may not be redistributed, sold, or shared</li>
                      <li>Recording, downloading, or copying course videos is prohibited unless explicitly allowed</li>
                      <li>Commercial use of course materials is strictly forbidden</li>
                      <li>Sharing login credentials is prohibited</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">3.3 Access Duration</h3>
                    <p>
                      Course access is typically provided for the duration specified at purchase. 
                      Lifetime access courses remain available as long as we maintain the platform, 
                      with reasonable advance notice if access must be discontinued.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 4. Payment & Refunds */}
            <section id="payment" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                4. Payment & Refunds
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">4.1 Payment Terms</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>All prices are in USD unless otherwise specified</li>
                      <li>Payment is due immediately upon enrollment</li>
                      <li>We accept major credit cards, PayPal, and other payment methods as available</li>
                      <li>Subscription services auto-renew unless cancelled</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4.2 Refund Policy</h3>
                    <p>
                      We offer a 30-day money-back guarantee for most courses. Refund requests must be 
                      submitted within 30 days of purchase. Courses with significant progress 
                      (&gt;50% completion) may not be eligible for refund.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">4.3 Corporate and Bulk Purchases</h3>
                    <p>
                      Special terms may apply to corporate training and bulk purchases. 
                      Contact our corporate team for specific terms and conditions.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 5. Intellectual Property */}
            <section id="ip" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                5. Intellectual Property
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">5.1 Our Content</h3>
                    <p>
                      All course materials, including videos, text, graphics, logos, and software, 
                      are the property of IEACP or our content providers and are protected by 
                      copyright and other intellectual property laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">5.2 User Content</h3>
                    <p>
                      By submitting content (assignments, forum posts, reviews), you grant us a 
                      non-exclusive license to use, reproduce, and display such content for 
                      educational and operational purposes.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">5.3 Trademarks</h3>
                    <p>
                      "HumanEdge Academy," "IEACP," and related logos are trademarks of 
                      International Education Academy Corporate Platform. Unauthorized use is prohibited.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 6. User Conduct */}
            <section id="conduct" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                6. User Conduct
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">6.1 Prohibited Activities</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Harassment, discrimination, or inappropriate behavior</li>
                      <li>Attempting to hack, disrupt, or damage our systems</li>
                      <li>Sharing illegal, offensive, or inappropriate content</li>
                      <li>Academic dishonesty, including plagiarism and cheating</li>
                      <li>Impersonating others or providing false information</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">6.2 Community Guidelines</h3>
                    <p>
                      We maintain a respectful learning environment. Users are expected to engage 
                      constructively, respect diverse perspectives, and contribute positively to 
                      the learning community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 7. Privacy & Data */}
            <section id="privacy" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                7. Privacy & Data Protection
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <p>
                    Your privacy is important to us. Our collection, use, and protection of your 
                    personal information is governed by our Privacy Policy, which is incorporated 
                    into these Terms by reference.
                  </p>
                  <p>
                    We comply with applicable data protection laws, including GDPR, CCPA, and other 
                    regional privacy regulations.
                  </p>
                  <Link href="/privacy">
                    <Button variant="outline" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Read our Privacy Policy
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </section>

            {/* 8. Termination */}
            <section id="termination" className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-primary" />
                8. Service Termination
              </h2>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">8.1 Termination by You</h3>
                    <p>
                      You may terminate your account at any time by contacting our support team. 
                      Upon termination, your access to courses and materials will be discontinued 
                      according to our refund policy.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">8.2 Termination by Us</h3>
                    <p>
                      We may suspend or terminate your account for violation of these Terms, 
                      non-payment, or other legitimate business reasons. We will provide reasonable 
                      notice when possible.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">8.3 Effect of Termination</h3>
                    <p>
                      Upon termination, all licenses granted to you will cease, and you must 
                      discontinue use of our services and materials.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Questions About These Terms?</h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                      Contact Support
                    </Button>
                  </Link>
                  <a href="mailto:legal@humanedge-academy.com">
                    <Button variant="outline">
                      legal@humanedge-academy.com
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}