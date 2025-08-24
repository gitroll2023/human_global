'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Building, MapPin, Users, Globe, DollarSign, 
  CheckCircle, Shield, AlertCircle, Info, Star,
  FileText, Briefcase, Target, TrendingUp, Award
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PartnerApplyPage() {
  const t = useTranslations();
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    organizationType: '',
    studentsExpected: '',
    currentBusiness: '',
    marketingStrategy: '',
    experience: '',
    investment: '',
    additionalInfo: '',
    agreeTerms: false,
    agreePayment: false
  });

  const licensePackages = [
    {
      id: 'starter',
      name: 'Starter Partner',
      price: '$25,000',
      period: 'per year',
      countries: '1 City License',
      students: 'Up to 500 students',
      features: [
        'Full curriculum access',
        'Basic training program',
        'Marketing materials',
        'Technical support',
        'Quarterly reviews'
      ],
      recommended: false
    },
    {
      id: 'regional',
      name: 'Regional Partner',
      price: '$75,000',
      period: 'per year',
      countries: '1 Country/Region',
      students: 'Up to 2,500 students',
      features: [
        'Full curriculum access',
        'Advanced training program',
        'Co-branded marketing',
        'Priority support',
        'Monthly strategy calls',
        'Local event support'
      ],
      recommended: true
    },
    {
      id: 'master',
      name: 'Master Partner',
      price: '$200,000',
      period: 'per year',
      countries: 'Multiple Countries',
      students: 'Unlimited students',
      features: [
        'Exclusive territory rights',
        'Custom curriculum adaptation',
        'Joint marketing campaigns',
        'Dedicated success manager',
        'Weekly consultations',
        'Revenue sharing options',
        'Sub-licensing rights'
      ],
      recommended: false
    }
  ];

  const countries = [
    'South Korea', 'Japan', 'India', 'Brazil', 'Mexico', 'Indonesia',
    'Philippines', 'Vietnam', 'Thailand', 'Malaysia', 'Saudi Arabia',
    'UAE', 'Egypt', 'South Africa', 'Nigeria', 'Kenya', 'Poland',
    'Turkey', 'Argentina', 'Chile', 'Colombia', 'Peru'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit application
      alert('Application submitted! We will contact you within 48 hours.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-background to-background py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4" variant="outline">
            <Globe className="w-3 h-3 mr-1" />
            Global Partnership Program
          </Badge>
          <h1 className="text-4xl font-bold mb-4">Become a HumanEdge Academy Partner</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-4">
            License our world-class humanities curriculum and join our global network of education partners.
            Bring AI-resistant career education to your country.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Asia Pacific Headquarters: Incheon, South Korea</span>
          </div>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-orange-300 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20">
          <CardHeader>
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5" />
              <div>
                <CardTitle className="text-lg">Partnership Requirements</CardTitle>
                <CardDescription className="mt-2">
                  HumanEdge Academy partners must meet strict quality standards and financial requirements.
                  Annual licensing fees range from $25,000 to $200,000 depending on territory and scope.
                  All partners undergo thorough vetting and must sign exclusive agreements.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* License Packages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Choose Your Partnership Level</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {licensePackages.map((pkg) => (
              <Card 
                key={pkg.id}
                className={cn(
                  "relative hover:shadow-lg transition-all cursor-pointer",
                  selectedPlan === pkg.id && "ring-2 ring-primary",
                  pkg.recommended && "border-primary"
                )}
                onClick={() => setSelectedPlan(pkg.id)}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Recommended
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm font-medium">{pkg.countries}</p>
                    <p className="text-sm text-muted-foreground">{pkg.students}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    variant={selectedPlan === pkg.id ? "default" : "outline"}
                  >
                    {selectedPlan === pkg.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Partnership Application</CardTitle>
            <CardDescription>
              Complete all steps to submit your partnership application
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  step >= 1 ? "bg-primary text-white" : "bg-muted"
                )}>
                  {step > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
                </div>
                <span className="text-sm font-medium">Organization Info</span>
              </div>
              <div className="flex-1 mx-4 h-0.5 bg-muted" />
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  step >= 2 ? "bg-primary text-white" : "bg-muted"
                )}>
                  {step > 2 ? <CheckCircle className="w-5 h-5" /> : '2'}
                </div>
                <span className="text-sm font-medium">Business Plan</span>
              </div>
              <div className="flex-1 mx-4 h-0.5 bg-muted" />
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  step >= 3 ? "bg-primary text-white" : "bg-muted"
                )}>
                  {step > 3 ? <CheckCircle className="w-5 h-5" /> : '3'}
                </div>
                <span className="text-sm font-medium">Agreement</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Organization Info */}
              {step === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="organizationName">Organization Name *</Label>
                      <Input
                        id="organizationName"
                        value={formData.organizationName}
                        onChange={(e) => setFormData({...formData, organizationName: e.target.value})}
                        placeholder="Your company/institution name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Primary Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData({...formData, contactName: e.target.value})}
                        placeholder="Full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="contact@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 234 567 8900"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Target Country *</Label>
                      <Select 
                        value={formData.country} 
                        onValueChange={(value) => setFormData({...formData, country: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
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
                    <div className="space-y-2">
                      <Label htmlFor="city">Primary City/Region *</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({...formData, city: e.target.value})}
                        placeholder="City or region for operations"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Organization Type *</Label>
                    <RadioGroup 
                      value={formData.organizationType}
                      onValueChange={(value) => setFormData({...formData, organizationType: value})}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="education" id="education" />
                        <Label htmlFor="education">Educational Institution</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="training" id="training" />
                        <Label htmlFor="training">Training Company</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="consulting" id="consulting" />
                        <Label htmlFor="consulting">Consulting Firm</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other Business</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              {/* Step 2: Business Plan */}
              {step === 2 && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="studentsExpected">Expected Student Enrollment (Year 1) *</Label>
                    <Select 
                      value={formData.studentsExpected}
                      onValueChange={(value) => setFormData({...formData, studentsExpected: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-100">0-100 students</SelectItem>
                        <SelectItem value="100-500">100-500 students</SelectItem>
                        <SelectItem value="500-1000">500-1,000 students</SelectItem>
                        <SelectItem value="1000-2500">1,000-2,500 students</SelectItem>
                        <SelectItem value="2500+">2,500+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentBusiness">Current Business/Education Experience *</Label>
                    <Textarea
                      id="currentBusiness"
                      value={formData.currentBusiness}
                      onChange={(e) => setFormData({...formData, currentBusiness: e.target.value})}
                      placeholder="Describe your current business and relevant experience in education or training"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="marketingStrategy">Marketing & Student Acquisition Strategy *</Label>
                    <Textarea
                      id="marketingStrategy"
                      value={formData.marketingStrategy}
                      onChange={(e) => setFormData({...formData, marketingStrategy: e.target.value})}
                      placeholder="How will you market HumanEdge Academy and acquire students in your region?"
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="investment">Available Investment Capital *</Label>
                    <Select 
                      value={formData.investment}
                      onValueChange={(value) => setFormData({...formData, investment: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100-200k">$100,000 - $200,000</SelectItem>
                        <SelectItem value="200k+">$200,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Step 3: Agreement */}
              {step === 3 && (
                <>
                  <Card className="bg-muted/50">
                    <CardHeader>
                      <CardTitle className="text-lg">Selected Partnership Package</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {selectedPlan ? (
                        <div>
                          <p className="font-semibold">
                            {licensePackages.find(p => p.id === selectedPlan)?.name}
                          </p>
                          <p className="text-2xl font-bold text-primary mt-2">
                            {licensePackages.find(p => p.id === selectedPlan)?.price}/year
                          </p>
                        </div>
                      ) : (
                        <p className="text-muted-foreground">No package selected</p>
                      )}
                    </CardContent>
                  </Card>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({...formData, additionalInfo: e.target.value})}
                      placeholder="Any additional information you'd like to share"
                      rows={3}
                    />
                  </div>

                  <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => setFormData({...formData, agreeTerms: checked as boolean})}
                        required
                      />
                      <Label htmlFor="agreeTerms" className="text-sm cursor-pointer">
                        I agree to the HumanEdge Academy Partnership Terms and Conditions,
                        including exclusive territory agreements and quality standards.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="agreePayment"
                        checked={formData.agreePayment}
                        onCheckedChange={(checked) => setFormData({...formData, agreePayment: checked as boolean})}
                        required
                      />
                      <Label htmlFor="agreePayment" className="text-sm cursor-pointer">
                        I understand the annual licensing fees and am prepared to make
                        the required investment for my selected partnership level.
                      </Label>
                    </div>
                  </div>
                </>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    className="flex-1"
                  >
                    Previous
                  </Button>
                )}
                <Button 
                  type="submit" 
                  className="flex-1"
                  disabled={
                    (step === 1 && !selectedPlan) ||
                    (step === 3 && (!formData.agreeTerms || !formData.agreePayment || !selectedPlan))
                  }
                >
                  {step < 3 ? 'Continue' : 'Submit Application'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Award className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Proven Curriculum</h3>
              <p className="text-sm text-muted-foreground">
                Access our complete humanities curriculum developed by world-class educators
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <Target className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Marketing Support</h3>
              <p className="text-sm text-muted-foreground">
                Co-branded materials and proven marketing strategies for your region
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <TrendingUp className="w-8 h-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">Growth Potential</h3>
              <p className="text-sm text-muted-foreground">
                Tap into the growing demand for AI-resistant career education
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-lg font-semibold mb-4">Need More Information?</h3>
            <p className="text-muted-foreground mb-6">
              Contact our partnership team for detailed information about licensing opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Building className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">partnerships@humanedge.academy</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">APAC HQ: Incheon, South Korea</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}