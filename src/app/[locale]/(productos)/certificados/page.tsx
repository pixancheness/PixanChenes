import HeroSection from "@/modules/certificados/main/heroSection";
import SolicitarButton from "@/modules/certificados/main/solicitarButton";
import { Timeline } from "@/modules/certificados/main/timeline/timeline";
import { TestimonialsCarousel } from "@/modules/certificados/main/testimonios/TestimonialsCarousel";
import ExplicacionCertificado from "@/modules/certificados/main/explicacion/explicacionCertificado";
import ComparateMap from "@/modules/certificados/main/comparateMap";
import TreeDonationPlans from "@/modules/certificados/main/planes/donationPlans";
import FAQSection from "@/modules/certificados/main/FAQsection";

export default function CertificadosPage() {
  return (
    <>
      <HeroSection />
      <TestimonialsCarousel />
      <ExplicacionCertificado />
      <Timeline />
      <ComparateMap />
      <TreeDonationPlans />
      <FAQSection />

      <SolicitarButton />
    </>
  );
}
