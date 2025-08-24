'use client';

import { useTranslations } from 'next-intl';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CourseFiltersProps {
  selectedCategory: string;
  selectedLevel: string;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
}

export function CourseFilters({
  selectedCategory,
  selectedLevel,
  onCategoryChange,
  onLevelChange,
}: CourseFiltersProps) {
  const t = useTranslations('courses');

  const categories = [
    { value: 'all', label: t('filters.all') },
    { value: 'ai-ethics', label: t('categories.ethics') },
    { value: 'philosophy', label: t('categories.philosophy') },
    { value: 'history', label: t('categories.history') },
    { value: 'literature', label: t('categories.literature') },
    { value: 'art-history', label: t('categories.artHistory') },
    { value: 'theology', label: t('categories.religion') },
    { value: 'leadership', label: t('categories.leadership') },
    { value: 'critical-thinking', label: t('categories.criticalThinking') },
    { value: 'humanities', label: t('categories.culturalStudies') },
  ];

  const levels = [
    { value: 'all', label: t('filters.all') },
    { value: 'beginner', label: t('filters.beginner') },
    { value: 'intermediate', label: t('filters.intermediate') },
    { value: 'advanced', label: t('filters.advanced') },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{t('filters.title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Category Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            {t('filters.category')}
          </Label>
          <RadioGroup value={selectedCategory} onValueChange={onCategoryChange}>
            {categories.map((category) => (
              <div key={category.value} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={category.value} id={`category-${category.value}`} />
                <Label
                  htmlFor={`category-${category.value}`}
                  className="font-normal cursor-pointer"
                >
                  {category.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        {/* Level Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            {t('filters.level')}
          </Label>
          <RadioGroup value={selectedLevel} onValueChange={onLevelChange}>
            {levels.map((level) => (
              <div key={level.value} className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value={level.value} id={`level-${level.value}`} />
                <Label
                  htmlFor={`level-${level.value}`}
                  className="font-normal cursor-pointer"
                >
                  {level.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}