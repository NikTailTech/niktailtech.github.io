import type { Dictionary } from "@/i18n/types";

export const it: Dictionary = {
  meta: {
    skipToContent: "Vai al contenuto",
  },
  nav: {
    tldr: "TL;DR",
    about: "Chi sono",
    experience: "Esperienze",
    skills: "Competenze",
    projects: "Progetti",
    contact: "Contatti",
    primary: "Navigazione principale",
    footer: "Piè di pagina",
    mobile: "Menu mobile",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  language: {
    label: "Lingua",
    en: "Inglese",
    it: "Italiano",
  },
  theme: {
    light: "Tema chiaro. Cambia tema",
    dark: "Tema scuro. Cambia tema",
    system: "Tema di sistema. Cambia tema",
    switch: "Cambia tema",
  },
  hero: {
    eyebrow: "Portfolio",
    exploreProjects: "Guarda i progetti",
    getInTouch: "Contattami",
  },
  tldr: {
    eyebrow: "TL;DR",
    lead: "Troppo lungo? Ecco il riassunto furbo.",
    stackSignal: "Stack",
    stackGroups: {
      daily: "Uso quotidiano",
      also: "So usare anche",
    },
    stackDomains: {
      frontend: "Frontend",
      backend: "Backend",
      data: "Data",
      cloud: "Cloud e infra",
      libraries: "Librerie",
      design: "Design",
    },
  },
  about: {
    eyebrow: "Chi sono",
    title: "End to End, Design to Deploy",
    intro: "Un pezzo su come lavoro, cosa mi interessa e perché costruisco così.",
    basedIn: "Con sede a",
  },
  experience: {
    eyebrow: "Esperienza",
    title: "Percorso professionale",
    description: "I ruoli che ho ricoperto, cosa ho fatto e con quali tecnologie.",
  },
  skills: {
    eyebrow: "Skills",
    title: "Competenze Tecniche",
    description:
      "Divise per quanto le uso: tool di tutti i giorni, poi altre che conosco e so usare quando servono.",
  },
  projects: {
    eyebrow: "Lavori",
    title: "Progetti in Evidenza",
    description:
      "Lavori selezionati tra product engineering, tool self-hosted e delivery per clienti.",
    comingSoonEyebrow: "In preparazione",
    comingSoonTitle: "Prossimamente",
    comingSoonBody:
      "Sto preparando le schede dei progetti. Layout e filtri sono già pronti; i contenuti arrivano a breve.",
    visitSite: "Visita il sito",
    repository: "Repository",
    categoriesLabel: "Categorie dei progetti",
    status: {
      concept: "Concept",
      "in-progress": "In corso",
      completed: "Completato",
      archived: "Archiviato",
      placeholder: "Da definire",
    },
  },
  contact: {
    eyebrow: "Contatti",
    heading: "Let’s Talk",
    body: "Aperto a chiacchiere su software, infrastruttura, side project o qualsiasi cosa interessante a cui stai lavorando. Scrivimi.",
    reachOut: "Come contattarmi",
    emailNicholas: "Contattami",

    mailtoSubject: "Contatto dal portfolio",
    mailtoBody: `Ciao Nicholas,

ho visto il tuo portfolio e vorrei mettermi in contatto.

Ruolo / opportunità:
Azienda / contesto:
Tempistiche:
Qualche riga su cosa stai cercando:

Un saluto,
`,
  },
  footer: {
    tagline: "Software pensato come sistema, con spazio anche per la parte creativa.",
    navigate: "Navigazione",
    connect: "Social",
    followMe: "Follow Me",
    rights: "Tutti i diritti riservati.",
    backToTop: "Torna su",
  },
  profile: {
    title: "Full Stack Developer",
    shortBio:
      "Sono un Full Stack Developer. Mi piace costruire software da un capo all’altro: interfaccia, servizi dietro, e l’infrastruttura che lo tiene in piedi.",
    personalStatement:
      "Quello che mi tiene in moto è semplice: capire come funziona una cosa, trovare un modo più pulito per costruirla, e far diventare reale un’idea ancora confusa.",
    availability:
      "Sono aperto a opportunità professionali e collaborazioni tecniche: ruoli Full Stack, lavoro su prodotto e progetti in cui possa seguire le feature dal design fino alla produzione.",
    about: [
      "Sono un Full Stack Developer. Mi piace costruire software da un capo all’altro: l’interfaccia che usi, i servizi dietro, e l’infrastruttura che lo tiene in piedi.",
      "Non mi fermo a scrivere feature. Architettura, modelli dati e come reggono in produzione per me contano. Nel quotidiano lavoro con TypeScript, React, Next.js, PHP, SQL, Docker e Linux — così un’app funziona fuori dal laptop, non solo in locale.",
      "Fuori dal prodotto faccio anche modellazione 3D, fabbricazione digitale, stampa e visual design quando voglio qualcosa di più concreto tra le mani — e uso Three.js quando un’interfaccia ha bisogno di vero 3D nel browser.",
      "Imparo provando e buttandomi su problemi che non ho ancora visto. Rilasciare un’app, configurare infra, o far diventare reale un design: è lì che mi torna tutto.",
      "Quello che mi tiene in moto è semplice: capire come funziona una cosa, trovare un modo più pulito per costruirla, e far diventare reale un’idea ancora confusa.",
    ],
    focusAreas: [
      {
        title: "Sviluppo Full Stack",
        description:
          "Interfacce, API e logica applicativa con React, Next.js, TypeScript, Node.js e PHP.",
      },
      {
        title: "Database e API",
        description:
          "Modellazione relazionale, SQL, PostgreSQL, Prisma e servizi REST pensati per restare mantenibili.",
      },
      {
        title: "Shipping e ambienti",
        description:
          "Docker, Linux e Git nel quotidiano; Kubernetes sul homelab per app self-hosted.",
      },
      {
        title: "Side practice",
        description:
          "Design in Figma, Three.js nel browser e 3D / fabbricazione quando voglio staccare dal prodotto.",
      },
    ],
  },
  experiences: {
    "franklin-switzerland": {
      title: "Full Stack Developer",
      location: "Sorengo, Ticino, Svizzera",
      summary:
        "Ho costruito il nuovo sito dell’azienda end to end — dalla UI in Figma all’implementazione con Next.js, React, TypeScript e Tailwind CSS — tenendo coerenti identità visiva e standard di design. Contesto internazionale, comunicazione soprattutto in inglese. Il go-live pubblico è stato poi deprioritizzato dopo una riorganizzazione interna.",
      responsibilities: [
        "Sviluppo web: interfacce moderne per il sito aziendale, con attenzione a usabilità, responsive e coerenza di brand.",
        "Applicazioni interne: tool web su misura, tra cui email branded e QR code personalizzati.",
        "Integrazione CMS e CRM: moduli personalizzati, setup in YAML e form incorporati con CSS dedicato.",
        "Manutenzione e automazione: script PHP su siti esistenti, fix, patch e interventi di sicurezza.",
        "Landing e lead generation: pagine e landing per profilazione utenti e raccolta contatti.",
        "Design e comunicazione: materiali grafici (flyer, brochure) per marketing e comunicazione.",
      ],
    },
    "sl-technology": {
      title: "Full Stack Web Developer",
      location: "Crema, Lombardia, Italia",
      summary:
        "Ho sviluppato e mantenuto applicazioni web e siti per diverse aziende, soprattutto in ambito gestionale, ottimizzazione dei processi e soluzioni software su misura.",
      responsibilities: [
        "Sviluppo applicativo: applicazioni e siti web adattati a requisiti di business e flussi operativi diversi.",
        "Frontend: HTML, CSS, Bootstrap 4/5 e JavaScript, con personalizzazione di plugin e librerie di terze parti.",
        "Backend: funzionalità in PHP a supporto di processi aziendali e richieste specifiche dei clienti.",
        "Database: analisi, progettazione e gestione di database relazionali, con attenzione a struttura e gestione dei dati.",
        "Rapporto con i clienti: raccolta e analisi dei requisiti, proposta di soluzioni tecniche e supporto su problemi business e IT.",
      ],
    },
    zucchetti: {
      title: "Full Stack Developer",
      location: "Lodi, Lombardia, Italia",
      summary:
        "Ho lavorato in un team di Ricerca e Sviluppo (R&D), contribuendo allo sviluppo software e alla progettazione di database durante un percorso iniziale di formazione tecnica.",
      responsibilities: [
        "Formazione tecnica: percorso iniziale di due mesi su Java, HTML, CSS, JavaScript, SQL, T-SQL, Linux e programmazione concorrente.",
        "Database: progettazione e sviluppo di database, con attenzione a organizzazione, struttura e gestione dei dati.",
        "Interfacce utente: UI pensate per usabilità, chiarezza e un’esperienza semplice da capire.",
        "Lavoro di team: collaborazione su attività di sviluppo e gestione dei processi aziendali in un contesto certificato ISO/IEC 27001.",
      ],
    },
  },
  skillCategories: {
    daily: {
      title: "Uso quotidiano",
      description: "Quello che uso di solito per interfacce, API, dati e deploy.",
    },
    also: {
      title: "So usare anche",
      description: "Tecnologie che conosco e so usare quando il progetto le richiede.",
    },
  },
  skillLabels: {},
  projectsContent: {
    arischiogatti: {
      name: "Arischiogatti",
      shortDescription:
        "Sito web per l’associazione Arischiogatti di Crema: rifugio, cura e adozione per gatti in difficoltà.",
      detailedDescription:
        "Ho seguito il sito pubblico dell’associazione dall’inizio alla fine: design completo, integrazione di Drupal come CMS e messa online. Il progetto è stato donato all’associazione per sostenere il loro lavoro a Crema e dintorni.",
      highlights: [
        "Design completo del sito pubblico",
        "Configurazione di Drupal per la gestione dei contenuti",
        "Messa online e donazione del progetto all’associazione",
      ],
    },
    "crypto-tracker": {
      name: "Crypto Tracker",
      shortDescription:
        "App self-hosted per registrare le transazioni crypto, calcolare il costo di carico e seguire l’andamento del portfolio.",
      detailedDescription:
        "App Next.js in locale per il portfolio personale: acquisti, vendite, swap, trasferimenti e staking, con strategie FIFO, LIFO e costo medio. I prezzi si possono aggiornare da Kraken e il report fiscale annuale si esporta in CSV o JSON. I dati restano nel tuo database PostgreSQL.",
      highlights: [
        "Motore di cost basis con FIFO, LIFO e costo medio",
        "Import CSV da Kraken e aggiornamento prezzi live",
        "Report fiscale annuale, più export e import del backup",
      ],
    },
    "finance-tracker": {
      name: "Finance Tracker",
      shortDescription:
        "App self-hosted di finanza personale per conti, buste e saldi in EUR e CHF.",
      detailedDescription:
        "Pensata per un setup Italia–Svizzera: conti correnti in EUR e CHF, ognuno diviso in Needs, Play, Investment e Savings. I saldi escono dal registro, e trasferimenti o cambi valuta restano separati da entrate e uscite.",
      highlights: [
        "Dashboard con patrimonio netto in doppia valuta e ripartizione per categoria",
        "Movimenti tra conti, buste e EUR–CHF che non contano come entrate o uscite",
        "Debiti, template ricorrenti e deploy con Docker o Kubernetes sul mio homelab",
      ],
    },
  },
  projectFilters: {
    all: "Tutti",
    "full-stack": "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    infrastructure: "Infrastruttura",
    blockchain: "Blockchain / Web3",
    creative: "3D e creativo",
  },
};
