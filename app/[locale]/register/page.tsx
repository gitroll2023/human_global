'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserPlus, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to signup page immediately
    router.push('/signup');
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-background to-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 text-center">
              <UserPlus className="w-16 h-16 mx-auto mb-4 text-primary" />
              <Badge className="mb-4" variant="outline">
                <Sparkles className="w-3 h-3 mr-1" />
                Registration
              </Badge>
              
              <h1 className="text-3xl font-bold mb-4">
                Redirecting to Sign Up
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                You're being redirected to our registration page...
              </p>
              
              <Link href="/signup">
                <Button size="lg" className="w-full">
                  Go to Sign Up
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              
              <p className="text-xs text-muted-foreground mt-6">
                Redirecting automatically...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}