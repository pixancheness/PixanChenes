"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  details?: string[];
  icon: React.ReactNode;
  category: "donation" | "certificate" | "process" | "trees" | "general";
}

interface FAQProps {
  questions: FAQItem[];
  details: {
    includes: string;
  };
}

const FAQ: React.FC<FAQProps> = ({ questions, details }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      donation: "text-green-600",
      certificate: "text-yellow-600",
      process: "text-blue-600",
      trees: "text-emerald-600",
      general: "text-gray-600",
    };
    return colors[category as keyof typeof colors] || "text-gray-600";
  };

  const getCategoryBg = (category: string) => {
    const colors = {
      donation: "bg-green-100",
      certificate: "bg-yellow-100",
      process: "bg-blue-100",
      trees: "bg-emerald-100",
      general: "bg-gray-100",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100";
  };

  return (
    <div className="space-y-4">
      {questions.map((faq, index) => (
        <div
          key={faq.id}
          className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-2 rounded-full ${getCategoryBg(faq.category)}`}
              >
                <div className={getCategoryColor(faq.category)}>{faq.icon}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {faq.question}
                </h3>
                {!openItems.includes(faq.id) && (
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {faq.answer.substring(0, 80)}...
                  </p>
                )}
              </div>
            </div>
            <div className="ml-4 flex-shrink-0">
              {openItems.includes(faq.id) ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </button>

          {openItems.includes(faq.id) && (
            <div className="px-6 pb-6">
              <div className="ml-12">
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {faq.answer}
                </p>

                {faq.details && (
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      {details.includes}
                    </h4>
                    <ul className="space-y-2">
                      {faq.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
