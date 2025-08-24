'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Users, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function LeadershipPage() {
  const leaders = [
    {
      name: 'Dr. Michael Harrison',
      role: 'Chief Executive Officer',
      initials: 'MH',
      bio: 'Former Dean at Harvard Kennedy School with 20+ years in education innovation',
      expertise: ['Strategic Leadership', 'Educational Innovation', 'Global Partnerships']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Academic Officer',
      initials: 'SC',
      bio: 'Philosophy professor and curriculum designer with expertise in adult learning',
      expertise: ['Curriculum Development', 'Philosophy', 'Pedagogy']
    },
    {
      name: 'Prof. James Wilson',
      role: 'Head of Research',
      initials: 'JW',
      bio: 'Leading researcher in AI and human skills, author of 15+ academic papers',
      expertise: ['AI Research', 'Future of Work', 'Data Analysis']
    },
    {
      name: 'Maria Rodriguez',
      role: 'Chief Operating Officer',
      initials: 'MR',
      bio: 'Former VP at Coursera, expert in scaling global education platforms',
      expertise: ['Operations', 'Platform Development', 'User Experience']
    },
    {
      name: 'Dr. Robert Kim',
      role: 'Chief Partnership Officer',
      initials: 'RK',
      bio: 'Built educational partnerships across 30+ countries, former UNESCO advisor',
      expertise: ['International Relations', 'Partnership Development', 'Policy']
    },
    {
      name: 'Emily Thompson',
      role: 'Chief Technology Officer',
      initials: 'ET',
      bio: 'Engineering leader from MIT, pioneered adaptive learning technologies',
      expertise: ['EdTech', 'Platform Architecture', 'Machine Learning']
    }
  ];

  const advisors = [
    { name: 'Prof. David Mitchell', role: 'Oxford University', area: 'Philosophy' },
    { name: 'Dr. Lisa Park', role: 'Stanford University', area: 'Psychology' },
    { name: 'Prof. Zhang Wei', role: 'Tsinghua University', area: 'Cultural Studies' },
    { name: 'Dr. Anna Schmidt', role: 'Max Planck Institute', area: 'Cognitive Science' }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Users className="w-3 h-3 mr-1" />
          Leadership Team
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Our Leadership</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          World-class educators and innovators dedicated to transforming humanities education globally
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {leaders.map((leader, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback>{leader.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">{leader.bio}</p>
              <div className="flex flex-wrap gap-1">
                {leader.expertise.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Advisory Board</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {advisors.map((advisor, index) => (
              <div key={index} className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold">{advisor.name}</p>
                  <p className="text-sm text-muted-foreground">{advisor.role}</p>
                  <Badge variant="outline" className="text-xs mt-1">{advisor.area}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
          <CardContent className="p-8">
            <Award className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
            <p className="text-muted-foreground mb-4">
              We're always looking for passionate educators and innovators to join our mission
            </p>
            <Badge>View Open Positions</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}