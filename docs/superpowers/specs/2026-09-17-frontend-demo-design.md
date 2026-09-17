# Bozza front-end — Gratuito Patrocinio Milano (Studio Legale Porta Nuova)

Data: 2026-09-17
Stato: approvata per implementazione

## 1. Contesto e obiettivo di questa spec

Webbitz deve presentarsi per la prima volta al cliente (Studio Legale Porta
Nuova / Rosario Pricoco) con una bozza già molto vicina al risultato finale
a livello visivo, per vendere la visione di un sito nuovo in Next.js al
posto dell'attuale WordPress (vedi audit in
`AnalisiAttuale/Audit_SEO_Webbitz.pdf`).

**Questa spec copre solo la bozza front-end da mostrare alla prima call.**
Non è la spec del progetto finale completo.

### Visione del progetto finale (contesto, non scope di questa fase)

Discusso e concordato come direzione generale, da riprendere in una spec
successiva:

- Migrazione da WordPress a Next.js per pieno controllo su SEO, dati
  strutturati e funzionalità.
- Contenuti riscritti/ottimizzati per SEO tecnico, local SEO (Milano) e GEO
  (Generative Engine Optimization per motori come ChatGPT/Perplexity/AI
  Overview).
- Gestione contenuti ibrida: MDX/Git per contenuti editoriali evergreen
  (guide, articoli), CMS headless leggero (es. Payload, self-hostabile) per
  dati che lo studio deve poter cambiare senza aiuto tecnico (profili
  avvocati, soglie di requisiti, disponibilità prenotazioni).
- Hosting su Vercel.
- Funzionalità v1 del progetto finale: form di contatto reale, verifica
  requisiti interattiva reale, prenotazione appuntamento reale, blog/guide
  con ricerca e filtri reali.
- Migrazione URL, redirect 301, correzione robots.txt, responsabilità
  editoriale sugli articoli legali, dati strutturati LegalService/Person,
  privacy/cookie — tutti i punti critici dell'audit.

Questi punti **non si implementano ora**: sono la mappa per le fasi
successive del progetto, dopo l'approvazione del cliente.

## 2. Scope di questa fase: bozza front-end pre-call

### Dentro lo scope

- Front-end statico Next.js, 10 pagine, con contenuti testuali presi
  **as-is** dal sito attuale (nessuna riscrittura, nessuna ottimizzazione).
- Un design system di blocchi animati riutilizzabili, con animazioni
  originali (non da libreria/template generico).
- Due elementi di interattività **finta** (booking, verifica requisiti) —
  solo guscio visivo con esito scriptato, nessuna logica reale.
- Responsive impeccabile su tutti i breakpoint.

### Esplicitamente fuori scope (da non toccare in questa fase)

- Ottimizzazione o riscrittura dei testi.
- SEO tecnico, local SEO, GEO, dati strutturati.
- CMS o qualunque backend/persistenza dati.
- Privacy policy, cookie banner, consensi.
- Qualsiasi logica funzionale reale (form che invia davvero, booking reale,
  ricerca/filtri reali, verifica requisiti reale).
- Pagina "Professionista" (profilo singolo avvocato): esclusa da questa
  bozza — il vecchio sito non ha una pagina equivalente e non abbiamo dati
  reali degli avvocati. Si aggiunge quando il cliente fornirà i dati.

## 3. Architettura tecnica

- **Stack**: Next.js (App Router) + TypeScript.
- **Percorso progetto**: `PortaNuova/sito-nuovo/`, repository Git già
  inizializzato nella cartella padre `PortaNuova/`.
- **Styling**: Tailwind CSS per struttura/layout.
- **Animazioni**: GSAP (con ScrollTrigger e DrawSVG, gratuiti) per
  coreografie scroll-driven complesse (linee che si disegnano, pin di
  sezione, sequenze orchestrate) + Motion (ex Framer Motion) per
  animazioni React idiomatiche a livello di componente (hover, stati,
  micro-interazioni).
- **Contenuti**: nessun CMS/MDX in questa fase. File dati TypeScript
  tipizzati, uno per pagina (es. `content/home.ts`, `content/penale.ts`),
  separati dai componenti visivi. Scelta deliberata: è il modo più veloce
  ora e rende banale in futuro sostituire la fonte dati con un CMS senza
  riscrivere i componenti.
- **Asset**: font, logo e immagini recuperati così come sono dal sito
  attuale (nessun brand kit fornito dal cliente in questa fase).
- **Fonte contenuti**: estrazione dei testi dalle pagine equivalenti di
  `www.gratuitopatrociniomilano.com`, copiati as-is nei file dati.

## 4. Design system di blocchi animati

Libreria di componenti riutilizzata su tutte le pagine, con la Home come
trattamento più elaborato (vedi §6 sulla strategia Home-bespoke +
pagine-a-sistema).

| Blocco | Ruolo |
|---|---|
| Header/Nav | Navigazione, apertura menu con transizione originale |
| Footer | Piè di pagina |
| Hero | Apertura pagina, sfondo animato + reveal del testo |
| ServiceCard / Griglia servizi | Aree legali (penale, civile, lavoro, famiglia) |
| ProcessTimeline | Passaggi della procedura, linee che si disegnano tra gli step |
| TeamGrid | Griglia dello studio (senza pagine profilo dedicate) |
| StatsBlock | Numeri/statistiche con conteggio animato all'ingresso in viewport |
| FAQAccordion | Apertura/chiusura con icona animata custom |
| CTABlock | Blocco di invito all'azione — qui vivono le interazioni finte (§5) |
| ContactFormShell | Guscio visivo del form contatti |

**Linguaggio di movimento** (per l'effetto "originale", non da template):

- Icone SVG disegnate ad hoc, ciascuna con micro-animazione propria
  (hover o ingresso in viewport), non icon-font/libreria generica.
- Linee che si disegnano (stroke-animation legata allo scroll) per
  divisori, sottolineature, connettori di timeline.
- Sfondi animati con forme/gradient mesh a movimento lento e organico,
  coerenti con l'identità dello studio (non particelle generiche).
- Reveal orchestrati con stagger calcolato, non fade-up uniforme.

**Garanzia di percepito alto su tutte le pagine**: ogni blocco ha 2-3
varianti di composizione/animazione, così pagine diverse che riusano lo
stesso blocco non sembrano fotocopie — cambia ritmo dello stagger,
angolazione del reveal o variante di sfondo per pagina.

**Accessibilità di base**: rispetto di `prefers-reduced-motion` su tutte
le animazioni (baseline gratuita, non piena conformità WCAG — quella resta
fuori scope).

## 5. Le 10 pagine

Architettura basata su quella già raccomandata nell'audit (p. 8), con
contenuti presi dalla pagina equivalente del sito attuale.

| # | Pagina | Contenuto | Blocchi principali |
|---|---|---|---|
| 1 | Home | Overview servizio, aree di assistenza, perché sceglierci | Hero, ServiceCard grid, StatsBlock, CTABlock |
| 2 | Come funziona | Spiegazione gratuito patrocinio | Hero secondario, ProcessTimeline |
| 3 | Requisiti | Soglia, nucleo familiare, eccezioni, documenti | Testo strutturato, FAQAccordion |
| 4 | Diritto penale | Servizio e casi seguiti | Hero secondario, contenuto |
| 5 | Diritto civile | Servizio e casi seguiti | Hero secondario, contenuto |
| 6 | Diritto del lavoro | Servizio e casi seguiti | Hero secondario, contenuto |
| 7 | Famiglia | Separazione, divorzio, figli | Hero secondario, contenuto |
| 8 | Lo studio | Identità, sede, metodo | TeamGrid, contenuto |
| 9 | Guide | Elenco guide/articoli (statico, no ricerca/filtri) | Griglia card |
| 10 | Contatti | Telefono, WhatsApp, sede, form | ContactFormShell |

## 6. Interattività finta

Nessuna logica reale: solo guscio visivo con esito scriptato lato client.

- **"Prenota"** (in CTABlock/Contatti): click avvia un'animazione di
  conferma elaborata (es. transizione check-mark + messaggio "richiesta
  inviata"), stato gestito client-side, nessun dato inviato davvero.
- **"Verifica se hai diritto"**: mini-percorso scriptato a 2-3 passaggi
  (domande cliccabili finte) che culmina in un risultato animato di
  esempio, dati completamente inventati.

## 7. Strategia di costruzione delle pagine

Approccio ibrido concordato: **Home interamente bespoke** (animazioni più
elaborate e originali, è la pagina che decide l'impressione nella call);
le altre 9 pagine composte con il design system di blocchi (§4), applicato
con disciplina e con varianti per mantenere alto il percepito anche lì.

## 8. Fasi di lavoro

1. **Raccolta contenuti** — estrazione testi as-is dalle 10 pagine
   equivalenti del sito attuale (vedi §5; "Professionista" è già esclusa
   dall'elenco), organizzati nei file dati tipizzati; recupero asset
   riutilizzabili (logo, immagini).
2. **Ricerca animazioni + design system** — direzione visiva
   (palette/font derivati dal materiale attuale), prototipazione delle
   tecniche di movimento (icone animate, linee che si disegnano, sfondi
   animati, reveal orchestrati), costruzione dei blocchi riutilizzabili
   con le loro animazioni.
3. **Assemblaggio pagine** — Home per prima, poi le altre 9 pagine
   componendo i blocchi con variazioni.
4. **Interattività finta** — animazione conferma prenotazione, mini-
   percorso "verifica se hai diritto".
5. **Rifinitura e QA visiva** — responsive su tutti i breakpoint (punto di
   debolezza del sito attuale, qui deve essere impeccabile), coerenza
   cross-pagina, fluidità delle animazioni, `prefers-reduced-motion`.

## 9. Testing/QA

Nessun test automatizzato in questa fase (non c'è logica funzionale da
testare). QA manuale: verifica visiva su breakpoint mobile/tablet/desktop,
controllo cross-browser di base, verifica che le animazioni restino
fluide (target 60fps) e che `prefers-reduced-motion` sia rispettato.

## 10. Come leggere questa spec

I dati e i rilievi tecnici citati come contesto (performance, robots.txt,
problemi editoriali) provengono dall'audit originale e restano da
verificare/risolvere nella fase successiva del progetto — non sono
oggetto di intervento in questa bozza front-end.
