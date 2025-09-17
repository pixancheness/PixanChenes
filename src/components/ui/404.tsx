import { Button } from "./button";
import Link from "next/link";
import { Home, TreePine, FileText, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function NotFound404() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <div>
      <div className="min-h-screen bg-[#EFE8DC] flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Ilustración de error */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              {/* Árbol ilustrativo con estilo maya */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Tronco */}
                  <div className="w-4 h-16 bg-amber-800 rounded-sm mx-auto"></div>
                  {/* Copa del árbol */}
                  <div className="w-20 h-20 bg-green-600 rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-16 h-16 bg-green-500 rounded-full absolute -top-10 left-1/2 transform -translate-x-1/2"></div>
                  <div className="w-12 h-12 bg-green-400 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"></div>
                  {/* Número 404 superpuesto */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-white font-bold text-lg bg-red-500 px-2 py-1 rounded-md shadow-md">
                    404
                  </div>
                </div>
              </div>
            </div>

            {/* Código de error */}
            <div className="text-6xl font-bold text-amber-800 mb-4">
              {t("errorCode")}
            </div>
          </div>

          {/* Contenido principal */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              {t("title")}
            </h1>
            <h2 className="text-xl text-amber-700 mb-6">{t("subtitle")}</h2>
            <p className="text-lg text-amber-600 max-w-2xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Botones de acción */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white"
            >
              <Link href={`/${locale}`} className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                {t("backHome")}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              <Link
                href={`/${locale}/certificados`}
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                {t("viewCertificates")}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-50"
            >
              <Link
                href={`/${locale}/about`}
                className="flex items-center gap-2"
              >
                <TreePine className="w-5 h-5" />
                {t("exploreProjects")}
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              <Link href={`/${locale}/FAQ`} className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                {t("contactUs")}
              </Link>
            </Button>
          </div>

          {/* Información adicional */}
          <div className="mt-12 p-6 bg-white/50 rounded-lg backdrop-blur-sm border border-amber-200">
            <div className="flex items-center justify-center gap-2 text-amber-700 mb-3">
              <TreePine className="w-6 h-6" />
              <span className="font-semibold">Pixan Chenes</span>
            </div>
            <p className="text-amber-600 text-sm">
              Cooperativa maya dedicada a la reforestación, apicultura y
              desarrollo sustentable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
