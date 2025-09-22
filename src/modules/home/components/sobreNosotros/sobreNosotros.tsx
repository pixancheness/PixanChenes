"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import SplitText from "@/components/ui/SplitText";
import { staggerContainer } from "@/modules/home/utils";
import { fadeInVariants } from "@/modules/home/utils";
import { CarouselSobreNosotros } from "./carousel";
import { Link } from "@/i18n/navigation";
import { Heart } from "lucide-react";

export default function SobreNosotros() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-10"
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
      <div className="flex flex-col sm:flex-row justify-center items-center mb-5">
        <Link
          href="/about"
          className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
        >
          <Heart className="w-5 h-5" />
          {t("aboutUs.button")}
        </Link>
      </div>

      <CarouselSobreNosotros />
    </section>
  );
}
