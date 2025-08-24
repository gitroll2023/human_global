'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4 py-8 max-w-2xl">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary/20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl">😔</div>
          </div>
        </div>

        {/* Error Messages */}
        <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>

          <Link href="/courses">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              <Search className="mr-2 h-4 w-4" />
              Search Courses
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground mb-4">
            Helpful Links:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/courses" className="text-primary hover:underline">
              All Courses
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/programs" className="text-primary hover:underline">
              Programs
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/about" className="text-primary hover:underline">
              About Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/contact" className="text-primary hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}