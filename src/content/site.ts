export type Service = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  benefits: string[];
  audience: string[];
  processSteps: string[];
  body: string[];
  relatedSlugs: string[];
  legacyUrls: string[];
  featured?: boolean;
  order: number;
  seoTitle?: string;
  seoDescription?: string;
};

export type Specialist = { role: string; slug: string; summary: string; services: string[]; appointment: string; legacyUrls: string[] };
export type Partner = { name: string; slug: string; relation: string; description: string; url?: string; legacyUrls: string[] };
export type Gallery = { title: string; slug: string; description: string; legacyXml: string; images: Array<{ src: string; alt: string; caption: string }> };

export const site = {
  name: 'La Jolla Centro Atletico',
  eyebrow: 'Centro atletico a Torino',
  title: 'Fitness, recupero e performance con un metodo su misura.',
  subtitle: 'A Torino, La Jolla accompagna persone attive, sportivi e chi rientra da un infortunio con percorsi personalizzati di allenamento, rieducazione e supporto specialistico.',
  phone: '011.3275114',
  email: 'info@lajolla.it',
  address: 'C.so Agnelli, 20 - 10137 Torino',
  city: 'Torino',
  country: 'IT',
  facebook: 'https://www.facebook.com/lajollatorino',
  youtube: 'https://www.youtube.com/user/lajollatorino',
  pinterest: 'https://pinterest.com/lajollatorino/',
  whatsapp: '',
  bookingUrl: '/contatti/',
  heroImage: '/uploads/lajolla-performance-floor.svg',
  heroImageAlt: 'Allenamento funzionale e preparazione atletica La Jolla',
  primaryCta: 'Prenota una valutazione',
  secondaryCta: 'Scopri i servizi',
  proofPoints: ['Preparazione atletica sport per sport', 'Rieducazione post infortunio e post intervento', 'Fisioterapia, osteopatia e nutrizione', 'Percorsi individuali e corsi di gruppo'],
  methodSteps: ['Ascolto di obiettivi, storia fisica e bisogni reali.', 'Valutazione iniziale e scelta del percorso piu adatto.', 'Programma progressivo con allenamento, trattamento o rieducazione.', 'Follow-up per consolidare autonomia, continuita e ritorno allo sport.'],
  faqs: [
    { question: 'La Jolla e adatta anche a chi non pratica sport?', answer: 'Si. Il centro lavora sia con persone che vogliono riprendere a muoversi o stare in forma, sia con sportivi amatoriali e atleti che cercano performance specifica.' },
    { question: 'Posso iniziare dopo un infortunio o un intervento?', answer: 'Si, quando il quadro lo consente. I percorsi post trauma, post infortunio e post intervento vengono costruiti in modo progressivo e possono coinvolgere specialisti diversi.' },
    { question: 'Come si prenota un percorso?', answer: 'Il primo passo e contattare il centro via telefono, email o modulo. Da li viene individuata la figura o il percorso piu coerente con l\'obiettivo.' }
  ]
};

export const serviceCategories = [
  { slug: 'fitness', title: 'Area fitness', intro: 'Allenamento guidato per forma fisica, forza, resistenza, controllo e dimagrimento.' },
  { slug: 'programmi-individuali', title: 'Programmi individuali', intro: 'Sedute e programmi specifici per postura, schiena, eta evolutiva, terza eta e bisogni motori mirati.' },
  { slug: 'preparazione-atletica', title: 'Preparazione atletica', intro: 'Preparazione individuale, per squadre e sport specifici, dalla base fisica al ritorno alla performance.' },
  { slug: 'recupero-rieducazione', title: 'Recupero e rieducazione', intro: 'Percorsi post trauma, post infortunio, post intervento, fisioterapia, riatletizzazione e ritorno in campo.' },
  { slug: 'corsi', title: 'Corsi di gruppo', intro: 'Attivita di gruppo con intensita progressiva: posturale, ginnastica dolce, Pilates e pre-sciistica.' },
  { slug: 'specialisti', title: 'Specialisti', intro: 'Professionisti sanitari, sportivi e nutrizionali integrati nei percorsi del centro.' }
] as const;

const steps = ['Valutazione iniziale di obiettivo, livello di partenza e priorita.', 'Definizione del programma con esercizi, frequenza e progressione.', 'Sedute guidate con adattamento del carico e controllo tecnico.', 'Verifica periodica dei risultati e aggiornamento del percorso.'];
const commonBenefits = ['Percorso personalizzato', 'Progressione controllata', 'Follow-up e adattamento'];
const commonAudience = ['Persone attive', 'Sportivi amatoriali', 'Chi cerca una guida professionale'];

type ServiceSeed = [string, string, string, string, string[], string[], string[], string[], boolean?];
const makeService = (seed: ServiceSeed, index: number): Service => {
  const [title, slug, category, shortDescription, legacyUrls, relatedSlugs, benefits = commonBenefits, audience = commonAudience, featured = false] = seed;
  return {
    title,
    slug,
    category,
    shortDescription,
    benefits,
    audience,
    processSteps: steps,
    body: [
      `${title} e un contenuto migrato dalla struttura storica di lajolla.it e riposizionato nella nuova architettura ${category.toLowerCase()}.`,
      'La nuova pagina conserva il tema originario, lo collega ai percorsi correlati e lo rende piu chiaro per utenti che cercano allenamento, recupero, salute del movimento o performance sportiva.',
      'Il percorso viene definito partendo da obiettivi, livello di partenza, eventuali indicazioni specialistiche e progressione sostenibile nel tempo.'
    ],
    relatedSlugs,
    legacyUrls,
    featured,
    order: index + 1,
    seoTitle: `${title} a Torino | La Jolla Centro Atletico`,
    seoDescription: `${title} a Torino presso La Jolla Centro Atletico: valutazione, programma personalizzato e percorso progressivo.`
  };
};

const seeds: ServiceSeed[] = [
  ['Preparazione atletica', 'preparazione-atletica', 'Preparazione atletica', 'Programmi sport-specifici per forza, mobilita, prevenzione, ritorno al carico e performance.', ['/prep_atletica_sport.html'], ['preparazione-individuale', 'preparazione-squadre', 'calcio'], ['Programmazione per sport e livello', 'Progressione di forza, mobilita e resistenza', 'Monitoraggio dei carichi'], ['Sportivi amatoriali e agonisti', 'Atleti dopo uno stop', 'Squadre e societa sportive'], true],
  ['Rieducazione funzionale', 'rieducazione-funzionale', 'Recupero e rieducazione', 'Percorsi dopo trauma, malattia o intervento per recuperare movimento, fiducia e autonomia.', ['/rieducazione.html', '/rieducazione_funzionale.html'], ['riatletizzazione', 'ginnastica-propriocettiva', 'ritorno-in-campo'], ['Controllo motorio progressivo', 'Obiettivi concreti', 'Integrazione con specialisti'], ['Post trauma', 'Post intervento', 'Sportivi in rientro'], true],
  ['Palestra', 'palestra', 'Area fitness', 'Sala e percorsi guidati per allenamento generale, tono muscolare, controllo e benessere.', ['/palestra.html', '/area_fitness.html'], ['cardiofitness', 'circuit-training', 'core-stability'], commonBenefits, commonAudience, true],
  ['Cardiofitness e allenamento aerobico', 'cardiofitness', 'Area fitness', 'Allenamento aerobico per resistenza, fiato, composizione corporea e salute generale.', ['/cardio_aerobico.html'], ['programmi-dimagrimento', 'hiit', 'circuit-training'], ['Lavoro cardiovascolare progressivo', 'Gestione intensita', 'Supporto a dimagrimento e performance'], ['Chi vuole migliorare resistenza', 'Chi riprende dopo inattivita', 'Sportivi in base aerobica']],
  ['Circuit training', 'circuit-training', 'Area fitness', 'Circuiti di lavoro per forza, resistenza, coordinazione e condizionamento generale.', ['/circuit_training.html'], ['hiit', 'functional-training', 'core-stability'], commonBenefits, commonAudience],
  ['HIIT', 'hiit', 'Area fitness', 'High intensity interval training per stimoli brevi, intensi e progressivi.', ['/hiit.html'], ['circuit-training', 'functional-training', 'preparazione-atletica'], ['Controllo intensita', 'Sedute efficienti', 'Progressione in sicurezza'], ['Persone gia attive', 'Sportivi', 'Obiettivi di condizionamento']],
  ['Programmi per il dimagrimento', 'programmi-dimagrimento', 'Area fitness', 'Percorsi integrati di allenamento e abitudini sostenibili per la composizione corporea.', ['/programmi_dimagrimento.html'], ['cardiofitness', 'nutrizionista-dietologa', 'palestra'], ['Allenamento progressivo', 'Obiettivi realistici', 'Supporto nutrizionale quando utile'], ['Chi vuole perdere peso', 'Chi cerca continuita', 'Chi vuole migliorare tono e salute']],
  ['Core stability', 'core-stability', 'Area fitness', 'Controllo del tronco, stabilita e trasferimento della forza nei gesti quotidiani e sportivi.', ['/core_stability.html'], ['rinforzo-schiena', 'ginnastica-posturale', 'preparazione-atletica'], ['Stabilita centrale', 'Supporto a postura e performance', 'Esercizi progressivi'], ['Sportivi', 'Persone con necessita posturali', 'Chi cerca controllo motorio']],
  ['Ginnastica per la schiena', 'rinforzo-schiena', 'Programmi individuali', 'Rinforzo, mobilita e controllo per migliorare il rapporto con la schiena nel movimento.', ['/rinforzo_schiena.html'], ['ginnastica-posturale', 'core-stability', 'ginnastica-posturale-individuale'], ['Rinforzo mirato', 'Mobilita e controllo', 'Educazione al movimento'], ['Chi sente rigidita', 'Chi vuole prevenzione', 'Chi rientra al movimento'], true],
  ['Ginnastica posturale', 'ginnastica-posturale', 'Corsi di gruppo', 'Percorsi individuali o di gruppo per postura, consapevolezza e qualita del movimento.', ['/ginn_posturale.html'], ['ginnastica-posturale-individuale', 'rinforzo-schiena', 'pilates'], ['Consapevolezza corporea', 'Mobilita e controllo', 'Intensita progressiva'], ['Adulti', 'Persone con bisogni posturali', 'Chi cerca lavoro guidato'], true],
  ['Ginnastica posturale individuale', 'ginnastica-posturale-individuale', 'Programmi individuali', 'Lavoro posturale personalizzato per bisogni specifici e obiettivi individuali.', ['/ginn_posturale_ind.html'], ['ginnastica-posturale', 'rinforzo-schiena', 'pancafit'], commonBenefits, commonAudience],
  ['Scoliosi, lordosi e cifosi', 'scoliosi-lordosi-cifosi', 'Programmi individuali', 'Programmi mirati per alterazioni posturali, controllo e rinforzo personalizzato.', ['/scoliosi_lordosi_cifosi.html'], ['ginnastica-correttiva-ragazzi', 'ginnastica-posturale-individuale', 'rinforzo-schiena']],
  ['Ginnastica correttiva per ragazzi', 'ginnastica-correttiva-ragazzi', 'Programmi individuali', 'Lavoro motorio per ragazzi con attenzione a postura, crescita e controllo.', ['/ginn_correttiva.html'], ['scoliosi-lordosi-cifosi', 'ginnastica-posturale', 'ginnastica-posturale-individuale']],
  ['Ginnastica dolce', 'ginnastica-dolce', 'Corsi di gruppo', 'Movimento graduale per mobilita, benessere e ripresa della confidenza corporea.', ['/ginn_dolce.html'], ['ginnastica-terza-eta', 'ginnastica-dolce-individuale', 'pilates']],
  ['Ginnastica dolce individuale', 'ginnastica-dolce-individuale', 'Programmi individuali', 'Percorso dolce individuale per mobilita, controllo e ripresa graduale.', ['/ginn_dolce_ind.html'], ['ginnastica-dolce', 'ginnastica-terza-eta', 'rieducazione-funzionale']],
  ['Ginnastica terza eta', 'ginnastica-terza-eta', 'Programmi individuali', 'Percorsi per mantenere mobilita, equilibrio, forza e autonomia nella quotidianita.', ['/ginn_terza_eta.html'], ['ginnastica-dolce', 'ginnastica-propriocettiva', 'rieducazione-funzionale']],
  ['Rieducazione respiratoria', 'rieducazione-respiratoria', 'Programmi individuali', 'Lavoro respiratorio e controllo inspiratorio come supporto a benessere e performance.', ['/ried_respiratoria.html'], ['powerbreathe-plus', 'preparazione-atletica', 'cardiofitness']],
  ['Pancafit e metodologia adattata', 'pancafit', 'Programmi individuali', 'Lavoro posturale e di allungamento globale con metodologia pancafit adattata.', ['/panca_fit.html', '/metodologia_pancafit_adattata.html', '/stretching.html'], ['ginnastica-posturale', 'rinforzo-schiena', 'ginnastica-posturale-individuale']],
  ['Functional training', 'functional-training', 'Programmi individuali', 'Allenamento funzionale per forza, controllo e trasferimento ai gesti reali.', ['/functional_training.html', '/trx.html', '/trx_corsi.html', '/news/trx.html'], ['circuit-training', 'hiit', 'preparazione-atletica']],
  ['Preparazione individuale', 'preparazione-individuale', 'Preparazione atletica', 'Preparazione atletica costruita sulla singola persona, sport, obiettivi e disponibilita.', ['/prep_individuale.html'], ['preparazione-atletica', 'running', 'golf']],
  ['Preparazione squadre e societa sportive', 'preparazione-squadre', 'Preparazione atletica', 'Programmi per squadre e societa sportive, con obiettivi condivisi e lavoro programmato.', ['/prep_squadre.html', '/volley/volley.html'], ['calcio', 'basket', 'preparazione-atletica']],
  ['Preparazione atletica golf', 'golf', 'Preparazione atletica', 'Preparazione specifica per il golf: mobilita, stabilita, rotazione e controllo.', ['/golf/golf.html'], ['preparazione-atletica', 'core-stability', 'functional-training'], ['Mobilita e rotazione', 'Stabilita e controllo', 'Prevenzione sovraccarichi'], ['Golfisti', 'Sportivi amatoriali', 'Atleti in miglioramento'], true],
  ['Preparazione atletica sci', 'sci', 'Preparazione atletica', 'Preparazione per sci e pre-sciistica: forza, resistenza, equilibrio e prevenzione.', ['/sci/sci.html', '/snowboard/snowboard.html'], ['presciistica', 'ginnastica-propriocettiva', 'preparazione-atletica']],
  ['Running, corsa e maratona', 'running', 'Preparazione atletica', 'Preparazione per corsa e maratona con progressione di carico, forza e prevenzione.', ['/running/running.html'], ['preparazione-individuale', 'cardiofitness', 'riatletizzazione']],
  ['Pallacanestro e basket', 'basket', 'Preparazione atletica', 'Preparazione atletica per basket: salti, cambi direzione, forza e resistenza specifica.', ['/pallacanestro/pallacanestro.html'], ['preparazione-squadre', 'ritorno-in-campo', 'ginnastica-propriocettiva']],
  ['Calcio e calcio a 5', 'calcio', 'Preparazione atletica', 'Preparazione per calcio a 11 e calcio a 5: forza, rapidita, prevenzione e ritorno in campo.', ['/calcio/calcio.html'], ['preparazione-squadre', 'ritorno-in-campo', 'riatletizzazione'], ['Rapidita e cambi direzione', 'Forza specifica', 'Ritorno progressivo al campo'], ['Calciatori', 'Squadre', 'Atleti post infortunio'], true],
  ['Kitesurf, windsurf, wakesurf e surf', 'surf-kite-wind', 'Preparazione atletica', 'Preparazione per sport di tavola e acqua con controllo, forza e stabilita.', ['/kite_wind_surf.html'], ['core-stability', 'functional-training', 'preparazione-atletica']],
  ['Hockey slide board', 'hockey-slide-board', 'Preparazione atletica', 'Approfondimento storico su lavoro specifico hockey e slide board.', ['/news/hockey_slideboard.html'], ['preparazione-atletica', 'functional-training', 'ginnastica-propriocettiva']],
  ['Fisioterapia e riabilitazione', 'fisioterapia-riabilitazione', 'Recupero e rieducazione', 'Supporto fisioterapico e riabilitativo integrato nei percorsi del centro.', ['/fisioterapista.html'], ['rieducazione-funzionale', 'riatletizzazione', 'ritorno-in-campo'], ['Valutazione specialistica', 'Integrazione con rieducazione', 'Percorso su appuntamento'], ['Persone con dolore o limitazioni', 'Post infortunio', 'Post intervento'], true],
  ['Massofisioterapia', 'massofisioterapia', 'Recupero e rieducazione', 'Trattamenti massofisioterapici su appuntamento integrati con movimento e recupero.', ['/massofisioterapista.html'], ['fisioterapia-riabilitazione', 'osteopatia', 'riatletizzazione']],
  ['Osteopatia', 'osteopatia', 'Recupero e rieducazione', 'Approccio osteopatico integrato con postura, movimento e percorsi del centro.', ['/osteopata.html'], ['ginnastica-posturale', 'rinforzo-schiena', 'massofisioterapia']],
  ['Riatletizzazione e rimuscolazione', 'riatletizzazione', 'Recupero e rieducazione', 'Ritorno progressivo al carico dopo trauma, infortunio o intervento.', ['/infortunio/infortunio.html', '/post_trauma-infortunio.html', '/rieducazione_prep.html'], ['rieducazione-funzionale', 'ginnastica-propriocettiva', 'ritorno-in-campo'], ['Rimuscolazione progressiva', 'Controllo del carico', 'Ponte fra riabilitazione e sport'], ['Post infortunio', 'Post intervento', 'Sportivi in rientro'], true],
  ['Ginnastica propriocettiva', 'ginnastica-propriocettiva', 'Recupero e rieducazione', 'Equilibrio, stabilita e controllo per recupero, prevenzione e ritorno al gesto.', ['/propriocettiva.html', '/ginnastica_propriocettiva.html'], ['riatletizzazione', 'ritorno-in-campo', 'sci']],
  ['Ritorno in campo', 'ritorno-in-campo', 'Recupero e rieducazione', 'Percorso finale per tornare all\'attivita sportiva in campo dopo uno stop.', ['/ritorno_in_campo/ritorno_in_campo.html'], ['calcio', 'basket', 'riatletizzazione']],
  ['Preparazione muscolare pre intervento', 'preparazione-pre-intervento', 'Recupero e rieducazione', 'Preparazione muscolare prima di un intervento, quando indicata e concordata.', ['/preparazione_intervento.html'], ['rieducazione-funzionale', 'fisioterapia-riabilitazione', 'riatletizzazione']],
  ['Pilates', 'pilates', 'Corsi di gruppo', 'Corso per controllo, postura, forza e consapevolezza del movimento.', ['/pilates.html', '/pilatesEN.html'], ['ginnastica-posturale', 'ginnastica-dolce', 'core-stability'], ['Controllo motorio', 'Forza e mobilita', 'Lavoro guidato'], ['Adulti', 'Chi cerca lavoro posturale', 'Persone attive'], true],
  ['Pre-sciistica', 'presciistica', 'Corsi di gruppo', 'Allenamento di gruppo per prepararsi alla stagione sciistica.', ['/presciistica.html'], ['sci', 'ginnastica-propriocettiva', 'preparazione-atletica']],
  ['POWERbreathe Plus', 'powerbreathe-plus', 'Programmi individuali', 'Approfondimento su allenatore muscolare inspiratorio e lavoro respiratorio.', ['/news/powerbreatheplus.html'], ['rieducazione-respiratoria', 'preparazione-atletica', 'cardiofitness']],
  ['Nutrizionista e dietologa', 'nutrizionista-dietologa', 'Specialisti', 'Supporto nutrizionale per benessere, composizione corporea e obiettivi sportivi.', ['/nutrizionista.html', '/dietologa_nutrizionista.html'], ['programmi-dimagrimento', 'preparazione-atletica', 'palestra'], ['Valutazione nutrizionale', 'Supporto a dimagrimento e sport', 'Percorso su appuntamento'], ['Persone con obiettivi nutrizionali', 'Sportivi', 'Chi segue programmi dimagrimento'], true],
  ['Medico dello sport', 'medico-sportivo', 'Specialisti', 'Visite mediche per idoneita ad attivita sportiva non agonistica con ECG, su appuntamento.', ['/medico.html'], ['preparazione-atletica', 'preparazione-individuale', 'calcio']]
];

export const services = seeds.map(makeService);
export const specialists: Specialist[] = [
  { role: 'Fisioterapista', slug: 'fisioterapista', summary: 'Supporto fisioterapico per recupero, dolore, riabilitazione e percorsi post infortunio.', services: ['fisioterapia-riabilitazione', 'rieducazione-funzionale'], appointment: 'Su appuntamento', legacyUrls: ['/fisioterapista.html'] },
  { role: 'Massofisioterapista', slug: 'massofisioterapista', summary: 'Trattamenti massofisioterapici integrati con lavoro motorio e recupero.', services: ['massofisioterapia', 'riatletizzazione'], appointment: 'Su appuntamento', legacyUrls: ['/massofisioterapista.html'] },
  { role: 'Osteopata', slug: 'osteopata', summary: 'Approccio globale a postura, rigidita e movimento, integrato con i programmi del centro.', services: ['osteopatia', 'ginnastica-posturale'], appointment: 'Su appuntamento', legacyUrls: ['/osteopata.html'] },
  { role: 'Preparatori atletici', slug: 'preparatori-atletici', summary: 'Programmazione e guida per allenamento, sport specifici, squadre e ritorno alla performance.', services: ['preparazione-atletica', 'preparazione-squadre'], appointment: 'Su appuntamento', legacyUrls: ['/preparatore_atletico.html'] },
  { role: 'Medico dello sport', slug: 'medico-sportivo', summary: 'Visite per attivita sportiva non agonistica con ECG, secondo disponibilita del centro.', services: ['medico-sportivo'], appointment: 'Su appuntamento', legacyUrls: ['/medico.html'] },
  { role: 'Dietologa e nutrizionista', slug: 'nutrizionista-dietologa', summary: 'Supporto nutrizionale per salute, dimagrimento e performance sportiva.', services: ['nutrizionista-dietologa', 'programmi-dimagrimento'], appointment: 'Su appuntamento', legacyUrls: ['/nutrizionista.html'] }
];

export const partners: Partner[] = [
  { name: 'Jolly Sport', slug: 'jolly-sport', relation: 'Convenzione', description: 'Partner storico del centro per sport e attrezzatura.', url: 'http://www.jollysport.it/', legacyUrls: ['/partner_jolly_sport.html'] },
  { name: 'OLT Ortopedia', slug: 'olt-ortopedia', relation: 'Partnership', description: 'Laboratorio Ortopedico Torinese collegato alle esigenze ortopediche e di supporto.', url: 'http://www.ortopediaolttorino.com/', legacyUrls: ['/partner_olt.html'] },
  { name: 'Enervit', slug: 'enervit', relation: 'Partnership', description: 'Partner storico per integrazione e cultura della nutrizione sportiva.', url: 'http://www.enervit.com/', legacyUrls: ['/partner_enervit.html'] },
  { name: 'Balon Boys', slug: 'balon-boys', relation: 'Partnership', description: 'Campionati calcio a 5 e calcio a 8 collegati alla comunita sportiva locale.', url: 'http://www.balonboys.it/', legacyUrls: ['/partner_balon_boys.html'] },
  { name: 'EQB', slug: 'eqb', relation: 'Convenzione', description: 'Centro estetica e benessere partner del sito storico.', url: 'http://www.centroeqb.it/', legacyUrls: ['/partner_eqb.html'] },
  { name: 'Turin Tour', slug: 'turin-tour', relation: 'Partnership', description: 'Visite guidate in Torino e Piemonte, partner storico.', url: 'http://turin-tour.com/', legacyUrls: ['/partner_turin_tour.html'] },
  { name: 'Adidas', slug: 'adidas', relation: 'Partnership storica', description: 'Partner presente negli archivi del sito storico.', legacyUrls: ['/partner_adidas.html'] },
  { name: 'Fnac', slug: 'fnac', relation: 'Partner storico', description: 'Contenuto storico preservato e archiviato nella sezione partner.', legacyUrls: ['/partner_fnac.html'] }
];

export const galleries: Gallery[] = ['centro', 'infortunio', 'golf', 'sci', 'pallacanestro', 'calcio', 'ritorno-in-campo'].map((slug) => {
  const titles: Record<string, string> = { centro: 'Foto gallery del centro', infortunio: 'Riatletizzazione e infortunio', golf: 'Preparazione golf', sci: 'Preparazione sci', pallacanestro: 'Pallacanestro', calcio: 'Calcio e calcio a 5', 'ritorno-in-campo': 'Ritorno in campo' };
  const xml: Record<string, string> = { centro: '/gallery/gallery.xml', infortunio: '/infortunio/gallery.xml', golf: '/golf/gallery.xml', sci: '/sci/gallery.xml', pallacanestro: '/pallacanestro/gallery.xml', calcio: '/calcio/gallery.xml', 'ritorno-in-campo': '/ritorno_in_campo/gallery.xml' };
  return { title: titles[slug], slug, description: `Gallery storica ${titles[slug].toLowerCase()} da migrare dalla vecchia SimpleViewer.`, legacyXml: xml[slug], images: [{ src: '/uploads/lajolla-performance-floor.svg', alt: `${titles[slug]} La Jolla`, caption: 'Immagini legacy da importare e verificare' }] };
});

export const englishPages = [
  { title: 'Home', href: '/en/', description: 'La Jolla Athletic Center in Turin: fitness, recovery and sport-specific preparation.' },
  { title: 'Mission', href: '/en/mission/', description: 'We help people and athletes reach physical and athletic goals through individual paths.' },
  { title: 'Services', href: '/en/services/', description: 'Fitness, sport preparation, recovery, Pilates and specialist support.' },
  { title: 'Opening hours', href: '/en/opening-hours/', description: 'Opening hours and specialist appointments.' },
  { title: 'Contact us', href: '/en/contact/', description: 'Address, phone, email and map information.' },
  { title: 'Pilates', href: '/en/pilates/', description: 'Pilates classes and movement awareness.' }
];

const baseRedirects = [
  ['/index.html', '/'], ['/filosofia.html', '/il-centro/'], ['/attivita-servizi.html', '/servizi/'], ['/orari.html', '/orari/'], ['/orari_corsi.html', '/orari/'], ['/contatti.html', '/contatti/'], ['/bus.html', '/contatti/'], ['/gallery/gallery.html', '/gallery/'], ['/specialisti.html', '/specialisti/'], ['/tshirt.html', '/'], ['/sport_test/sport_test.html', '/servizi/preparazione-atletica/'], ['/yoga.html', '/servizi/ginnastica-posturale/'], ['/sport.html', '/servizi/preparazione-atletica/'], ['/tennis/tennis.html', '/servizi/preparazione-atletica/'], ['/news/index.html', '/servizi/'], ['/news/attivita-servizi.html', '/servizi/'], ['/news/prog_spec_ind.html', '/servizi/'], ['/news/ried_respiratoria.html', '/servizi/rieducazione-respiratoria/'], ['/indexEN.html', '/en/'], ['/mission.html', '/en/mission/'], ['/services.html', '/en/services/'], ['/opening_hours.html', '/en/opening-hours/'], ['/contact_us.html', '/en/contact/'], ['/classes_hrs.html', '/en/opening-hours/'], ['/busEN.html', '/en/contact/'], ['/partner_jolly_sportEN.html', '/en/services/'], ['/partner_adidasEN.html', '/en/services/'], ['/partner_enervitEN.html', '/en/services/'], ['/partner_balon_boysEN.html', '/en/services/'], ['/partner_eqbEN.html', '/en/services/']
] as const;

export const legacyRedirects: Record<string, string> = Object.fromEntries([
  ...baseRedirects,
  ...services.flatMap((service) => service.legacyUrls.map((url) => [url, `/servizi/${service.slug}/`] as const)),
  ...specialists.flatMap((item) => item.legacyUrls.map((url) => [url, '/specialisti/'] as const)),
  ...partners.flatMap((item) => item.legacyUrls.map((url) => [url, `/partner/#${item.slug}`] as const))
]);

export function getService(slug: string | undefined) {
  return services.find((service) => service.slug === slug);
}

export function getCategorySlug(title: string) {
  return serviceCategories.find((category) => category.title === title)?.slug ?? title.toLowerCase().replaceAll(' ', '-');
}
