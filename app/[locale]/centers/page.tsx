'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, ArrowRight, Globe, Users } from 'lucide-react';
import Link from 'next/link';

export default function CentersPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to partners page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/partners');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-background to-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 text-center">
              <Building className="w-16 h-16 mx-auto mb-4 text-primary" />
              <Badge className="mb-4" variant="outline">
                <Globe className="w-3 h-3 mr-1" />
                Global Network
              </Badge>
              
              <h1 className="text-3xl font-bold mb-4">
                Learning Centers
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6">
                Our learning centers are part of our global partner network.
                You'll be redirected to our partners page momentarily...
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
                <h2 className="font-semibold mb-4">HumanEdge Academy Global Presence</h2>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold text-primary">24</div>
                    <div className="text-muted-foreground">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">45+</div>
                    <div className="text-muted-foreground">Partner Centers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">500K+</div>
                    <div className="text-muted-foreground">Students</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link href="/partners">
                  <Button size="lg" className="w-full max-w-sm">
                    View Partner Network
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <Link href="/partners/apply">
                  <Button size="lg" variant="outline" className="w-full max-w-sm">
                    Become a Partner
                    <Users className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-xs text-muted-foreground mt-6">
                Redirecting in 3 seconds...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}