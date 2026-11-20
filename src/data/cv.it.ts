import type { CvTranslation } from "@/types";

/**
 * Italian translation of the prose in cv.ts. Translate only; facts stay in cv.ts.
 * content.test.ts checks that every id, bullet and decision has a translation.
 */
export const cvIt: CvTranslation = {
  country: "Svizzera",
  languages: {
    it: { name: "Italiano", level: "Madrelingua" },
    en: { name: "Inglese", level: "C1" },
  },
  hero: {
    stack: "TypeScript, Next.js e PHP",
    valueProposition:
      "Progetto e rilascio applicazioni web end to end, da Figma alla produzione, con l'infrastruttura che le mantiene affidabili.",
    workAuthorization: "Nessuna sponsorizzazione del visto necessaria",
    openTo: "Disponibile per ruoli Full Stack in Svizzera o da remoto (UE)",
  },
  glance: {
    areas: [
      {
        title: "Full Stack web",
        description:
          "Front end in Next.js, React e TypeScript; back end in Node.js e PHP (dalla 5 alla 8+).",
      },
      {
        title: "Database e API",
        description: "PostgreSQL, SQL e Prisma; integrazioni REST e SOAP.",
      },
      {
        title: "DevOps e self-hosting",
        description: "Docker, Kubernetes e Linux; CI/CD con GitHub Actions; un homelab Proxmox.",
      },
    ],
    also: "Inoltre: Web3, Modellazione 3D, Graphic Design",
  },
  about: {
    title: "Da Figma alla produzione",
    subtitle: "Porto una funzionalità dal primo layout fino al server su cui gira.",
    paragraphs: [
      "Sono un Full Stack Developer con base in Ticino. Mi piace seguire una funzionalità dall'inizio alla fine: il layout in Figma, l'interfaccia in React o Next.js, le API e il database dietro, e il deploy che la porta davanti agli utenti.",
      "In Franklin Switzerland ho portato il nuovo sito aziendale da Figma alla produzione e mantengo il sito PHP esistente: automazioni, patch e correzioni di sicurezza. Prima ho lavorato per più di due anni in SL Technology, sviluppando e mantenendo applicazioni web in PHP e lavorando direttamente con i clienti sui loro requisiti.",
      "Mi interessa come si comporta il software una volta online, quindi faccio girare i miei progetti in Docker su un homelab Proxmox e Kubernetes. È lì che imparo la parte infrastrutturale senza mettere a rischio la produzione.",
      "Fuori dal lavoro mi occupo di graphic design, modellazione 3D e stampa 3D.",
    ],
  },
  skillTiers: {
    daily: { title: "Strumenti quotidiani", description: "Quello con cui sviluppo e rilascio." },
    working: {
      title: "Conoscenza operativa e progetti personali",
      description: "Usati al lavoro o nei miei progetti, non ogni giorno.",
    },
  },
  skillLabels: {
    "REST and SOAP APIs": "API REST e SOAP",
    "Cursor (AI-assisted development)": "Cursor (sviluppo assistito da AI)",
  },
  experience: {
    "franklin-switzerland": {
      location: "Sorengo, Svizzera",
      context: "Team internazionale, lingua di lavoro principale l'inglese.",
      bullets: [
        "Ho preso in carico il nuovo sito aziendale end to end, dai layout in Figma alla produzione in React, Next.js, TypeScript e Tailwind CSS, con focus su SEO, profilazione degli utenti e lead generation.",
        "Ho sviluppato applicazioni web interne, tra cui strumenti per generare email personalizzate e codici QR.",
        "Ho integrato piattaforme CMS e CRM e form incorporati, personalizzandone il comportamento con moduli YAML e CSS custom.",
        "Ho mantenuto il sito PHP esistente: automazioni, patch, correzione di vulnerabilità di sicurezza e risoluzione di problemi tecnici.",
      ],
    },
    "sl-technology": {
      location: "Crema, Italia",
      bullets: [
        "Ho sviluppato e mantenuto applicazioni web e siti per la gestione dei processi aziendali, su misura per organizzazioni diverse, in PHP, JavaScript, HTML, CSS e Bootstrap 4/5.",
        "Ho analizzato, progettato e gestito database relazionali per mantenere i dati ben organizzati e le query efficienti.",
        "Ho lavorato direttamente con i clienti per raccogliere i requisiti, proporre soluzioni tecniche e risolvere problemi di business e IT, migliorando le prestazioni dei sistemi e l'efficienza operativa.",
        "Ho esteso le applicazioni implementando e personalizzando plugin e librerie di terze parti.",
      ],
    },
    zucchetti: {
      location: "Lodi, Italia",
      bullets: [
        "Sono entrato in un team di Ricerca e Sviluppo dopo una formazione di due mesi su Java, JavaScript, SQL, T-SQL, Linux e programmazione concorrente.",
        "Ho progettato e realizzato database e interfacce utente orientati a un'esperienza semplice e intuitiva.",
        "Ho collaborato con il team in un ambiente conforme allo standard di sicurezza delle informazioni ISO/IEC 27001.",
      ],
    },
  },
  education: {
    // TODO(user): confirm the official Italian name of the diploma.
    "iis-galilei": { qualification: "Diploma in Informatica", location: "Crema, Italia" },
  },
  projects: {
    arischiogatti: {
      outcome:
        "Sito pubblico per un'associazione di Crema che si occupa di gatti in difficoltà, progettato e sviluppato end to end e donato.",
      role: "Design e sviluppo full stack",
      problem:
        "L'associazione Arischiogatti di Crema accoglie gatti in difficoltà e trova loro una casa. Le serviva un sito pubblico con contenuti da aggiornare in autonomia.",
      approach:
        "Ho progettato il sito in Figma, sviluppato il front end in Next.js e TypeScript e configurato Drupal come CMS headless che fornisce i contenuti.",
      result: "Online in produzione su arischiogatti.it, donato all'associazione.",
      architecture: "Front end Next.js (React, TypeScript) → contenuti da Drupal headless (PHP)",
      imageAlt:
        "Home page di Arischiogatti: foto di un gatto tigrato dietro il titolo “Ogni zampa merita una seconda occasione” e un pulsante per conoscere i gatti",
    },
    "crypto-tracker": {
      outcome:
        "Tracker di portafoglio self-hosted che trasforma le transazioni crypto in costo di carico, profitti e perdite e un report fiscale annuale.",
      role: "Progetto personale",
      problem:
        "Calcolare a mano il costo di carico diventa ingestibile quando si accumulano swap, trasferimenti, ricompense di staking e commissioni pagate in altri asset, e il risultato dipende dal metodo contabile.",
      approach:
        "Un motore di calcolo riprocessa le transazioni in ordine cronologico e costruisce i lotti secondo FIFO, LIFO o costo medio, alimentato dagli import CSV di Kraken e dal ticker pubblico dei prezzi di Kraken.",
      result:
        "Confronto affiancato tra strategie, profitti e perdite realizzati e non realizzati, e un report fiscale annuale esportabile in CSV o JSON. Motore, import CSV e report fiscale hanno test Vitest.",
      decisions: [
        "Motore del costo di carico con FIFO, LIFO e costo medio, commissioni incluse",
        "decimal.js per ogni importo, così i calcoli monetari non usano mai la virgola mobile",
        "PostgreSQL come fonte di verità; i backup JSON sono solo un formato di scambio",
        "Prezzi salvati in CHF, EUR e USD; portafoglio valutato in CHF",
      ],
      imageAlt:
        "Dashboard di Crypto Tracker con patrimonio totale, profitto, ROI, profitti e perdite realizzati e non realizzati e posizioni in CHF",
    },
    "finance-tracker": {
      outcome:
        "App di finanza personale self-hosted per una situazione italo-svizzera, con conti in EUR e CHF e saldi derivati da un registro contabile.",
      role: "Progetto personale",
      problem:
        "Con conti in EUR e CHF divisi in buste di budget, ogni mese il denaro si sposta tra conti, buste e valute. Contare questi movimenti come entrate o spese falsa i numeri.",
      approach:
        "Un modello a registro in cui ogni saldo è calcolato da transazioni e trasferimenti, mai salvato. Trasferimenti e conversioni EUR–CHF sono un'entità a sé, separata da entrate e spese.",
      result:
        "Una dashboard con patrimonio netto che tiene conto del cambio e saldi per conto e busta, distribuibile con Docker Compose o su Kubernetes con health check e PostgreSQL persistente.",
      decisions: [
        "Saldi basati sul registro: nessun totale salvato che possa andare fuori sincrono",
        "Importi salvati come Decimal(19,4) e gestiti con decimal.js",
        "Le conversioni EUR–CHF usano un cambio configurabile e non contano mai come entrata o spesa",
        "Build Next.js standalone con Docker Compose e manifest Kubernetes, con probe su /api/health",
      ],
      imageAlt:
        "Dashboard di Finance Tracker con i totali dei conti in EUR e CHF, ogni conto diviso in Needs, Play, Investment e Savings",
    },
  },
  contact: {
    heading: "Parliamone",
    body: "Cerchi un profilo Full Stack o PHP in Svizzera o da remoto? L'email è il modo più rapido per contattarmi; va bene anche LinkedIn.",
    mailtoSubject: "Contatto dal portfolio",
    mailtoBody: `Ciao Nicholas,

ho visto il tuo portfolio e vorrei mettermi in contatto.

Ruolo / opportunità:
Azienda / contesto:
Tempistiche:

Un saluto,
`,
  },
  seo: {
    title: "Nicholas Codazzi – Full Stack Developer (TypeScript, PHP)",
    description:
      "Full Stack Developer in Ticino, Svizzera. Sviluppo applicazioni web end to end con TypeScript, React, Next.js, PHP e PostgreSQL, da Figma alla produzione.",
    ogImageAlt: "Nicholas Codazzi, Full Stack Developer: TypeScript, Next.js, PHP. Ticino, Svizzera.",
    locale: "it_CH",
  },
};
