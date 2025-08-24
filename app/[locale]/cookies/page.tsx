'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Cookie, Shield, Settings, Info } from 'lucide-react';
import Link from 'next/link';

export default function CookiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="outline">
          <Cookie className="w-3 h-3 mr-1" />
          Cookie Policy
        </Badge>
        <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
        <p className="text-lg text-muted-foreground">
          Last updated: January 2025
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What Are Cookies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Cookies are small text files placed on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences 
            and understanding how you use our platform.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Types of Cookies We Use</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Essential Cookies
            </h3>
            <p className="text-sm text-muted-foreground">
              Required for the website to function properly. These cannot be disabled.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Settings className="w-4 h-4 text-primary" />
              Functional Cookies
            </h3>
            <p className="text-sm text-muted-foreground">
              Remember your preferences such as language and region settings.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Analytics Cookies
            </h3>
            <p className="text-sm text-muted-foreground">
              Help us understand how visitors interact with our website to improve user experience.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Managing Cookies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            You can control and manage cookies in your browser settings. Please note that 
            removing or blocking cookies may impact your user experience and parts of our 
            website may no longer be fully accessible.
          </p>
          <div className="flex gap-4">
            <Button variant="outline">Cookie Settings</Button>
            <Button variant="outline">Clear All Cookies</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you have questions about our use of cookies, please contact us at:
          </p>
          <p className="text-sm text-muted-foreground">
            Email: privacy@humanedge-academy.com<br />
            Phone: +1 (617) 495-2000
          </p>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Link href="/privacy">
          <Button variant="link">View Privacy Policy</Button>
        </Link>
        <Link href="/terms">
          <Button variant="link">View Terms of Service</Button>
        </Link>
      </div>
    </div>
  );
}