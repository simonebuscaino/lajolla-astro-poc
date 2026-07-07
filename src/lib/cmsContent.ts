import homepage from '../content/settings/homepage.json';
import {
  englishPages,
  galleries as fallbackGalleries,
  partners as fallbackPartners,
  serviceCategories,
  services as fallbackServices,
  site as fallbackSite,
  specialists as fallbackSpecialists,
  type Gallery,
  type Partner,
  type Service,
  type Specialist
} from '../content/site';

const serviceMarkdownModules = import.meta.glob('../content/servizi/*.md', { eager: true });
const specialistMarkdownModules = import.meta.glob('../content/specialists/*.md', { eager: true });
const partnerModules = import.meta.glob('../content/partners/*.json', { eager: true });
const galleryModules = import.meta.glob('../content/galleries/*.json', { eager: true });

type JsonModule<T> = { default?: T } | T;
type MarkdownModule<T> = { frontmatter?: T; rawContent?: () => string };

function moduleValues<T>(modules: Record<string, JsonModule<T>>) {
  return Object.values(modules).map((module) => ('default' in Object(module) ? (module as { default: T }).default : module as T));
}

function markdownValues<T>(modules: Record<string, unknown>) {
  return Object.values(modules).map((module) => {
    const markdown = module as MarkdownModule<T>;
    return {
      ...(markdown.frontmatter ?? {}),
      body: markdown.rawContent ? markdown.rawContent().trim() : ''
    } as T & { body?: string };
  });
}

function asList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => {
        if (typeof item === 'string') return item;
        if (item && typeof item === 'object') {
          const firstString = Object.values(item).find((entry) => typeof entry === 'string');
          return firstString ? String(firstString) : '';
        }
        return '';
      })
      .map((item) => item.trim())
      .filter(Boolean);
  }
  if (typeof value === 'string') return value.split(/\n{2,}|\r?\n/).map((item) => item.trim()).filter(Boolean);
  return [];
}

function mergeService(input: Partial<Service>, index: number): Service {
  const fallback = fallbackServices.find((service) => service.slug === input.slug) ?? fallbackServices[index] ?? fallbackServices[0];
  return {
    ...fallback,
    ...input,
    title: input.title ?? fallback.title,
    slug: input.slug ?? fallback.slug,
    category: input.category ?? fallback.category,
    shortDescription: input.shortDescription ?? fallback.shortDescription,
    benefits: asList(input.benefits).length ? asList(input.benefits) : fallback.benefits,
    audience: asList(input.audience).length ? asList(input.audience) : fallback.audience,
    processSteps: asList(input.processSteps).length ? asList(input.processSteps) : fallback.processSteps,
    body: asList(input.body).length ? asList(input.body) : fallback.body,
    relatedSlugs: asList(input.relatedSlugs).length ? asList(input.relatedSlugs) : fallback.relatedSlugs,
    legacyUrls: asList(input.legacyUrls).length ? asList(input.legacyUrls) : fallback.legacyUrls,
    featured: Boolean(input.featured ?? fallback.featured),
    order: Number(input.order ?? fallback.order ?? index + 1)
  };
}

function mergeSpecialist(input: Partial<Specialist>, index: number): Specialist {
  const fallback = fallbackSpecialists.find((item) => item.slug === input.slug) ?? fallbackSpecialists[index] ?? fallbackSpecialists[0];
  return {
    ...fallback,
    ...input,
    role: input.role ?? fallback.role,
    slug: input.slug ?? fallback.slug,
    summary: input.summary ?? fallback.summary,
    services: asList(input.services).length ? asList(input.services) : fallback.services,
    appointment: input.appointment ?? fallback.appointment,
    legacyUrls: asList(input.legacyUrls).length ? asList(input.legacyUrls) : fallback.legacyUrls
  };
}

function mergePartner(input: Partial<Partner>, index: number): Partner {
  const fallback = fallbackPartners.find((item) => item.slug === input.slug) ?? fallbackPartners[index] ?? fallbackPartners[0];
  return {
    ...fallback,
    ...input,
    name: input.name ?? fallback.name,
    slug: input.slug ?? fallback.slug,
    relation: input.relation ?? fallback.relation,
    description: input.description ?? fallback.description,
    legacyUrls: asList(input.legacyUrls).length ? asList(input.legacyUrls) : fallback.legacyUrls
  };
}

function mergeGallery(input: Partial<Gallery>, index: number): Gallery {
  const fallback = fallbackGalleries.find((item) => item.slug === input.slug) ?? fallbackGalleries[index] ?? fallbackGalleries[0];
  return {
    ...fallback,
    ...input,
    title: input.title ?? fallback.title,
    slug: input.slug ?? fallback.slug,
    description: input.description ?? fallback.description,
    legacyXml: input.legacyXml ?? fallback.legacyXml,
    images: Array.isArray(input.images) && input.images.length ? input.images : fallback.images
  };
}

const cmsServices = markdownValues<Partial<Service>>(serviceMarkdownModules);
const cmsSpecialists = markdownValues<Partial<Specialist>>(specialistMarkdownModules);
const cmsPartners = moduleValues<Partial<Partner>>(partnerModules);
const cmsGalleries = moduleValues<Partial<Gallery>>(galleryModules);

export const services = (cmsServices.length ? cmsServices.map(mergeService) : fallbackServices).sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
export const specialists = cmsSpecialists.length ? cmsSpecialists.map(mergeSpecialist) : fallbackSpecialists;
export const partners = cmsPartners.length ? cmsPartners.map(mergePartner) : fallbackPartners;
export const galleries = cmsGalleries.length ? cmsGalleries.map(mergeGallery) : fallbackGalleries;

export const site = {
  ...fallbackSite,
  phone: homepage.phone || fallbackSite.phone,
  email: homepage.email || fallbackSite.email,
  address: homepage.address || fallbackSite.address,
  whatsapp: homepage.whatsapp || fallbackSite.whatsapp,
  title: homepage.heroTitle || fallbackSite.title,
  subtitle: homepage.heroSubtitle || fallbackSite.subtitle,
  heroImage: homepage.heroImage || fallbackSite.heroImage,
  heroImageAlt: homepage.heroImageAlt || fallbackSite.heroImageAlt,
  primaryCta: homepage.primaryCta || fallbackSite.primaryCta,
  secondaryCta: homepage.secondaryCta || fallbackSite.secondaryCta,
  proofPoints: homepage.proofPoints || fallbackSite.proofPoints,
  methodSteps: homepage.methodSteps || fallbackSite.methodSteps,
  faqs: homepage.faqs || fallbackSite.faqs
};

export { englishPages, serviceCategories };

export const cmsCollections = ['Impostazioni sito', 'Servizi', 'Specialisti', 'Partner', 'Gallery'];

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getCategorySlug(title: string) {
  return serviceCategories.find((category) => category.title === title)?.slug ?? title.toLowerCase().replaceAll(' ', '-');
}
