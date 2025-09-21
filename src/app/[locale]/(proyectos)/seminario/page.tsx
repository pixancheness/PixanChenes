import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SeminarioPage() {
  const t = useTranslations("Seminario");

  return (
    <div className=" font-sans ">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center pt-9 pb-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4 leading-tight">
            {t("title")}
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className=" p-6 sm:p-8 ">
            <div className="prose prose-lg max-w-none text-gray-800">
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-yellow-800 font-semibold mb-2 text-xl">
                    {t("importance.title")}
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    {t("importance.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className=" p-6 rounded-xl ">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      {t("approach.title")}
                    </h3>
                    <p className="text-gray-800  leading-relaxed">
                      {t("approach.description")}
                    </p>
                  </div>

                  <div className=" p-6 rounded-xl ">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      {t("themes.title")}
                    </h3>
                    <ul className="text-gray-800 space-y-2">
                      {t("themes.list")
                        .split(",")
                        .map((theme, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-yellow-500 mr-2 mt-1">•</span>
                            <span className="leading-relaxed">
                              {theme.trim()}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                <div className=" p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                    {t("mission.title")}
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {t("mission.description")}
                  </p>
                </div>

                <div className=" p-6 rounded-xl ">
                  <h3 className="text-xl font-bold text-yellow-800 mb-3">
                    {t("future.title")}
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    {t("future.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full">
            <div className="sm:p-6">
              <div className="w-full">
                <Image
                  src="https://res.cloudinary.com/danv3godx/image/upload/v1758417591/WhatsApp_Image_2025-09-18_at_10.39.35_eqz8es.jpg"
                  alt={t("imageAlt")}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover rounded-lg"
                  sizes="100vw"
                  priority
                />
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm sm:text-base font-light">
                {t("imageCaption")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
