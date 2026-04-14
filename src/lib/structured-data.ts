import { siteConfig } from "@/content/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    description: siteConfig.description,
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "general",
      email: siteConfig.email,
    },
    sameAs: siteConfig.sameAs,
    nonprofitStatus: "Nonprofit501c3",
    areaServed: "United States",
    keywords: siteConfig.keywords.join(", "),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "Faith-driven technology solutions for churches, ministries, and faith-based organizations.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function getSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Aisaiah",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    description:
      "Spiritual growth app with guided prayer, Scripture reading, and community event management for faith-based organizations.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getPersonSchema(person: {
  name: string;
  title: string;
  bio: string;
  organization?: string;
  url?: string;
  knowsAbout?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    description: person.bio,
    url: person.url,
    worksFor: {
      "@type": "Organization",
      name: person.organization || siteConfig.name,
    },
    knowsAbout: person.knowsAbout,
  };
}

export function getWebPageSchema(page: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: `${siteConfig.url}${page.path}`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function getArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `${siteConfig.url}/blog/${article.slug}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: article.tags?.join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
