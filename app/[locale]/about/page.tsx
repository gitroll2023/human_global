'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, Eye, Heart, Users, Globe, TrendingUp, 
  Award, BookOpen, Lightbulb, Shield, Zap, Sparkles 
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const t = useTranslations();

  const values = [
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'We believe in the irreplaceable value of human creativity, empathy, and critical thinking',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Combining traditional humanities education with cutting-edge AI-era skills',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Making quality education accessible to professionals worldwide',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Maintaining the highest standards of academic and professional ethics',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community platform connecting learners and educators',
    },
    {
      icon: Zap,
      title: 'Adaptability',
      description: 'Continuously evolving our curriculum to meet changing workforce needs',
    },
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Foundation as IEACP',
      description: 'International Education Academy Corporate Platform (IEACP) established in Singapore as a multinational education corporation, following the model of historic multinational corporations',
    },
    {
      year: '2019',
      title: 'First Courses Launch',
      description: 'Launched our first 50 humanities courses focused on critical thinking and creativity',
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded to 10 countries, reaching 100,000 learners during the pandemic',
    },
    {
      year: '2021',
      title: 'Corporate Partnerships',
      description: 'Partnered with Fortune 500 companies for workforce reskilling programs',
    },
    {
      year: '2022',
      title: 'University Collaborations',
      description: 'Established partnerships with 30+ universities for accredited programs',
    },
    {
      year: '2023',
      title: '500K Milestone',
      description: 'Reached 500,000 active learners across 20 countries',
    },
    {
      year: '2025',
      title: 'Korea Launch',
      description: 'Expanding to South Korea through strategic partnership (August 2025)',
    },
  ];

  const leadership = [
    {
      name: 'Prof. Elizabeth Thornton',
      role: 'Chief Academic Officer',
      bio: 'Former Dean at Oxford, 30 years in humanities education',
      image: '/Prof. Elizabeth Thornton_profile.jpg',
    },
    {
      name: 'Maria Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'Former Google engineer, EdTech innovation specialist',
      image: '/Maria Rodriguez_profile.jpg',
    },
    {
      name: 'Alexander Petrov',
      role: 'VP of Global Partnerships',
      bio: 'Former UN education advisor, international development expert',
      image: '/Alexander Petrov_profile.jpg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          About HumanEdge Academy - IEACP
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Empowering Humanity in the AI Era
        </h1>
        <p className="text-xl font-semibold text-primary mb-2">
          International Education Academy Corporate Platform (IEACP)
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          As a multinational education corporation, we operate like the historic trading companies 
          of the 17th century, but instead of goods, we bring education, employment, and economic 
          development to nations worldwide. We help professionals develop uniquely human skills 
          that AI cannot replicate, ensuring they thrive in the rapidly changing job market.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="border-2 hover:border-primary transition-colors">
          <CardHeader>
            <Target className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              As IEACP, to democratize access to high-quality humanities education while creating 
              employment opportunities and fostering economic development globally. We help professionals 
              worldwide develop critical thinking, creativity, and emotional intelligence - the skills 
              that make us uniquely human and irreplaceable in an AI-driven economy, while contributing 
              to sustainable development in every market we serve.
            </p>
          </CardContent>
        </Card>
        <Card className="border-2 hover:border-primary transition-colors">
          <CardHeader>
            <Eye className="h-10 w-10 text-primary mb-2" />
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A world where IEACP operates as a force for positive global change - creating jobs, 
              transferring technology, and building educational infrastructure. We envision every 
              professional having the opportunity to adapt, grow, and thrive alongside AI, while our 
              global platform drives economic development and international cooperation through education.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-primary">500K+</p>
            <p className="text-sm text-muted-foreground">Active Learners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">20</p>
            <p className="text-sm text-muted-foreground">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">200+</p>
            <p className="text-sm text-muted-foreground">Courses</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">87%</p>
            <p className="text-sm text-muted-foreground">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Journey</h2>
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-4 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
                {index < timeline.length - 1 && (
                  <div className="w-0.5 h-20 bg-gray-300" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <Badge variant="outline" className="mb-2">{item.year}</Badge>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CEO Message */}
      <div className="mb-12">
        <Card className="max-w-4xl mx-auto border-2 border-primary/20">
          <CardHeader className="text-center">
            <h2 className="text-3xl font-bold mb-4">Message from Our CEO</h2>
            <Image 
              src="/ceo_profile.jpg" 
              alt="Dr. James Kim - CEO"
              width={128}
              height={128}
              className="rounded-full mx-auto mb-4 border-4 border-primary/20"
            />
            <CardTitle className="text-xl">Dr. James Kim</CardTitle>
            <CardDescription className="text-lg">CEO & Co-Founder</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg italic text-center text-muted-foreground">
              "In the age of AI, our greatest competitive advantage isn't learning to code—it's mastering what machines cannot: wisdom, creativity, and the human spirit."
            </p>
            <p className="text-muted-foreground">
              Dear Global Citizens,
            </p>
            <p className="text-muted-foreground">
              When I witnessed AI systems writing code, analyzing data, and even creating art, I realized we were approaching education backwards. While everyone rushed to teach technical skills that AI would soon automate, we asked a different question: What makes us irreplaceably human?
            </p>
            <p className="text-muted-foreground">
              The answer led us to humanity's oldest treasures: Philosophy teaches us to question and reason. History shows us patterns and wisdom from our collective past. Literature develops empathy and emotional intelligence. Art history cultivates aesthetic judgment and cultural understanding. These aren't just subjects—they're the foundation of human consciousness that no algorithm can replicate.
            </p>
            <p className="text-muted-foreground">
              IEACP isn't just another online education platform. We're building a global renaissance. Our courses in Ancient Philosophy don't just teach Socrates—they develop critical thinking that helps you evaluate AI's decisions. Our Shakespeare studies don't just analyze plays—they build the storytelling skills essential for human connection in a digital world. Our Art History courses don't just show paintings—they train the creative vision needed to guide AI tools meaningfully.
            </p>
            <p className="text-muted-foreground">
              Through our global education platform spanning 20 countries, we're creating a new economy—one where a philosophy graduate in Bangkok can consult for Silicon Valley, where a literature expert in São Paulo can shape global AI ethics, where an art historian in Cairo can lead creative AI projects. We're not just creating jobs; we're creating a new category of professionals: Human Intelligence Specialists.
            </p>
            <p className="text-muted-foreground">
              Our vision is bold: By 2030, IEACP will have educated 10 million Human Intelligence Specialists worldwide, creating the largest community platform of humanities-trained professionals ready to lead in the AI era. We're partnering with governments to make this education accessible, with corporations to create these new roles, and with international organizations to ensure no nation is left behind.
            </p>
            <p className="text-muted-foreground">
              Join us in reclaiming humanity's unique gifts. Because in a world of artificial intelligence, human wisdom isn't obsolete—it's priceless.
            </p>
            <p className="text-muted-foreground font-semibold">
              Warm regards,<br/>
              Dr. James Kim<br/>
              CEO & Co-Founder, IEACP
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Leadership */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {leadership.map((leader, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Image 
                  src={leader.image}
                  alt={leader.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4 border-2 border-primary/10"
                />
                <CardTitle className="text-lg">{leader.name}</CardTitle>
                <CardDescription>{leader.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why HumanEdge */}
      <Card className="mb-12 border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <Sparkles className="h-10 w-10 text-primary mb-2" />
          <CardTitle className="text-2xl">Why HumanEdge Academy?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">The AI Challenge</h3>
            <p className="text-muted-foreground">
              As AI automates routine tasks across industries, professionals need to develop 
              skills that complement rather than compete with artificial intelligence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">The Human Advantage</h3>
            <p className="text-muted-foreground">
              Critical thinking, creativity, emotional intelligence, and ethical reasoning 
              are uniquely human capabilities that become more valuable as AI advances.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Our Solution</h3>
            <p className="text-muted-foreground">
              As a multinational corporation, IEACP combines traditional humanities education with 
              practical, career-focused training while creating employment opportunities, transferring 
              technology, and fostering economic development in every market we serve. We help 
              professionals transition to AI-resistant roles and thrive in the new economy.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Awards & Recognition */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8">Awards & Recognition</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Award className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Best EdTech Platform 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Global Education Awards</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Fastest Growing LMS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">TechCrunch Education</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Innovation in Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">UNESCO Digital Learning</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          Join Our Mission
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you're a learner, educator, or organization, there's a place for you 
          in the HumanEdge Academy community
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/courses">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Explore Courses
            </Button>
          </Link>
          <Link href="/partners">
            <Button size="lg" variant="outline">
              Become a Partner
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}