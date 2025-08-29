import { useState, useRef } from "react";
import { navigationItems } from "@/constants/navigation";
import { Link } from "@/i18n/navigation";
import { IconChevronDown } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

interface DesktopNavigationProps {
  variant?: "default" | "compact";
}

const DesktopNavigation = ({ variant = "default" }: DesktopNavigationProps) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const t = useTranslations();
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isCompact = variant === "compact";

  // Función para manejar el toggle del dropdown
  const handleDropdownToggle = (index: number, hasDropdown: boolean) => {
    if (!hasDropdown) return;

    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Función para cerrar el dropdown
  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Función para manejar el hover del botón principal
  const handleButtonMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  // Función para manejar cuando el mouse sale del botón principal
  const handleButtonMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Pequeño delay para permitir transición al dropdown
  };

  // Función para manejar cuando el mouse entra al dropdown
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Función para manejar cuando el mouse sale del dropdown
  const handleDropdownMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Función para determinar si una ruta está activa
  const isRouteActive = (
    href: string,
    dropdownItems?: Array<{ href: string }>
  ) => {
    // Si la ruta principal coincide exactamente
    if (pathname === href) return true;

    // Si el pathname empieza con el href (para subrutas)
    if (pathname.startsWith(href + "/") || pathname.startsWith(href + "?"))
      return true;

    // Si tiene dropdown items, verificar si alguno está activo
    if (dropdownItems) {
      return dropdownItems.some(
        (item) => pathname === item.href || pathname.startsWith(item.href + "/")
      );
    }

    return false;
  };

  // Función para determinar si un dropdown item está activo
  const isDropdownItemActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="flex items-center justify-center pt-4 w-full">
      <nav
        className={`hidden lg:flex items-center bg-dark rounded-full ${
          isCompact
            ? "space-x-1 px-2 py-1"
            : "space-x-2 xl:space-x-3 px-3 xl:px-4 py-1"
        }`}
      >
        {navigationItems.map((item, index) => {
          const isActive = isRouteActive(item.href, item.dropdownItems);
          const isDropdownOpen = activeDropdown === index;

          return (
            <div key={item.name} className="relative group">
              {item.hasDropdown ? (
                // Para items con dropdown, mantener diseño unificado
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors duration-200 py-2 ${
                    isCompact ? "px-1.5" : "px-2"
                  } rounded-2xl ${
                    isActive
                      ? "bg-white text-black hover:text-yellow-950"
                      : "text-white hover:text-yellow-200"
                  }`}
                  onMouseEnter={() => handleButtonMouseEnter(index)}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  <item.icon size={isCompact ? 14 : 16} />
                  <span
                    className={`font-medium ${
                      isCompact ? "text-xs" : "text-xs"
                    }`}
                  >
                    {t(item.name)}
                  </span>
                  <button
                    type="button"
                    className="p-1 -m-1 rounded hover:bg-black/10"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDropdownToggle(index, item.hasDropdown);
                    }}
                  >
                    <IconChevronDown
                      size={isCompact ? 12 : 14}
                      className={`transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </Link>
              ) : (
                // Para items sin dropdown, usar Link normal
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 transition-colors duration-200 py-2 ${
                    isCompact ? "px-1.5" : "px-2"
                  } rounded-2xl ${
                    isActive
                      ? "bg-white text-black hover:text-yellow-950"
                      : "text-white hover:text-yellow-200"
                  }`}
                >
                  <item.icon size={isCompact ? 14 : 16} />
                  <span
                    className={`font-medium ${
                      isCompact ? "text-xs" : "text-xs"
                    }`}
                  >
                    {t(item.name)}
                  </span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 transform z-50 ${
                    isDropdownOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2"
                  }`}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <div className="py-2">
                    {item.dropdownItems?.map((dropdownItem) => {
                      const isDropdownActive = isDropdownItemActive(
                        dropdownItem.href
                      );

                      return (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className={`block px-4 py-3 transition-colors duration-200 text-sm ${
                            isDropdownActive
                              ? "bg-yellow-200 text-black"
                              : "text-gray-700 hover:bg-yellow-100 hover:text-black"
                          }`}
                          onClick={closeDropdown}
                        >
                          {t(dropdownItem.name)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DesktopNavigation;
