import { useTranslations } from "next-intl";
import { BentoGridSecondDemo } from "./bento";
import Image from "next/image";

export default function ExplicacionCertificado() {
  const t = useTranslations("Certificates.explanation");
  return (
    <div className="flex flex-col items-center justify-center max-w-9/12 mx-auto pt-14">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 text-center w-full mb-12 leading-tight break-words">
        {t("title")}
      </h2>

      <div className="flex flex-col items-center justify-center">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
          {t("description")}
        </p>
      </div>
      <BentoGridSecondDemo />

      <h3 className="text-4xl md:text-5xl font-light text-gray-600 text-center w-full mb-12 pt-24">
        {t("subtitle")}
      </h3>
      <Image
        src="/img/certificado/certificado1.jpg"
        alt="Reforestación directa"
        width="1100"
        height="1100"
        className=" rounded-xl "
      />
    </div>
  );
}
