'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, CreditCard, Shield, Globe, Users, BookOpen, Award, Headphones, Brain, Sparkles, GraduationCap, Heart, TreePine, Loader2, Apple, Smartphone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ToastProvider, useToast } from '@/components/ui/toast';
import Link from 'next/link';

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
  recommended?: boolean;
}

interface PaymentFormData {
  email: string;
  fullName: string;
  paymentMethod: 'card' | 'paypal' | 'apple' | 'google';
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  billingCountry: string;
  acceptTerms: boolean;
}

interface FormErrors {
  email?: string;
  fullName?: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  billingCountry?: string;
  acceptTerms?: string;
}

function PaymentModal({ plan, billingPeriod }: { plan: PricingPlan; billingPeriod: 'monthly' | 'annual' }) {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState<'details' | 'payment' | 'processing' | 'success'>('details');
  const [formData, setFormData] = useState<PaymentFormData>({
    email: '',
    fullName: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingCountry: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (step: 'details' | 'payment') => {
    const newErrors: FormErrors = {};
    
    if (step === 'details') {
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.billingCountry) newErrors.billingCountry = 'Country is required';
    }
    
    if (step === 'payment') {
      if (formData.paymentMethod === 'card') {
        if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
        if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
        if (!formData.cvv) newErrors.cvv = 'CVV is required';
      }
      if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 'details' && validateForm('details')) {
      setCurrentStep('payment');
    } else if (currentStep === 'payment' && validateForm('payment')) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setCurrentStep('processing');

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setCurrentStep('success');
    setIsLoading(false);

    toast({
      type: 'success',
      title: 'Payment Successful!',
      description: `Welcome to ${plan.name}! Check your email for course access.`,
      duration: 5000,
    });

    // Reset after success
    setTimeout(() => {
      setIsOpen(false);
      setCurrentStep('details');
      setFormData({
        email: '',
        fullName: '',
        paymentMethod: 'card',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        billingCountry: '',
        acceptTerms: false,
      });
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`w-full ${
            plan.recommended
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              : ''
          }`}
          variant={plan.recommended ? 'default' : 'outline'}
        >
          Start Free Trial
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            {currentStep === 'success' ? 'Welcome to HumanEdge Academy!' : `Subscribe to ${plan.name}`}
          </DialogTitle>
          <DialogDescription>
            {currentStep === 'success' 
              ? 'Your subscription has been activated successfully.'
              : `Start your 7-day free trial for ${plan.price}${plan.period} after trial ends.`
            }
          </DialogDescription>
        </DialogHeader>

        {currentStep === 'details' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Plan Summary</h3>
              <div className="flex justify-between">
                <span>{plan.name}</span>
                <span className="font-bold">{plan.price}{plan.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                7-day free trial • Cancel anytime
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">Billing Country</Label>
                <Select value={formData.billingCountry} onValueChange={(value) => setFormData(prev => ({ ...prev, billingCountry: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                    <SelectItem value="de">Germany</SelectItem>
                    <SelectItem value="fr">France</SelectItem>
                    <SelectItem value="jp">Japan</SelectItem>
                    <SelectItem value="kr">South Korea</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.billingCountry && <p className="text-sm text-red-500">{errors.billingCountry}</p>}
              </div>
            </div>
          </div>
        )}

        {currentStep === 'payment' && (
          <div className="space-y-6">
            <div className="space-y-4">
              <Label>Payment Method</Label>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={(value) => setFormData(prev => ({ ...prev, paymentMethod: value as any }))}
                className="grid grid-cols-2 gap-4"
              >
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <RadioGroupItem value="card" id="card" />
                  <Label htmlFor="card" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Credit Card
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex items-center gap-2">
                    PayPal
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <RadioGroupItem value="apple" id="apple" />
                  <Label htmlFor="apple" className="flex items-center gap-2">
                    <Apple className="h-4 w-4" />
                    Apple Pay
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-3">
                  <RadioGroupItem value="google" id="google" />
                  <Label htmlFor="google" className="flex items-center gap-2">
                    <Smartphone className="h-4 w-4" />
                    Google Pay
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                  {errors.cardNumber && <p className="text-sm text-red-500">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, expiryDate: e.target.value }))}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                    {errors.expiryDate && <p className="text-sm text-red-500">{errors.expiryDate}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={formData.cvv}
                      onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value }))}
                      placeholder="123"
                      maxLength={4}
                    />
                    {errors.cvv && <p className="text-sm text-red-500">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod !== 'card' && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  You'll be redirected to {formData.paymentMethod === 'paypal' ? 'PayPal' : formData.paymentMethod === 'apple' ? 'Apple Pay' : 'Google Pay'} to complete your payment securely.
                </p>
              </div>
            )}

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, acceptTerms: !!checked }))}
              />
              <Label htmlFor="terms" className="text-sm">
                I accept the <Link href="/terms" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
              </Label>
            </div>
            {errors.acceptTerms && <p className="text-sm text-red-500">{errors.acceptTerms}</p>}
          </div>
        )}

        {currentStep === 'processing' && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <h3 className="text-lg font-semibold">Processing Payment...</h3>
            <p className="text-sm text-muted-foreground text-center">
              Please wait while we securely process your payment. This may take a few moments.
            </p>
          </div>
        )}

        {currentStep === 'success' && (
          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold">Payment Successful!</h3>
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Welcome to {plan.name}! Your 7-day free trial has started.
              </p>
              <p className="text-sm text-muted-foreground">
                Check your email for course access and getting started guide.
              </p>
            </div>
          </div>
        )}

        <DialogFooter>
          {currentStep === 'details' && (
            <Button onClick={handleNext} className="w-full">
              Continue to Payment
            </Button>
          )}
          {currentStep === 'payment' && (
            <div className="flex gap-2 w-full">
              <Button variant="outline" onClick={() => setCurrentStep('details')} className="flex-1">
                Back
              </Button>
              <Button onClick={handleNext} disabled={isLoading} className="flex-1">
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
                Complete Payment
              </Button>
            </div>
          )}
          {currentStep === 'success' && (
            <Button onClick={() => setIsOpen(false)} className="w-full">
              Start Learning
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function PricingContent() {
  const t = useTranslations('pricing');
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('monthly');

  const plans: PricingPlan[] = [
    {
      name: 'Foundations',
      price: billingPeriod === 'monthly' ? '$39' : '$390',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Essential humanities courses for AI professionals',
      features: [
        '50+ AI Ethics & Philosophy courses',
        'Basic course completion certificates',
        'Community discussion forums',
        'Mobile & desktop access',
        'Email support',
        'Monthly Q&A sessions',
        'Course progress tracking',
      ],
    },
    {
      name: 'Professional',
      price: billingPeriod === 'monthly' ? '$89' : '$890',
      period: billingPeriod === 'monthly' ? '/month' : '/year',
      description: 'Advanced humanities education for technology leaders',
      badge: 'Most Popular',
      recommended: true,
      features: [
        'All 200+ courses including exclusive content',
        'Professional certificates from former OpenAI developers',
        'Courses by leading AI ethicists and philosophers',
        '1-on-1 mentorship with philosophy experts',
        'Priority access to new course releases',
        'Live workshops with industry thought leaders',
        'AI-powered personalized learning paths',
        'Career transition guidance for tech professionals',
        'Access to exclusive religious perspectives on technology',
        'Networking events with AI ethics professionals',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Comprehensive humanities education for organizations',
      features: [
        'Custom course curation for your organization',
        'Team management and progress dashboards',
        'Dedicated success manager and learning consultants',
        'White-label platform with your branding',
        'Corporate certificates and compliance tracking',
        'Integration with your existing LMS/HR systems',
        'Bulk user management and SSO integration',
        'Advanced analytics and learning outcome reports',
        'Custom workshops and executive briefings',
        'Priority support and implementation services',
      ],
    },
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'AI Ethics Expertise',
      description: 'Learn from former OpenAI developers and leading AI ethicists',
    },
    {
      icon: Users,
      title: '50,000+ Tech Professionals',
      description: 'Join a community of engineers, product managers, and tech leaders exploring humanities',
    },
    {
      icon: Sparkles,
      title: 'Philosophy for AI Era',
      description: 'Courses specifically designed to address modern technological challenges',
    },
    {
      icon: GraduationCap,
      title: 'Professional Certificates',
      description: 'Industry-recognized credentials that enhance your tech career',
    },
    {
      icon: Heart,
      title: 'Human-Centered Technology',
      description: 'Develop empathy and ethical reasoning for building better technology',
    },
    {
      icon: TreePine,
      title: 'Diverse Perspectives',
      description: 'Religious, philosophical, and cultural viewpoints on technology\'s role in society',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white" variant="secondary">
          Limited Time: Save 20% on Annual Plans
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Humanities Education for the AI Era
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master philosophy, ethics, and human perspectives to thrive as a technology professional in an AI-driven world
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-8">
        <Tabs value={billingPeriod} onValueChange={(v) => setBillingPeriod(v as 'monthly' | 'annual')}>
          <TabsList className="grid w-[400px] grid-cols-2">
            <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
            <TabsTrigger value="annual">
              Annual Billing
              <Badge className="ml-2" variant="secondary">
                Save 20%
              </Badge>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`relative ${
              plan.recommended
                ? 'border-primary shadow-lg scale-105'
                : ''
            }`}
          >
            {plan.badge && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                {plan.badge}
              </Badge>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
                {billingPeriod === 'annual' && plan.price !== 'Custom' && (
                  <p className="text-sm text-green-600 mt-2">
                    Save ${billingPeriod === 'annual' ? '58' : '0'} per year
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {plan.price === 'Custom' ? (
                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact Sales
                  </Button>
                </Link>
              ) : (
                <PaymentModal plan={plan} billingPeriod={billingPeriod} />
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose HumanEdge Academy for AI Professionals?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t pt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Secure Payment Options</h3>
          <p className="text-muted-foreground mb-8">
            We accept all major payment methods for your convenience
          </p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
              alt="Stripe"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
              alt="Visa"
              className="h-8"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="h-10"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
              alt="American Express"
              className="h-8"
            />
          </div>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>256-bit SSL encryption • PCI DSS compliant • Secure checkout</span>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">How do humanities courses help tech professionals?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Our courses develop critical thinking, ethical reasoning, and empathy - essential skills for building responsible AI and leading diverse tech teams in an increasingly automated world.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Are the instructors really former OpenAI developers?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Yes! Our instructors include former researchers from OpenAI, Google DeepMind, and other leading AI companies who bring real-world experience in AI ethics and safety.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Is there a free trial?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Yes, all paid plans include a 7-day free trial with full access to our course library. You can cancel anytime during the trial period.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">What payment methods do you accept?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, PayPal, Apple Pay, Google Pay, and offer invoice billing for enterprise customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Korea Launch Notice */}
      <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-8 text-center">
        <Badge className="mb-4 bg-orange-500 text-white">
          Coming Soon
        </Badge>
        <h3 className="text-2xl font-bold mb-2">Launching in South Korea - August 2025</h3>
        <p className="text-muted-foreground mb-4">
          Special launch pricing and localized payment methods will be available for Korean customers
        </p>
        <Link href="/partners/korea">
          <Button variant="outline">
            Learn More About Korea Launch
          </Button>
        </Link>
      </div>

      {/* Featured Course Preview */}
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">Featured Course</h3>
          <p className="text-muted-foreground">
            Get a preview of our most popular course
          </p>
        </div>
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">Ethics in AI Development</CardTitle>
                <CardDescription>
                  Taught by former OpenAI researcher Dr. Sarah Chen
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Learn to navigate complex ethical decisions in AI development, from bias mitigation to 
              responsible deployment practices. This course combines philosophical frameworks with 
              practical case studies from real AI projects.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>⏱️ 8 hours</span>
                <span>🎓 Certificate included</span>
                <span>⭐ 4.9/5 rating</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Preview Course Free
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <ToastProvider>
      <PricingContent />
    </ToastProvider>
  );
}