"use client";

import { useState } from "react";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";
import TabletAuthDropdown from "./TabletAuthDropdown";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 z-50">
      {/* Large Desktop view (1700px+) - Full layout with AuthButtons */}
      <div className="hidden 2xl:flex w-full px-32 mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 w-full gap-4">
          {/* Logo */}
          <div className="flex justify-start">
            <Logo size="large" />
          </div>

          {/* Desktop Navigation - True center */}
          <div className="flex justify-center">
            <DesktopNavigation />
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="flex justify-end">
            <TabletAuthDropdown />
          </div>
        </div>
      </div>

      {/* Medium Desktop view (1280px - 1535px) - Navigation + Auth Dropdown */}
      <div className="hidden xl:flex 2xl:hidden w-full px-16 mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 w-full gap-4">
          {/* Logo */}
          <div className="flex justify-start">
            <Logo size="large" />
          </div>

          {/* Desktop Navigation - True center */}
          <div className="flex justify-center">
            <DesktopNavigation />
          </div>

          {/* Auth Dropdown for tablets */}
          <div className="flex justify-end">
            <TabletAuthDropdown />
          </div>
        </div>
      </div>

      {/* Large Tablet view (1024px - 1279px) - Navigation + Auth Dropdown */}
      <div className="hidden lg:flex xl:hidden w-full px-8 mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 w-full gap-4">
          {/* Logo */}
          <div className="flex justify-start">
            <Logo size="large" />
          </div>

          {/* Desktop Navigation - True center */}
          <div className="flex justify-center">
            <DesktopNavigation />
          </div>

          {/* Auth Dropdown for tablets */}
          <div className="flex justify-end">
            <TabletAuthDropdown />
          </div>
        </div>
      </div>

      {/* Medium Tablet view (768px - 1023px) - Compact navigation + Mobile menu */}
      <div className="hidden md:flex lg:hidden w-full px-6 mx-auto">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center h-16 w-full gap-4">
          {/* Logo */}
          <div className="flex justify-start">
            <Logo size="large" />
          </div>

          {/* Desktop Navigation - True center (smaller) */}
          <div className="flex justify-center">
            <DesktopNavigation variant="compact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-end">
            <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      {/* Small Tablet and Mobile view (0px - 767px) */}
      <div className="flex md:hidden w-full px-4 sm:px-6 mx-auto">
        <div className="flex items-center justify-between h-16 relative w-full">
          {/* Logo */}
          <Logo size="large" />

          {/* Mobile Menu Button */}
          <MobileMenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Menu - Full screen overlay */}
      <MobileNavigation isMenuOpen={isMenuOpen} onMenuClose={handleMenuClose} />
    </header>
  );
};

export default Header;
