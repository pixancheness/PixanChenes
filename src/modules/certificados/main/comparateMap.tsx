import { useTranslations } from "next-intl";
import { Compare } from "@/modules/ui/compare";

export default function ComparateMap() {
  const t = useTranslations("Certificates.map");

  return (
    <div className="flex flex-col items-center justify-center max-w-9/12 mx-auto pt-14">
      <h2 className="text-4xl md:text-5xl font-light text-gray-600 text-center w-full mb-12">
        {t("title")}
      </h2>

      <div className="flex flex-col items-center justify-center">
        <p className="text-center text-sm md:lg lg:text-2xl  font-light  text-gray-600">
          {t("description")}
        </p>
      </div>

      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="/img/map/map2000.jpg"
          secondImage="/img/map/map2025.jpg"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="w-[300px] h-[350px] sm:w-[600px] sm:h-[700px] md:h-[650px] md:w-[750px] lg:h-[700px] lg:w-[1000px] xl:h-[900px] xl:w-[1200px] max-w-full"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
