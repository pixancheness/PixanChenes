import { useTranslations } from "next-intl";

export default function GrandparentsAndYoungPeoplePage() {
  const t = useTranslations("GrandparentsAndYoungPeople");

  // Función para procesar texto con formato **negrita**
  const processText = (text: string) => {
    if (!text) return text;
    // Reemplaza **texto** con <strong>texto</strong>
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className=" font-sans ">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center pt-9 pb-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-900 mb-4 leading-tight">
            <span
              dangerouslySetInnerHTML={{ __html: processText(t("title")) }}
            />
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 italic">
            <span
              dangerouslySetInnerHTML={{ __html: processText(t("subtitle")) }}
            />
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <div className=" p-6 sm:p-8 ">
            <div className="prose prose-lg max-w-none text-gray-800">
              <div className="space-y-6">
                {/* About Dr. Rivera */}
                <div className="border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-yellow-800 font-semibold mb-2 text-xl">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("doctor.title")),
                      }}
                    />
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("doctor.description")),
                      }}
                    />
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("doctor.commitment")),
                      }}
                    />
                  </p>
                </div>

                {/* Program Context */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className=" p-6 rounded-xl ">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("program.title")),
                        }}
                      />
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("program.description")),
                        }}
                      />
                    </p>
                  </div>

                  <div className=" p-6 rounded-xl ">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("communities.title")),
                        }}
                      />
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("communities.description")),
                        }}
                      />
                    </p>
                  </div>
                </div>

                {/* Program Modules */}
                <div className="mt-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-900 mb-4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("modules.title")),
                        }}
                      />
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {t("modules.list")
                      .split("|")
                      .map((module, index) => {
                        const [moduleTitle, moduleDescription] =
                          module.split(":");
                        return (
                          <div
                            key={index}
                            className=" p-4 rounded-xl border border-yellow-200 hover:border-yellow-400 transition-colors"
                          >
                            <div className="flex items-center mb-3">
                              <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                                {index + 1}
                              </div>
                              <h4 className="font-semibold text-yellow-800 text-sm">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: processText(moduleTitle.trim()),
                                  }}
                                />
                              </h4>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: processText(moduleDescription.trim()),
                                }}
                              />
                            </p>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Program Objective */}
                <div className=" p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("objective.title")),
                      }}
                    />
                  </h3>
                  <p className="text-gray-800 leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("objective.description")),
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
