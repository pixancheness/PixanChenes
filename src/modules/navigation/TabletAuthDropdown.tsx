"use client";

import { useState, useRef } from "react";
import { IconUser, IconChevronDown } from "@tabler/icons-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

interface TabletAuthDropdownProps {
  onItemClick?: () => void;
}

const TabletAuthDropdown = ({ onItemClick }: TabletAuthDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button className="flex items-center space-x-2 bg-dark text-white px-3 py-2 rounded-lg hover:text-yellow-200 hover:bg-gray-800 transition-colors duration-200 mt-4 ">
        <IconUser size={18} />
        <span className="font-normal text-xs">{t("Navigation.options")}</span>
        <IconChevronDown
          size={16}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999] animate-in slide-in-from-top-2 duration-200 ">
          {/* Language Switcher Section */}
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              {t("Navigation.language")}
            </h3>
            <LanguageSwitcher
              variant="mobile"
              onLanguageChange={handleItemClick}
            />
          </div>

          {/* Auth Buttons Section */}

          {/* <div className="p-4 space-y-3">
            <LoginLogoutButton variant="tablet" onItemClick={handleItemClick} />
            {!user && (
              <Link
                href="/signup"
                className="flex items-center justify-center space-x-3 bg-yellow-300 text-secondary hover:bg-yellow-400 transition-colors duration-200 py-3 px-4 rounded-lg font-medium text-sm w-full shadow-lg"
                onClick={handleItemClick}
              >
                <IconUserPlus size={18} />
                <span>{t("Navigation.registerFree")}</span>
              </Link>
            )}
          </div> */}
        </div>
      )}
    </div>
  );
};

export default TabletAuthDropdown;
