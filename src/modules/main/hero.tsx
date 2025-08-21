"use client";
import { useTranslations } from "next-intl";
import { Card } from "@/modules/ui/CardSwap";
import CardSwap from "@/modules/ui/CardSwap";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 lg:py-16 overflow-x-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 w-full max-w-6xl items-center">
        {/* Título a la izquierda */}
        <div className="flex flex-col justify-center lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-left leading-tight">
            {t("title")}
          </h1>
        </div>

        {/* CardSwap a la derecha */}
        <div className="flex justify-center lg:justify-end lg:order-2 mt-4 lg:mt-0">
          <div
            style={{ height: "500px", position: "relative" }}
            className="lg:h-[600px]"
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className="text-white">Card 1</h3>
                <p className="text-white">Your content here</p>
              </Card>
              <Card>
                <h3>Card 2</h3>
                <p>Your content here</p>
              </Card>
              <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
}
