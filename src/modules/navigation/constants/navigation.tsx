import {
  IconFileCertificate,
  IconCoffee,
  IconHeartHandshake,
  IconUsers,
} from "@tabler/icons-react";

export const navigationItems = [
  {
    name: "Navigation.products.title",
    href: "/certificados",
    icon: IconFileCertificate,
    hasDropdown: true,
    dropdownItems: [
      {
        name: "Navigation.products.certificates",
        href: "/certificados",
      },
      {
        name: "Navigation.products.honey",
        href: "/miel",
      },
      {
        name: "Navigation.products.wine",
        href: "/vino",
      },
      { name: "Navigation.faq", href: "/FAQ" },
    ],
  },
  {
    name: "Navigation.projects.title",
    href: "/miel",
    icon: IconCoffee,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.projects.nodess", href: "/nodess" },
      { name: "Navigation.projects.seminaries", href: "/seminarios" },
      { name: "Navigation.projects.businesses", href: "/emprendimientos" },
      {
        name: "Navigation.projects.artificialIntelligence",
        href: "/inteligencia-artificial-y-apicultura",
      },
    ],
  },
  {
    name: "Navigation.culture.title",
    href: "/cuentos-y-leyendas",
    icon: IconHeartHandshake,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.culture.stories", href: "/cuentos-y-leyendas" },
      { name: "Navigation.culture.events", href: "/eventos" },
      { name: "Navigation.culture.forum", href: "/foro" },
    ],
  },
  {
    name: "Navigation.aboutUs",
    href: "/sobre-nosotros",
    icon: IconUsers,
  },
];
