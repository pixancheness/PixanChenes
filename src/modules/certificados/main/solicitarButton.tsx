import { useTranslations } from "next-intl";

export default function SolicitarButton() {
  const t = useTranslations("Certificates.hero");
  return (
    <button className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 z-30 w-32 h-10 sm:w-40 sm:h-11 md:w-44 md:h-12 lg:w-48 lg:h-12 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold py-2 px-4 sm:py-2.5 sm:px-5 md:py-3 md:px-6 rounded-lg sm:rounded-xl  flex items-center justify-center gap-1 sm:gap-2 shadow-lg  sm:text-base  text-lg transition-all duration-300 transform hover:scale-105">
      {t("contribute")}
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
}
