import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { SobreNosotros } from "@/modules/sobreNosotros";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({ locale }, "about");
}

export default function AboutPage() {
  return <SobreNosotros />;
}
