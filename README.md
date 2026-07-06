# La Jolla Centro Atletico — POC Astro

POC per il rifacimento del sito `www.lajolla.it` realizzata con Astro.

## Perché Astro

Astro è indicato per siti marketing, corporate e local SEO perché genera pagine statiche performanti, riduce JavaScript lato client e permette di collegare facilmente contenuti da CMS headless.

## Stack

- Astro
- Output statico
- CSS custom responsive
- Sitemap Astro
- Dati demo in `src/content/site.ts`
- Pagine servizio statiche generate da `[slug].astro`

## Avvio locale

```bash
npm install
npm run dev
```

Apri l’URL mostrato dal terminale.

## Build

```bash
npm run build
npm run preview
```

## Struttura

```text
src/
  components/
    Header.astro
    Hero.astro
    ServiceGrid.astro
    Method.astro
    CmsReady.astro
    ContactCta.astro
  content/
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    servizi/[slug].astro
  styles/
    global.css
public/
  favicon.svg
```

## Collegamento CMS

La POC oggi legge da `src/content/site.ts`. Per collegare un CMS, sostituisci quel file con funzioni di fetch.

Esempio Strapi:

```ts
const CMS_URL = import.meta.env.STRAPI_URL;
const CMS_TOKEN = import.meta.env.STRAPI_TOKEN;

export async function getServices() {
  const response = await fetch(`${CMS_URL}/api/services?populate=*`, {
    headers: {
      Authorization: `Bearer ${CMS_TOKEN}`
    }
  });

  if (!response.ok) {
    throw new Error('Errore caricamento servizi');
  }

  return response.json();
}
```

Per Astro è preferibile usare variabili senza prefisso `PUBLIC_` quando il fetch avviene durante la build o lato server, così i token non finiscono nel browser.

## Content type CMS consigliati

- `homepage`
- `service`
- `teamMember`
- `testimonial`
- `faq`
- `siteSettings`

## Prossimi step production-ready

1. Collegare Strapi/Sanity/WordPress headless.
2. Creare pagine servizio con contenuti reali e FAQ.
3. Aggiungere schema.org `LocalBusiness` / `SportsActivityLocation` / markup medico solo se validato.
4. Collegare il form a endpoint server-side, CRM, email o WhatsApp Business.
5. Aggiungere immagini reali ottimizzate con `astro:assets`.
6. Implementare preview editoriale e deploy automatico.
