import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NodessPage() {
  const t = useTranslations("Nodess");

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
                    {t("definition.title")}
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    {t("definition.description")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className=" p-6 rounded-xl ">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      {t("integration.title")}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {t("integration.description")}
                    </p>
                  </div>

                  <div className=" p-6 rounded-xl ">
                    <h3 className="text-xl font-bold text-center text-yellow-800 mb-3">
                      {t("objective.title")}
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {t("objective.description")}
                    </p>
                  </div>
                </div>

                {/* PDF Button Section */}
                <div className=" p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold text-yellow-800 mb-4">
                    {t("documentation.title")}
                  </h3>
                  <p className="text-gray-800 leading-relaxed mb-6">
                    {t("documentation.description")}
                  </p>
                  <a
                    href="https://jawtdsvsgowidjmyzqby.supabase.co/storage/v1/object/public/nodess/nodess.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    {t("documentation.buttonText")}
                  </a>
                </div>

                {/* Projects Section */}
                <div className="mt-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-900 mb-4">
                      {t("projects.title")}
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                  </div>

                  {/* Apitoxin Project */}
                  <div className=" p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">
                      {t("projects.apitoxin.title")}
                    </h3>
                    <div className="grid lg:grid-cols-3 gap-6 items-start">
                      <div className="lg:col-span-2">
                        <div className="space-y-4">
                          <p className="text-gray-800 leading-relaxed">
                            {t("projects.apitoxin.intro")}
                          </p>

                          <div className=" p-4 rounded-lg border-l-4 border-yellow-400">
                            <h4 className="font-semibold text-yellow-800 mb-2">
                              {t("projects.apitoxin.developer.title")}
                            </h4>
                            <p className="text-gray-700 text-sm">
                              {t("projects.apitoxin.developer.name")}
                            </p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {t("projects.apitoxin.benefits.title")}
                            </h4>
                            <ul className="space-y-2">
                              {t("projects.apitoxin.benefits.list")
                                .split("|")
                                .map((benefit, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start text-gray-700"
                                  >
                                    <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                                      •
                                    </span>
                                    <span className="text-sm leading-relaxed">
                                      {benefit.trim()}
                                    </span>
                                  </li>
                                ))}
                            </ul>
                          </div>

                          <div className=" p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">
                              {t("projects.apitoxin.impact.title")}
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed">
                              {t("projects.apitoxin.impact.description")}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-1">
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <Image
                            src="https://res.cloudinary.com/danv3godx/image/upload/v1758420582/Screenshot_2025-09-20_at_8.08.12_p.m._j5edqb.jpg"
                            alt={t("projects.apitoxin.imageAlt")}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Website Project */}
                  <div className=" p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">
                      {t("projects.website.title")}
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-800 leading-relaxed">
                        {t("projects.website.intro")}
                      </p>

                      <div className=" p-4 rounded-lg border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-800 mb-2">
                          {t("projects.website.developer.title")}
                        </h4>
                        <p className="text-gray-700 text-sm">
                          {t("projects.website.developer.name")}
                        </p>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {t("projects.website.features.title")}
                          </h4>
                          <ul className="space-y-2">
                            {t("projects.website.features.list")
                              .split("|")
                              .map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-start text-gray-700"
                                >
                                  <span className="text-yellow-500 mr-2 mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span className="text-sm leading-relaxed">
                                    {feature.trim()}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>

                        <div className=" p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {t("projects.website.impact.title")}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {t("projects.website.impact.description")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
