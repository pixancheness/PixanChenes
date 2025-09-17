import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

import { useTranslations } from "next-intl";

export function BentoGridSecondDemo() {
  const t = useTranslations("Certificates.explanation");
  return (
    <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[28rem] mt-12">
      {items(t).map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}

const items = (t: any) => [
  {
    title: t("benefit_reforestation.title"),
    description: t("benefit_reforestation.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758077155/1_oca9vj.jpg"
        alt="Reforestación directa"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-2",
  },
  {
    title: t("benefit_certificate.title"),
    description: t("benefit_certificate.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758077155/2_yd6mfc.jpg"
        alt="Certificado verificable"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: t("benefit_beekeeping_support.title"),
    description: t("benefit_beekeeping_support.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758077155/3_swutdm.jpg"
        alt="Apoyo a la apicultura"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: t("benefit_cultural_preservation.title"),
    description: t("benefit_cultural_preservation.description"),
    header: (
      <img
        src="https://res.cloudinary.com/danv3godx/image/upload/v1758077155/4_hjy3lv.jpg"
        alt="Preservación cultural"
        className="object-cover w-full h-full rounded-xl min-h-[18rem] md:min-h-[24rem]"
      />
    ),
    className: "md:col-span-2",
  },
];
