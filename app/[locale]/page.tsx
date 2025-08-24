import { NewHeroSection } from '@/components/home/new-hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { GlobalMapSection } from '@/components/home/global-map-section';
import { ProgramsSection } from '@/components/home/programs-section';
import { CoursesPreview } from '@/components/home/courses-preview';
import { LearningCentersSection } from '@/components/home/learning-centers-section';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CtaSection } from '@/components/home/cta-section';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <NewHeroSection />
      <FeaturesSection />
      <GlobalMapSection />
      <ProgramsSection />
      <CoursesPreview />
      <LearningCentersSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}