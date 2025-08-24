'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, Lock, Eye, Users, Globe, Calendar,
  AlertTriangle, CheckCircle, Settings, FileText,
  Mail, ExternalLink, Cookie, Database, UserCheck
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const t = useTranslations();

  const lastUpdated = "January 15, 2025";
  const effectiveDate = "January 15, 2025";

  const quickNav = [
    { title: 'Information We Collect', id: 'collection' },
    { title: 'How We Use Your Data', id: 'usage' },
    { title: 'Data Sharing', id: 'sharing' },
    { title: 'Data Security', id: 'security' },
    { title: 'Your Rights', id: 'rights' },
    { title: 'Cookies & Tracking', id: 'cookies' },
    { title: 'International Transfers', id: 'transfers' },
    { title: 'Data Retention', id: 'retention' },
  ];

  const dataTypes = [
    {
      icon: UserCheck,
      title: 'Account Information',
      description: 'Name, email, profile data, authentication information',
      examples: ['Full name', 'Email address', 'Profile photo', 'Password (encrypted)'],
    },
    {
      icon: Database,
      title: 'Learning Data',
      description: 'Course progress, assignments, grades, learning preferences',
      examples: ['Course enrollments', 'Video watch time', 'Quiz scores', 'Discussion posts'],
    },
    {
      icon: Globe,
      title: 'Technical Data',
      description: 'Device information, IP address, browser data, usage analytics',
      examples: ['IP address', 'Browser type', 'Device model', 'Operating system'],
    },
    {
      icon: Settings,
      title: 'Preference Data',
      description: 'Language settings, notification preferences, accessibility options',
      examples: ['Language choice', 'Email preferences', 'Timezone', 'Accessibility settings'],
    },
  ];

  const yourRights = [
    {
      title: 'Access Your Data',
      description: 'Request a copy of all personal data we hold about you',
      action: 'Download my data',
    },
    {
      title: 'Correct Your Data',
      description: 'Update or correct any inaccurate personal information',
      action: 'Update profile',
    },
    {
      title: 'Delete Your Data',
      description: 'Request deletion of your personal data (subject to legal requirements)',
      action: 'Delete account',
    },
    {
      title: 'Data Portability',
      description: 'Export your data in a machine-readable format',
      action: 'Export data',
    },
    {
      title: 'Restrict Processing',
      description: 'Limit how we process your personal information',
      action: 'Manage preferences',
    },
    {
      title: 'Object to Processing',
      description: 'Object to certain types of processing of your data',
      action: 'Contact us',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Privacy Policy
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your privacy matters to us. This policy explains how we collect, use, and protect your personal information.
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
                <Eye className="h-5 w-5 text-primary" />
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
                <Link href="/terms">
                  <Button variant="outline" size="sm" className="w-full">
                    Terms of Service
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          
          {/* Introduction */}
          <Card className="mb-8 border-2 border-green-200 bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Our Privacy Commitment</h3>
                  <p className="text-green-700 text-sm">
                    HumanEdge Academy (IEACN) is committed to protecting your privacy and ensuring 
                    transparency about how we handle your personal information. We comply with GDPR, CCPA, 
                    and other applicable privacy laws worldwide.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 1. Information We Collect */}
          <section id="collection" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="h-6 w-6 text-primary" />
              1. Information We Collect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {dataTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <Icon className="h-6 w-6 text-primary mb-2" />
                      <CardTitle className="text-lg">{type.title}</CardTitle>
                      <CardDescription>{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {type.examples.map((example, exIndex) => (
                          <li key={exIndex} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-primary rounded-full" />
                            {example}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Automatic Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-3">
                  We automatically collect certain information when you use our services:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Log data (IP address, browser type, access times)</li>
                  <li>Device information (device type, operating system)</li>
                  <li>Usage data (pages visited, features used, time spent)</li>
                  <li>Performance data (loading times, error reports)</li>
                  <li>Location data (country/region based on IP address)</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* 2. How We Use Your Data */}
          <section id="usage" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-primary" />
              2. How We Use Your Data
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Educational Services</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Provide access to courses and learning materials</li>
                    <li>Track learning progress and completion</li>
                    <li>Generate certificates and transcripts</li>
                    <li>Personalize learning recommendations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Communication</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Send course updates and announcements</li>
                    <li>Provide customer support</li>
                    <li>Send marketing communications (with consent)</li>
                    <li>Notify you of important policy changes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Platform Improvement</h3>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Conduct research and development</li>
                    <li>Ensure platform security and prevent fraud</li>
                    <li>Comply with legal and regulatory requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 3. Data Sharing */}
          <section id="sharing" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              3. How We Share Your Data
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Service Providers</h3>
                  <p className="text-sm mb-2">
                    We share data with trusted third-party service providers who help us operate our platform:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Cloud hosting and storage providers</li>
                    <li>Payment processing services</li>
                    <li>Email and communication services</li>
                    <li>Analytics and performance monitoring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Educational Partners</h3>
                  <p className="text-sm">
                    With your consent, we may share academic progress with university partners 
                    for credit transfer or degree pathway programs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Legal Requirements</h3>
                  <p className="text-sm">
                    We may disclose your information if required by law, legal process, 
                    or to protect our rights and the safety of our users.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 4. Data Security */}
          <section id="security" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              4. Data Security
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Technical Safeguards</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>AES-256 encryption for data at rest</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Multi-factor authentication for admin access</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Operational Safeguards</h4>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Access controls and role-based permissions</li>
                      <li>Employee security training and background checks</li>
                      <li>Regular backup and disaster recovery procedures</li>
                      <li>Incident response and breach notification protocols</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 5. Your Rights */}
          <section id="rights" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-primary" />
              5. Your Privacy Rights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {yourRights.map((right, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{right.title}</CardTitle>
                    <CardDescription>{right.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" className="w-full">
                      {right.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 6. Cookies & Tracking */}
          <section id="cookies" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cookie className="h-6 w-6 text-primary" />
              6. Cookies & Tracking Technologies
            </h2>
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-sm">
                    Required for basic platform functionality, including login, session management, 
                    and security features. These cookies cannot be disabled.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-sm">
                    Help us understand how you use our platform to improve user experience. 
                    These cookies can be disabled in your browser settings.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                  <p className="text-sm">
                    Used to deliver relevant advertisements and track campaign effectiveness. 
                    You can opt out of marketing cookies at any time.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  Manage Cookie Preferences
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* 7. International Transfers */}
          <section id="transfers" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="h-6 w-6 text-primary" />
              7. International Data Transfers
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="mb-4">
                  As a global educational platform, we may transfer your data across international borders. 
                  We ensure appropriate safeguards are in place:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Adequacy decisions from relevant data protection authorities</li>
                  <li>Standard Contractual Clauses (SCCs) with service providers</li>
                  <li>Binding Corporate Rules for intra-group transfers</li>
                  <li>Consent where required by applicable law</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* 8. Data Retention */}
          <section id="retention" className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              8. Data Retention
            </h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Account Data</h3>
                    <p className="text-sm">Retained while your account is active and for up to 2 years after deletion for legal compliance.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Learning Data</h3>
                    <p className="text-sm">Course progress and completion records retained for up to 7 years for academic transcript purposes.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Technical Data</h3>
                    <p className="text-sm">Log files and usage data typically retained for 12-24 months for security and operational purposes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Contact Information */}
          <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Privacy Questions?</h3>
              <p className="text-muted-foreground mb-4">
                Contact our Data Protection Officer for privacy-related inquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:privacy@humanedge-academy.com">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    privacy@humanedge-academy.com
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}