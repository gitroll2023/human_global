export const siteConfig = {
  name: "HumanEdge Academy",
  url: "https://humanedgeacademy.com",
  description: "Leading global LMS platform for humanities education in the AI era. Master philosophy, critical thinking, ethics, and leadership with world-class instructors from Harvard, Stanford, MIT, and leading tech companies.",
  author: "HumanEdge Academy",
  email: "info@humanedgeacademy.com",
  
  // SEO Keywords by category
  keywords: {
    primary: [
      "online humanities courses",
      "philosophy education platform", 
      "AI ethics training",
      "critical thinking courses",
      "leadership development LMS",
      "digital humanities education",
      "liberal arts online learning",
      "professional humanities training",
      "global education platform",
      "humanities for professionals"
    ],
    courses: [
      "ancient philosophy courses",
      "stoicism online learning",
      "existentialism education",
      "AI ethics certification",
      "critical thinking training",
      "leadership in AI era",
      "humanities skill development",
      "theology and technology",
      "digital resilience training",
      "human-centered leadership"
    ],
    geographic: [
      "international LMS platform",
      "global humanities education",
      "Asia Pacific education centers",
      "Korean humanities platform",
      "worldwide online learning",
      "multilingual education platform",
      "cross-cultural learning",
      "global professional development"
    ],
    features: [
      "personalized learning paths",
      "AI-powered recommendations",
      "professional certificates",
      "corporate training programs",
      "university partnerships",
      "lifetime course access",
      "expert instructors",
      "interactive humanities learning"
    ]
  },
  
  // Social Media
  social: {
    twitter: "@humanedgeacademy",
    facebook: "humanedgeacademy",
    linkedin: "company/humanedge-academy",
    youtube: "@humanedgeacademy",
    instagram: "@humanedgeacademy"
  },
  
  // Default SEO tags for pages
  defaultMeta: {
    title: "HumanEdge Academy - Global LMS Platform for Humanities Education",
    titleTemplate: "%s | HumanEdge Academy",
    description: "Transform your career with humanities education designed for the AI era. Join 500,000+ professionals developing uniquely human skills through philosophy, ethics, critical thinking, and leadership courses.",
    keywords: "humanities education, philosophy courses, AI ethics, critical thinking, leadership training, online learning, LMS platform, digital humanities, liberal arts, professional development, global education",
    author: "HumanEdge Academy",
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    googlebot: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  },
  
  // Page-specific SEO
  pages: {
    home: {
      title: "HumanEdge Academy - Global Humanities Education for the AI Era",
      description: "Join the world's leading LMS platform for humanities education. Develop irreplaceable human skills with courses in philosophy, ethics, critical thinking, and leadership from top universities and tech leaders.",
      keywords: "humanities LMS, online philosophy courses, AI ethics education, critical thinking platform, leadership development, global education platform"
    },
    courses: {
      title: "Online Humanities Courses - Philosophy, Ethics, Leadership",
      description: "Explore 200+ humanities courses designed for professionals. Learn philosophy, AI ethics, critical thinking, leadership, and more from Harvard, Stanford, MIT instructors and industry experts.",
      keywords: "online humanities courses, philosophy education, AI ethics training, critical thinking courses, leadership programs, professional development"
    },
    about: {
      title: "About HumanEdge Academy - Leading Global Humanities Platform",
      description: "Learn about our mission to empower 10 million professionals with humanities education by 2030. Discover our global network, expert faculty, and innovative approach to human-centered learning.",
      keywords: "about HumanEdge Academy, humanities education mission, global learning platform, educational philosophy, AI era education"
    },
    programs: {
      title: "Professional Certificate Programs in Humanities",
      description: "Earn professional certificates in philosophy, ethics, critical thinking, and leadership. University-recognized credentials that advance your career in the AI economy.",
      keywords: "humanities certificates, professional certification, philosophy credentials, ethics certification, leadership programs"
    },
    pricing: {
      title: "Pricing Plans - Affordable Humanities Education",
      description: "Choose from flexible pricing plans starting at $29/month. Access world-class humanities education with our Starter, Professional, or Enterprise plans. 30-day money-back guarantee.",
      keywords: "LMS pricing, education platform costs, humanities course pricing, subscription plans, professional learning investment"
    },
    partners: {
      title: "Global Partnership Network - 45+ Universities, 120+ Corporations",
      description: "Join our network of university, corporate, and government partners. Franchise opportunities available for education centers in Asia Pacific, Americas, and Europe.",
      keywords: "education partnerships, university collaboration, corporate training, franchise opportunities, global education network"
    },
    contact: {
      title: "Contact HumanEdge Academy - Global Support",
      description: "Get in touch with our global support team. Contact us for course information, partnerships, technical support, or general inquiries. Offices in New York, Seoul, Tokyo, and London.",
      keywords: "contact HumanEdge Academy, education support, partnership inquiries, global offices, customer service"
    },
    faculty: {
      title: "World-Class Faculty - Learn from the Best",
      description: "Meet our distinguished faculty from Harvard, Stanford, MIT, and leading tech companies. 200+ expert instructors in philosophy, ethics, history, literature, and leadership.",
      keywords: "expert instructors, university professors, industry leaders, humanities faculty, world-class educators"
    },
    faq: {
      title: "Frequently Asked Questions - HumanEdge Academy",
      description: "Find answers to common questions about courses, pricing, certificates, technical requirements, and more. Get help with your humanities education journey.",
      keywords: "FAQ, help center, education questions, course information, technical support"
    }
  },
  
  // Course-specific SEO templates
  courseTemplate: {
    philosophy: {
      titleSuffix: "Philosophy Course",
      descriptionPrefix: "Master philosophical thinking with this comprehensive course.",
      keywords: ["philosophy course", "philosophical thinking", "critical reasoning", "ancient wisdom", "modern philosophy"]
    },
    ethics: {
      titleSuffix: "AI Ethics Course", 
      descriptionPrefix: "Explore the ethical implications of AI and technology.",
      keywords: ["AI ethics", "technology ethics", "moral philosophy", "ethical decision making", "responsible AI"]
    },
    leadership: {
      titleSuffix: "Leadership Development",
      descriptionPrefix: "Develop human-centered leadership skills for the AI era.",
      keywords: ["leadership training", "management skills", "team leadership", "strategic thinking", "executive development"]
    },
    criticalThinking: {
      titleSuffix: "Critical Thinking Course",
      descriptionPrefix: "Sharpen your analytical and reasoning abilities.",
      keywords: ["critical thinking", "logical reasoning", "problem solving", "analytical skills", "decision making"]
    }
  }
};

// Helper function to generate meta tags
export function generateMetaTags(page: keyof typeof siteConfig.pages) {
  const pageMeta = siteConfig.pages[page];
  const defaultMeta = siteConfig.defaultMeta;
  
  return {
    title: pageMeta.title || defaultMeta.title,
    description: pageMeta.description || defaultMeta.description,
    keywords: pageMeta.keywords || defaultMeta.keywords,
    openGraph: {
      title: pageMeta.title || defaultMeta.title,
      description: pageMeta.description || defaultMeta.description,
      url: `${siteConfig.url}/${page === 'home' ? '' : page}`,
      siteName: siteConfig.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title || defaultMeta.title,
      description: pageMeta.description || defaultMeta.description,
      creator: siteConfig.social.twitter,
    },
    alternates: {
      canonical: `${siteConfig.url}/${page === 'home' ? '' : page}`,
    }
  };
}