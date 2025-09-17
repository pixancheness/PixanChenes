"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils";
import { fadeInVariants } from "../utils";
import { HandHeart } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Apoyo() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 px-6 bg-yellow-500 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.div
            variants={fadeInVariants}
            className="flex justify-center mb-8"
          >
            <HandHeart className="w-16 h-16 text-white" />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <SplitText
              text={t("joinUs.title")}
              className="text-4xl md:text-5xl font-bold text-white mb-8"
              tag="h2"
              delay={80}
              duration={0.6}
              splitType="words"
            />
          </motion.div>
          <motion.p
            variants={fadeInVariants}
            className="text-xl text-yellow-100 leading-relaxed max-w-4xl mx-auto mb-12 font-semibold"
          >
            {t("joinUs.description")}
          </motion.p>
          <motion.button
            variants={fadeInVariants}
            className="bg-white text-yellow-500 hover:bg-yellow-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
          >
            <ArrowRight className="w-5 h-5" />
            {t("joinUs.button")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
