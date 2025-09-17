"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SplitText from "@/components/ui/SplitText";
import { staggerContainer } from "@/modules/home/utils";
import { fadeInVariants } from "@/modules/home/utils";
import { CarouselSobreNosotros } from "./carousel";

export default function SobreNosotros() {
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
              text={t("aboutUs.title")}
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
            {t("aboutUs.description")}
          </motion.p>
        </motion.div>
      </div>
      <CarouselSobreNosotros />
    </section>
  );
}
