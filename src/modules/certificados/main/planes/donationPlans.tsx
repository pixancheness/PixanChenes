"use client";
import React, { useState } from "react";
import {
  Check,
  Heart,
  TreePine,
  MapPin,
  Shield,
  Gift,
  Users,
  Camera,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface PlanFeature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface DonationPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  icon: React.ReactNode;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
  buttonStyle: string;
  idealFor: string;
  extras?: string[];
}

const TreeDonationPlans: React.FC = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const t = useTranslations("Certificates.donationPlans");

  const plans: DonationPlan[] = [
    {
      id: "donation",
      name: t("plans.donation.name"),
      description: t("plans.donation.description"),
      price: t("plans.donation.price"),
      priceDetail: t("plans.donation.priceDetail"),
      icon: <Heart className="w-8 h-8" />,
      features: [
        { text: t("plans.donation.features.symbolic_thanks"), included: true },
        { text: t("plans.donation.features.project_support"), included: true },
        {
          text: t("plans.donation.features.community_monitoring"),
          included: true,
        },
        {
          text: t("plans.donation.features.no_registration"),
          included: true,
          highlight: true,
        },
        {
          text: t("plans.donation.features.tax_deductible"),
          included: true,
          highlight: true,
        },
        {
          text: t("plans.donation.features.digital_certificate"),
          included: false,
        },
        { text: t("plans.donation.features.tree_tracking"), included: false },
        { text: t("plans.donation.features.unique_code"), included: false },
      ],
      buttonText: t("plans.donation.buttonText"),
      buttonStyle: "bg-green-600  text-white",
      idealFor: t("plans.donation.idealFor"),
    },
    {
      id: "certificate",
      name: t("plans.certificate.name"),
      description: t("plans.certificate.description"),
      price: t("plans.certificate.price"),
      priceDetail: t("plans.certificate.priceDetail"),
      icon: <TreePine className="w-8 h-8" />,
      popular: true,
      features: [
        {
          text: t("plans.certificate.features.digital_certificate"),
          included: true,
          highlight: true,
        },
        { text: t("plans.certificate.features.unique_code"), included: true },
        {
          text: t("plans.certificate.features.geographic_location"),
          included: true,
        },
        { text: t("plans.certificate.features.tree_species"), included: true },
        { text: t("plans.certificate.features.donor_name"), included: true },
        {
          text: t("plans.certificate.features.tax_deductible"),
          included: true,
          highlight: true,
        },
        {
          text: t("plans.certificate.features.direct_participation"),
          included: true,
          highlight: true,
        },
        {
          text: t("plans.certificate.features.multiple_purchase"),
          included: true,
        },
      ],
      buttonText: t("plans.certificate.buttonText"),
      buttonStyle: "bg-yellow-400  text-yellow-900",
      idealFor: t("plans.certificate.idealFor"),
      extras: [
        t("plans.certificate.extras.photo_tracking"),
        t("plans.certificate.extras.gps_location"),
        t("plans.certificate.extras.health_reports"),
        t("plans.certificate.extras.tree_naming"),
      ],
    },
  ];

  const calculateCertificatePrice = (quantity: number) => {
    return (350 * quantity).toLocaleString("es-MX");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-yellow-100 rounded-full">
          <TreePine className="w-5 h-5 text-yellow-600" />
          <span className="text-yellow-700 font-medium">
            {t("header.location")}
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-600 text-center w-full mb-12 leading-tight break-words">
          {t("header.title")}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t("header.description")}
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
              plan.popular
                ? "border-yellow-500 ring-4 ring-yellow-100"
                : "border-gray-200 hover:border-yellow-300"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {t("plans.certificate.popular")}
                </span>
              </div>
            )}

            <div className="p-8">
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    plan.popular
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                {/* Certificate Quantity Selector - Only for Certificate Plan */}
                {plan.id === "certificate" && (
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <label className="block text-sm font-medium text-yellow-800 mb-2">
                      {t("plans.certificate.quantityLabel")}
                    </label>
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() =>
                          setSelectedQuantity(Math.max(1, selectedQuantity - 1))
                        }
                        className="w-8 h-8 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center font-semibold"
                      >
                        -
                      </button>
                      <span className="font-semibold text-lg w-8 text-center text-yellow-800">
                        {selectedQuantity}
                      </span>
                      <button
                        onClick={() =>
                          setSelectedQuantity(
                            Math.min(100, selectedQuantity + 1)
                          )
                        }
                        className="w-8 h-8 rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-700 flex items-center justify-center font-semibold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {plan.id === "certificate"
                      ? `$${calculateCertificatePrice(selectedQuantity)}`
                      : plan.price}
                  </div>
                  <div className="text-gray-500">
                    {plan.id === "certificate" && selectedQuantity > 1
                      ? `${selectedQuantity} certificados • $350 c/u`
                      : plan.priceDetail}
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        feature.included
                          ? plan.id === "certificate"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {feature.included ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <span className="text-xs">×</span>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        feature.included
                          ? "text-gray-700"
                          : "text-gray-400 line-through"
                      } ${feature.highlight ? "font-semibold" : ""}`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Extras for Certificate Plan */}
              {plan.extras && (
                <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-800">
                      {t("plans.certificate.extras.title")}
                    </span>
                  </div>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    {plan.extras.map((extra, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Camera className="w-3 h-3" />
                        {extra}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ideal For */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 text-sm">
                      {t("plans.certificate.idealForTitle")}
                    </span>
                    <p className="text-gray-600 text-sm mt-1">
                      {t("plans.certificate.idealFor")}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="bg-gradient-to-r from-yellow-50 to-green-50 rounded-2xl p-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-6 h-6 text-yellow-600" />
          <span className="text-lg font-semibold text-gray-800">
            {t("additionalInfo.location.title")}
          </span>
        </div>
        <p className="text-gray-700 mb-4">
          {t("additionalInfo.location.description")}
        </p>
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm text-green-700 font-medium">
            {t("additionalInfo.location.verified")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TreeDonationPlans;
