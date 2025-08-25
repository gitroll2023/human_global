'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, Building2, Globe, Users, TrendingUp, Shield, CheckCircle2, Send } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PartnerApplicationPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedIn: '',
    
    // Company Information
    companyName: '',
    position: '',
    companyWebsite: '',
    companySize: '',
    industry: '',
    
    // Regional Information
    country: '',
    city: '',
    targetRegions: '',
    
    // Financial Information
    investmentCapacity: '',
    fundingSource: '',
    previousInvestments: '',
    
    // Business Plan
    marketSize: '',
    targetAudience: '',
    marketingStrategy: '',
    expectedROI: '',
    timelineToLaunch: '',
    
    // Experience & Influence
    educationExperience: '',
    businessExperience: '',
    networkSize: '',
    governmentConnections: '',
    mediaInfluence: '',
    
    // Partnership Details
    partnershipType: '',
    exclusivityInterest: '',
    additionalServices: [],
    
    // Additional Information
    whyPartner: '',
    uniqueValue: '',
    challenges: '',
    
    // Agreements
    nda: false,
    terms: false,
    backgroundCheck: false,
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission delay
    setTimeout(() => {
      setSubmitted(true);
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const isStepValid = () => {
    switch(step) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone;
      case 2:
        return formData.companyName && formData.position && formData.country && formData.city;
      case 3:
        return formData.investmentCapacity && formData.fundingSource && formData.marketSize;
      case 4:
        return formData.educationExperience && formData.networkSize && formData.whyPartner;
      case 5:
        return formData.nda && formData.terms && formData.backgroundCheck;
      default:
        return false;
    }
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-green-500 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader className="text-center">
              <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-3xl">Application Submitted Successfully</CardTitle>
              <CardDescription className="text-lg mt-4">
                Thank you for your interest in becoming a HumanEdge Academy partner
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border">
                <h3 className="font-semibold mb-3">What happens next?</h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">1.</span>
                    Our partnership team will review your application within 48 hours
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">2.</span>
                    You'll receive an email with a preliminary assessment and next steps
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">3.</span>
                    Qualified applicants will be invited to a virtual meeting to discuss partnership terms
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-semibold">4.</span>
                    Upon agreement, we'll provide you with the partnership agreement and onboarding materials
                  </li>
                </ol>
              </div>
              
              <Alert>
                <AlertDescription>
                  Your application reference number is: <strong>HA-{Date.now().toString().slice(-8)}</strong>
                  <br />
                  Please save this number for future correspondence.
                </AlertDescription>
              </Alert>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/partners">
                  <Button variant="outline" size="lg">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Partners
                  </Button>
                </Link>
                <Link href="/">
                  <Button size="lg">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Link href="/partners">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Partners
          </Button>
        </Link>
        
        <div className="text-center mb-8">
          <Badge className="mb-4" variant="secondary">
            Partnership Application
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            Expand HumanEdge Academy to Your Country
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our global network of education partners and bring AI-era humanities education 
            to your region. We're looking for visionary leaders ready to transform education.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`flex items-center ${i < 5 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    i <= step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {i}
                </div>
                {i < 5 && (
                  <div
                    className={`h-1 flex-1 mx-2 transition-colors ${
                      i < step ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Personal</span>
            <span>Company</span>
            <span>Financial</span>
            <span>Experience</span>
            <span>Agreement</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && 'Personal Information'}
            {step === 2 && 'Company & Regional Information'}
            {step === 3 && 'Financial Capacity & Business Plan'}
            {step === 4 && 'Experience & Influence'}
            {step === 5 && 'Partnership Terms & Agreement'}
          </CardTitle>
          <CardDescription>
            {step === 1 && 'Tell us about yourself and how we can reach you'}
            {step === 2 && 'Provide details about your company and target market'}
            {step === 3 && 'Help us understand your financial capacity and business vision'}
            {step === 4 && 'Share your experience and influence in the education sector'}
            {step === 5 && 'Review and accept our partnership terms'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 234 567 8900"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                    <Input
                      id="linkedIn"
                      placeholder="linkedin.com/in/yourprofile"
                      value={formData.linkedIn}
                      onChange={(e) => handleInputChange('linkedIn', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Company & Regional Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Your Position *</Label>
                    <Input
                      id="position"
                      placeholder="CEO, Director, etc."
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="companyWebsite">Company Website</Label>
                    <Input
                      id="companyWebsite"
                      placeholder="https://yourcompany.com"
                      value={formData.companyWebsite}
                      onChange={(e) => handleInputChange('companyWebsite', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange('companySize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-500">201-500 employees</SelectItem>
                        <SelectItem value="500+">500+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="country">Target Country *</Label>
                    <Input
                      id="country"
                      placeholder="e.g., United States"
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">Primary City *</Label>
                    <Input
                      id="city"
                      placeholder="e.g., New York"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="targetRegions">Target Regions/States</Label>
                  <Textarea
                    id="targetRegions"
                    placeholder="List the specific regions or states you plan to operate in"
                    value={formData.targetRegions}
                    onChange={(e) => handleInputChange('targetRegions', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Financial Capacity & Business Plan */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="investmentCapacity">Investment Capacity (USD) *</Label>
                    <Select value={formData.investmentCapacity} onValueChange={(value) => handleInputChange('investmentCapacity', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="1m-2.5m">$1,000,000 - $2,500,000</SelectItem>
                        <SelectItem value="2.5m-5m">$2,500,000 - $5,000,000</SelectItem>
                        <SelectItem value="5m+">$5,000,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fundingSource">Funding Source *</Label>
                    <Select value={formData.fundingSource} onValueChange={(value) => handleInputChange('fundingSource', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select funding source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="personal">Personal Funds</SelectItem>
                        <SelectItem value="corporate">Corporate Funds</SelectItem>
                        <SelectItem value="investors">Private Investors</SelectItem>
                        <SelectItem value="vc">Venture Capital</SelectItem>
                        <SelectItem value="bank">Bank Financing</SelectItem>
                        <SelectItem value="mixed">Mixed Sources</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="marketSize">Estimated Market Size *</Label>
                    <Select value={formData.marketSize} onValueChange={(value) => handleInputChange('marketSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select market size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<10k">Less than 10,000 students</SelectItem>
                        <SelectItem value="10k-50k">10,000 - 50,000 students</SelectItem>
                        <SelectItem value="50k-100k">50,000 - 100,000 students</SelectItem>
                        <SelectItem value="100k-500k">100,000 - 500,000 students</SelectItem>
                        <SelectItem value="500k-1m">500,000 - 1,000,000 students</SelectItem>
                        <SelectItem value="1m+">Over 1,000,000 students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="timelineToLaunch">Timeline to Launch</Label>
                    <Select value={formData.timelineToLaunch} onValueChange={(value) => handleInputChange('timelineToLaunch', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="6months">3-6 months</SelectItem>
                        <SelectItem value="12months">6-12 months</SelectItem>
                        <SelectItem value="12months+">More than 12 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="targetAudience">Target Audience</Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="Describe your primary target audience (universities, corporations, government, etc.)"
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div>
                  <Label htmlFor="marketingStrategy">Marketing & Growth Strategy</Label>
                  <Textarea
                    id="marketingStrategy"
                    placeholder="Briefly describe your planned marketing and growth strategy"
                    value={formData.marketingStrategy}
                    onChange={(e) => handleInputChange('marketingStrategy', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 4: Experience & Influence */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="educationExperience">Experience in Education Sector *</Label>
                  <Select value={formData.educationExperience} onValueChange={(value) => handleInputChange('educationExperience', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No direct experience</SelectItem>
                      <SelectItem value="1-3years">1-3 years</SelectItem>
                      <SelectItem value="3-5years">3-5 years</SelectItem>
                      <SelectItem value="5-10years">5-10 years</SelectItem>
                      <SelectItem value="10years+">More than 10 years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="businessExperience">Business Management Experience</Label>
                  <Textarea
                    id="businessExperience"
                    placeholder="Describe your relevant business management experience"
                    value={formData.businessExperience}
                    onChange={(e) => handleInputChange('businessExperience', e.target.value)}
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="networkSize">Professional Network Size *</Label>
                    <Select value={formData.networkSize} onValueChange={(value) => handleInputChange('networkSize', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select network size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<100">Less than 100 contacts</SelectItem>
                        <SelectItem value="100-500">100-500 contacts</SelectItem>
                        <SelectItem value="500-1000">500-1,000 contacts</SelectItem>
                        <SelectItem value="1000-5000">1,000-5,000 contacts</SelectItem>
                        <SelectItem value="5000+">More than 5,000 contacts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="governmentConnections">Government/Institutional Connections</Label>
                    <Select value={formData.governmentConnections} onValueChange={(value) => handleInputChange('governmentConnections', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select connection level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No significant connections</SelectItem>
                        <SelectItem value="local">Local government connections</SelectItem>
                        <SelectItem value="regional">Regional/State level connections</SelectItem>
                        <SelectItem value="national">National level connections</SelectItem>
                        <SelectItem value="international">International connections</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="whyPartner">Why do you want to partner with HumanEdge Academy? *</Label>
                  <Textarea
                    id="whyPartner"
                    placeholder="Share your motivation and vision for bringing HumanEdge Academy to your region"
                    value={formData.whyPartner}
                    onChange={(e) => handleInputChange('whyPartner', e.target.value)}
                    rows={4}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="uniqueValue">What unique value can you bring to this partnership?</Label>
                  <Textarea
                    id="uniqueValue"
                    placeholder="Describe your unique strengths, resources, or connections that would benefit the partnership"
                    value={formData.uniqueValue}
                    onChange={(e) => handleInputChange('uniqueValue', e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Partnership Terms & Agreement */}
            {step === 5 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Partnership Type</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="partnershipType">Preferred Partnership Model</Label>
                        <Select value={formData.partnershipType} onValueChange={(value) => handleInputChange('partnershipType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select partnership type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exclusive">Exclusive Regional License</SelectItem>
                            <SelectItem value="master">Master Franchise</SelectItem>
                            <SelectItem value="corporate">Corporate Partnership</SelectItem>
                            <SelectItem value="university">University Partnership</SelectItem>
                            <SelectItem value="government">Government Partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="exclusivityInterest">Exclusivity Interest</Label>
                        <Select value={formData.exclusivityInterest} onValueChange={(value) => handleInputChange('exclusivityInterest', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select exclusivity preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="country">Country-wide exclusivity</SelectItem>
                            <SelectItem value="region">Regional exclusivity</SelectItem>
                            <SelectItem value="city">City-level exclusivity</SelectItem>
                            <SelectItem value="non-exclusive">Non-exclusive partnership</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Terms & Conditions</CardTitle>
                    <CardDescription>
                      Please review and accept the following terms to proceed with your application
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="nda"
                        checked={formData.nda}
                        onCheckedChange={(checked) => handleInputChange('nda', checked)}
                      />
                      <div>
                        <Label htmlFor="nda" className="cursor-pointer">
                          Non-Disclosure Agreement (NDA) *
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          I agree to maintain confidentiality of all proprietary information shared during the partnership evaluation process
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange('terms', checked)}
                      />
                      <div>
                        <Label htmlFor="terms" className="cursor-pointer">
                          Partnership Terms & Conditions *
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          I have read and agree to the HumanEdge Academy partnership terms and conditions, including financial obligations and operational requirements
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="backgroundCheck"
                        checked={formData.backgroundCheck}
                        onCheckedChange={(checked) => handleInputChange('backgroundCheck', checked)}
                      />
                      <div>
                        <Label htmlFor="backgroundCheck" className="cursor-pointer">
                          Background Verification *
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          I consent to background verification and due diligence checks as part of the partnership evaluation process
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Your information will be handled in accordance with our privacy policy and will only be used for partnership evaluation purposes.
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
              >
                Previous
              </Button>
              
              {step < 5 ? (
                <Button
                  type="button"
                  onClick={() => setStep(Math.min(5, step + 1))}
                  disabled={!isStepValid()}
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStepValid()}
                  className="gap-2"
                >
                  <Send className="h-4 w-4" />
                  Submit Application
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}