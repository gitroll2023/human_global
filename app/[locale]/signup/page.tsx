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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, Lock, Eye, EyeOff, User,
  Globe, Sparkles, ArrowRight, Shield, Phone,
  Building, MapPin, Calendar, CheckCircle, Ticket,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function SignupPage() {
  const t = useTranslations();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState('individual');
  const [invitationCode, setInvitationCode] = useState('');
  const [codeError, setCodeError] = useState('');
  const [codeValidated, setCodeValidated] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    country: '',
    company: '',
    jobTitle: '',
    careerGoal: '',
    agreeTerms: false,
    agreeMarketing: false,
  });

  const validateInvitationCode = () => {
    // Mock validation - only specific codes work
    const validCodes = ['BETA2025', 'EARLY2025', 'KOREA2025', 'VIP2025'];
    
    if (validCodes.includes(invitationCode.toUpperCase())) {
      setCodeValidated(true);
      setCodeError('');
      return true;
    } else {
      setCodeError('Invalid invitation code. Please contact support if you need assistance.');
      setCodeValidated(false);
      return false;
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate invitation code on first step
    if (step === 1 && !codeValidated) {
      if (!validateInvitationCode()) {
        return;
      }
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Complete signup - redirect to courses instead of dashboard
      router.push('/courses');
    }
  };

  const countries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Spain',
    'Italy', 'Netherlands', 'Sweden', 'Brazil', 'Chile', 'Mexico',
    'Thailand', 'Singapore', 'Japan', 'Australia', 'India',
    'Canada', 'Poland', 'Portugal', 'Turkey', 'South Korea'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-background to-background py-12 px-4">
      <div className="w-full max-w-2xl">
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
            IEACP - International Education Academy Corporate Platform
          </Badge>
          <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
          <p className="text-muted-foreground">
            Join 500,000+ professionals preparing for the AI era
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 1 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {step > 1 ? <CheckCircle className="h-5 w-5" /> : '1'}
            </div>
            <div className={`w-20 h-1 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 2 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {step > 2 ? <CheckCircle className="h-5 w-5" /> : '2'}
            </div>
            <div className={`w-20 h-1 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
              step >= 3 ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
            }`}>
              3
            </div>
          </div>
        </div>

        {/* Signup Card */}
        <Card className="border-2">
          <CardHeader>
            <CardTitle>
              {step === 1 && 'Account Information'}
              {step === 2 && 'Personal Details'}
              {step === 3 && 'Learning Goals'}
            </CardTitle>
            <CardDescription>
              {step === 1 && 'Choose your account type and create your credentials'}
              {step === 2 && 'Tell us about yourself'}
              {step === 3 && 'Help us personalize your learning experience'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              {/* Step 1: Account Type & Credentials */}
              {step === 1 && (
                <>
                  {/* Invitation Code - Required First */}
                  <div className="space-y-2">
                    <Label htmlFor="invitationCode">
                      Invitation Code <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Ticket className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="invitationCode"
                        type="text"
                        placeholder="Enter your invitation code"
                        value={invitationCode}
                        onChange={(e) => {
                          setInvitationCode(e.target.value);
                          setCodeError('');
                          setCodeValidated(false);
                        }}
                        className={cn(
                          "pl-10 uppercase",
                          codeError && "border-red-500",
                          codeValidated && "border-green-500"
                        )}
                        required
                      />
                      {codeValidated && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
                      )}
                    </div>
                    {codeError && (
                      <div className="flex items-center gap-2 text-sm text-red-500">
                        <AlertCircle className="h-4 w-4" />
                        {codeError}
                      </div>
                    )}
                    {!codeError && !codeValidated && (
                      <p className="text-xs text-muted-foreground">
                        Registration is currently limited to invited users only
                      </p>
                    )}
                    {codeValidated && (
                      <p className="text-xs text-green-600">
                        ✓ Invitation code verified successfully
                      </p>
                    )}
                  </div>

                  {/* Account Type */}
                  <div className="space-y-3">
                    <Label>Account Type</Label>
                    <RadioGroup value={accountType} onValueChange={setAccountType}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="flex-1 cursor-pointer">
                          <div>
                            <p className="font-medium">Individual Learner</p>
                            <p className="text-sm text-muted-foreground">
                              Personal account for professional development
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                        <RadioGroupItem value="corporate" id="corporate" />
                        <Label htmlFor="corporate" className="flex-1 cursor-pointer">
                          <div>
                            <p className="font-medium">Corporate Account</p>
                            <p className="text-sm text-muted-foreground">
                              For teams and organizations
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        className="pl-10 pr-10"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Must be at least 8 characters with uppercase, lowercase, and numbers
                    </p>
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Step 2: Personal Details */}
              {step === 2 && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 234 567 8900"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country} value={country}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {accountType === 'corporate' && (
                    <>
                      {/* Company */}
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="company"
                            type="text"
                            placeholder="Acme Corporation"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            className="pl-10"
                          />
                        </div>
                      </div>

                      {/* Job Title */}
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title</Label>
                        <Input
                          id="jobTitle"
                          type="text"
                          placeholder="Learning & Development Manager"
                          value={formData.jobTitle}
                          onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                        />
                      </div>
                    </>
                  )}
                </>
              )}

              {/* Step 3: Learning Goals */}
              {step === 3 && (
                <>
                  {/* Career Goal */}
                  <div className="space-y-2">
                    <Label htmlFor="careerGoal">What's your primary learning goal?</Label>
                    <Select value={formData.careerGoal} onValueChange={(value) => setFormData({...formData, careerGoal: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="career-change">Career transition to AI-resistant role</SelectItem>
                        <SelectItem value="skill-upgrade">Upgrade current skills for AI era</SelectItem>
                        <SelectItem value="leadership">Develop leadership capabilities</SelectItem>
                        <SelectItem value="personal">Personal growth and development</SelectItem>
                        <SelectItem value="team-training">Train my team/organization</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Interest Areas */}
                  <div className="space-y-2">
                    <Label>Areas of Interest (Select all that apply)</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Critical Thinking',
                        'Creative Problem Solving',
                        'Emotional Intelligence',
                        'Leadership',
                        'Communication',
                        'Ethics & Philosophy',
                        'Cultural Intelligence',
                        'Systems Thinking'
                      ].map((area) => (
                        <div key={area} className="flex items-center space-x-2">
                          <Checkbox id={area} />
                          <Label htmlFor={area} className="text-sm cursor-pointer">
                            {area}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="space-y-3 pt-4 border-t">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="terms" 
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                        required
                      />
                      <Label htmlFor="terms" className="text-sm cursor-pointer">
                        I agree to the{' '}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="marketing" 
                        checked={formData.agreeMarketing}
                        onCheckedChange={(checked) => setFormData({...formData, agreeMarketing: checked as boolean})}
                      />
                      <Label htmlFor="marketing" className="text-sm cursor-pointer">
                        I want to receive updates about courses, events, and special offers
                      </Label>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                )}
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={step === 3 && !formData.agreeTerms}
                >
                  {step < 3 ? 'Continue' : 'Complete Registration'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Your data is protected with enterprise-grade security</span>
            </div>

            {/* Login Link */}
            <div className="text-center text-sm">
              Already have an account?{' '}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <Badge className="mb-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <Sparkles className="h-3 w-3 mr-1" />
            Special Offer - Korea Launch August 2025
          </Badge>
          <p className="text-xs text-muted-foreground">
            Get 50% off for the first 3 months as an early member
          </p>
        </div>
      </div>
    </div>
  );
}