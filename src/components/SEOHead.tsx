import React, { useEffect } from 'react';
import { siteConfig } from '../config/siteConfig.ts';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  type?: 'website' | 'article' | 'product';
  schemaData?: Record<string, unknown>;
  noIndex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath,
  schemaData,
  noIndex = false,
}) => {
  const fullTitle = title
    ? `${title} | ${siteConfig.siteName}`
    : siteConfig.defaultMetaTitle;
  const metaDesc = description || siteConfig.defaultMetaDescription;
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const canonicalUrl = canonicalPath ? `${origin}${canonicalPath}` : `${origin}${typeof window !== 'undefined' ? window.location.pathname : ''}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.setAttribute('name', 'description');
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDesc);

    // Update Robots if noIndex
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!robotsTag) {
        robotsTag = document.createElement('meta');
        robotsTag.setAttribute('name', 'robots');
        document.head.appendChild(robotsTag);
      }
      robotsTag.setAttribute('content', 'noindex, nofollow');
    } else if (robotsTag) {
      robotsTag.remove();
    }

    // Update Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalUrl);

    // Update OpenGraph
    const updateMeta = (prop: string, content: string) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('og:title', fullTitle);
    updateMeta('og:description', metaDesc);
    updateMeta('og:url', canonicalUrl);

    // Schema.org JSON-LD
    const scriptId = 'dynamic-jsonld-schema';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, metaDesc, canonicalUrl, noIndex, schemaData]);

  return null;
};
