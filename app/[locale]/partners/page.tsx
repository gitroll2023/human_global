'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, Globe, Users, Award, TrendingUp, HandshakeIcon, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function PartnersPage() {
  const t = useTranslations();

  const globalPartners = [
    {
      country: 'South Korea',
      status: 'Launching August 2025',
      description: 'Strategic partnership with leading Korean education technology company',
      href: '/partners/korea',
      featured: true,
    },
    {
      country: 'United States',
      status: 'Active',
      description: 'Collaboration with major US universities and corporate training programs',
    },
    {
      country: 'United Kingdom',
      status: 'Active',
      description: 'Partnership with UK professional development institutions',
    },
    {
      country: 'Germany',
      status: 'Active',
      description: 'Working with German vocational education systems',
    },
    {
      country: 'Singapore',
      status: 'Active',
      description: 'Regional hub for Southeast Asian operations',
    },
    {
      country: 'Japan',
      status: 'Active',
      description: 'Corporate training partnerships with major Japanese companies',
    },
    {
      country: 'India',
      status: 'Active',
      description: 'Large-scale workforce reskilling initiatives',
    },
    {
      country: 'Brazil',
      status: 'Active',
      description: 'Latin American headquarters and localization center',
    },
  ];

  const partnerTypes = [
    {
      icon: Building,
      title: 'University Partners',
      count: '50+',
      description: 'Top universities providing accredited programs and research collaboration',
    },
    {
      icon: HandshakeIcon,
      title: 'Corporate Partners',
      count: '200+',
      description: 'Leading companies using our platform for employee reskilling',
    },
    {
      icon: Globe,
      title: 'Government Partners',
      count: '15',
      description: 'National and regional governments supporting workforce development',
    },
    {
      icon: Award,
      title: 'Certification Bodies',
      count: '30+',
      description: 'Professional organizations recognizing our certifications',
    },
  ];

  const benefits = [
    {
      title: 'Global Reach',
      description: 'Access to 500,000+ learners across 20 countries',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description: 'AI-era focused humanities education developed by experts',
    },
    {
      title: 'Flexible Integration',
      description: 'White-label solutions and API integration options',
    },
    {
      title: 'Data & Analytics',
      description: 'Comprehensive learning analytics and progress tracking',
    },
    {
      title: 'Local Support',
      description: 'Dedicated partnership managers in each region',
    },
    {
      title: 'Revenue Sharing',
      description: 'Competitive revenue sharing models for all partners',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          Operating in 20 Countries
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Global Partnership Network
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Join our mission to prepare humanity for the AI era through strategic partnerships 
          in education, corporate training, and workforce development
        </p>
      </div>

      {/* Partner Types */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {partnerTypes.map((type, index) => {
          const Icon = type.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">{type.count}</CardTitle>
                <CardDescription className="font-semibold">{type.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Global Presence */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalPartners.map((partner, index) => (
            <Card 
              key={index} 
              className={`${partner.featured ? 'border-primary shadow-lg' : ''} hover:shadow-lg transition-shadow`}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{partner.country}</CardTitle>
                  </div>
                  {partner.featured && (
                    <Badge className="bg-orange-500 text-white">New</Badge>
                  )}
                </div>
                <Badge variant={partner.status === 'Active' ? 'default' : 'secondary'}>
                  {partner.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                {partner.href && (
                  <Link href={partner.href}>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            And partnerships in: France, Spain, Italy, Netherlands, Sweden, Chile, Mexico, 
            Thailand, Australia, Canada, Poland, Portugal, Turkey
          </p>
        </div>
      </div>

      {/* Partnership Benefits */}
      <div className="mb-12 bg-muted/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Partnership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-4">
              <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Become a Partner CTA */}
      <Card className="border-2 border-primary">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Become a Partner</CardTitle>
          <CardDescription className="text-base">
            Join our global network and help prepare professionals for the AI era
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="text-center p-4">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Universities</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Offer accredited programs and research collaboration
              </p>
            </Card>
            <Card className="text-center p-4">
              <Building className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Corporations</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Reskill your workforce for the AI era
              </p>
            </Card>
            <Card className="text-center p-4">
              <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold">Governments</h3>
              <p className="text-xs text-muted-foreground mt-1">
                Support national workforce development
              </p>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Contact Partnership Team
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Download Partnership Guide
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Success Stories */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-8">Partnership Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <CardHeader>
              <Badge className="w-fit mb-2">Corporate Partnership</Badge>
              <CardTitle>Fortune 500 Tech Company</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                "HumanEdge Academy helped us reskill 5,000 employees whose roles were impacted by AI automation. 
                The humanities-focused curriculum gave them the critical thinking and creative skills needed 
                for new roles in our organization."
              </p>
              <p className="text-sm font-semibold">- Chief Learning Officer</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <Badge className="w-fit mb-2">University Partnership</Badge>
              <CardTitle>Leading European University</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                "Our partnership with HumanEdge Academy has enabled us to offer cutting-edge online programs 
                that combine traditional humanities education with AI-era skills. Enrollment has increased 
                by 300% in just two years."
              </p>
              <p className="text-sm font-semibold">- Dean of Continuing Education</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}