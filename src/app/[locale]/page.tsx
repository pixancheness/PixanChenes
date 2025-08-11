"use client";
import { useTranslations } from "next-intl";
import UserGreetText from "@/modules/navigation/UserGreetText";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">{t("title")}</h1>
      <UserGreetText />
    </div>
  );
}
