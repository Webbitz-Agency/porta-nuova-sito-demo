import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import requisiti from "@/content/requisiti";

export default function RequisitiPage() {
  return <ServicePageTemplate content={requisiti} includeVerifica verificaResultHref="/contatti/" />;
}
