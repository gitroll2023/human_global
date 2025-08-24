'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Accessibility, Eye, Ear, Hand, Keyboard, 
  Monitor, Smartphone, CheckCircle, Info
} from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Accessibility className="w-3 h-3 mr-1" />
          Accessibility
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          HumanEdge Academy is committed to ensuring digital accessibility for people with disabilities
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Commitment</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            We are continually improving the user experience for everyone and applying the relevant 
            accessibility standards to achieve equal access for all users.
          </p>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span>WCAG 2.1 Level AA Compliant</span>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Accessibility Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              Visual Accessibility
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
              <li>• High contrast mode support</li>
              <li>• Resizable text up to 200%</li>
              <li>• Clear focus indicators</li>
              <li>• Alternative text for images</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Ear className="w-4 h-4 text-primary" />
              Auditory Accessibility
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
              <li>• Captions for all video content</li>
              <li>• Transcripts for audio materials</li>
              <li>• Visual indicators for audio alerts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Keyboard className="w-4 h-4 text-primary" />
              Keyboard Navigation
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
              <li>• Full keyboard navigation support</li>
              <li>• Skip navigation links</li>
              <li>• Logical tab order</li>
              <li>• No keyboard traps</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Monitor className="w-4 h-4 text-primary" />
              Screen Reader Support
            </h3>
            <ul className="text-sm text-muted-foreground space-y-1 ml-6">
              <li>• Semantic HTML structure</li>
              <li>• ARIA labels and descriptions</li>
              <li>• Meaningful page titles</li>
              <li>• Descriptive link text</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Supported Devices & Browsers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Monitor className="w-4 h-4" />
                Desktop
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Chrome (latest)</li>
                <li>• Firefox (latest)</li>
                <li>• Safari (latest)</li>
                <li>• Edge (latest)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Mobile
              </h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• iOS Safari</li>
                <li>• Chrome Mobile</li>
                <li>• Samsung Internet</li>
                <li>• Firefox Mobile</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Assistive Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Our platform is tested with the following assistive technologies:</p>
          <ul className="text-sm space-y-1">
            <li>• NVDA (Windows)</li>
            <li>• JAWS (Windows)</li>
            <li>• VoiceOver (macOS/iOS)</li>
            <li>• TalkBack (Android)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Need Help?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            If you encounter any barriers to accessing content or using features on our website, 
            please contact us immediately. We take accessibility issues seriously and will work 
            to resolve any problems promptly.
          </p>
          <div className="bg-muted p-4 rounded-lg">
            <p className="font-semibold mb-2">Accessibility Support Team</p>
            <p className="text-sm text-muted-foreground">
              Email: accessibility@humanedge-academy.com<br />
              Phone: +1 (617) 495-2000 (Option 3)<br />
              Response time: Within 48 hours
            </p>
          </div>
          <div className="flex gap-4">
            <Button>Report an Issue</Button>
            <Button variant="outline">Request Alternative Format</Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <div className="flex items-start gap-2">
          <Info className="w-5 h-5 text-muted-foreground mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold mb-1">Continuous Improvement</p>
            <p>
              We regularly review and update our accessibility features. This statement was last 
              updated in January 2025. We conduct quarterly accessibility audits to ensure 
              ongoing compliance and improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}