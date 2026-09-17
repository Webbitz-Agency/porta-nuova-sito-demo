import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import comeFunziona from "@/content/comeFunziona";

const PROCESS_STEPS = [
  { number: 1, title: "Verifica dei requisiti reddituali", description: "Controlliamo insieme la soglia di reddito e il nucleo familiare." },
  { number: 2, title: "Nomina dell'avvocato", description: "Scegli un avvocato iscritto negli elenchi del gratuito patrocinio." },
  { number: 3, title: "Deposito dell'istanza", description: "Presentiamo l'istanza di ammissione al Consiglio dell'Ordine competente." },
  { number: 4, title: "Decreto di ammissione", description: "Attendiamo il decreto e avviamo l'assistenza legale." },
];

export default function ComeFunzionaPage() {
  return <ServicePageTemplate content={comeFunziona} processSteps={PROCESS_STEPS} />;
}
