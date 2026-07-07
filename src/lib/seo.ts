export type FaqItem = {
  question: string;
  answer: string;
};

type SiteContact = {
  phone: string;
  email: string;
  address: string;
  city?: string;
  facebook?: string;
  youtube?: string;
  pinterest?: string;
};

export function localBusinessJsonLd(contact: SiteContact) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation'],
    name: 'La Jolla Centro Atletico',
    url: 'https://www.lajolla.it/',
    image: 'https://www.lajolla.it/og-image.svg',
    telephone: contact.phone,
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'C.so Agnelli, 20',
      postalCode: '10137',
      addressLocality: contact.city ?? 'Torino',
      addressCountry: 'IT',
    },
    areaServed: {
      '@type': 'City',
      name: contact.city ?? 'Torino',
    },
    priceRange: '$$',
    sameAs: [contact.facebook, contact.youtube, contact.pinterest].filter(Boolean),
  };
}

export function serviceJsonLd(service: { title: string; shortDescription: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'La Jolla Centro Atletico',
      url: 'https://www.lajolla.it/'
    },
    areaServed: {
      '@type': 'City',
      name: 'Torino'
    },
    url: `https://www.lajolla.it/servizi/${service.slug}/`
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
