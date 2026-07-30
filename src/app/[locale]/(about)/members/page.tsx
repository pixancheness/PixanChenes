import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import MembersGallery from "@/modules/members/MembersGallery";
import { members } from "@/modules/members/constants/members";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({ locale }, "members", "members");
}

export default function MembersPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pixan Chenes members",
    itemListElement: members.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        image: member.image,
        url: `${baseUrl}/es/members#${member.id}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <MembersGallery />
    </>
  );
}
