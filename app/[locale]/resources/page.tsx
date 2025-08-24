'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { LoginRequiredDialog } from '@/components/login-required-dialog';
import { 
  BookOpen, FileText, Video, Podcast, Download, 
  ExternalLink, Search, Filter, Calendar, User,
  Star, TrendingUp, Clock, Globe
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ResourcesPage() {
  const t = useTranslations();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [loginAction, setLoginAction] = useState('');

  const categories = [
    { value: 'all', label: 'All Resources' },
    { value: 'guides', label: 'Guides' },
    { value: 'research', label: 'Research Papers' },
    { value: 'videos', label: 'Videos' },
    { value: 'podcasts', label: 'Podcasts' },
    { value: 'tools', label: 'Tools' },
  ];

  const featuredResources = [
    {
      type: 'guide',
      icon: BookOpen,
      title: 'AI-Era Career Transition Guide',
      description: 'Comprehensive guide to identifying and developing AI-resistant skills',
      author: 'Dr. Sarah Chen',
      date: '2024-03-15',
      readTime: '15 min read',
      featured: true,
      downloadable: true,
    },
    {
      type: 'research',
      icon: FileText,
      title: 'The Future of Work: Humanities in the AI Economy',
      description: 'Research paper on the growing importance of humanities education',
      author: 'HumanEdge Research Team',
      date: '2024-03-10',
      readTime: '30 min read',
      featured: true,
      downloadable: true,
    },
    {
      type: 'video',
      icon: Video,
      title: 'Mastering Critical Thinking in the Digital Age',
      description: 'Video series on developing advanced critical thinking skills',
      author: 'Prof. Michael Roberts',
      date: '2024-03-05',
      readTime: '45 min watch',
      featured: true,
    },
  ];

  const resources = [
    {
      type: 'guide',
      icon: BookOpen,
      title: 'Emotional Intelligence Handbook',
      description: 'Practical exercises for developing EQ in professional settings',
      author: 'Lisa Park',
      date: '2024-03-12',
      readTime: '20 min read',
      downloadable: true,
    },
    {
      type: 'podcast',
      icon: Podcast,
      title: 'The Human Advantage Podcast',
      description: 'Weekly discussions on thriving in the AI era',
      author: 'HumanEdge Academy',
      date: '2024-03-08',
      readTime: '30 min listen',
    },
    {
      type: 'tools',
      icon: TrendingUp,
      title: 'Skills Assessment Tool',
      description: 'Evaluate your AI-resistance score and get personalized recommendations',
      author: 'HumanEdge Tech Team',
      date: '2024-03-01',
      readTime: '10 min',
    },
    {
      type: 'research',
      icon: FileText,
      title: 'Global Workforce Transformation Report 2024',
      description: 'Analysis of job market changes across 20 countries',
      author: 'Research Department',
      date: '2024-02-28',
      readTime: '25 min read',
      downloadable: true,
    },
    {
      type: 'video',
      icon: Video,
      title: 'Creative Problem-Solving Workshop',
      description: 'Interactive workshop on innovative thinking techniques',
      author: 'Design Thinking Team',
      date: '2024-02-25',
      readTime: '60 min watch',
    },
    {
      type: 'guide',
      icon: BookOpen,
      title: 'Cross-Cultural Communication Guide',
      description: 'Essential skills for global collaboration',
      author: 'David Kim',
      date: '2024-02-20',
      readTime: '15 min read',
      downloadable: true,
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getIconForType = (type: string) => {
    switch(type) {
      case 'guide': return BookOpen;
      case 'research': return FileText;
      case 'video': return Video;
      case 'podcast': return Podcast;
      case 'tools': return TrendingUp;
      default: return FileText;
    }
  };

  const handleResourceAction = (action: string) => {
    setLoginAction(action);
    setShowLoginDialog(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          Free Learning Resources
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Resources & Learning Materials
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Access free guides, research papers, videos, and tools to support your 
          journey in developing AI-resistant skills
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredResources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">Featured</Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {resource.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {resource.readTime}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleResourceAction('view this resource')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    {resource.downloadable && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleResourceAction('download this resource')}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* All Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">All Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => {
            const Icon = getIconForType(resource.type);
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <Badge variant="outline">{resource.type}</Badge>
                  </div>
                  <CardTitle className="text-base">{resource.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {resource.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {resource.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock className="h-3 w-3" />
                    {resource.readTime}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => handleResourceAction('view this resource')}
                    >
                      View Resource
                    </Button>
                    {resource.downloadable && (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleResourceAction('download this resource')}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Newsletter Signup */}
      <Card className="border-2 bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader className="text-center">
          <Globe className="h-10 w-10 text-primary mx-auto mb-2" />
          <CardTitle className="text-2xl">Stay Updated</CardTitle>
          <CardDescription>
            Get weekly insights and resources delivered to your inbox
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button onClick={() => handleResourceAction('subscribe to newsletter')}>Subscribe</Button>
          </div>
          <p className="text-xs text-center text-muted-foreground mt-4">
            Join 100,000+ professionals receiving our newsletter
          </p>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Additional Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardHeader>
              <Star className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Read how our learners successfully transitioned their careers
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleResourceAction('view success stories')}
              >
                View Stories
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Globe className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle>Community Forum</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with learners and educators worldwide
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleResourceAction('join the community')}
              >
                Join Community
              </Button>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
              <CardTitle>Career Center</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Access job opportunities and career coaching
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleResourceAction('explore career opportunities')}
              >
                Explore Careers
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Login Required Dialog */}
      <LoginRequiredDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog}
        action={loginAction}
      />
    </div>
  );
}