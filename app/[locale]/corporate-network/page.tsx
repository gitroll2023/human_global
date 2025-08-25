'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, Building2, Users, TrendingUp, Award, Shield, 
  Handshake, Target, BookOpen, Briefcase, GraduationCap,
  Network, MapPin, BarChart3, Lightbulb
} from 'lucide-react';
import Link from 'next/link';

export default function CorporatePlatformPage() {
  const t = useTranslations();

  const platformStats = [
    { icon: Globe, value: '20+', label: 'Operating Countries' },
    { icon: Building2, value: '50+', label: 'Corporate Offices' },
    { icon: Users, value: '500K+', label: 'Active Learners' },
    { icon: Briefcase, value: '200+', label: 'Corporate Partners' },
  ];

  const corporatePhilosophy = [
    {
      title: 'Global Education Leadership',
      description: 'Like the historic East India Companies that pioneered global trade, IEACP pioneers global education transformation',
      icon: Globe,
    },
    {
      title: 'Economic Development',
      description: 'Creating employment opportunities and economic growth in developing nations through education infrastructure',
      icon: TrendingUp,
    },
    {
      title: 'Technology Transfer',
      description: 'Transferring advanced educational technology and methodologies to emerging markets',
      icon: Lightbulb,
    },
    {
      title: 'Cultural Exchange',
      description: 'Promoting international cooperation and understanding through educational partnerships',
      icon: Handshake,
    },
  ];

  const globalImpact = [
    {
      region: 'Southeast Asia',
      countries: ['Thailand', 'Singapore', 'Malaysia', 'Indonesia'],
      impact: '150,000+ learners, 50+ university partnerships',
      employment: '85% job placement rate',
    },
    {
      region: 'Latin America',
      countries: ['Brazil', 'Chile', 'Mexico', 'Argentina'],
      impact: '120,000+ learners, 30+ corporate partnerships',
      employment: '82% career advancement rate',
    },
    {
      region: 'Europe',
      countries: ['UK', 'Germany', 'France', 'Spain', 'Italy'],
      impact: '180,000+ learners, 40+ government collaborations',
      employment: '88% skill certification success',
    },
    {
      region: 'Africa & Middle East',
      countries: ['South Africa', 'Kenya', 'UAE', 'Egypt'],
      impact: '50,000+ learners, emerging market focus',
      employment: '79% workforce development',
    },
  ];

  const corporateStructure = [
    {
      division: 'HumanEdge Academy',
      role: 'Core Educational Platform',
      description: 'Main learning management system and curriculum delivery',
    },
    {
      division: 'IEACP Partners',
      role: 'Strategic Partnerships',
      description: 'Managing university, corporate, and government collaborations',
    },
    {
      division: 'IEACP Technology',
      role: 'Innovation & Development',
      description: 'AI-powered learning tools and platform development',
    },
    {
      division: 'IEACP Foundation',
      role: 'Social Impact',
      description: 'Scholarships and education access for underserved communities',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          Multinational Education Corporation
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          International Education Academy Corporate Platform
        </h1>
        <p className="text-2xl font-semibold text-primary mb-4">IEACP</p>
        <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
          A multinational education corporation transforming global workforce development through 
          strategic partnerships, technology transfer, and economic empowerment across 20+ countries
        </p>
      </div>

      {/* Platform Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {platformStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center border-2 hover:border-primary transition-colors">
              <CardHeader className="pb-3">
                <Icon className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Corporate Philosophy */}
      <Card className="mb-12 border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <Network className="h-10 w-10 text-primary mb-2" />
          <CardTitle className="text-2xl">The Multinational Corporation Model</CardTitle>
          <CardDescription className="text-base mt-2">
            Following the historic precedent of multinational corporations like the East India Companies 
            of the 17th century, IEACP operates as a modern education multinational, bringing economic 
            development, employment opportunities, and technology transfer to emerging markets worldwide.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corporatePhilosophy.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Global Impact */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Global Economic Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {globalImpact.map((region, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{region.region}</CardTitle>
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {region.countries.map((country, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {country}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    <p className="text-sm">{region.impact}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-green-600" />
                    <p className="text-sm font-semibold text-green-600">{region.employment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Economic Development Model */}
      <Card className="mb-12 border-2">
        <CardHeader>
          <TrendingUp className="h-10 w-10 text-primary mb-2" />
          <CardTitle className="text-2xl">Economic Development Through Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Employment Creation</h3>
            <p className="text-muted-foreground mb-4">
              IEACP creates direct employment for over 5,000 professionals globally and indirect 
              employment for 50,000+ through our licensing platform. In developing nations, we prioritize 
              local hiring, with 80% of positions filled by local talent.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 bg-green-50">
                <p className="text-2xl font-bold text-green-600">5,000+</p>
                <p className="text-sm">Direct Employees</p>
              </Card>
              <Card className="p-4 bg-blue-50">
                <p className="text-2xl font-bold text-blue-600">50,000+</p>
                <p className="text-sm">Indirect Employment</p>
              </Card>
              <Card className="p-4 bg-purple-50">
                <p className="text-2xl font-bold text-purple-600">80%</p>
                <p className="text-sm">Local Hiring Rate</p>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Technology & Knowledge Transfer</h3>
            <p className="text-muted-foreground mb-4">
              Through strategic partnerships and licensing agreements, IEACP transfers cutting-edge 
              educational technology and methodologies to developing markets, enabling local institutions 
              to enhance their capabilities and compete globally.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>AI-Powered Learning Systems</Badge>
              <Badge>Advanced Curriculum Design</Badge>
              <Badge>Digital Assessment Tools</Badge>
              <Badge>Management Training</Badge>
              <Badge>Quality Assurance Systems</Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Capital Investment</h3>
            <p className="text-muted-foreground">
              IEACP has invested over $500 million in educational infrastructure across 20 countries, 
              including technology centers, training facilities, and digital learning platforms. Our 
              investment strategy focuses on sustainable, long-term development that benefits local 
              communities.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Corporate Structure */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Corporate Structure</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corporateStructure.map((division, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building2 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">{division.division}</CardTitle>
                <Badge variant="outline" className="w-fit">{division.role}</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{division.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <Card className="mb-12 border-2 bg-gradient-to-r from-orange-50 to-red-50">
        <CardHeader className="text-center">
          <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
          <CardTitle className="text-2xl">Our Mission as a Multinational Corporation</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground mb-6">
            As a multinational education corporation, IEACP is committed to fostering international 
            cooperation, economic development, and social progress through education. We believe that 
            by creating employment opportunities, transferring technology and knowledge, and building 
            local capacity, we can contribute to sustainable development and prosperity in every market 
            we serve.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Ethical Operations</h4>
              <p className="text-xs text-muted-foreground">
                Committed to responsible business practices and local community development
              </p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Quality Excellence</h4>
              <p className="text-xs text-muted-foreground">
                Delivering world-class education standards across all markets
              </p>
            </div>
            <div className="text-center">
              <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-1">Sustainable Growth</h4>
              <p className="text-xs text-muted-foreground">
                Building long-term value for all stakeholders
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join the Global Education Revolution
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          Partner with IEACP to bring world-class education and economic development to your region
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/partners">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Become a Partner
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Download Corporate Profile
          </Button>
        </div>
      </div>
    </div>
  );
}