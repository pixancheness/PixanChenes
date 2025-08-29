"use client";
import { useTranslations } from "next-intl";

import Masonry from "../ui/masonry";
import SplitText from "../ui/SplitText";
import { mansoyItems } from "./constants/mansoy";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="pt-16">
      <div className="flex justify-center items-center">
        <SplitText
          text={t("title")}
          className="text-4xl font-bold py-5  text-darkkkk "
          delay={60}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <Masonry
        items={mansoyItems}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </div>
  );
}
