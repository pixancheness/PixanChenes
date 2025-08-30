import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import "./globals.css";
import Header from "@/modules/navigation/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({ locale }, "home");
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Datos estructurados para SEO
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Pixan Chenes",
      alternateName: "Cooperativa Pixan Chenes",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/${locale}`,
      logo: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/img/logo_pixan.webp`,
      description:
        locale === "es"
          ? "Cooperativa maya en Campeche que protege la selva, practica apicultura sustentable y ofrece certificados de reforestación."
          : "Maya cooperative in Campeche that protects the jungle, practices sustainable beekeeping and offers reforestation certificates.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hopelchén",
        addressRegion: "Campeche",
        addressCountry: "México",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.7491",
        longitude: "-89.8315",
      },
      sameAs: ["https://www.pixanchenes.org"],
      founder: {
        "@type": "Person",
        name: "Mujeres indígenas mayas",
        description:
          locale === "es"
            ? "Liderazgo comunitario de mujeres indígenas mayas"
            : "Community leadership of indigenous Maya women",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "NonprofitOrganization",
      name: "Pixan Chenes",
      mission:
        locale === "es"
          ? "Proteger la selva maya, promover el desarrollo sustentable y preservar la cultura indígena mediante la apicultura y la reforestación."
          : "Protect the Maya jungle, promote sustainable development and preserve indigenous culture through beekeeping and reforestation.",
      areaServed: {
        "@type": "Place",
        name: "Hopelchén, Campeche, México",
      },
      knowsAbout: [
        "Apicultura maya",
        "Reforestación",
        "Desarrollo sustentable",
        "Conservación ambiental",
        "Cultura maya",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Pixan Chenes",
      url: `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/${locale}`,
      inLanguage: locale,
      potentialAction: {
        "@type": "SearchAction",
        target: `${
          process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
        }/${locale}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Favicon configuration */}
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {structuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data),
            }}
          />
        ))}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className + " bg-[#EFE8DC]"}>
        <NextIntlClientProvider locale={locale}>
          <Header />
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={4000}
            theme="light"
          />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
