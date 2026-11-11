import type { Dictionary } from "@/i18n/types";

export const it: Dictionary = {
  meta: {
    skipToContent: "Vai al contenuto",
  },
  nav: {
    about: "Chi sono",
    experience: "Esperienza",
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
    focus: "Ambiti",
    stackSignal: "Stack",
    focusAreasLabel: "Aree di interesse",
  },
  about: {
    eyebrow: "Chi sono",
    title: "Costruire oltre il codice",
    basedIn: "Con sede a",
  },
  experience: {
    eyebrow: "Esperienza",
    title: "Percorso professionale",
    description: "I ruoli che ho ricoperto, cosa ho fatto e con quali tecnologie.",
  },
  skills: {
    eyebrow: "Competenze",
    title: "Competenze tecniche",
    description: "Raggruppate per ambito. Una panoramica ampia; la profondità cambia a seconda del contesto.",
  },
  projects: {
    eyebrow: "Lavori",
    title: "Progetti in evidenza",
    description:
      "Alcuni lavori selezionati: sviluppo prodotto, infrastruttura, Web3 e progetti creativi.",
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
    heading: "Parliamo di quello che stai costruendo",
    body: "Cerchi un Full Stack Developer, ti serve una mano a portare online un prodotto, o vuoi solo confrontarti su un’idea tecnica? Scrivimi: mi fa piacere sapere a cosa stai lavorando.",
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
    rights: "Tutti i diritti riservati.",
    backToTop: "Torna su",
  },
  profile: {
    title: "Full Stack Developer",
    shortBio:
      "Mi appassionano la tecnologia, l’ingegneria e la ricerca di soluzioni innovative. Oltre allo sviluppo software tradizionale, mi interesso di frontend e backend, infrastrutture cloud-native, Web3 e creazione digitale. Dallo sviluppo di applicazioni scalabili alla gestione di ambienti basati su Docker e Kubernetes, fino alla modellazione 3D, alla stampa e al design. Utilizzo il codice e la tecnologia per trasformare le idee in progetti concreti.",
    personalStatement:
      "Progetto e porto in produzione software end-to-end: dall’interfaccia e dalle API fino al deploy e ai sistemi che lo fanno funzionare.",
    availability:
      "Sono aperto a opportunità professionali e collaborazioni tecniche: ruoli Full Stack, lavoro su prodotto e progetti in cui possa seguire le feature dal design fino alla produzione.",
    about: [
      "Lavoro come Full Stack Developer. Costruisco applicazioni complete: interfacce chiare, servizi mantenibili nel tempo e deploy pensati per reggere anche fuori dall’ambiente locale.",
      "Guardo al software come a un sistema. Mi interessano l’architettura, i modelli dati e tutto ciò che succede in produzione: Linux, container, networking, CI/CD, infrastrutture self-hosted. Capire come girano davvero le cose mi aiuta a scegliere meglio in fase di progetto.",
      "Accanto al codice seguo anche crypto e blockchain, modellazione 3D, fabbricazione digitale e media design. Ho creato una collection NFT soprattutto per sperimentare il flusso end-to-end. Sono attività che mi allenano su precisione e creatività, e mi ricordano che un’idea conta quando diventa qualcosa di concreto.",
      "Imparo volentieri da solo e mi piace affrontare problemi difficili. Quello che mi interessa di più, però, resta lo stesso: progettare e sviluppare software, anche quando intorno ci sono design, maker culture o altre tecnologie.",
    ],
    focusAreas: [
      {
        title: "Sviluppo Full Stack",
        description: "Frontend, backend, Architettura, API e applicazioni scalabili.",
      },
      {
        title: "Cloud-native e infrastruttura",
        description: "Docker, Kubernetes, Linux, containerizzazione e orchestrazione.",
      },
      {
        title: "AI e sviluppo assistito",
        description:
          "Sviluppo con AI, LLM, prompt engineering, workflow supportati dall’AI e produttività.",
      },
      {
        title: "Web3 e blockchain",
        description:
          "Applicazioni decentralizzate, ecosistemi blockchain, smart contract e digital ownership.",
      },
      {
        title: "Sistemi e automazione",
        description:
          "Ambienti Linux, networking, scripting, amministrazione di sistema e automazione.",
      },
      {
        title: "Modellazione 3D e fabbricazione",
        description: "Modellazione organica e geometrica, G-code e produzione.",
      },
      {
        title: "Graphic e visual design",
        description:
          "Adobe Creative Suite, comunicazione visiva, estetica digitale e multimedia.",
      },
    ],
  },
  experiences: {
    "franklin-switzerland": {
      title: "Full Stack Developer",
      location: "Sorengo, Ticino, Svizzera",
      summary:
        "Ho progettato e sviluppato il nuovo sito dell’azienda, dal design UI in Figma fino all’implementazione con Next.js, React, TypeScript e Tailwind CSS. Ho curato la coerenza con l’identità visiva e gli standard di design. Lavoro in un contesto internazionale, con comunicazione soprattutto in inglese.",
      responsibilities: [
        "Sviluppo web: interfacce moderne e siti aziendali, con attenzione a usabilità, responsive e coerenza di brand.",
        "Applicazioni interne: tool web su misura, tra cui soluzioni per email branded e QR code personalizzati.",
        "Integrazione CMS e CRM: personalizzazione ed estensione di funzionalità, moduli in YAML e form incorporati con CSS dedicato.",
        "Manutenzione e automazione: script PHP su siti esistenti, risoluzione di problemi tecnici, patch e interventi di sicurezza.",
        "Landing e lead generation: collaborazione su pagine e landing page, con attenzione a profilazione utenti e raccolta contatti.",
        "Design e comunicazione: materiali grafici aziendali (flyer, brochure) a supporto di marketing e comunicazione.",
      ],
    },
    "sl-technology": {
      title: "Programmatore",
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
      title: "Programmatore",
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
    web: {
      title: "Sviluppo web",
      description: "Interfacce, framework, stili e realizzazione di applicazioni web.",
    },
    database: {
      title: "Database",
      description:
        "Database relazionali e documentali, ORM/BaaS e gestione quotidiana dei dati.",
    },
    infrastructure: {
      title: "Infrastruttura e DevOps",
      description:
        "Sistemi, container, networking e ambienti self-hosted a supporto del software in produzione.",
    },
    blockchain: {
      title: "Blockchain e Web3",
      description:
        "Interesse pratico verso crypto, strumenti Web3 e asset digitali.",
    },
    "3d": {
      title: "Modellazione 3D e fabbricazione",
      description: "Dal modello digitale al pezzo fisico: sculpting, CAD e prototipi stampati.",
    },
    design: {
      title: "Graphic design e digital media",
      description: "Comunicazione visiva e motion: composizione, immagini e video.",
    },
  },
  skillLabels: {
    "Database design": "Progettazione database",
    Networking: "Networking",
    "Self-hosted infrastructure": "Infrastruttura self-hosted",
    "Cryptocurrency ecosystem": "Ecosistema crypto",
    "Blockchain technologies": "Tecnologie blockchain",
    "Cryptocurrency portfolio tracking": "Monitoraggio portfolio crypto",
    "Organic modeling": "Modellazione organica",
    "Digital sculpting": "Sculpting digitale",
    "Hard-surface modeling": "Modellazione hard-surface",
    "3D printing": "Stampa 3D",
    Prototyping: "Prototipazione",
    Virtualization: "Virtualizzazione",
  },
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
