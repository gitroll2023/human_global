'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, MessageSquare, Clock, Shield, 
  AlertCircle, CheckCircle, Zap, Monitor
} from 'lucide-react';

export default function TechnicalSupportPage() {
  const commonIssues = [
    { title: 'Login Problems', icon: Shield, solution: 'Reset password or clear browser cache' },
    { title: 'Video Playback', icon: Monitor, solution: 'Check internet connection and browser settings' },
    { title: 'Payment Issues', icon: AlertCircle, solution: 'Verify card details or try alternative payment' },
    { title: 'Course Access', icon: CheckCircle, solution: 'Ensure enrollment is complete' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Headphones className="w-3 h-3 mr-1" />
          Technical Support
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Technical Support Center</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get help with platform issues, account problems, and technical questions
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardContent className="p-6 text-center">
            <MessageSquare className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground mb-4">Available 24/7</p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Clock className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground mb-4">Response within 24 hours</p>
            <Button className="w-full" variant="outline">Send Email</Button>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-semibold mb-2">System Status</h3>
            <p className="text-sm text-muted-foreground mb-4">All systems operational</p>
            <Button className="w-full" variant="outline">View Status</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Common Issues & Solutions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {commonIssues.map((issue, index) => {
              const Icon = issue.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                  <Icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold">{issue.title}</h4>
                    <p className="text-sm text-muted-foreground">{issue.solution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}