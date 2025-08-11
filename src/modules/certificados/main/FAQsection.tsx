import {
  TreePine,
  Heart,
  Gift,
  DollarSign,
  MapPin,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { useTranslations } from "next-intl";
import FAQ from "@/modules/ui/FAQ";
import { Link } from "@/i18n/navigation";

const FAQSection: React.FC = () => {
  const t = useTranslations("Certificates.FAQ");

  const mainFAQs = [
    {
      id: "difference",
      question: t("questions.difference.question"),
      answer: t("questions.difference.answer"),
      icon: <Heart className="w-5 h-5" />,
      category: "donation" as const,
    },
    {
      id: "cost",
      question: t("questions.cost.question"),
      answer: t("questions.cost.answer"),
      icon: <DollarSign className="w-5 h-5" />,
      category: "certificate" as const,
    },
    {
      id: "what-receive",
      question: t("questions.what_receive.question"),
      answer: t("questions.what_receive.answer"),
      details: [
        t("questions.what_receive.details.0"),
        t("questions.what_receive.details.1"),
        t("questions.what_receive.details.2"),
        t("questions.what_receive.details.3"),
        t("questions.what_receive.details.4"),
      ],
      icon: <Gift className="w-5 h-5" />,
      category: "certificate" as const,
    },
    {
      id: "tree-types",
      question: t("questions.tree_types.question"),
      answer: t("questions.tree_types.answer"),
      icon: <TreePine className="w-5 h-5" />,
      category: "trees" as const,
    },
    {
      id: "money-destination",
      question: t("questions.money_destination.question"),
      answer: t("questions.money_destination.answer"),
      details: [
        t("questions.money_destination.details.0"),
        t("questions.money_destination.details.1"),
        t("questions.money_destination.details.2"),
        t("questions.money_destination.details.3"),
      ],
      icon: <MapPin className="w-5 h-5" />,
      category: "general" as const,
    },
  ];

  const faqData = {
    questions: mainFAQs,
    details: {
      includes: t("details.includes"),
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-100 rounded-full">
          <HelpCircle className="w-5 h-5 text-yellow-600" />
          <span className="text-yellow-700 font-medium">
            {t("header.badge")}
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-light text-gray-600 text-center w-full mb-12">
          {t("header.title")}
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t("header.description")}
        </p>
      </div>

      {/* FAQ Items */}
      <div className="mb-8">
        <FAQ {...faqData} />
      </div>

      {/* CTA to Full FAQ */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t("cta.title")}
          </h3>
          <p className="text-gray-600 mb-6">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/certificados/FAQ">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl transition-colors">
                <HelpCircle className="w-5 h-5" />
                {t("cta.viewAllQuestions")}
                <ExternalLink className="w-4 h-4" />
              </button>
            </Link>

            <button className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-300 transition-colors">
              {t("cta.contactSupport")}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {t("stats.certificatePrice.value")}
          </div>
          <div className="text-gray-600 text-sm">
            {t("stats.certificatePrice.label")}
          </div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {t("stats.careGuarantee.value")}
          </div>
          <div className="text-gray-600 text-sm">
            {t("stats.careGuarantee.label")}
          </div>
        </div>
        <div className="text-center p-4">
          <div className="text-2xl font-bold text-emerald-600 mb-1">
            {t("stats.nativeSpecies.value")}
          </div>
          <div className="text-gray-600 text-sm">
            {t("stats.nativeSpecies.label")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
