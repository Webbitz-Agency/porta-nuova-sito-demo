import type { BlogPost } from "./types";

// The 2 most recent posts copied over from the live site's blog
// (gratuitopatrociniomilano.com/blog/), restructured into this site's
// section format but keeping the real facts, figures and procedure as
// published.
const blog: BlogPost[] = [
  {
    slug: "avvocato-gratuito-per-cause-civili-come-funziona",
    title: "Avvocato gratuito per cause civili: come funziona?",
    date: "10 Agosto 2026",
    isoDate: "2026-08-10",
    excerpt:
      "Hai bisogno di avere assistenza da parte di un Avvocato? Se non riesci a sostenere le spese e non puoi permetterti di pagarlo, scopri come ottenere assistenza legale gratuita richiedendo il patrocinio a spese dello Stato.",
    image: { src: "/images/consulenza.jpg", alt: "Consulenza legale allo Studio Legale Porta Nuova" },
    sections: [
      {
        heading: "Cos'è il diritto civile?",
        body: "Il diritto civile è quella branca del diritto disciplinata quasi interamente all'interno del codice civile del 1942, e nei suoi circa tremila articoli. Il diritto civile trova la propria fonte anche in alcune leggi complementari emanate nel corso degli anni, che hanno via via complicato questa materia. L'Avvocato civilista è quindi quel professionista che si occupa di controversie e problemi inerenti al diritto civile e patrimoniale, come risarcimenti, diritto di famiglia, contrattuale e successorio.",
      },
      {
        heading: "Studio Legale Porta Nuova: assistenza con patrocinio a spese dello Stato",
        body: "Lo Studio Legale Porta Nuova offre assistenza legale con patrocinio a spese dello Stato in ambito civile, sia per clienti residenti a Milano e provincia sia per persone che si trovano in altre città italiane. Lo Studio Legale Porta Nuova può assisterti in particolare per:",
        items: [
          "Separazione e divorzio",
          "Affidamento e mantenimento dei figli",
          "Responsabilità medica e malasanità",
          "Risarcimento danni",
          "Sfratto e locazioni",
          "Procedimenti penali",
          "Tutela della persona e della famiglia",
        ],
      },
      {
        heading: "Avvocato specializzato in diritto civile: di cosa si occupa?",
        body: "Gli Avvocati civilisti sono coloro che mettono a disposizione dei clienti le proprie conoscenze giuridiche per la risoluzione di problematiche e controversie inerenti al diritto civile. Non solo: l'avvocato civilista ha altresì il compito di assistere, difendere o rappresentare, tramite apposito mandato, una parte dinnanzi al giudice o nell'ambito di una controversia di tipo stragiudiziale. Non si tratta solo di un avvocato che interviene per la risoluzione di controversie: svolge anche un'utile attività di prevenzione delle stesse, fornendo consulenze specifiche.",
      },
      {
        heading: "Come si richiede il patrocinio a spese dello Stato",
        body: "Per ottenere il patrocinio a spese dello Stato è necessario presentare apposita istanza al Consiglio dell'Ordine degli Avvocati. L'istanza deve essere sempre sottoscritta dal beneficiario. Il difensore nominato è tenuto ad effettuare la presentazione dell'istanza attraverso la piattaforma telematica; il richiedente che invece la presenti personalmente potrà utilizzare l'apposito modulo cartaceo disponibile sul sito o presso la segreteria dell'Ordine.",
      },
      {
        heading: "La scelta del difensore",
        body: "Chi è ammesso al patrocinio deve indicare un difensore scelto tra gli iscritti negli elenchi degli avvocati per il patrocinio a spese dello Stato. Può essere nominato un solo difensore, anche scelto fra i professionisti fuori dal distretto — in tal caso il costo delle trasferte non sarà sostenuto dal patrocinio a spese dello Stato.",
      },
      {
        heading: "Costi",
        body: "La richiesta di ammissione al gratuito patrocinio non comporta alcun costo. Tutte le spese dell'assistenza legale vengono pagate dallo Stato, o sono prenotate a debito, e non si devono pagare l'avvocato o il consulente tecnico. L'avvocato e/o il consulente che richiedano l'anticipazione dei compensi incorrono in grave sanzione disciplinare.",
      },
      {
        heading: "Delibera di ammissione",
        body: "Il Consiglio, valutata la fondatezza della domanda, emette un provvedimento di accoglimento, rigetto o non ammissibilità. In caso di accoglimento provvede a trasmettere copia del provvedimento all'interessato, al Giudice competente e all'Ufficio delle Entrate, per la verifica dei redditi dichiarati. In caso di provvedimento di rigetto o di inammissibilità, la domanda può essere riproposta al magistrato competente per il giudizio.",
      },
    ],
  },
  {
    slug: "avvocato-penalista-gratuito-quando-puoi-averlo",
    title: "Avvocato penalista gratuito: quando puoi averlo?",
    date: "26 Luglio 2026",
    isoDate: "2026-07-26",
    excerpt:
      "Se hai bisogno di essere seguito da un Avvocato esperto in diritto penale senza dover sostenere alcuna spesa, in questa pagina trovi tutte le informazioni necessarie su requisiti e procedura.",
    image: { src: "/images/hero-justice.jpg", alt: "Bilancia della giustizia" },
    sections: [
      {
        heading: "L'Avvocato specializzato in diritto penale: come svolge la sua attività?",
        body: "Il patrocinio a spese dello Stato è un istituto con cui si garantisce a chiunque, anche ai meno abbienti, la possibilità di avere una difesa tecnica nell'ambito di un procedimento penale. L'avvocato penalista tutela i diritti di chi è accusato di un reato (indagato o imputato) o ne è vittima (persona offesa). Si occupa dell'intero procedimento: dalla consulenza preventiva alle indagini preliminari, fino al processo in tribunale, valutando la strategia difensiva più adatta, ad esempio il patteggiamento o il rito abbreviato. Possono avere diritto di accedere al patrocinio a spese dello Stato sia le vittime di reati che gli imputati. La sua attività si articola in fasi ben precise:",
        items: [
          "Consulenza e indagini: analizza gli elementi a carico o a discapito dell'assistito, ascolta i testimoni e raccoglie prove per impostare la strategia",
          "Assistenza negli atti urgenti: è presente durante gli interrogatori, le perquisizioni e in caso di arresto o fermo",
          "Difesa in giudizio: rappresenta il cliente nelle aule di tribunale, interloquendo con il Pubblico Ministero e il Giudice",
        ],
      },
      {
        heading: "Il limite di reddito per accedere al gratuito patrocinio penale",
        body: "Possono accedere al gratuito patrocinio coloro che hanno un reddito annuo non superiore a € 13.659,64 (dato aggiornato al 2021, D.M. 23.7.2020, pubblicato in G.U. il 30.1.2021, in aggiornamento del D.M. 16 gennaio 2018, G.U. n. 49 del 28 febbraio 2018). Ai fini del superamento o meno della soglia non rileva il modello ISEE, bensì l'ultima dichiarazione dei redditi. Se l'interessato convive con il coniuge o altri familiari, il reddito, ai fini della concessione del beneficio, è costituito dalla somma dei redditi di tutti i componenti la famiglia. Nell'ambito penale il limite di reddito è elevato di € 1.032,91 per ognuno dei familiari conviventi. Si tiene invece conto del solo reddito personale nei processi in cui gli interessi del richiedente sono in conflitto con quelli degli altri componenti il nucleo familiare con lui conviventi.",
      },
      {
        heading: "Come si presenta la domanda",
        body: "Solo gli Avvocati inseriti in appositi elenchi tenuti dal Consiglio dell'Ordine territorialmente competente possono difendere i propri assistiti avvalendosi del gratuito patrocinio. Per poter ottenere l'ammissione occorre presentare una domanda all'Autorità Giudiziaria che procede, corredata dalla seguente documentazione:",
        items: [
          "Le generalità anagrafiche e il codice fiscale del richiedente e dei componenti il suo nucleo familiare",
          "L'attestazione dei redditi percepiti l'anno precedente alla domanda",
          "L'impegno a comunicare le eventuali variazioni di reddito rilevanti ai fini dell'ammissione al beneficio",
          "In caso di cittadini stranieri, la dichiarazione di non disporre di altri redditi nel paese di origine, corredata da visto dell'Autorità consolare",
        ],
      },
      {
        heading: "La decisione del Giudice",
        body: "Il Giudice competente verifica l'ammissibilità della domanda di gratuito patrocinio e può dichiarare l'istanza inammissibile, accoglierla o respingerla, con decreto motivato depositato in cancelleria. In caso di accoglimento della domanda, le spese legali saranno sostenute dallo Stato e alcune spese processuali saranno esenti.",
      },
    ],
  },
];

export default blog;
