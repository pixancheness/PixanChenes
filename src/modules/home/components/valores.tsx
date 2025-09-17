"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SplitText from "@/components/ui/SplitText";
import { staggerContainer } from "@/modules/home/utils";
import { fadeInVariants } from "@/modules/home/utils";
import { CheckCircle } from "lucide-react";

export default function Valores() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInVariants}>
            <SplitText
              text={t("values.title")}
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {(t.raw("values.items") as string[]).map(
            (valor: string, index: number) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {valor}
                  </p>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
