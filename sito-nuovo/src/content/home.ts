import type { HomeContent } from "./types";

const home: HomeContent = {
  eyebrow: "Gratuito Patrocinio Milano",
  title: "Avvocato Gratuito a Milano con Patrocinio a Spese dello Stato",
  subtitle:
    "Verifica gratuitamente se hai diritto al patrocinio a spese dello Stato e ottieni assistenza legale senza anticipare spese.",
  intro:
    "Lo Studio Legale Porta Nuova offre assistenza legale gratuita e gratuito patrocinio a chi ha diritto, in tutti i Tribunali di Milano, Monza, Lodi, Pavia, Como, Busto Arsizio, Varese, Bergamo e Brescia.",
  stats: [{ value: 600, suffix: "+", label: "Pratiche seguite nel gratuito patrocinio" }],
  services: [
    {
      icon: "gavel",
      title: "Diritto Penale",
      description: "Difenditi con il gratuito patrocinio anche in procedimenti penali complessi.",
      href: "/avvocato-penalista-gratis-milano/",
    },
    {
      icon: "scales",
      title: "Diritto Civile",
      description: "Assistenza legale nel diritto civile con avvocati esperti, anche per procedimenti gratuiti.",
      href: "/avvocato-civilista-gratis-milano/",
    },
    {
      icon: "handshake",
      title: "Diritto del Lavoro",
      description: "Avvocato del Lavoro Gratis a Milano: difendi i tuoi diritti senza costi.",
      href: "/avvocato-lavoro-gratis-milano/",
    },
    {
      icon: "shield",
      title: "Separazione e Divorzio",
      description: "Affronta la separazione o il divorzio con assistenza legale qualificata e supporto gratuito.",
      href: "/assistenza-legale-milano/separazione-e-divorzio/",
    },
    {
      icon: "document",
      title: "Requisiti per accedere",
      description: "Scopri se il tuo reddito rientra nella soglia per il gratuito patrocinio.",
      href: "/requisiti-per-accedere/",
    },
  ],
};

export default home;
