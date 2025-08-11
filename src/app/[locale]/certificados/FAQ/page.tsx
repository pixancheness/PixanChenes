"use client";
import { useTranslations } from "next-intl";
import {
  Heart,
  DollarSign,
  Gift,
  TreePine,
  MapPin,
  HelpCircle,
  ExternalLink,
  Users,
  Clock,
  FileText,
  Package,
  Search,
  Filter,
  X,
} from "lucide-react";
import FAQ from "@/modules/ui/FAQ";
import { useState, useMemo } from "react";

const mainFAQs = (t: any) => [
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
  {
    id: "multiple-certificates",
    question: t("questions.multiple_certificates.question"),
    answer: t("questions.multiple_certificates.answer"),
    icon: <Package className="w-5 h-5" />,
    category: "certificate" as const,
  },
  {
    id: "tree-tracking",
    question: t("questions.tree_tracking.question"),
    answer: t("questions.tree_tracking.answer"),
    icon: <HelpCircle className="w-5 h-5" />,
    category: "certificate" as const,
  },
  {
    id: "donation-registration",
    question: t("questions.donation_registration.question"),
    answer: t("questions.donation_registration.answer"),
    icon: <Users className="w-5 h-5" />,
    category: "donation" as const,
  },
  {
    id: "purchase-registration",
    question: t("questions.purchase_registration.question"),
    answer: t("questions.purchase_registration.answer"),
    icon: <Users className="w-5 h-5" />,
    category: "certificate" as const,
  },
  {
    id: "gift-certificate",
    question: t("questions.gift_certificate.question"),
    answer: t("questions.gift_certificate.answer"),
    icon: <Gift className="w-5 h-5" />,
    category: "certificate" as const,
  },
  {
    id: "certificate-delivery-time",
    question: t("questions.certificate_delivery_time.question"),
    answer: t("questions.certificate_delivery_time.answer"),
    icon: <Clock className="w-5 h-5" />,
    category: "certificate" as const,
  },
  {
    id: "physical_certificate",
    question: t("questions.physical_certificate.question"),
    answer: t("questions.physical_certificate.answer"),
    icon: <FileText className="w-5 h-5" />,
    category: "certificate" as const,
  },
];

export default function FAQPage() {
  const t = useTranslations("Certificates.FAQ");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const faqData = mainFAQs(t);

  // Categorías disponibles
  const categories = [
    {
      id: "all",
      name: t("categories.all"),
      icon: <HelpCircle className="w-4 h-4" />,
    },
    {
      id: "donation",
      name: t("categories.donation"),
      icon: <Heart className="w-4 h-4" />,
    },
    {
      id: "certificate",
      name: t("categories.certificate"),
      icon: <Gift className="w-4 h-4" />,
    },
    {
      id: "trees",
      name: t("categories.trees"),
      icon: <TreePine className="w-4 h-4" />,
    },
    {
      id: "general",
      name: t("categories.general"),
      icon: <MapPin className="w-4 h-4" />,
    },
  ];

  // Función para normalizar texto (quitar acentos, signos, etc.)
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Quitar acentos
      .replace(/[^\w\s]/g, "") // Quitar signos de puntuación
      .replace(/\s+/g, " ") // Normalizar espacios
      .trim();
  };

  // Filtrar preguntas por búsqueda y categoría
  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filtrar por categoría
    if (selectedCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === selectedCategory);
    }

    // Filtrar por término de búsqueda
    if (searchTerm.trim()) {
      const searchNormalized = normalizeText(searchTerm);
      filtered = filtered.filter(
        (faq) =>
          normalizeText(faq.question).includes(searchNormalized) ||
          normalizeText(faq.answer).includes(searchNormalized) ||
          (faq.details &&
            faq.details.some((detail) =>
              normalizeText(detail).includes(searchNormalized)
            ))
      );
    }

    return filtered;
  }, [faqData, searchTerm, selectedCategory]);

  const clearSearch = () => {
    setSearchTerm("");
    setSelectedCategory("all");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-100 rounded-full">
          <HelpCircle className="w-5 h-5 text-yellow-600" />
          <span className="text-yellow-700 font-medium">
            {t("header.badge")}
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-light text-gray-600 text-center w-full mb-6">
          {t("header.title")}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          {t("header.description")}
        </p>
      </div>

      {/* Barra de búsqueda */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-2xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-lg"
            placeholder="Buscar en preguntas frecuentes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
            </button>
          )}
        </div>
      </div>

      {/* Filtros por categoría */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? "bg-yellow-400 text-yellow-900"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Indicador de resultados */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            {filteredFAQs.length === faqData.length
              ? `${t("text.showingAllQuestions", {
                  count: filteredFAQs.length,
                })}`
              : `${t("text.showingQuestions", {
                  count: filteredFAQs.length,
                  total: faqData.length,
                })}`}
          </p>
          {(searchTerm || selectedCategory !== "all") && (
            <button
              onClick={clearSearch}
              className="inline-flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
            >
              <X className="w-4 h-4" />
              {t("text.clearFilters")}
            </button>
          )}
        </div>
      </div>

      {/* FAQ Items */}
      <div className="mb-8">
        {filteredFAQs.length > 0 ? (
          <FAQ
            questions={filteredFAQs}
            details={{ includes: t("details.includes") }}
          />
        ) : (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t("text.noQuestionsFound")}
              </h3>
              <p className="text-gray-600 mb-4">
                {t("text.noQuestionsFoundDescription")}
              </p>
              <button
                onClick={clearSearch}
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-xl transition-colors"
              >
                {t("text.viewAllQuestions")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CTA de contacto */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {t("cta.title")}
          </h3>
          <p className="text-gray-600 mb-6">{t("cta.description")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
}
