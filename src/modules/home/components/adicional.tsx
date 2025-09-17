"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils";
import { fadeInVariants } from "../utils";
import { HelpCircle } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { useTranslations } from "next-intl";

export default function Adicional() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInVariants}
            className="flex justify-center mb-8"
          >
            <HelpCircle className="w-16 h-16 text-yellow-500" />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <SplitText
              text={t("additionalInfo.title")}
              className="text-4xl md:text-5xl font-bold text-yellow-800 mb-12"
              tag="h2"
              delay={80}
              duration={0.6}
              splitType="words"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              title: t("additionalInfo.items.quality.title"),
              description: t("additionalInfo.items.quality.description"),
            },
            {
              title: t("additionalInfo.items.technology.title"),
              description: t("additionalInfo.items.technology.description"),
            },
            {
              title: t("additionalInfo.items.benefits.title"),
              description: t("additionalInfo.items.benefits.description"),
            },
            {
              title: t("additionalInfo.items.recipients.title"),
              description: t("additionalInfo.items.recipients.description"),
            },
          ].map((item: any, index: number) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
