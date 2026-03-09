import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  ogImage = '/og-image.jpg',
  canonicalUrl,
}) => {
  const { language } = useLanguage();
  
  const defaultTitle = language === 'ar' 
    ? 'صيانة إلبا - خدمات إصلاح وصيانة أجهزة إلبا'
    : 'Elba Maintenance - Professional Elba Appliance Repair Services';
    
  const defaultDescription = language === 'ar'
    ? 'خدمات صيانة وإصلاح متخصصة لجميع أجهزة إلبا - البوتاجازات والأفران والشفاطات. فنيون معتمدون وقطع غيار أصلية.'
    : 'Professional maintenance and repair services for all Elba appliances - Cookers, Ovens, and Hoods. Certified technicians and original spare parts.';

  const defaultKeywords = language === 'ar'
    ? 'صيانة إلبا، إصلاح بوتاجاز إلبا، صيانة فرن إلبا، شفاط إلبا، خدمات صيانة، مصر'
    : 'Elba maintenance, Elba cooker repair, Elba oven maintenance, Elba hood, maintenance services, Egypt';

  useEffect(() => {
    document.title = title || defaultTitle;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMetaTag('description', description || defaultDescription);
    updateMetaTag('keywords', keywords || defaultKeywords);
    updateMetaTag('og:title', title || defaultTitle, true);
    updateMetaTag('og:description', description || defaultDescription, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_EG' : 'en_US', true);
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title || defaultTitle);
    updateMetaTag('twitter:description', description || defaultDescription);

    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }
  }, [title, description, keywords, ogImage, canonicalUrl, language, defaultTitle, defaultDescription, defaultKeywords]);

  return null;
};

export default SEOHead;
