import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

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
                    href="https://jawtdsvsgowidjmyzqby.supabase.co/storage/v1/object/public/nodess/nodessAcreditacion.pdf"
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
                <div>
                  <h3 className="text-xl font-bold text-yellow-800 mb-4  text-center">
                    {t("partners.title")}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2  ">
                    <div className="flex items-center justify-center p-6 transition-shadow duration-300">
                      <img
                        src="https://res.cloudinary.com/danv3godx/image/upload/v1759270194/sinca_nodess_iphvda.png"
                        alt="SINCA NODES"
                        className="w-full h-auto max-w-[600px] object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center p-6  transition-shadow duration-300">
                      <img
                        src="https://res.cloudinary.com/danv3godx/image/upload/v1759269431/uppit_min_e9rhxy.png"
                        alt="UPPIT"
                        className="w-full h-auto max-w-[600px] object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center  transition-shadow duration-300">
                      <img
                        src="https://res.cloudinary.com/danv3godx/image/upload/v1759269687/ipn-min_yns4oh.png"
                        alt="IPN"
                        className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center p-6  transition-shadow duration-300">
                      <img
                        src="https://res.cloudinary.com/danv3godx/image/upload/v1759269431/telebachillerato_rmhqnw.png"
                        alt="Telebachillerato"
                        className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain"
                      />
                    </div>
                  </div>
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
                                    <span className="text-yellow-500 mr-2 mt-1 shrink-0">
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
                                  <span className="text-yellow-500 mr-2 mt-1 shrink-0">
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

                  {/* Pajaro Toh Project */}
                  <div className=" p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">
                      {t("projects.pajaroToh.title")}
                    </h3>

                    {/* Video Section - Full Width */}
                    <div className="mb-6">
                      <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-md">
                        <iframe
                          src={`https://www.youtube.com/embed/${
                            t("projects.pajaroToh.videoUrl").split("v=")[1]
                          }`}
                          title={t("projects.pajaroToh.title")}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-6 items-start">
                      <div className="space-y-4">
                        <p className="text-gray-800 leading-relaxed">
                          {t("projects.pajaroToh.intro")}
                        </p>

                        <div className=" p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {t("projects.pajaroToh.participants.title")}
                          </h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <span className="font-medium text-yellow-800">
                                {t(
                                  "projects.pajaroToh.participants.students.title"
                                )}
                              </span>
                              <ul className="mt-1 space-y-1">
                                {t(
                                  "projects.pajaroToh.participants.students.list"
                                )
                                  .split("|")
                                  .map((student, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start text-gray-700"
                                    >
                                      <span className="text-yellow-500 mr-2 mt-1 shrink-0">
                                        •
                                      </span>
                                      <span>{student.trim()}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div>
                              <span className="font-medium text-yellow-800">
                                {t(
                                  "projects.pajaroToh.participants.legend.title"
                                )}
                              </span>
                              <p className="text-gray-700 mt-1">
                                {t(
                                  "projects.pajaroToh.participants.legend.name"
                                )}
                              </p>
                              <p className="text-gray-600 text-xs">
                                {t(
                                  "projects.pajaroToh.participants.legend.date"
                                )}
                              </p>
                            </div>

                            <div>
                              <span className="font-medium text-yellow-800">
                                {t(
                                  "projects.pajaroToh.participants.aiStudents.title"
                                )}
                              </span>
                              <ul className="mt-1 space-y-1">
                                {t(
                                  "projects.pajaroToh.participants.aiStudents.list"
                                )
                                  .split("|")
                                  .map((student, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start text-gray-700"
                                    >
                                      <span className="text-yellow-500 mr-2 mt-1 shrink-0">
                                        •
                                      </span>
                                      <span>{student.trim()}</span>
                                    </li>
                                  ))}
                              </ul>
                            </div>

                            <div>
                              <span className="font-medium text-yellow-800">
                                {t(
                                  "projects.pajaroToh.participants.narrator.title"
                                )}
                              </span>
                              <p className="text-gray-700 mt-1">
                                {t(
                                  "projects.pajaroToh.participants.narrator.name"
                                )}
                              </p>
                              <p className="text-gray-600 text-xs">
                                {t(
                                  "projects.pajaroToh.participants.narrator.date"
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className=" p-6 rounded-lg border-2 border-yellow-200 bg-yellow-50">
                          <h4 className="font-semibold text-yellow-800 mb-4 text-center">
                            {t("projects.pajaroToh.legendButton")}
                          </h4>
                          <p className="text-gray-700 text-sm text-center mb-4">
                            {t("projects.pajaroToh.callToAction.description")}
                          </p>
                          <div className="text-center">
                            <Link
                              href="/cuentos_leyendas/pajaroToh"
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
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              {t("projects.pajaroToh.legendButton")}
                            </Link>
                          </div>
                        </div>

                        <div className=" p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-800 mb-2">
                            {t("projects.pajaroToh.culturalValue.title")}
                          </h4>
                          <p className="text-gray-700 text-sm">
                            {t("projects.pajaroToh.culturalValue.description")}
                          </p>
                        </div>
                        <div className=" p-4 rounded-lg border-l-4 border-yellow-400">
                          <h4 className="font-semibold text-yellow-800 mb-2">
                            {t("projects.pajaroToh.impact.title")}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {t("projects.pajaroToh.impact.description")}
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
