import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({ locale }, "about");
}

export default function AboutPage() {
  const t = useTranslations("Navigation");

  return (
    <div>
      <h1>{t("about")}</h1>
      <p>Esta es la página "Acerca de".</p>
    </div>
  );
}
