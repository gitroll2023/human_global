'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, TrendingUp, Brain, Globe, 
  Download, BarChart, Users, BookOpen
} from 'lucide-react';

export default function ResearchPage() {
  const researchPapers = [
    {
      title: 'The Future of Humanities in AI Era',
      date: '2024',
      category: 'AI & Education',
      downloads: '12,453',
    },
    {
      title: 'Critical Thinking in Digital Age',
      date: '2024',
      category: 'Cognitive Science',
      downloads: '8,921',
    },
    {
      title: 'Global Career Transitions Study',
      date: '2023',
      category: 'Labor Market',
      downloads: '15,678',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Brain className="w-3 h-3 mr-1" />
          Research Center
        </Badge>
        <h1 className="text-4xl font-bold mb-4">HumanEdge Research Institute</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Leading research on the intersection of humanities education, artificial intelligence, and the future of work
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">47</div>
            <p className="text-sm text-muted-foreground">Published Papers</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">23</div>
            <p className="text-sm text-muted-foreground">Research Partners</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">15</div>
            <p className="text-sm text-muted-foreground">Countries</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">92%</div>
            <p className="text-sm text-muted-foreground">Impact Score</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Latest Research</CardTitle>
          <CardDescription>Download our latest research papers and reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {researchPapers.map((paper, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{paper.title}</h4>
                    <div className="flex gap-4 mt-1">
                      <span className="text-sm text-muted-foreground">{paper.date}</span>
                      <Badge variant="secondary">{paper.category}</Badge>
                      <span className="text-sm text-muted-foreground">{paper.downloads} downloads</span>
                    </div>
                  </div>
                </div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Research Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">AI-Resistant Skills</h3>
              <p className="text-sm text-muted-foreground">
                Identifying and developing human capabilities that remain valuable in an AI-driven economy
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Future of Work</h3>
              <p className="text-sm text-muted-foreground">
                Analyzing job market trends and career transition patterns globally
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Educational Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Developing new pedagogical approaches for adult learning and reskilling
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Cultural Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Research on cross-cultural competencies in global professional environments
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}