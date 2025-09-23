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
      // {
      //   name: "Navigation.products.honey",
      //   href: "/miel",
      // },
      // {
      //   name: "Navigation.products.wine",
      //   href: "/vino",
      // },
    ],
  },
  {
    name: "Navigation.projects.title",
    href: "/nodess",
    icon: IconCoffee,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.projects.nodess", href: "/nodess" },
      { name: "Navigation.projects.seminaries", href: "/seminario" },

      {
        name: "Navigation.projects.grandparentsAndYoungPeople",
        href: "/grandparentsAndYoungPeople",
      },
      // { name: "Navigation.projects.businesses", href: "/emprendimientos" },
      // {
      //   name: "Navigation.projects.artificialIntelligence",
      //   href: "/inteligencia-artificial-y-apicultura",
      // },
    ],
  },
  {
    name: "Navigation.culture.title",
    href: "/cuentos_leyendas",
    icon: IconHeartHandshake,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.culture.stories", href: "/cuentos_leyendas" },
      // { name: "Navigation.culture.events", href: "/eventos" },
      // { name: "Navigation.culture.forum", href: "/foro" },
    ],
  },
  {
    name: "Navigation.aboutUs",
    href: "/about",
    icon: IconUsers,
    hasDropdown: true,
    dropdownItems: [
      { name: "Navigation.about", href: "/about" },
      { name: "Navigation.gallery", href: "/galeria" },
      { name: "Navigation.faq", href: "/FAQ" },
    ],
  },
];
