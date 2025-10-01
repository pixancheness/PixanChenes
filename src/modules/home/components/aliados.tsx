"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils";
import { fadeInVariants } from "../utils";
import { Star } from "lucide-react";
import SplitText from "@/components/ui/SplitText";
import { useTranslations } from "next-intl";
export default function Aliados() {
  const t = useTranslations("HomePage");
  return (
    <section className="py-20 px-6">
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
            <Star className="w-16 h-16 text-yellow-500" />
          </motion.div>
          <motion.div variants={fadeInVariants}>
            <SplitText
              text={t("allies.title")}
              className="text-4xl md:text-5xl font-bold text-yellow-800 mb-8"
              tag="h2"
              delay={80}
              duration={0.6}
              splitType="words"
            />
          </motion.div>
          <motion.p
            variants={fadeInVariants}
            className="text-xl text-gray-700 leading-relaxed max-w-7xl mx-auto mb-12"
          >
            {t("allies.description")}
          </motion.p>
          <motion.div
            variants={fadeInVariants}
            className="grid grid-cols-1 md:grid-cols-4  "
          >
            <div className="flex items-center justify-center p-6 transition-shadow duration-300">
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1759270194/sinca_nodess_iphvda.png"
                alt="SINCA NODES"
                className="w-full h-auto max-w-[600px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center  transition-shadow duration-300">
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1759269687/ipn-min_yns4oh.png"
                alt="IPN"
                className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6  transition-shadow duration-300">
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1759269431/telebachillerato_rmhqnw.png"
                alt="Telebachillerato"
                className="w-full h-auto max-w-[180px] md:max-w-[220px] object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6  transition-shadow duration-300">
              <img
                src="https://res.cloudinary.com/danv3godx/image/upload/v1759269431/uppit_min_e9rhxy.png"
                alt="UPPIT"
                className="w-full h-auto max-w-[600px] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
