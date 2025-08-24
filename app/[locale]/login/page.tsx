'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, Lock, Eye, EyeOff, 
  Globe, Sparkles, ArrowRight, Shield, AlertCircle,
  Loader2, CheckCircle, Info, Building
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function LoginPage() {
  const t = useTranslations();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showServiceNotice, setShowServiceNotice] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock validation
    setIsLoading(false);
    setLoginError('Invalid email or password. Please check your credentials.');
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    setShowServiceNotice(false);
    
    // Simulate OAuth flow
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Show service notice instead of actual login
    setIsLoading(false);
    setShowServiceNotice(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 via-background to-background py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4">
            <Image 
              src="/logo_symbol.png" 
              alt="HumanEdge Academy" 
              width={48} 
              height={48} 
              className="h-12 w-12"
              priority
            />
            <span className="text-2xl font-bold">{t('common.siteName')}</span>
          </Link>
          <Badge variant="outline" className="mb-4">
            <Globe className="h-3 w-3 mr-1" />
            IEACN Member
          </Badge>
          <h1 className="text-3xl font-bold mb-2">{t('common.login')}</h1>
          <p className="text-muted-foreground">
            Welcome back! Continue your learning journey
          </p>
        </div>

        {/* Service Notice */}
        {showServiceNotice && (
          <div className="mb-4 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                  Social Login Coming Soon
                </p>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  Social authentication will be available when we officially launch in August 2025. 
                  For now, please use email login or contact support for demo access.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Login Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Sign in to your account</CardTitle>
            <CardDescription>
              Enter your email and password to access your courses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setLoginError('');
                    }}
                    className={cn(
                      "pl-10",
                      loginError && "border-red-500"
                    )}
                    disabled={isLoading}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setLoginError('');
                    }}
                    className={cn(
                      "pl-10 pr-10",
                      loginError && "border-red-500"
                    )}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {loginError && (
                <div className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  {loginError}
                </div>
              )}

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                    disabled={isLoading}
                  />
                  <Label htmlFor="remember" className="text-sm cursor-pointer">
                    Remember me
                  </Label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Secure login with 256-bit SSL encryption</span>
            </div>

            {/* Sign Up Link */}
            <div className="text-center text-sm">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary font-semibold hover:underline">
                Sign up (Invitation Required)
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <Sparkles className="h-3 w-3 mr-1" />
            Korea Launch - August 2025
          </Badge>
          <p className="text-xs text-muted-foreground">
            Join 500,000+ professionals preparing for the AI era
          </p>
        </div>
      </div>
    </div>
  );
}