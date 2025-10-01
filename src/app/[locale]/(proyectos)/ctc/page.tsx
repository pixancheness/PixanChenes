import { useTranslations } from "next-intl";

export default function CTCPage() {
  const t = useTranslations("CTC");

  // Función para procesar texto con formato **negrita**
  const processText = (text: string) => {
    if (!text) return text;
    // Reemplaza **texto** con <strong>texto</strong>
    return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  };

  return (
    <div className="font-sans">
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
          <div className="p-6 sm:p-8">
            <div className="prose prose-lg max-w-none text-gray-800">
              <div className="space-y-6">
                {/* Main Description */}
                <div className="border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("description")),
                      }}
                    />
                  </p>
                  <p className="text-gray-800 leading-relaxed mb-4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("intro.description1")),
                      }}
                    />
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("intro.description2")),
                      }}
                    />
                  </p>
                </div>

                {/* Origin and Importance */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("origin.title")),
                        }}
                      />
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("origin.description")),
                        }}
                      />
                    </p>
                  </div>

                  <div className="p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("importance.title")),
                        }}
                      />
                    </h3>
                    <p className="text-gray-800 leading-relaxed mb-3">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("importance.description")),
                        }}
                      />
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                      {t("importance.list")
                        .split("|")
                        .map((item, index) => (
                          <li key={index} className="leading-relaxed">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: processText(item.trim()),
                              }}
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>

                {/* Alignment Section */}
                <div className="p-6 rounded-xl border border-yellow-200">
                  <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("alignment.title")),
                      }}
                    />
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("alignment.description")),
                      }}
                    />
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-2">
                    {t("alignment.list")
                      .split("|")
                      .map((item, index) => (
                        <li key={index} className="leading-relaxed">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: processText(item.trim()),
                            }}
                          />
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Functions Section */}
                <div className="mt-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-900 mb-4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("functions.title")),
                        }}
                      />
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {t("functions.list")
                      .split("|")
                      .map((func, index) => {
                        const [funcTitle, funcDescription] = func.split(":");
                        return (
                          <div
                            key={index}
                            className="p-4 rounded-xl border border-yellow-200 hover:border-yellow-400 transition-colors"
                          >
                            <div className="flex items-start mb-2">
                              <div className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3 flex-shrink-0 mt-1">
                                {index + 1}
                              </div>
                              <div>
                                <h4 className="font-semibold text-yellow-800 text-sm mb-1">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: processText(funcTitle.trim()),
                                    }}
                                  />
                                </h4>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: processText(
                                        funcDescription.trim()
                                      ),
                                    }}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Members Section */}
                <div className="mt-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-900 mb-4">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("members.title")),
                        }}
                      />
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: processText(t("members.description")),
                        }}
                      />
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t("members.list")
                      .split("|")
                      .map((member, index) => {
                        const [memberName, memberDescription] =
                          member.split(":");
                        return (
                          <div
                            key={index}
                            className="p-4 rounded-xl border border-yellow-200 hover:border-yellow-400 transition-all hover:shadow-md"
                          >
                            <div className="mb-2">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                  {index + 1}
                                </span>
                                <h4 className="font-bold text-yellow-800 text-sm">
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: processText(memberName.trim()),
                                    }}
                                  />
                                </h4>
                              </div>
                              <p className="text-gray-700 text-xs leading-relaxed">
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: processText(
                                      memberDescription.trim()
                                    ),
                                  }}
                                />
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* Closing Message */}
                <div className="p-6 rounded-xl text-center bg-yellow-50 border border-yellow-200 mt-8">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: processText(t("closingMessage")),
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
