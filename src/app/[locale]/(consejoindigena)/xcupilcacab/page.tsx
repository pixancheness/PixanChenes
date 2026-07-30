import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import ConsejoIndigenaGallery from "@/modules/consejoIndigena/ConsejoIndigenaGallery";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata(
    { locale },
    "indigenousCouncil.xcupilcacab",
    "xcupilcacab",
  );
}

export default function XcupilcacabCouncilPage() {
  return <ConsejoIndigenaGallery section="xcupilcacab" />;
}
