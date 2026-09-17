import type { PageContent } from "./types";

const requisiti: PageContent = {
  eyebrow: "Requisiti",
  title: "Requisiti per accedere al Gratuito Patrocinio",
  subtitle: "Tutti i requisiti necessari, i limiti di reddito e le modalità per presentare la domanda.",
  sections: [
    {
      heading: "Soglia di reddito",
      body: "Per essere ammessi al gratuito patrocinio è necessario possedere un reddito annuo imponibile non superiore a € 13.659,64, come stabilito dal decreto interdirigenziale del 10 maggio 2023. Se il richiedente convive con il coniuge o con altri familiari, il reddito complessivo viene calcolato sommando quello di tutti i componenti del nucleo familiare.",
    },
    {
      heading: "Eccezioni",
      body: "Fanno eccezione i casi in cui il procedimento riguarda diritti della personalità oppure quando vi è conflitto di interessi tra i membri della famiglia. In queste situazioni si considera esclusivamente il reddito personale del richiedente.",
    },
    {
      heading: "Chi può richiedere",
      body: "Possono accedere al gratuito patrocinio i cittadini italiani, gli stranieri regolarmente soggiornanti in Italia, gli apolidi e anche enti o associazioni che non perseguono fini di lucro.",
    },
    {
      heading: "Come presentare la domanda",
      body: "La domanda deve essere redatta in carta semplice e firmata dall'interessato. Può essere presentata personalmente, tramite il proprio avvocato oppure inviata con raccomandata con allegato un documento di identità valido.",
      items: ["Dati anagrafici del richiedente e del nucleo familiare", "Codice fiscale", "Reddito percepito", "Informazioni relative alla causa"],
    },
    {
      heading: "Valutazione della domanda",
      body: "Entro circa 10 giorni viene emesso un provvedimento di accoglimento, rigetto o non ammissibilità. In caso di rigetto è possibile ripresentarla direttamente al giudice competente, che deciderà con decreto.",
    },
  ],
  faq: [
    {
      question: "Qual è il limite di reddito per il gratuito patrocinio?",
      answer:
        "Il limite di reddito per accedere al gratuito patrocinio è di € 13.659,64 annui. In alcuni casi si considera solo il reddito personale, ad esempio nei procedimenti con conflitto di interessi.",
    },
    {
      question: "Chi può richiedere il gratuito patrocinio?",
      answer:
        "Possono richiederlo cittadini italiani, stranieri regolarmente soggiornanti, apolidi e associazioni senza scopo di lucro che rispettano i requisiti di reddito.",
    },
    {
      question: "Come si presenta la domanda?",
      answer: "La domanda va presentata al Consiglio dell'Ordine degli Avvocati competente, allegando documenti, redditi e informazioni sulla causa.",
    },
    {
      question: "Il gratuito patrocinio è davvero gratuito?",
      answer: "Sì, le spese legali vengono coperte dallo Stato, quindi non dovrai pagare l'avvocato se la domanda viene accolta.",
    },
  ],
};

export default requisiti;
