import type { PageContent } from "./types";

const famiglia: PageContent = {
  eyebrow: "Diritto di Famiglia",
  title: "Separazione e Divorzio con Gratuito Patrocinio",
  subtitle: "La separazione rappresenta una sospensione degli effetti del matrimonio; il divorzio scioglie definitivamente il vincolo matrimoniale.",
  sections: [
    {
      heading: "Divorzio breve: tempi più rapidi",
      body: "Il divorzio si può ottenere dopo 6 mesi in caso di separazione consensuale, o dopo 1 anno in caso di separazione giudiziale.",
    },
    {
      heading: "Limite di reddito per il gratuito patrocinio",
      body: "Il reddito annuo non deve superare € 13.659,64.",
    },
    {
      heading: "In quali casi puoi richiedere assistenza",
      items: ["Separazione consensuale e giudiziale", "Divorzio", "Affidamento e mantenimento dei figli", "Rapporti patrimoniali tra coniugi"],
    },
  ],
  faq: [
    {
      question: "Dopo quanto tempo si può ottenere il divorzio dopo la separazione?",
      answer: "Dopo 6 mesi in caso di separazione consensuale, dopo 1 anno in caso di separazione giudiziale.",
    },
    {
      question: "Qual è il limite di reddito per il gratuito patrocinio in separazione e divorzio?",
      answer: "Il reddito annuo non deve superare € 13.659,64.",
    },
  ],
};

export default famiglia;
