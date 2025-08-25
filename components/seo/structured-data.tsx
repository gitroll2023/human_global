import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'course' | 'website' | 'breadcrumb' | 'faq';
  data?: any;
}

export function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "HumanEdge Academy",
          "alternateName": "HumanEdge",
          "url": "https://humanedgeacademy.com",
          "logo": "https://humanedgeacademy.com/logo_symbol.png",
          "description": "Leading global LMS platform for humanities education in the AI era",
          "foundingDate": "2023",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "100 Global Education Blvd",
            "addressLocality": "New York",
            "addressRegion": "NY",
            "postalCode": "10001",
            "addressCountry": "US"
          },
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-555-231-1511",
              "contactType": "customer service",
              "email": "support@humanedgeacademy.com",
              "areaServed": "Worldwide",
              "availableLanguage": ["English", "Korean", "Spanish", "French", "German", "Portuguese", "Thai"]
            }
          ],
          "sameAs": [
            "https://www.facebook.com/humanedgeacademy",
            "https://twitter.com/humanedgeacademy",
            "https://www.linkedin.com/company/humanedge-academy",
            "https://www.youtube.com/@humanedgeacademy",
            "https://www.instagram.com/humanedgeacademy"
          ],
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "29",
            "highPrice": "499",
            "offerCount": "200+",
            "offers": [
              {
                "@type": "Offer",
                "name": "Starter Plan",
                "price": "29",
                "priceCurrency": "USD",
                "description": "Access to 50+ courses"
              },
              {
                "@type": "Offer",
                "name": "Professional Plan",
                "price": "79",
                "priceCurrency": "USD",
                "description": "Access to all 200+ courses with certificates"
              }
            ]
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certificate",
            "educationalLevel": "Professional",
            "competencyRequired": "Completion of course requirements",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Partner Universities"
            }
          }
        };
        
      case 'course':
        return {
          "@context": "https://schema.org",
          "@type": "Course",
          "name": data?.title || "Humanities Course",
          "description": data?.description || "Professional humanities education for the AI era",
          "provider": {
            "@type": "Organization",
            "name": "HumanEdge Academy",
            "sameAs": "https://humanedgeacademy.com"
          },
          "url": data?.url || "https://humanedgeacademy.com/courses",
          "courseCode": data?.id || "COURSE-001",
          "courseDuration": data?.duration || "PT8W",
          "educationalLevel": data?.level || "Beginner",
          "teaches": data?.skills || ["Critical Thinking", "Philosophy", "Ethics"],
          "inLanguage": "en",
          "availableLanguage": ["en", "ko", "es", "fr", "de", "pt", "th"],
          "hasCourseInstance": {
            "@type": "CourseInstance",
            "courseMode": "Online",
            "duration": data?.duration || "PT8W",
            "instructor": {
              "@type": "Person",
              "name": data?.instructor?.name || "Expert Instructor",
              "jobTitle": data?.instructor?.title || "Professor",
              "worksFor": {
                "@type": "Organization",
                "name": "HumanEdge Academy"
              }
            }
          },
          "offers": {
            "@type": "Offer",
            "price": data?.price || "299",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "validFrom": "2025-01-01",
            "category": "Paid"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": data?.rating || "4.8",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": data?.reviews || "312",
            "reviewCount": data?.reviews || "312"
          }
        };
        
      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "HumanEdge Academy",
          "alternateName": "HumanEdge",
          "url": "https://humanedgeacademy.com",
          "description": "Global LMS platform for humanities education in the AI era",
          "publisher": {
            "@type": "Organization",
            "name": "HumanEdge Academy",
            "logo": {
              "@type": "ImageObject",
              "url": "https://humanedgeacademy.com/logo_symbol.png"
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://humanedgeacademy.com/courses?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          },
          "inLanguage": [
            {
              "@type": "Language",
              "name": "English",
              "alternateName": "en"
            },
            {
              "@type": "Language",
              "name": "Korean",
              "alternateName": "ko"
            },
            {
              "@type": "Language",
              "name": "Spanish",
              "alternateName": "es"
            },
            {
              "@type": "Language",
              "name": "French",
              "alternateName": "fr"
            },
            {
              "@type": "Language",
              "name": "German",
              "alternateName": "de"
            },
            {
              "@type": "Language",
              "name": "Portuguese",
              "alternateName": "pt"
            },
            {
              "@type": "Language",
              "name": "Thai",
              "alternateName": "th"
            }
          ]
        };
        
      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.items?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        };
        
      case 'faq':
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data?.questions?.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          })) || []
        };
        
      default:
        return {};
    }
  };
  
  const structuredData = generateStructuredData();
  
  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
      strategy="afterInteractive"
    />
  );
}