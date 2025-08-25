import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  noindex?: boolean;
  structuredData?: any;
}

export function SEOHead({
  title = "HumanEdge Academy - Global LMS Platform for Humanities Education",
  description = "Transform your career with humanities education designed for the AI era. Join 500,000+ professionals developing uniquely human skills.",
  keywords = "humanities education, philosophy courses, AI ethics, critical thinking, leadership training, online learning, LMS platform",
  author = "HumanEdge Academy",
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogImage = "https://humanedgeacademy.com/logo_symbol.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  twitterCreator = "@humanedgeacademy",
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  noindex = false,
  structuredData
}: SEOHeadProps) {
  const router = useRouter();
  const { locale = 'en', asPath } = router || {};
  
  const siteUrl = "https://humanedgeacademy.com";
  const fullCanonicalUrl = canonicalUrl || `${siteUrl}${asPath}`;
  
  // Language alternates for hreflang
  const languages = ['en', 'ko', 'es', 'fr', 'de', 'pt', 'th'];
  const currentPath = asPath?.split('?')[0] || '';
  
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta httpEquiv="content-language" content={locale} />
      <meta charSet="utf-8" />
      
      {/* Robots Meta Tags */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Hreflang Tags for Multi-language */}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${currentPath}`} />
      {languages.map((lang) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={`${siteUrl}/${lang}${currentPath}`}
        />
      ))}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="HumanEdge Academy" />
      <meta property="og:locale" content={locale?.replace('-', '_')} />
      
      {/* Alternate locales for Open Graph */}
      {languages.filter(lang => lang !== locale).map((lang) => (
        <meta key={lang} property="og:locale:alternate" content={lang.replace('-', '_')} />
      ))}
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={fullCanonicalUrl} />
      <meta property="twitter:title" content={ogTitle || title} />
      <meta property="twitter:description" content={ogDescription || description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:creator" content={twitterCreator} />
      <meta property="twitter:site" content="@humanedgeacademy" />
      
      {/* Article Meta Tags (for blog posts or course pages) */}
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {articleAuthor && (
        <meta property="article:author" content={articleAuthor} />
      )}
      
      {/* Additional SEO Tags */}
      <meta name="application-name" content="HumanEdge Academy" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="HumanEdge" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#3b82f6" />
      
      {/* Verification Tags (add your actual verification codes) */}
      {/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
      {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
      {/* <meta name="yandex-verification" content="YOUR_YANDEX_VERIFICATION_CODE" /> */}
      
      {/* RSS Feed */}
      <link rel="alternate" type="application/rss+xml" title="HumanEdge Academy RSS Feed" href="/rss.xml" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo_symbol.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}