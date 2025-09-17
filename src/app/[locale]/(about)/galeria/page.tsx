"use client";
import { useTranslations } from "next-intl";

import Masonry from "@/components/ui/masonry";
import SplitText from "@/components/ui/SplitText";

const mansoyItems = [
  {
    id: "1",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756432046/1_mktdap.jpg",
    height: 900,
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431608/4_zjdzuo.jpg",
    height: 400,
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431608/2_loiiwd.jpg",
    height: 600,
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/9_tejgsw.jpg",
    height: 1000,
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/8_zrgxro.jpg",
    height: 800,
  },
  {
    id: "6",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/5_kibul3.jpg",
    height: 1000,
  },
  {
    id: "7",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/11_gym9im.jpg",
    height: 1200,
  },
  {
    id: "8",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431604/12_my0zsz.jpg",
    height: 600,
  },
  {
    id: "9",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/18_ghuulw.jpg",
    height: 1000,
  },
  {
    id: "10",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/14_wzthts.jpg",
    height: 1000,
  },
  {
    id: "11",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/15_jdoriu.jpg",
    height: 1000,
  },
  {
    id: "12",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/13_nmn7ln.jpg",
    height: 1500,
  },
  {
    id: "13",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431602/24_jkbzlm.jpg",
    height: 1000,
  },
  {
    id: "14",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431608/3_rxilid.jpg",
    height: 600,
  },
  {
    id: "15",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431603/16_ywbe6d.jpg",
    height: 600,
  },
  {
    id: "16",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431602/17_vzyxl7.jpg",
    height: 500,
  },
  {
    id: "17",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431602/23_gjmpln.jpg",
    height: 500,
  },
  {
    id: "18",
    img: "https://res.cloudinary.com/danv3godx/image/upload/v1756431606/10_lfjmma.jpg",
    height: 400,
  },
];

export default function Galery() {
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
