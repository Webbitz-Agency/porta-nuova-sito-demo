import type { PageContent } from "./types";

const lavoro: PageContent = {
  eyebrow: "Diritto del Lavoro",
  title: "Avvocato Diritto del Lavoro Milano | Licenziamenti e Cause di Lavoro",
  subtitle: "Se hai subito un licenziamento, un demansionamento o non ti sono state pagate le retribuzioni, è fondamentale intervenire rapidamente.",
  sections: [
    {
      heading: "Licenziamento illegittimo",
      body: "Se hai ricevuto una lettera di licenziamento, hai solo 60 giorni per impugnarla.",
      items: ["Analisi della legittimità del provvedimento", "Redazione della lettera di impugnazione", "Tentativo di conciliazione", "Causa di lavoro davanti al Tribunale"],
    },
    {
      heading: "Demansionamento e mobbing",
      body: "Il lavoratore ha diritto a svolgere mansioni coerenti con la propria qualifica.",
      items: ["Assegnazione a mansioni inferiori", "Dequalificazione professionale", "Condotte vessatorie (mobbing)"],
    },
    { heading: "Differenze retributive", items: ["Straordinari", "TFR", "Ferie non godute", "Premi o indennità"] },
    { heading: "Infortuni sul lavoro", items: ["Danno biologico", "Danno morale", "Danno patrimoniale"] },
    {
      heading: "Assistenza anche per datori di lavoro",
      items: ["Redazione contratti", "Gestione procedimenti disciplinari", "Difesa in giudizio", "Controversie sindacali"],
    },
    { heading: "Gratuito Patrocinio nel Diritto del Lavoro" },
  ],
};

export default lavoro;
