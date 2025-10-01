"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import {
  IconMail,
  IconBrandTiktok,
  IconMapPin,
  IconHeart,
} from "@tabler/icons-react";

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navigation");

  const quickLinks = [
    { name: t("quickLinks.home"), href: "/" },
    { name: t("quickLinks.aboutUs"), href: "/about" },
    { name: t("quickLinks.certificates"), href: "/certificados" },
    { name: t("quickLinks.donate"), href: "/certificados/donacion" },
    { name: t("quickLinks.gallery"), href: "/galeria" },
    { name: t("quickLinks.faq"), href: "/FAQ" },
  ];

  const projects = [
    { name: t("projects.nodess"), href: "/nodess" },
    { name: t("projects.seminario"), href: "/seminario" },
    { name: t("projects.grandparents"), href: "/grandparentsAndYoungPeople" },
  ];

  return (
    <footer className="bg-gradient-to-b from-yellow-50 to-yellow-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative h-16 w-16 flex-shrink-0">
                <Image
                  src="/favicon.png"
                  alt="Pixan Chenes Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-800">
                  Pixan Chenes
                </h3>
                <p className="text-yellow-600 font-medium">
                  Economía con alma, comunidad con futuro
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-md">
              {t("description")}
            </p>

            {/* Communities */}
            <div className="space-y-2">
              <h4 className="font-semibold text-yellow-800 flex items-center gap-2">
                <IconMapPin className="h-4 w-4" />
                {t("communities.title")}
              </h4>
              <p className="text-sm text-gray-600">
                {t("communities.description")}
              </p>
              <p className="text-sm text-yellow-600 font-medium">
                {t("communities.location")}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-yellow-800 text-lg">
              {t("quickLinks.title")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects and Contact */}
          <div className="space-y-6">
            {/* Projects */}
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-800 text-lg">
                {t("projects.title")}
              </h4>
              <ul className="space-y-2">
                {projects.map((project, index) => (
                  <li key={index}>
                    <Link
                      href={project.href}
                      className="text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                    >
                      {project.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-yellow-800 text-lg">
                {t("contact.title")}
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:pixancheness@gmail.com"
                  className="flex items-center gap-2 text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                >
                  <IconMail className="h-4 w-4" />
                  {t("contact.email")}
                </a>

                {/* Social Media */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-yellow-700">
                    {t("contact.socialMedia")}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://www.tiktok.com/@yadirariveraespinoza?_t=ZS-8zpu2rae7Cm&_r=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-pink-500 transition-colors text-sm"
                    >
                      <IconBrandTiktok className="h-5 w-5" />
                      <span>@yadirariveraespinoza</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-yellow-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 text-center md:text-left">
              {t("copyright")}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              {t("madeWith")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
