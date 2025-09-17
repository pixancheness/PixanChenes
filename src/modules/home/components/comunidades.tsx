"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils";
import { fadeInVariants } from "../utils";
import { MapPin } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { useTranslations } from "next-intl";

export default function Comunidades() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 px-6 bg-white/50">
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
            <MapPin className="w-16 h-16 text-yellow-500" />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <SplitText
              text={t("communities.title")}
              className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
              tag="h2"
              delay={80}
              duration={0.6}
              splitType="words"
            />
          </motion.div>
          <motion.p
            variants={fadeInVariants}
            className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
          >
            {t("communities.description")}
            <span className="font-semibold text-yellow-700">
              {" "}
              {t("communities.list")}
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
